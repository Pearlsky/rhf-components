import { Radio } from "antd";
import { useController } from "react-hook-form";

type OptionsProps =
  | { options: any; optionsRender: any }
  | { options: any; optionsRender?: never };

export type TRadioGroupProps  ={
  controlProps: { control: any; name: string; rules: any };
} & OptionsProps

export const AntdRadioGroup = (props: TRadioGroupProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);
  return (
    <div className="w-fit ">
      <div className="mb-4">
        {error && (
          <span className="text-red-500 text-xs">This is a required field</span>
        )}
      </div>
      <Radio.Group {...field}>
        {props.optionsRender
          ? props.options.map(props.optionsRender)
          : props.options.map(({ id, value }: any) => (
              <Radio.Button key={id} value={value} className="capitalize">
                {value}
              </Radio.Button>
            ))}
      </Radio.Group>
    </div>
  );
};
