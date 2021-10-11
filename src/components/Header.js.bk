import React,{ Fragment, Component } from 'react';
import { createClient } from "contentful";
import ContentsList from './contentsList';

class Content extends Component {
constructor() {
    super();
    this.state = { content: [] };
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
      heards: response.items
    })
  }

    render(){
        return(
            <Fragment>
       
    
    
    <div className="tr">
      { this.state.contents.map(({fields}, i) =>
        <ContentsList key={i} {...fields} />
      )}
     </div>
    </Fragment>
        )
    }
}

export default Content;
