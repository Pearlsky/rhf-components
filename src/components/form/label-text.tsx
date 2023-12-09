export interface ILabelProps {
  title: string;
  helperText?: string;
}

export const Label = (props: ILabelProps) => {
  return (
    <div className="flex flex-col gap-1 mb-1.5">
      <span className="text-sm font-medium">{props.title}</span>
      <span className="text-xs text-gray-500">{props.helperText}</span>
    </div>
  );
};
