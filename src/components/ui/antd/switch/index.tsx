import { Switch } from "antd";
import { useController } from "react-hook-form";

export type TAntdSwitch = {
  controlProps: any;
};

export const AntdSwitch = (props: TAntdSwitch) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div className="flex gap-2 items-center">
      <Switch {...field}/>
      {error && (<span className="text-red-500 text-xs">This is a required field</span>)}
    </div>
  );
};
