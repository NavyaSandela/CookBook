import React from 'react';

const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
   
class Recipies extends React.Component {
    constructor(props){
        super(props);
        this.state={
            "recipe":"",
            "selected":1
          };
    }
    EditRecipe=(reci)=>{
      let recipe = {
        "id":reci,
        "name": document.getElementById(reci+"name").innerHTML,
        "process":document.getElementById(reci+"process").innerHTML
       };
      
       let url = "http://localhost:8080/updateRecipe/"+reci;  
      
       fetch(url, {
           method: "PUT",
           headers: {
             "Content-type": "application/json; charset=UTF-8",
             "Authorization":'Bearer '+ this.state.jwt
           },
           body: JSON.stringify(recipe),
         }).then()
         .then(
           (result) => {
            alert("Recipe updated ");    
          }
         ); 



    }
    deleteRecipe=(reci)=>{
        console.log(reci);
        fetch('http://localhost:8080/deleteActivity/'+reci, {
          method: 'Delete',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then()
        .then(
          (result) => {
           alert("The selected recipe is deleted .");
             this.getAllRecipies();
             }
        );



    }
    getAllRecipies=()=>{
        fetch('http://localhost:8080/getallrecipies', {
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
        this.getAllRecipies();
          }
    render(){
        const columns = [
            {
              name: 'Id #',
              selector: 'id',
              sortable: true,
            },
            {
              name: 'name',
              selector: 'name',
              sortable: true,
              right: true,
            },
            {
              name: 'process',
              selector: 'process',
              sortable: true,
            }
          ];
      
            if(this.state.recipe !== ""){
                let reci = this.state.recipe;
                let htt = "";
                console.log(this.state.recipe);
                console.log(reci);
                return(
                  <div>
                   <table class="table table-striped table-responsive-md  table-dark table-striped table-hover">
                       <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>Process</th>
                            <th>Ingredients</th>
                       </tr>    
                       {
                           reci.map((key,i)=>{
                               console.log(i);
                               console.log(key);
                            return <tr id={reci[i].recipe.id+"tr"}><td id={reci[i].recipe.id+"id"}>{reci[i].recipe.id}</td><td id={reci[i].recipe.id+"name"} contenteditable='true'>{reci[i].recipe.name}</td><td id={reci[i].recipe.id+"process"} contenteditable='true'>{reci[i].recipe.process}</td><td>;
                           {
                                 reci[i].ingredients.map((key,x)=>{
                                      return <span>{key.name+","}</span>;
                                 })
                           }
                           </td>
                           <td>
                              <input type="button" value="Delete" className="btn btn-danger" onClick={() => this.deleteRecipe(reci[i].recipe.id)} />
                           </td>  
                           <td>
                              <input type="button" value="Edit" className="btn btn-warning" onClick={() => this.EditRecipe(reci[i].recipe.id)} />
                           </td>  
                           </tr>
                       })
                    }
                   </table>     
                   

                   </div>
                );
            }
            else{
                return <p>No data found </p>
            }
    }
}
export default Recipies;
