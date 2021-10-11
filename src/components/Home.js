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
      <div className="cards">
        
        {this.state.contents &&
          this.state.contents.map(content => {
            
            return (
              <div>
                key={content.sys.id}
                
                
                title={content.fields.kichwa}
              </div>
            );
          })}
      </div>
    );
  }
}

export default Home;
