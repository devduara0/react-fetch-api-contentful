
import React from 'react';
import { StyledCard } from './styles/Card.styled'

//import { Link } from 'react-router-dom';
//import * as Markdown from 'react-markdown';


const ContentsList = (props) =>{

                
                
            return (

<StyledCard>
      <div>
        <h2>{props.kichwa}</h2>
        <p>{props.mwili}</p>
      </div>

      <div>
        
      </div>
    </StyledCard>
  
)
                
            
       }
   

export default ContentsList;



