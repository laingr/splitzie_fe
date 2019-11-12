import React from 'react';
import { Button, Image, Item } from 'semantic-ui-react';
import Moment from 'react-moment';

const Pool = props => {

  return (
  <Item>
    <Item.Image size='tiny' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/232/face-with-party-horn-and-party-hat_1f973.png' />
    <Item.Content>
      <Item.Header>{'Splitzie closing in '}
        <Moment fromNow ago>{props.item.closeDate}</Moment>
      </Item.Header>
      <Item.Meta>
        <span className='price'>{'$'+((props.item.budget*props.item.AcceptedInvites)+' expected from '+(props.item.AcceptedInvites===null?0:props.item.AcceptedInvites)+' person')}</span>
      </Item.Meta>
      <Item.Meta className='description'>{props.item.desc}</Item.Meta>
    </Item.Content>
  </Item>
  )
  
}

export default Pool;
