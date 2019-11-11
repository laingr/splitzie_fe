import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react'

const NavBar = () => {
  return(
    <Menu
    fixed = 'top'
    color = 'blue'
    widths = '2'>
      <Menu.Item>
        Your Pools
      </Menu.Item>
      <Menu.Item>
        Pool Invites
      </Menu.Item>
    </Menu>
  )
}

export default NavBar