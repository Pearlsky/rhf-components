import { RadioGroup } from "@radix-ui/themes";
import { useController } from "react-hook-form";
import { TRadioGroupProps } from "../../antd/radio-group";

export const RadixRadioGroup = (props: TRadioGroupProps) => {
  const {
    field: { name, disabled, onBlur, onChange, value },
    fieldState: { error },
  } = useController(props.controlProps);
  return (
    <div className="w-fit py-2">
      <RadioGroup.Root
        size="3"
        {...{ name, disabled, onBlur }}
        value={value}
        onValueChange={onChange}
      >
        <div>
          <div className="mb-3">
            {error && (
              <span className="text-red-500 text-xs">
                This is a required field
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
          {props.optionsRender
          ? props.options.map(props.optionsRender)
          : props.options.map(({ id, value }: any) => (
              <div key={id} className="flex items-center gap-3.5">
                <RadioGroup.Item value={value} />
                <label htmlFor="r1" className="text-sm">
                  {value}
                </label>
              </div>
            ))}
          </div>
        </div>
      </RadioGroup.Root>
    </div>
  );
};
