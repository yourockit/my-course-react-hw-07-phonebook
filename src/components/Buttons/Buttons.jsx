import { Btn } from './Buttons.styled';

export const Button = ({ children, onClick }) => {
  return (
    <Btn type="submit" onClick={onClick}>
      {children}
    </Btn>
  );
};
