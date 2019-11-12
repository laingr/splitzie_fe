import React from 'react';
import { Button, Image, Item } from 'semantic-ui-react';
import Moment from 'react-moment';

const Invite = props => {

  return (
  <Item>
    <Item.Image size='tiny' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/rocket_1f680.png' />
    <Item.Content>
      <Item.Header>{'Please respond within '}
        <Moment fromNow ago>{props.item.closeDate}</Moment>
      </Item.Header>
      <Item.Meta>
        <span className='price'>{'Requesting $'+props.item.budget+' per person.'}</span>
      </Item.Meta>
      <Item.Meta className='description'>{props.item.desc}</Item.Meta>
    </Item.Content>
  </Item>
  )
  
}

export default Invite;
