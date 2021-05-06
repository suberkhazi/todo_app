import React, { useState } from 'react';
import './Todo.css';
import { List, Avatar, ImageIcon, ListItemAvatar, ListItem, Modal, ListItemText } from '@material-ui/core';
import db from './firebase';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';




const useStyles = makeStyles((theme) => ({
   paper: {
     position: 'absolute',
     width: 400,
     backgroundColor: theme.palette.background.paper,
     border: '2px solid #000',
     boxShadow: theme.shadows[5],
     padding: theme.spacing(2, 4, 3),
   },
 }));

function Todo(props) {
   const classes = useStyles();
const [open, setOpen] = useState(false);
const [input,setInput] = useState();

const handleOpen = () => {
   setOpen(true);

};
   const updateTodo =() => {
      db.collection('todos').doc(props.todo.id).set({ 
         todo: input 
      }, { merge:true });
      setOpen(false);
   }
   return (
      <>
      <Modal 
  open={open}
  onClose={e => setOpen(false)}>
   <div className={classes.paper}>
      <h1>Edit the Todo</h1>
      <input placeholder= {props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
      <Button variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<EditIcon />} onClick={updateTodo}>Update todo</Button>
   </div>

</Modal>
      <List> 
      <ListItem>
      <ListItemAvatar>

      </ListItemAvatar>
         <ListItemText primary= {props.todo.todo} secondary="nothing"/>
      </ListItem>
      <EditIcon onClick={e=> setOpen(true)}/>

      <DeleteSweepIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
      <Divider  variant="inset" component="li" />
      </List>
      </>
   )
}

export default Todo
