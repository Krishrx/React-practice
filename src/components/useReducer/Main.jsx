import React, { useReducer, useRef, useState } from 'react'
import Button from '../../shared/Button'

function Main() {

    // const reducer = (state,action) => {
    //     switch (action.type) {
    //         case 'add':
    //             return { count: state.count + 1 + action.payload };
    //         case 'sub':
    //             return { count: state.count - 1 };
    //         default:
    //             return state;
                
    //     }
    // }

    // const [state, dispatch] = useReducer(reducer, {count:0});

    // const handleAdd = () => {
    //     dispatch({type:'add',payload:4})
    // }

    // const handleSub = () => {
    //     dispatch({type:'sub'})
    // }

    const inputRef = useRef();

    const reducer = (todos,action) => {
        switch (action.type) {
            case 'add':
                return (
                    [...todos, {
                        'id': new Date().getTime(),
                        'task': action.payload,
                        'completed': false
                    }]   
                )
            case 'toggle':
                return todos.map((task) => {
                    if (task.id === action.id) {
                        return { ...task, completed: !task.completed };
                    }
                    return task;
                });
            default:
                return todos;
        }
        
    }

    const [todos, dispatch] = useReducer(reducer, []);

    const [task, setTask] = useState('');

    const handleTask = (e) => {
        setTask(e.target.value);
    }
    const handleSubmit = () => {
        dispatch({ type: 'add', payload: task });
        console.log(todos);
        setTask('');
        inputRef.current.value = '';
    }
    const toggleTask = (e) => {
        const closestSpan = e.target.closest('li').querySelector('span');
        dispatch({type:'toggle',id:parseInt(closestSpan.textContent)})
    }

  return (
    // <div>
    //       <Button btnLabelText={'+'} fn={handleAdd}/>
    //       {state.count}
    //       <Button btnLabelText={'-'} fn={handleSub}/>
      // </div>
      <div className='flex flex-col justify-center items-center m-5'>
          <input type="text" ref={inputRef} className='outline p-2 rounded outline-teal-300' placeholder={'Add task...'} onChange={handleTask}/>
          <Button btnLabelText={'Add'} customStyle={'bg-teal-300 m-4'} fn={handleSubmit} />
          <div>
              <ul className='list-disc'>
                  {todos.map((todo,index) => {
                      return (<li className={`${todo.completed?'opacity-25':'opacity-100'} cursor-pointer`} onClick={toggleTask} key={index}><span className='hidden'>{todo.id}</span>{todo.task}</li>)
                })}
              </ul>
          </div>
      </div>
  )
}

export default Main