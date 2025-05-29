import { useForm } from "react-hook-form";
import { useState } from "react";
import InputField from "../../../components/inputField/InputField";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FilledButton from "../../../components/buttons/filledButton/FilledButton";
import { RiLockPasswordFill } from "react-icons/ri";
import { ResetPasswordData } from "./types/ResetPasswordTypes";
import { useResetPasswordMutation } from "./hooks/useResetPasswordHooks";
import appIcon from "../../../assets/appIcon.png";

const ResetPassword = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordData>();

  const resetPasswordMutation = useResetPasswordMutation();

  const onSubmit = (data: ResetPasswordData) => {
    resetPasswordMutation.mutate(data);
  };
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-white via-white to-gradient1 flex">
      {/* Wrapper to control 50-50 layout inside the full-width gradient */}
      <div className="w-1/2 flex justify-center items-center gap-2">
        <img src={appIcon} alt="App-Icon" className="h-[90px] w-[90px]" />
        <h1 className="text-6xl font-bold text-primary">Sociofy</h1>
      </div>{" "}
      {/* Empty left half */}
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-y-2 bg-white p-4 w-[400px] rounded-md shadow-primary shadow-2xl">
          <h3 className={`heading flex justify-center text-primary`}>
            Reset Password
          </h3>
          <p className={`text-text-1 flex justify-center text-secondary`}>
            Enter your new password to login again
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pt-4 flex flex-col"
          >
            <InputField
              register={register}
              name="newPassword"
              placeholder="New Password"
              type={isVisible ? "text" : "password"}
              errors={errors}
              validationRules={{
                required: "New Password is required",
                minLength: {
                  value: 6,
                  message: "New Password must be at least 6 characters",
                },
              }}
              width={`w-[100%]`}
              marginBottom={`mb-4`}
              icon={isVisible ? AiFillEye : AiFillEyeInvisible}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              preIcon={RiLockPasswordFill}
            />
            <InputField
              register={register}
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              type={isVisible ? "text" : "password"}
              errors={errors}
              validationRules={{
                required: "Confirm New Password is required",
                minLength: {
                  value: 6,
                  message: "Confirm Password must be at least 6 characters",
                },
              }}
              width={`w-[100%]`}
              marginBottom={`mb-10`}
              icon={isConfirmVisible ? AiFillEye : AiFillEyeInvisible}
              isVisible={isConfirmVisible}
              setIsVisible={setIsConfirmVisible}
              preIcon={RiLockPasswordFill}
            />

            <div className="flex flex-col gap-y-3 pb-5">
              <FilledButton
                isIcon={false}
                isIconLeft={true}
                isIconRight={false}
                bgColor={`bg-primary`}
                textColor={`text-white`}
                buttonText={"Reset Password"}
                height={`h-[40px]`}
                rounded={`rounded-md`}
                width={`w-full`}
                fontWeight={`font-semibold`}
                fontSize={`text-normal`}
                type={`submit`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
