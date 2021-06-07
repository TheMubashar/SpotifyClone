import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotityWebApi from "spotify-web-api-js";
import Player from "./Player";
import { addToken, addUser, setPlaylist, setDiscoverWeekly } from "./action";
import {useSelector, useDispatch } from "react-redux";
const spotify = new SpotityWebApi();

function App() {
  let token = useSelector(state=> state.userReducer.token);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch(addToken(_token));

      // Sending token to spotify api to connect to api
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch(addUser(user));
      });

      // getting user playlist and send it to datalayer
      spotify.getUserPlaylists().then((playlist) => {
        dispatch(setPlaylist(playlist));
      });

      // getting user playlist and send it to datalayer
      spotify.getPlaylist('37i9dQZEVXcU0x49m1Wr95').then((response) => {
        dispatch(setDiscoverWeekly(response));
      });

    }
  }, []);
  return (
    <div className="app">
      {token? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
