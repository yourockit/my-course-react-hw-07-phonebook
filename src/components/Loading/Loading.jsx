import {
  ContactListWrap,
  ContactsGroup,
  GroupSymbolWrap,
  GroupSymbol,
  ContactsContainer,
  Contact,
  Item,
  ContactSymbol,
} from './Loading.styled';
import { loading } from './LoadingMotion.styled';

export const Loading = () => {
  const arrayGroup = Array.from(Array(4).keys());
  const arrayItem = Array.from(Array(4).keys());
  return (
    <ContactListWrap>
      {arrayGroup.map(arr => {
        return (
          <ContactsGroup key={arr}>
            <GroupSymbolWrap>
              <GroupSymbol animate={loading} />
            </GroupSymbolWrap>
            <ContactsContainer>
              {arrayItem.map(arr => {
                const index = arrayItem.indexOf(arr);
                return (
                  <Item key={index}>
                    <Contact>
                      <ContactSymbol animate={loading} />
                    </Contact>
                  </Item>
                );
              })}
            </ContactsContainer>
          </ContactsGroup>
        );
      })}
    </ContactListWrap>
  );
};
