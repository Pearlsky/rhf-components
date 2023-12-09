import { useForm } from "react-hook-form";
import { Label } from "./label-text";
import { AntdRadioGroup, AntdSelect } from "../ui/antd";
import {
  COUNTRIES,
  MONTHLY_PLANS,
  NOTIFICATION_FREQUENCY_OPTIONS,
  NOTIFICATION_TYPE_OPTIONS,
} from "@/utils/mock";
import { Space } from "antd";
import { RadixRadioGroup } from "../ui/radix-ui";
import { RadioGroup, Separator } from "@radix-ui/themes";
import { HeadlessRadioGroup } from "../ui/headless-ui";
import { RadioGroup as HRadioGroup } from "@headlessui/react";
import { MantineSwitch } from "../ui/mantine";
import { twMerge } from "tailwind-merge";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router";

export const SetPreferencesForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({ mode: "onChange" });

  const submitHandler = (values: any) => {
    navigate("/feedback", { state: values });
  };

  return (
    <div>
      <form
        className="flex flex-col gap-12"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div className="flex flex-col gap-8">
          <article>
            <Label
              title="Select current location"
              helperText="This information will never be disclosed"
            />
            <AntdSelect
              placeholder="Select location"
              options={COUNTRIES}
              optionRender={(option: any) => (
                <Space>
                  <span role="img">{option.data.flag}</span>
                  {option.data.value}
                </Space>
              )}
              controlProps={{
                control,
                name: "location",
                rules: { required: true },
              }}
            />
          </article>
          <article>
            <Label
              title="Set location as default"
              helperText="You can always change this as you need"
            />
            <MantineSwitch
              controlProps={{
                control,
                name: "defaultLocation",
                rules: { required: true },
              }}
            />
          </article>
          <Separator size={"4"} />
          <article>
            <Label
              title="Choose a monthly plan"
              helperText="You can always unsubscribe before you are charged"
            />
            <HeadlessRadioGroup
              options={MONTHLY_PLANS}
              optionsRender={(field: any) => (plan: any) =>
                (
                  <HRadioGroup.Option
                    key={plan.fee}
                    value={plan.name}
                    className={({ active }) =>
                      twMerge(
                        " flex cursor-pointer rounded-lg px-5 py-3 border focus:outline-none",
                        field.value === plan.name ? "bg-gray-100" : "bg-white",
                        active
                          ? "ring-2 ring-white/60 ring-offset-2 ring-offset-blue-500"
                          : ""
                      )
                    }
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex w-full items-center">
                        <div className="w-full text-sm">
                          <HRadioGroup.Label
                            as="p"
                            className={`font-medium flex items-center justify-between 
                              }`}
                          >
                            <span>{plan.name}</span>
                            <span>{plan.fee}</span>
                          </HRadioGroup.Label>
                          <HRadioGroup.Description
                            as="div"
                            className="w-full flex items-center justify-between text-gray-500 grayscale"
                          >
                            <div>
                              <span>{plan.team}</span>{" "}
                              <span aria-hidden="true">&middot;</span>{" "}
                              <span>{plan.cpu}</span>
                            </div>
                            <div>
                              <span>/mo</span>
                            </div>
                          </HRadioGroup.Description>
                        </div>
                      </div>
                    </div>
                  </HRadioGroup.Option>
                )}
              controlProps={{
                control,
                name: "monthlyPlan",
                rules: { required: true },
              }}
              stackDirection="vertical"
            />
          </article>
          <Separator size="4" />
          <article>
            <Label
              title="Notifications"
              helperText="How would you like to receive notifications"
            />
            <RadixRadioGroup
              options={NOTIFICATION_TYPE_OPTIONS}
              optionsRender={({ id, value, label }: any) => (
                <div key={id} className="flex items-center gap-3.5">
                  <RadioGroup.Item value={value} />
                  <label htmlFor="r1" className="text-sm">
                    {label}
                  </label>
                </div>
              )}
              controlProps={{
                control,
                name: "notificationsType",
                rules: { required: true },
              }}
            />
          </article>
          <article>
            <Label
              title="Notifications frequency"
              helperText="This would determine the frequency of our notifications"
            />
            <AntdRadioGroup
              options={NOTIFICATION_FREQUENCY_OPTIONS}
              controlProps={{
                control,
                name: "notificationsFrequency",
                rules: { required: true },
              }}
            />
          </article>
        </div>
        <div className="flex justify-end">
          <Button
            loading={isSubmitting}
            loaderProps={{ type: "dots" }}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
