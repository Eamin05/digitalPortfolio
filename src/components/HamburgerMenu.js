"use client";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import "../styles/Hamburger.scss";

const HamburgerMenuComp = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="hamburger-menu-container">
      <Button
        type="default"
        onClick={() => setOpenMenu(!openMenu)}
        icon={<MenuOutlined />}
        size="middle"
      />
      <Drawer
        title="Basic Drawer"
        onClose={() => setOpenMenu(false)}
        open={openMenu}
        placement="left"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default HamburgerMenuComp;
