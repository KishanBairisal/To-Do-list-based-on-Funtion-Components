import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css';

function App() {
  const [name, setName] = useState('');
  const [indexA, setIndexA] = useState(null);
  const [toDo, setToDo] = useState([]);

  const onChange = (event) => {
    setName(event.currentTarget.value)
  }

  const onSubmit = (name) => {
    if (name.length > 0) {
      setToDo([...toDo, name])
      setName('');
    }
  }

  const onEditSave = (index) => {
    if (name.length > 0) {
      toDo.splice(index, 0, name);

      const newToDos = toDo.filter((value, key) => {
        return index + 1 !== key
      }
      );
      setToDo(newToDos);
      setName('');
      setIndexA(null);
    }
  }

  const onDelete = (index) => {
    const newToDo = toDo.filter((value, key) => {
      return index !== key
    })
    setToDo(newToDo)
  }

  const onEdit = (index) => {
    const edit = toDo.find((value, key) => {
      return index === key
    })
    setIndexA(index)
    setName(edit)
  }

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <div style={{ textAlign: "center" }}><h1><b>Todo List</b></h1>
        <TextField id="outlined-basic" label="Add a Todo..." variant="outlined" color='error' error
           value={name} onChange={onChange} />
        <Button style={{ backgroundColor: "lightpink", size: "normal" }} onClick={() => onSubmit(name)}>
          Add
        </Button>
        <hr />
      </div>
     <div>
     <ol>
          <div style={{ textAlign: "Left", marginLeft:"1100px", marginRight:"100px" }}>
            {toDo.map((toDo, index) =>
              <li key={index}>
                {toDo}
                <Button style={{ backgroundColor: "Yellow", marginLeft: "10px", marginRight: "10px", size: "normal" }} onClick={() => onEdit(index)}>
                  Edit
                </Button>
                <Button style={{ backgroundColor: "Red", marginRight: "10px", size: "normal" }} onClick={()=>onDelete(index)}>
                  Delete
                </Button>
                <Button style={{ backgroundColor: "lightgreen", size: "normal" }} onClick={() => onEditSave(index)}>
                  Save
                </Button>
              </li>)}
          </div>
        </ol>
     </div>
    </div>
  )

}
export default App;