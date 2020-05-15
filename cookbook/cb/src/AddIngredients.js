
import React from 'react';


   
class AddIngredients extends React.Component {
    constructor(props){
        super(props);
        this.state={
            "recipe":""
          };
    }
    
          addproduct=()=>{
            let product = {
                "name":document.getElementById("addname").value
               };
            let url = "http://localhost:8080/createIngredient";  
      
            fetch(url, {
                method: "POST",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Authorization":'Bearer '+ this.state.jwt
                },
                body: JSON.stringify(product),
              }).then()
              .then(
                (result) => {
                    alert("Ingredient added");
                    document.getElementById("addname").value="";
                   }
              );
          }
    render(){
       return ( 
            <div className="form-group col-xs-4">
                <label for="addname">Name:</label><input class="form-control" type="text" id="addname"/>
                <input type="button" class="btn" value="Added Ingredient" onClick={this.addproduct} />
            </div>
      );
    }
}
export default AddIngredients;
