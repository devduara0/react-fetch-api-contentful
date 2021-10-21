import { useState, useEffect } from "react";
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
//import { Button } from './styles/Button.styled'
import { Buttonbg } from './styles/Buttonbg'
const dotenv =  require('dotenv');
dotenv.config()
const space = process.env.REAT_PUBLIC_CONTENTFUL_SPACE_IDtwo
const accessToken = process.env.REAT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const query = `
{
   headerCollection{
    items {
      title
      body
      logo {
        url
      }
     imagehead {
        url
      }
    }
  }
}
`;

function Header() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(space, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        
        setPage(data.headerCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <StyledHeader>
      <Container>
        <Nav>
        
        <Logo src={page.logo.url} alt="logo" />
        <Buttonbg>Try It Free</Buttonbg>
         </Nav>

        <Flex>
          <div>
        <h1>{page.title}</h1>
        <p>{page.body}</p>
      <Buttonbg>
              Get Started For Free
     </Buttonbg>
    </div>
   <Image src={page.imagehead.url} alt="picha" />
   </Flex>
   </Container>
  </StyledHeader>
  );
}

export default Header;
