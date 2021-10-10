import { useState, useEffect } from "react";
//import "./App.css";

const query = `
{
   blogCollection{
    items {
      titile
    }
  }
}
`;

function Bloghome() {
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
        
//        .then(json => {
 //           this.setState({data.blogCollection.items:json})
  //      })
        
        setPage(data.blogCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <p>{page.titile}</p>
      </header>
    </div>
  );
}

export default Bloghome;
