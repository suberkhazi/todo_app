import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
 import Todo from './Todo'
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function App() {
const [todos, setTodos] = useState(['']);
const [input, setInput] = useState('');

//fetxh

useEffect(() => {
  //this fires when we click the button
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  
    setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
  })
}, [])

const addTodo = (event) => {
//this will provoke when we hit the button
event.preventDefault();//stops refreshing whole page
db.collection('todos').add({
  todo: input,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})

setTodos([...todos,input]);
setInput('');//this clears input feild after submiting..
}
  return (
    <div className="App">
    <h1>This is todo list</h1>
    <form>
      <FormControl>
  <InputLabel>Write a Todo</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)} />
</FormControl>

      <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary" startIcon={<AddCircleIcon />}>
 Add Todo
</Button>
   
    </form>
    
    <ul>
      {todos.map(todo => (
      <Todo todo={todo}/>
      //  <li>{todo}</li>
      ))}

    </ul>




    </div>
  );
}

export default App;
