import React from 'react';


import {AppState} from '../store/Store';
import {ActionType} from '../types/actionType';
import {Item} from '../types/itemType';

import '../App.css';

const Main: React.FC = () => {


  const {state, changeState} = React.useContext(AppState);

  const removeItem = (name: string) => {
    changeState({type: ActionType.Remove, item: name});
  };
  const toggleItem = (name: string) => {
    changeState({type: ActionType.Toggle, item: name});
  };

  const addItem = (name: string) => {
    changeState({type: ActionType.Add, item: name});
  };

  const onClick = () => {
    let inputText = prompt('Введите');
    inputText !== null ? addItem(inputText) : alert('Ошибка!');
  };

  return (
    <div>

      {state.items.map((item: Item) => (
        <div className="item">
          <input
            type="checkbox"
            className="switch"
            onChange={() => {
              toggleItem(item.name);
            }}
            checked={item.isComplete}
          />
          <h1>
            {item.name}
          </h1>

          <button
            onClick={() => {
              removeItem(item.name);
            }}
            className="removeButton">
            <h1 className="removeButtonContent" >X</h1>
          </button>
        </div>
      ))
      }

      <button className="addButton" onClick={onClick}>
        <h1 className="addButtonContent">+</h1>
      </button>
    </div >
  );
};

export default Main;
