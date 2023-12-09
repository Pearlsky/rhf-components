import { Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Callout, Code } from "@radix-ui/themes";
import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Feedback = () => {
  const { state } = useLocation();
  const [formattedRequestBody, setFormattedRequestBody] = useState<any>();

  const getFormattedRequestBody = useCallback(() => {
    setFormattedRequestBody(Object.entries(state));
  }, [state]);

  useEffect(() => {
    getFormattedRequestBody();
  }, [getFormattedRequestBody]);

  return (
    <div>
      <section className="h-screen flex flex-col items-center justify-center gap-4">
        <article>
          <Icon as={CheckCircleIcon} boxSize={5}/>
        </article>
        <article className="p-1.5 bg-gray-100 border rounded-md">
          {formattedRequestBody ? (
            <Callout.Root>
              <Code variant="ghost" className="flex flex-col">
                {`{`}
                {formattedRequestBody.map(([key, value]: any) => (
                  <span className="pl-5">{`${key}": "${value}"`}</span>
                ))}
                {`}`}
              </Code>
            </Callout.Root>
          ) : (
            "No data"
          )}
        </article>
      </section>
    </div>
  );
};
