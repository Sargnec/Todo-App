import React from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';

const Todos = ({todos, deleteTodo}) => {

const todoList = todos.length ? (
    todos.map(todo => {
        return(
            <ListGroupItem key={todo.id}>
                <span onClick={() => {deleteTodo(todo.id)} }>{todo.content}</span>
            </ListGroupItem>
        )
    })
) : (
    <ListGroupItem className="col text-center">Bütün yapılacakları yaptın!</ListGroupItem>
)
    return (
        <ListGroup className="todos">
            {todoList}        
        </ListGroup>
    )
}

export default Todos;