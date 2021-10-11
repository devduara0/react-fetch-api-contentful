
import React from 'react';
import { StyledCard } from './styles/Card.styled'

//import { Link } from 'react-router-dom';
//import * as Markdown from 'react-markdown';


const ContentsList = (contents) =>{

                
                
            return (

<StyledCard>
      <div>
        <h2>{contents.kichwa}</h2>
        <p>{contents.mwili}</p>
      </div>

      <div>
        
      </div>
    </StyledCard>
  
)
                
            
       }
   

export default ContentsList;




