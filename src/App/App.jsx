import { Background, Container, Content } from './App.styled';
import { Contacts } from '../components/Contacts/Contacts';

export const App = () => {
  return (
    <Container>
      <Background />
      <Content>
        <Contacts />
      </Content>
    </Container>
  );
};
