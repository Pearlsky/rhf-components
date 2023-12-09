import { RadioGroup } from "@headlessui/react";
import { useController } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import { TRadioGroupProps } from "../../antd/radio-group";

export type HeadlessRadioGroupProps = {
  stackDirection: "horizontal" | "vertical";
} & TRadioGroupProps;

export const HeadlessRadioGroup = (props: HeadlessRadioGroupProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div>
      <RadioGroup as="div" {...field}>
        <div className="mb-4">
          {error && (
            <span className="text-red-500 text-xs">
              This is a required field
            </span>
          )}
        </div>

        <div
          className={twMerge(
            "flex gap-3",
            props.stackDirection === "vertical" ? "flex-col w-80" : ""
          )}
        >
          {props.optionsRender
            ? props.options.map(props.optionsRender(field))
            : props.options.map((option: any) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option.value}
                  className={({ active }) =>
                    twMerge(
                      " flex cursor-pointer rounded-lg px-5 py-3 border focus:outline-none",
                      field.value === option.value
                        ? "bg-blue-600 text-white"
                        : "bg-white",
                      active
                        ? "ring-2 ring-white/60 ring-offset-2 ring-offset-blue-600"
                        : ""
                    )
                  }
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={twMerge(
                            "font-medium",
                            field.value === option.value
                              ? "text-white"
                              : "text-gray-900"
                          )}
                        >
                          {option.value}
                        </RadioGroup.Label>
                      </div>
                    </div>
                  </div>
                </RadioGroup.Option>
              ))}
        </div>
      </RadioGroup>
    </div>
  );
};
