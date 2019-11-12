import React from 'react';
import Pool from './pool';
import Invite from './invite';
import { Item } from 'semantic-ui-react'



const Summary = (props) => {
  
  const handleClick = (item, status) => props.onHandleClick(item, status)
  
  return (
    <Item.Group divided className = 'poolList'>
      {props.view==='pools'?props.items.map(item => 
        <Pool key = {item.uuid} item = {item}>
        </Pool>
        ) : props.items.map(item => 
        <Invite key = {item.uuid} item = {item}>
        </Invite>
        )}
    </Item.Group>
   );
}
 
export default Summary;