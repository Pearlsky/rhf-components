import { Switch } from "@radix-ui/themes";
import { useController } from "react-hook-form";

export type TRadixSwitch = {
  controlProps: any;
};

export const RadixSwitch = (props: TRadixSwitch) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div className="flex gap-2">
      <Switch {...field} checked={field.value} onCheckedChange={field.onChange}/>
      {error && (
        <span className="text-red-500 text-xs">This is a required field</span>
      )}
    </div>
  );
};
