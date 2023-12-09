import { Select, Space } from "antd";
import { useController } from "react-hook-form";

const SelectOptions: { value: string }[] = [
  { value: "Pearl" },
  { value: "Dominic" },
  { value: "Yeshua" },
];

export interface IAntdSelectProps {
  options?: any;
  optionRender?: any;
  placeholder?: string;
  controlProps: { control: any; name: string; rules?: any };
}

export const AntdSelect = (props: IAntdSelectProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div className="w-48">
      <div className="mb-4">
        {error && (
          <small className="text-red-500 text-xs">
            This is a required field
          </small>
        )}
      </div>
      <Select
        placeholder={props.placeholder}
        style={{ width: "100%" }}
        options={props.options || SelectOptions}
        optionRender={props.optionRender}
        {...field}
      />
    </div>
  );
};
