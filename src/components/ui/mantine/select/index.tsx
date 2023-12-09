import { Select } from "@mantine/core";
import { useState } from "react";
import "@mantine/core/styles.css";
import { useController } from "react-hook-form";

export interface IMantineSelectProps {
  options?: any;
  optionRender?: any;
  placeholder?: string;
  controlProps: { control: any; name: string; rules?: any };
}

export const MantineSelect = (props: IMantineSelectProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div>
      <div className="mb-4">
        {error && (
          <span className="text-red-500 text-xs">This is a required field</span>
        )}
      </div>
      <Select
        data={
          props.optionRender
            ? props.options.map(props.optionRender)
            : props.options.map((option: any) => option.name)
        }
        {...field}
        placeholder={props.placeholder}
      />
    </div>
  );
};
