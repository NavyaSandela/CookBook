
import React from 'react';


   
class AddRecipe extends React.Component {
    constructor(props){
        super(props);
        this.state={
            "recipe":""
          };
    }
    
    getAllIngredients=()=>{
        fetch('http://localhost:8080/getallingredients', {
          method: 'get',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then(res => res.json())
        .then(
          (result) => {
            console.log(result);
            this.setState({"recipe":result});
             
             }
        );
      }
      componentDidMount(){
        this.getAllIngredients();
          }

          addproduct=()=>{
            let recipe = {
                "name":document.getElementById("addname").value,
                "process":document.getElementById("addDescription").value
               };
               let ingredientss = []; 
                var select1 = document.getElementById("addIngredient");
                var selected1 = [];
                for (var i = 0; i < select1.length; i++) {
                    console.log(select1.options[i]);
                    if (select1.options[i].selected)
                    ingredientss.push({"id":select1.options[i].value});
                }
                console.log(selected1);
                let createRecipe = {
                       "recipe": recipe,
                       "ingredient": ingredientss
                };

            // let ingredientss = {
            //     "id":
            // };   
            let url = "http://localhost:8080/createrecipe";  
      
            fetch(url, {
                method: "POST",
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Authorization":'Bearer '+ this.state.jwt
                },
                body: JSON.stringify(createRecipe),
              }).then()
              .then(
                (result) => {
                    alert("Ingredient added");
                    document.getElementById("addname").value="";
                   }
              );
          }
    render(){
        let reci = this.state.recipe;
        if(reci!==""){
       return ( 
            <div className="form-group col-xs-4">
                <label for="addname">Name:</label><input class="form-control" type="text" id="addname"/>
                <label for="addDescription">Description:</label><input class="form-control" type="text" id="addDescription"/>
                <label for="addIngredient">Ingredients:</label><select id="addIngredient" multiple>
                {reci.map((key,i)=>{
                               console.log(i);
                               console.log(key);
                              
                            return  <option value={key.id}>{key.name}</option>
                       })
                    }
                </select>    
                <input type="button" class="btn" value="Added Recipe" onClick={this.addproduct} />
                
            </div>
      );
       }
       else{
           return <p>No Data found Please add ingredient</p>;
       }
    }
}
export default AddRecipe;
