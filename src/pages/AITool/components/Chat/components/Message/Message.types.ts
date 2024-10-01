export type MessageProps = {
  type: 'message' | 'response';
  children: string;
  index: number;
  disabled?: boolean;
  setDisabled?: (state: boolean) => void;
};
