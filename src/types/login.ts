export type LoginInputProps = {
  state: string;
  smallLabel: boolean;
  isValid: null | boolean;
  message: string;
};

export type LoginPasswordProps = LoginInputProps & {
  security: boolean;
}