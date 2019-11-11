import React from 'react';
import Pool from './pool';

const Summary = (props) => {
  
  const handleClick = (item, status) => props.onHandleClick(item, status)
  
  return ( 
    <React.Fragment>
      <div className = {'poolHeader'+(props.items.length===0 && 'Hidden')}>Summary</div>
      <div className = 'poolList'>
        {props.items.map(item => 
          <Pool 
            key={item.title} 
            status={props.status?props.status:false} 
            item={item} 
            onHandleClick= {(item, status) => handleClick(item, status)}/>
            )}
      </div>
    </React.Fragment>
   );
}
 
export default Summary;