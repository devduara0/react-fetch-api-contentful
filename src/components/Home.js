import React, { Component } from 'react';
//import Helmet from 'react-helmet';
import { createClient } from 'contentful';
//import PostLink from './PostLink';

class Home extends Component {
  state = {
    contents: null
  };

  componentWillMount() {
    const client = createClient({
      accessToken: "CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek",
      space: "9heip63yijn8"
    });

    client
      .getContentTypes()
      .then(response => {
        const postType = response.items.find(item => item.name === 'Content');
        return postType.sys.id;
      })
      .then(id => {
        client
          .getEntries({
            content_type: id
          })
          .then(response => {
            this.setState({
              contents: response.items
            });
          })
          .catch(console.error);
      })
      .catch(console.error);
  }

  render() {
    
    return (
      <div>
        
        {this.state.contents &&
          this.state.contents.map(content => {
            
            return (
        <StyledCard layout={content.sys.id % 2 === 0 && 'row-reverse'}>
      <div>
        <h2>{title}</h2>
        <h2>title={content.fields.kichwa}</h2>
        <p>body={content.fields.mwili}</p>
      </div>

      <div>
        
      </div>
    </StyledCard>
                
                
              
            );
          })}
      </div>
    );
  }
}

export default Home;


