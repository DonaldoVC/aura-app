export type CheckboxProps = {
  text: string;
  error?: string | boolean;
  checked: boolean;
  onCheck?: (value: string) => void;
};
