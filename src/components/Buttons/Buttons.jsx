import { Btn } from './Buttons.styled';

export const Button = ({ type, children, onClick, onSubmit }) => {
  return (
    <Btn type={type} onClick={onClick} onSubmit={onSubmit}>
      {children}
    </Btn>
  );
};
