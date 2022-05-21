import React from "react";

export default function Todo(props) {
    const name = props.name;
    return (
        <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-{props.id}" type="checkbox" defaultChecked={props.completed} />
          <label className="todo-label" htmlFor="todo-0">
            {name}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">{name}</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">{name}</span>
          </button>
        </div>
      </li>
    );
}