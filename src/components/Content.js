import React, { Component } from 'react';
import { StyledCard } from './styles/Card.styled'
import { createClient } from 'contentful';


class Content extends Component {
  state = {
    contents: null
  };

  componentWillMount() {
    const client = createClient({
      accessToken: `${process.env.REACT_APP_NOT_SECRET_CODE}`,
      space: `${process.env.REACT_APP_NOT_SEKRET}`
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
      
  }

  render() {
    
    return (
      <div>
        
        {this.state.contents &&
          this.state.contents.map(content => {
            
            return (
        <StyledCard layout={content.sys.id % 2 === 0 && 'row-reverse'}>
      <div>
        
        <h2>{content.fields.kichwa}</h2>
        <p>{content.fields.mwili}</p>
      </div>

      <div>
       <img src={content.fields.picha.fields.file.url} alt='' />
      </div>
    </StyledCard>
                
                
              
            );
          })}
      </div>
    );
  }
}

export default Content;


