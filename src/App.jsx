import React from 'react'
import {connect} from 'react-redux';
import {set_data} from './store/action/methods'
import './App.css';

class App extends React.Component{
  render()
  {
    console.log("redux_data=> ",this.props)
    return(
      <div> 
        <h1>This is the App.js file and I like to do programming</h1>
        <br/>
        <button onClick={()=>this.props.set_data("bhai data yahan se bhi ja sakta hai")}>Set Data</button>
      </div>
    )
  }
}
//getting the data from the store

//getting the data from the store
const mapStateToProps = (state /*, ownProps*/) => (
  {
    username:state.auth.user_name,
    email:state.auth.email,
    app_name:state.app.app_name,
    uid:state.app.uid
  }
)

//updating the data of the state
const mapDispatchToProp = (dispatch)=>({
    set_data:(data)=>dispatch(set_data(data)) 
})
//updating the data of the state
export default connect(mapStateToProps,mapDispatchToProp)(App);
