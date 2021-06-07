export const setPlaylist = (playlistItem)=>{
    return{
        type:"SET_PLAYLIST",
        playlistItem
    };
};


export const addUser = (user)=>{
    return{
        type:"SET_USER",
        user
    };
};

export const addToken = (token)=>{
    return{
        type:"SET_TOKEN",
        token
    };
};

export const setItem = (item)=>{
    return{
        type:"SET_ITEM",
        item
    };
};

export const setPlaying = (value)=>{
    return{
        type:"SET_PLAYING",
        value
    };
};

export const setDiscoverWeekly = (discover_weekly)=>{
    return{
        type:"SET_DISCOVER_WEEKLY",
        discover_weekly
    };
};