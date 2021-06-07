const basketReducer =(state ={playlist:[], playing:false, item:null,discover_weekly:null}, action)=>{
    switch (action.type) {
      case "SET_PLAYLIST":
        return{ 
            ...state,
            playlist:[action.playlistItem,...state.playlist]
        };
      case "SET_PLAYING":
        return{  
          ...state,
          playing:action.value
        };
      case "SET_ITEM":
        return{  
          ...state,
          item:action.item
        };
      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };
          
      default:
        return state;
    }
};

export default basketReducer;