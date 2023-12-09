import { Switch } from "@mantine/core";
import "@mantine/core/styles.css";
import { useController } from "react-hook-form";

export type TMantineSwitch = {
  controlProps: any;
};

export const MantineSwitch = (props: TMantineSwitch) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div className="flex gap-2 my-3">
      <Switch {...field} />
      {error && (
        <span className="text-red-500 text-xs">This is a required field</span>
      )}
    </div>
  );
};
