import { useEffect, useState } from 'react';
import { Wrapper, Container } from './constants/styles';
import Card from './components/card/Card';
import Navbar from './components/navbar/Navbar'
import { data } from './constants/mockData';

function App() {
  const [cardData, setCardData] = useState([])

  const user = {
    username: "Jane",
    role: 'admin'
  }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const linkNames = ['Home', 'About', 'Contact', 'Admin']
    
  useEffect(() => {
    setCardData(data)
  }, [])

  return (
    <Wrapper>
      <Container>
        <Navbar linkNames={linkNames} role={user.role} />
        {cardData.map((obj, index) => <Card key={index} title={obj.title} textBody={obj.body} />)}
      </Container>
    </Wrapper>
  );
}

export default App;

