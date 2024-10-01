export type FormProps = {
  handleClose: () => void;
};

export type FormValues = {
  name: string;
  type: string;
  companies?: string;
  description?: string;
  scope?: string;
  expert: string[];
};
