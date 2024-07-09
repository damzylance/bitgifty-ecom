import { Controller } from "react-hook-form";
import { EyeOpen } from "./Icons";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface FormFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  control: any;
  name?: string;
  label: string;
  password?: boolean;
}
export const Input = ({
  control,
  name,
  label,
  password,
  ...props
}: FormFieldProps) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <Controller
      control={control}
      name={name!}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <>
          <div className="flex flex-col gap-y-[7px]">
            <p className="text-[0.875rem] text-[#404040] font-[500] font-inter">
              {label}
            </p>
            <div className="w-full h-[48px] rounded-[8px] bg-white  border-[2px_solid_#333333] shadow-sm flex items-center gap-x-[5px] pr-[24px]">
              <input
                value={value}
                onChange={onChange}
                {...props}
                className="bg-white text-[#666666] text-[0.875rem] font-inter p-[12px_24px] h-full w-full border-none outline-none rounded-[8px]"
                type={password && !showPass ? "password" : "text"}
              />
              {password && showPass ? (
                <EyeOpen onClick={() => setShowPass(!showPass)} />
              ) : password && !showPass ? (
                <EyeSlashIcon
                  height={24}
                  width={24}
                  onClick={() => setShowPass(!showPass)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          {error && (
            <p className=" text-red-700 text-[0.875rem] mt-[8px]">
              {error.message}
            </p>
          )}
        </>
      )}
    />
  );
};
