//This is actually my store from which all the data will be transformed to all the application.
const INITIAL_STATE = {
    user_name:"Ghous Ahmed",
    email:"ghous@gmail.com"
}



export default (state=INITIAL_STATE,action)=>{
    console.log("Auth_Action=>",action)
    return state;
} 