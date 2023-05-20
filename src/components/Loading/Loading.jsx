import { Container, Contact, Item, SymbolWrap, Name } from './Loading.styled';

export const Loading = () => {
  const plugs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <Container>
      {plugs.map(({ id }) => {
        return (
          <Item key={id}>
            <Contact>
              <SymbolWrap></SymbolWrap>
              <Name></Name>
            </Contact>
          </Item>
        );
      })}
    </Container>
  );
};
