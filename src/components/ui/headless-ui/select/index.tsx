import { Listbox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useController } from "react-hook-form";

export interface IHeadlessSelectProps {
  options?: any;
  optionRender?: any;
  placeholder?: string;
  controlProps: { control: any; name: string; rules?: any };
}

export const HeadlessSelect = (props: IHeadlessSelectProps) => {
  const {
    field,
    fieldState: { error },
  } = useController(props.controlProps);

  return (
    <div className="w-48">
      <div className="mb-4">
        {error && (
          <span className="text-red-500 text-xs">This is a required field</span>
        )}
      </div>
      <Listbox as="div" {...field}>
        <Listbox.Button className="relative w-full h-9 cursor-default rounded-lg flex items-center bg-white pl-3 pr-10 text-left shadow-sm border sm:text-sm">
          <span className="block truncate">{field.value}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-48 overflow-auto rounded-md bg-white py-1 text-base shadow-sm ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {props.optionRender
            ? props.options.map(props.optionRender)
            : props.options.map((option: any) => (
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  key={option.id}
                  value={option.name}
                >
                  {option.name}
                </Listbox.Option>
              ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
