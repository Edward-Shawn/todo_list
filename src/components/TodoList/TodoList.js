import React from "react";
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox,
    MdModeEditOutline,
} from 'react-icons/md';
import cn from 'classnames';

const TodoList = ({todos}) => {

    return (
        <ul className={"todoList"}>
            {todos.map((todo) => {
                return(
                    <li className={'todoListItem'}>
                        <div className={cn('checkbox', { checked: todo.checked })}>
                            {todo.checked ?  <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                            <div className="text">{todo.text}</div>
                        </div>
                        <div className={'edit'}>
                            <MdModeEditOutline />
                        </div>
                        <div className={'remove'}>
                            <MdRemoveCircleOutline />
                        </div>
                    </li>
                )
            }
            )}
        </ul>
    )
}

export default TodoList