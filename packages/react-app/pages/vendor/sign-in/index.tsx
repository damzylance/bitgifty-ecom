import { AuthButtonDashboard } from "@/components/AuthButtonDashboard";
import { NameLogo } from "@/components/Icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dashBoardSignInSchema } from "@/components/Utils/Validations";
import { Input } from "@/components/Input";
import { FormButtonDashboard } from "@/components/FormButtonDashboard";
import Link from "next/link";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(dashBoardSignInSchema),
  });

  const handleSignIn = () => {
    router.push("/vendor/dashboard");
  };

  return (
    <section className="w-full min-h-screen bg-grey-6 flex">
      <div className="w-[50%] bg-auth-bg bg-cover bg-no-repeat pb-[50px]">
        <NameLogo extraClass="ml-[21px]" />
        <section className="text-center flex flex-col items-center gap-y-[35px] mt-[164px]">
          <h2 className="text-[2.5rem] text-white font-[600] font-inter leading-[48.41px] max-w-[358px]">
            WELCOME BACK
          </h2>
          <p className="text-[1.125rem] text-white leading-[21.78px] max-w-[358px]">
            Lorem ipssum is a dummy text and a is a dummy text
          </p>
          <AuthButtonDashboard
            text="Sign Up"
            onClick={() => router.push("/vendor/sign-up")}
          />
        </section>
      </div>
      <div className="w-[50%] px-[68px] pt-[96px] pb-[50px]">
        <h2 className="text-[#010101] text-[1.5rem] font-[600]">Sign in</h2>
        <form className="pt-[40px]" onSubmit={handleSubmit(handleSignIn)}>
          <div className="flex flex-col gap-y-[24px]">
            <Input
              control={control}
              label="Email Address"
              name="email"
              placeholder="Enter"
            />

            <Input
              control={control}
              label="Password"
              name="password"
              placeholder="*********"
              password
            />
          </div>
          <FormButtonDashboard text="Sign In" extraClass="mt-[48px]" />
        </form>
        <p className="mt-[35px] font-inter font-[500] text-[0.875rem] text-center">
          Don't have an account?{" "}
          <Link href={"/vendor/sign-up"} className="text-[#103D96]">
            sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Page;
