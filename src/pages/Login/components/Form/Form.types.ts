export type FormProps = {
  onSubmitHandler: (values: FormValues) => void;
};

export type FormValues = {
  email: string;
  password: string;
};
