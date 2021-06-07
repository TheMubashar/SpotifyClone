const userReducer =(state ={user:null,token:null}, action)=>{
    switch (action.type) {
        case "SET_USER":
            return{ 
                ...state,
                user:action.user
            };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        
        default:
            return state;
    }
};

export default userReducer;