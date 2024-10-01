import { InputTypes } from 'components/Form/Input/Input.types';

export type SelectTypes = {
  elements: any[];
  id: string;
  label: string;
  value: string;
  error?: string;
  className?: string;
  onSelect: (element: any) => void;
  showIcon?: boolean;
  required?: boolean;
};
