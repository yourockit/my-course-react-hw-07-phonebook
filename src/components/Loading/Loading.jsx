import {
  ContactsContainer,
  Contact,
  Item,
  ContactSymbol,
  Name,
  GroupSymbol,
} from './Loading.styled';

export const Loading = () => {
  const plugs = [1, 2, 3, 4, 5];
  return (
    <ContactsContainer>
      <GroupSymbol />
      {plugs.map(plug => {
        const index = plugs.indexOf(plug);
        return (
          <Item key={index}>
            <Contact>
              <ContactSymbol></ContactSymbol>
              <Name></Name>
            </Contact>
          </Item>
        );
      })}
      <GroupSymbol />
      {plugs.map(plug => {
        const index = plugs.indexOf(plug);
        return (
          <Item key={index}>
            <Contact>
              <ContactSymbol></ContactSymbol>
              <Name></Name>
            </Contact>
          </Item>
        );
      })}
      <GroupSymbol />
      {plugs.map(plug => {
        const index = plugs.indexOf(plug);
        return (
          <Item key={index}>
            <Contact>
              <ContactSymbol></ContactSymbol>
              <Name></Name>
            </Contact>
          </Item>
        );
      })}
    </ContactsContainer>
  );
};
