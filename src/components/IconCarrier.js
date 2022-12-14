import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainId from '../static/data.js';

export const Main =styled.div`
  width: 450px;
  height: 600px;
  border: 2px solid black;
  border-radius: 0 0 25px 25px;
  background-color: antiquewhite;
  text-align: center;
  position: relative;
  z-index: 1;
`;
export const PenIcon = styled.img`
  width: 20px;
  height: 20px;
`
export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
`
function Todo({ todo, index, barTodo, removeTodo}) {
    return (
      <div className="todo">
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => barTodo(index)}><PenIcon src='https://cdn-icons-png.flaticon.com/512/1250/1250925.png'/></Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}><DeleteIcon src='https://cdn-icons-png.flaticon.com/512/3405/3405244.png'/></Button>  
        </div>
      </div>
    );
  }
  
  function FormTodo({ addTodo }) {
    const [value, setValue] = React.useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }




function IconCarrier(){
    const [todos, setTodos] = React.useState([
        { text: mainId[0].sampletodo[0], isDone: false },
        { text: mainId[0].sampletodo[1], isDone: false },
        { text: mainId[0].sampletodo[2], isDone: false }
      ]);
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
      const barTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
  return (
    <><Main>
    <div>
    <div className="app">
      <div className="container">
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                key={index}
                index={index}
                todo={todo}
                barTodo={barTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
      </Main>
    </>
  );
};  
export default IconCarrier;