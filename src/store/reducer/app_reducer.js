//This is actually my store from which all the data will be transformed to all the application.
const INITIAL_STATE = {
    app_name:"Chat App",
    uid:"122434343454545"
}



export default (state=INITIAL_STATE,action)=>{
    console.log("App_Action=>",action)
    switch(action.type)
    {
        case "SETDATA":
            return ({
                ...state,
                app_name:action.data
            })
    }
    return state;
} 