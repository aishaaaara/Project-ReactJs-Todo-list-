import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../list.css';
import Form from 'react-bootstrap/Form'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function list(props) {
    const items = props.items;
    const listItems = items.map(item =>
   {
 return <div className="tam" key={item.key}>
        <p>
        <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/> 
        <span>
                <FormControlLabel
                  value="top"
                  control={<Checkbox color="secondary" />}
                  style={{marginLeft:'-150px' , color:'white'}}/>  
                <FontAwesomeIcon className="faicons" onClick={() => {
                    props.deleteItem(item.key)
                }} icon="trash"/>
        </span>
     </p>
   </div>})
return <div>

        {listItems}
        </div>;
  }

export default list;