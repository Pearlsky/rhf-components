import { Switch } from "@headlessui/react";
import { useController } from "react-hook-form";

export type THeadlessSwitch = {
  controlProps: any;
};

export const HeadlessSwitch = (props: THeadlessSwitch) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div className="flex gap-2 items-center">
      <Switch
        {...field}
        className={`${field.value ? "bg-blue-500" : "bg-gray-300"}
          relative inline-flex h-[22px] w-[46px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${field.value ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      {error && (
        <span className="text-red-500 text-xs">This is a required field</span>
      )}
    </div>
  );
};
