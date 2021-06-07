import React,{useState} from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useSelector } from "react-redux";

function Header({ spotify }) {
  const [displayImg, setdisplayImg] = useState(null);
  let user = useSelector(state=> state.userReducer.user);  
  const setDisplayImg=()=>{
    if(user.images.length>0){
      setdisplayImg(user?.images[0].url);
    }
    return displayImg;
  }
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input className="searchInput"
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={setDisplayImg} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
export default Header;
