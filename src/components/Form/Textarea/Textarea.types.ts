import { UseFormRegister } from 'react-hook-form';

export type TextareaTypes = {
  label?: string;
  className?: string;
  id: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: string | undefined;
  focusHandler?: (state: boolean) => void;
  handleFocus?: (state: boolean) => void;
  required?: boolean;
};
