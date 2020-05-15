import React from 'react';
import Recipies from './Recipies';
import Ingredients from './Ingredients';
import AddIngredients from './AddIngredients';
import AddRecipe from './AddRecipe';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
        islogin : false
    }
  }
  loginSubmitFunction=(event)=>{
    event.preventDefault();
    let username=document.getElementById('email').value;
    let password=document.getElementById('pass').value;
    let data = {
        "username":username,
        "password":password
    };
    fetch('http://localhost:3001/users', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(res => res.json())
  .then(
    (result) => {
      console.log(result);
      if(result.hasOwnProperty('isLogin') && result.isLogin == 'true'){
       
        this.setState({islogin : true});
       
        }
        else{
          this.setState({islogin : false});
        }
       }
  );
  }    
  render() {
    if(!this.state.islogin){
      return (
        <div class="container">
        <img src="Capture.png" width="370" height="370"  align="left"></img>
     
                       <div class="form-container flip">

         <div id="login-form">
         <h1 >Welcome to Cookbook</h1>
 <div id="login-row" >
     <div id="login-column" className="col-md-6">
         <div id="login-box" className="col-md-12">
             <form id="login-form" className="form" action="" method="post">
                 <h3 >Authenticate Yourself</h3>
                 <div className="form-group">
                     <label htmlfor="username">Username:</label><br/>
                     <input type="text" name="username" id="email" className="form-control"/>
                 </div>
                 <div className="form-group">
                     <label htmlfor="password" >Password:</label><br/>
                     <input type="password" name="password" id="pass" className="form-control"/>
                 </div>
                 <div class="form-group">
                     <label htmlfor="remember-me"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br/>
                     <input type="submit" className="button button2" name="submit"  onClick={this.loginSubmitFunction}  value="submit" />
                 </div>
               
             </form>
             
         </div>
         
     </div>
 </div>
</div>

</div>      
  
</div>     
      );
    }

else{
    return (
      <div >
           <div class="jumbotron">
  <div class="container text-center">
  <img src="Capture.png" width="270" height="270"  align="left"></img>
    <h1>CookBook</h1>      
    <p>The recipies you need </p>
  </div>
</div>
         <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
         <HashRouter>
        <li  ><NavLink to="/product">All Recipies</NavLink></li>
        <li  ><NavLink to="/Ingredients">All Ingredients</NavLink></li>
        <li  ><NavLink to="/AddIngredients">Add Ingredients</NavLink></li>
        <li  ><NavLink to="/AddRecipe">Add Recipe</NavLink></li>
       
        <div id='tablecontent'>
        <Route
              path='/product'
              component={() => <Recipies  />}
            />
               <Route
              path='/Ingredients'
              component={() => <Ingredients  />}
            />
              <Route
              path='/AddIngredients'
              component={() => <AddIngredients  />}
            />
            <Route
              path='/AddRecipe'
              component={() => <AddRecipe  />}
            />
            
            
        </div>   
        </HashRouter>
        </ul>
        </div>
      </div>
    );
}
  };
}

export default App;
