import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

/**
 * TodoList
 * 여러개의 TodoListItem 컴포넌트로 변환하여 보여줍니다.
 * @returns 
 */
const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;