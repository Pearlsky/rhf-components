import { Select } from "@radix-ui/themes";
import { useController } from "react-hook-form";

export interface IRadixSelectProps {
  options?: any;
  optionRender?: any;
  placeholder?: string;
  controlProps: { control: any; name: string; rules?: any };
}

export const RadixSelect = (props: IRadixSelectProps) => {
  const {
    field: { name, onBlur, onChange, disabled, value },
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div className="w-48 flex flex-col gap-1">
      <div className="mb-3">
        {error && (
          <span className="text-red-500 text-xs">This is a required field</span>
        )}
      </div>
      <Select.Root
        {...{ name, onBlur, disabled }}
        onValueChange={onChange}
        value={value}
      >
        <Select.Trigger />
        <Select.Content position="popper">
          {props.optionRender
            ? props.options.map(props.optionRender)
            : props.options.map(({ id, name }: any) => (
                <Select.Item key={id} value={name}>
                  {name}
                </Select.Item>
              ))}
        </Select.Content>
      </Select.Root>
    </div>
  );
};
