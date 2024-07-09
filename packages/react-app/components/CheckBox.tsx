import { Controller } from "react-hook-form";

interface FormFieldProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  control: any;
  name?: string;
  label: string;
}
export const CheckBox = ({
  control,
  name,
  label,
  ...props
}: FormFieldProps) => {
  return (
    <Controller
      control={control}
      name={name!}
      render={({ field: { onChange } }) => (
        <div className="flex items-center gap-x-[16px]">
          <input
            type="checkbox"
            name={name}
            id={name}
            onChange={onChange}
            {...props}
            className=" h-[18px] w-[18px] border-[2px_solid_#103D96] border-[2px] rounded-[1px] cursor-pointer"
          />
          <label
            htmlFor={name}
            className="text-[0.875rem] text-[#404040] font-[500] font-inter"
          >
            {label}
          </label>
        </div>
      )}
    />
  );
};
