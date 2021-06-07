import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {useSelector, } from "react-redux";

function Sidebar() {
  let playlist = useSelector(state=> state.playlistReducer.playlist);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotifyLogo"
      />
      <SidebarOption tilte="Home" Icon={HomeIcon} />
      <SidebarOption tilte="Search" Icon={SearchIcon} />
      <SidebarOption tilte="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar__title">Playlist</strong>
      <hr />
      {playlist[0]?.items?.map((playlist) => (
        <SidebarOption tilte={playlist.name} />
      ))}
      <SidebarOption />
    </div>
  );
}

export default Sidebar;
