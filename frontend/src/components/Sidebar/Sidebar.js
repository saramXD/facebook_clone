import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow src='https://lh3.googleusercontent.com/EEbkBvCkmjhYr0xIfkCAEoN3cWVChd6Fh7tC5jfRS06MU0_8mMBwx9yTOHAnO_Hzp40' title="Your Name"/>
      <SidebarRow Icon={LocalHospitalOutlinedIcon} title="Covid-19"/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Pages"/>
      <SidebarRow Icon={StorefrontIcon} title="Messenger"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace"/>
    </div>
  );
}

export default Sidebar;
