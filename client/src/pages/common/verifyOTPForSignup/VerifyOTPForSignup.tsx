import { useForm } from "react-hook-form";
import InputField from "../../../components/inputField/InputField";
import FilledButton from "../../../components/buttons/filledButton/FilledButton";
import { RiLockPasswordFill } from "react-icons/ri";
import { VerifyOTPForSignupFormData } from "./types/VerifyOTPForSignupTypes";
import { useVerifyOTPForSignupMutation } from "./hooks/useVerifyOTPForSignupHooks";
import appIcon from "../../../assets/appIcon.png";

const VerifyOTPForSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyOTPForSignupFormData>();

  const verifyOTPForSignupFormDataMutation = useVerifyOTPForSignupMutation();

  const onSubmit = (data: VerifyOTPForSignupFormData) => {
    verifyOTPForSignupFormDataMutation.mutate(data);
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
            Verify OTP
          </h3>
          <p className={`text-text-1 flex justify-center text-secondary`}>
            Enter the OTP for verification
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pt-4 flex flex-col"
          >
            <InputField
              register={register}
              name="otpCode"
              placeholder="XXXX"
              type="text"
              errors={errors}
              validationRules={{
                required: "OTP is required",
                minLength: {
                  value: 4,
                  message: "OTP must be at least 4 characters",
                },
              }}
              width={`w-[100%]`}
              marginBottom={`mb-4`}
              preIcon={RiLockPasswordFill}
            />

            <div className="flex flex-col gap-y-3 pb-5">
              <FilledButton
                isIcon={false}
                isIconLeft={true}
                isIconRight={false}
                bgColor={`bg-primary`}
                textColor={`text-white`}
                buttonText={
                  verifyOTPForSignupFormDataMutation.isPending
                    ? "Loading.."
                    : "Verify"
                }
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

export default VerifyOTPForSignup;
