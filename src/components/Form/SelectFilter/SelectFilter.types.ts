import { InputTypes } from 'components/Form/Input/Input.types';

export type SelectFilterTypes = InputTypes & {
  elements: any[];
  onSelect: (element: any) => void;
  showIcon?: boolean;
};
