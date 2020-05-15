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
   
class Ingredients extends React.Component {
    constructor(props){
        super(props);
        this.state={
            "recipe":""
          };
    }
    deleteIng=(ingId)=>{
      console.log(ingId);
      fetch('http://localhost:8080/deleteIngredient/'+ingId, {
        method: 'Delete',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then()
      .then(
        (result) => {
         alert("The selected Ingredient is deleted .");
           this.getAllRecipies();
           }
      );

    }
    getAllRecipies=()=>{
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
                   <table class="table table-striped table-responsive-md  table-dark table-striped table-hover">
                       <tr>
                           <th>Id</th>
                           <th>Name</th>
                        </tr>   
                       {
                           reci.map((key,i)=>{
                               console.log(i);
                               console.log(key);
                            return <tr><td>{key.id}</td><td>{key.name}</td><td><input type="button" value="Delete" className="btn btn-danger" onClick={() => this.deleteIng(key.id)} /></td></tr>
                       })
                    }
                   </table>     
                );
            }
            else{
                return <p>No data found </p>
            }
    }
}
export default Ingredients;
