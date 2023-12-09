import { Group, Radio } from "@mantine/core";
import "@mantine/core/styles.css";
import { useController } from "react-hook-form";
import { TRadioGroupProps } from "../../antd/radio-group";

export const MantineRadioGroup = (props: TRadioGroupProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);
  return (
    <div className="w-fit py-4">
      <div className="mb-4">
        {error && (
          <span className="text-red-500 text-xs">This is a required field</span>
        )}
      </div>
      <Radio.Group {...field}>
        <Group mt="xs">
          {props.optionsRender
            ? props.options.map(props.optionsRender)
            : props.options.map(({ id, value }: any) => (
                <Radio key={id} value={value} label={value} />
              ))}
        </Group>
      </Radio.Group>
    </div>
  );
};
