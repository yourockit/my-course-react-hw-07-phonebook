import { useDispatch } from 'react-redux';
import { setContactsFilter } from 'redux/filterSlice';
import { Container, IconSearch, IconWrap, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <IconWrap>
        <IconSearch />
      </IconWrap>
      <Input
        type="text"
        onChange={e => dispatch(setContactsFilter(e.target.value))}
        placeholder="Find contacts by name"
      />
    </Container>
  );
};
