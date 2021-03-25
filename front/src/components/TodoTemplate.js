import React from 'react';
import './TodoTemplate.scss';

/**
 * TodoTemplate
 * 화면을 가운데에 정렬시켜 주며, 앱 타이틀을 보여줍니다.
 * @returns 
 */
const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};


export default TodoTemplate;