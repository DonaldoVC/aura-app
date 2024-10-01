import { ReactNode } from 'react';

export type ModalProps = {
  handleClose: () => void;
  title?: string;
  className?: string;
  children?: ReactNode;
};
