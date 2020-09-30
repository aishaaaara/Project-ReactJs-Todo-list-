import React from 'react';
import './App.css';
import List from './components/list';
import { library } from '@fortawesome/fontawesome-svg-core'//Agar dapat menggunakan Fontawesome
import { faTrash } from '@fortawesome/free-solid-svg-icons'//Mengimpor salah satu icon 
import { faCheckSquare,fa } from '@fortawesome/free-solid-svg-icons'//Mengimpor salah satu icon 
import Navbar from 'react-bootstrap/Navbar'
import {Checkbox} from '@material-ui/core';

library.add(faTrash);
library.add(faCheckSquare)

class App extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);

  }
  //menginputkan
  handleInput(e){
    this.setState({
      currentItem:{
        text : e.target.value,
        key:Date.now()
      }
    })
  }
  //Untuk Menambahkan Text
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      console.log(newItem);
      if(newItem.text!==""){
        const items=  [...this.state.items, newItem];
        this.setState({
          items:items,
          currentItem:{
            text:"",
            key:""
          }
        })
      }
    }
  //Mengahapus 
deleteItem(key){
  const filteredItems= this.state.items.filter(item =>
    item.key!==key);
    this.setState({
      items: filteredItems
    })
}
//agar bisa mengedit text
setUpdate(text,key){
  console.log("items:"+this.state.items);
  const items = this.state.items;
  items.map(item=>{      
    if(item.key===key){
      console.log(item.key +"    "+key)
      item.text= text;
    }
  })
  this.setState({
    items: items
  })
  
 
}
render(){  
      return (  
        <div className="Satu">
         <center>  
           <h2 className="tul">T o D o L i s t
           </h2>
          <header >
              <form id="todo" onSubmit={this.addItem} > 
                 <input type="text" placeholder="Enter Your List" 
                 value={this.state.currentItem.text} 
                 onChange={this.handleInput}/>
             <button type="submit">Add</button>
              </form>
              <p>{this.state.items.text}</p>
        </header>
        <List items = {this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
          </center>
          </div>
        
      );  
    }  
  }  
  export default App;