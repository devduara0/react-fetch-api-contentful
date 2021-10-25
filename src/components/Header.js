import { useState, useEffect } from "react";
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

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
      .fetch(`https://graphql.contentful.com/content/v1/spaces/9heip63yijn8/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek",
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
    return "App ina Load...";
  }

  // render the fetched Contentful data
  return (
    <StyledHeader>
      <Container>
        <Nav>
        
        <Logo src={page.logo.url} alt="logo" />
        <Button>Try It Free</Button>
         </Nav>

        <Flex>
          <div>
        <h1>{page.title}</h1>
        <p>{page.body}</p>
      <Button bg='#873e23' color='#fff'>
              Bofya hapa kujuwa zaidi 
     </Button>
    </div>
   <Image src={page.imagehead.url} alt="picha" />
   </Flex>
   </Container>
  </StyledHeader>
  );
}

export default Header;
