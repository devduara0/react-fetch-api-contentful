import React,{ Fragment, Component } from 'react';
import { createClient } from "contentful";
import ContentsList from './contentsList';

class Content extends Component {
constructor() {
    super();
    this.state = { contents: [] };
    this.client = createClient({
      accessToken:
        "CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek",
      space: "9heip63yijn8"
    });
}
  

componentDidMount() {
    this.fetchContents().then(this.setContents);
  }
fetchContents = () => this.client.getEntries()

setContents = response => {
    this.setState({
      contents: response.items
    })
  }

    render(){
        return(
            <Fragment>
       
    
    
    
      { this.state.contents.map((contents ) =>
        <ContentsList key={contents.id}  />
      )}
     
    </Fragment>
        )
    }
}

export default Content;
