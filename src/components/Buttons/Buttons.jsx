import { Btn } from './Buttons.styled';

export const Button = ({ type, children, onClick, onSubmit, isLoading }) => {
  return (
    <Btn type={type} onClick={onClick} onSubmit={onSubmit} disabled={isLoading}>
      {children}
    </Btn>
  );
};
