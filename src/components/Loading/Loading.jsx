import { Container, Contact, Item, SymbolWrap, Name } from './Loading.styled';

export const Loading = () => {
  const plugs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Container>
      {plugs.map(plug => {
        const index = plugs.indexOf(plug);
        return (
          <Item key={index}>
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
