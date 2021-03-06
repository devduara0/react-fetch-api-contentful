import { useState, useEffect } from 'react'
import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

const query = `
{
   footerCollection{
    items {
      body
      logo {
        url
      }
      }
    }
  }
`;

function Footer() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`${process.env.REACT_APP_NOT_SECRET_KD}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_NOT_SECRET_CODE}`
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        
        setPage(data.footerCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Ina jaa...";
  }
  
  
  return (
      <StyledFooter>
      <Container>
      <img src={page.logo.url} alt="logo" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+255-743-123-4567</li>
            <li>example@dodosa.com</li>
          </ul>
          <ul>
            <li>Kuhusu Sisi</li>
            <li>Tunafanya nini</li>
            <li>Maswali ya mara kwa mara</li>
          </ul>

          <ul>
            <li>Ajira</li>
            <li>Blog</li>
            <li>Wasiliana Nasi</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>{page.body}</p>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
