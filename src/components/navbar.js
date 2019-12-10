import React from "react";
import { Menu } from "semantic-ui-react";

const NavBar = props => {
  const handleClick = (e, data) => props.onHandleClick(e, data);

  return (
    <Menu fixed="top" widths="2" className="navHeader">
      <Menu.Item
        className="splitzieText"
        name="pools"
        active={props.view === "pools"}
        onClick={(e, data) => handleClick(e, data)}
      />
      <Menu.Item
        className="splitzieText"
        name="invites"
        active={props.view === "invites"}
        onClick={(e, data) => handleClick(e, data)}
      />
    </Menu>
  );
};

export default NavBar;
