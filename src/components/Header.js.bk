import React,{ Fragment, Component } from 'react';
import { createClient } from "contentful";
//import './content.scss';
//import HomeIterm from './homeIterm';
//import Banner from './Banner';
//import Hero from './Hero';
//import Banner from './banner'
import HeardsList from './heardsList';

class Header extends Component {
constructor() {
    super();
    this.state = { heards: [] };
    this.client = createClient({
      accessToken:
        "CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek",
      space: "9heip63yijn8"
    });
}
  

componentDidMount() {
    this.fetchHeards().then(this.setHeards);
  }
fetchHeards = () => this.client.getEntries()

setHeards = response => {
    this.setState({
      heards: response.items
    })
  }

    render(){
        return(
            <Fragment>
       
    
    
    <div className="tr">
      { this.state.heards.map(({fields}, i) =>
        <HeardsList key={i} {...fields} />
      )}
     </div>
    </Fragment>
        )
    }
}

export default Header;
