import React,{useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';

export const Form = ({editFormVisibility, editTodo, cancelUpdate}) => {

  // dispatch function to dispatch an action
  const dispatch = useDispatch();

  // todo value state for normal add todo form
  const [todoValue, setTodoValue]=useState('');

  // state for if someone changes the (to edit) value in update form
  const [editValue, setEditValue]=useState('');

  // useEffect is to show the (to edit) value in update form
  useEffect(()=>{
    setEditValue(editTodo.todo);
  },[editTodo])

  // normal add todo submit
  const handleSubmit=(e)=>{
      e.preventDefault();
      let date = new Date();
      console.log(date);
      let time = date.getTime();
      let todoObj={
          id: time,
          todo: todoValue,
          completed: false
      }
      console.log(todoObj);
      setTodoValue('');
    dispatch(addTodo(todoObj))
  }

  // update form submit
  const editSubmit = (e) =>{
    e.preventDefault();
    let editedObj={
      id: editTodo.id,
      todo: editValue,
      completed: false
    }
    console.log(editedObj);
    dispatch(handleEditSubmit(editedObj))
  }

  return (
    <>
      {editFormVisibility===false?(
        <form className='form-group custom-form' onSubmit={handleSubmit} >
          <center><label style={{marginBottom:20}}>Add your todo-items</label></center>
          
          <div className='input-and-btn' >
            
              <input type="text" className='form-control' style={{marginRight:20}}required
              value={todoValue} onChange={(e)=>setTodoValue(e.target.value)}/>
              <br></br>
              
              <button type="submit" className='btn btn-primary' style={{ padding: 30 }} >ADD LISTS</button>
            
          </div>
        </form>
      ):(
        <form className='form-group custom-form' onSubmit={editSubmit} >
          <label>Update your todo-items</label>
          <div className='input-and-btn'>
              <input type="text" className='form-control' required
              value={editValue||""} onChange={(e)=>setEditValue(e.target.value)} style={{marginRight:20}}/>
              console.log(target);
              <br></br>
              <button type="submit" className='btn btn-info btn-md'>UPDATE</button>
          </div>
          <button  type="button" className='btn btn-primary btn-md' style={{marginTop:20}}
          onClick={cancelUpdate}>BACK</button>
        </form>
      )}
    </>
  )
}