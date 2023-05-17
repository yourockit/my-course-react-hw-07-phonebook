import { BtnAdd, BtnEdit, BtnDelete } from './Buttons.styled';

export const ButtonAdd = ({ children, onClick }) => {
  return (
    <BtnAdd type="submit" onClick={onClick}>
      {children}
    </BtnAdd>
  );
};

export const ButtonEdit = ({ children, onClick }) => {
  return (
    <BtnEdit type="submit" onClick={onClick}>
      {children}
    </BtnEdit>
  );
};

export const ButtonDelete = ({ children, onClick }) => {
  return (
    <BtnDelete type="submit" onClick={onClick}>
      {children}
    </BtnDelete>
  );
};
