import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { createClient } from 'contentful';
//import PostLink from './PostLink';

class Home extends Component {
  state = {
    contents: null
  };

  componentWillMount() {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
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
      <div className="cards">
        <Helmet title="Contentful Static React" />
        {this.state.contents &&
          this.state.contents.map(content => {
            
            return (
              <
                key={content.sys.id}
                
                
                title={content.fields.kichwa}
              />
            );
          })}
      </div>
    );
  }
}

export default Home;
