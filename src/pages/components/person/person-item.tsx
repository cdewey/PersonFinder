import React from 'react';
import { Person } from '../../../data/person.interface';
import './person-item.css';

interface PersonProps {
  person : Person
}

function PersonItem(props : PersonProps) {

  return (
    <div className="item-container">
      <img src={props.person.avatar} width="96.83" height="96" alt="avatar"/>
      <div className="text-container">
        <div className="name-text">{props.person.name}</div>
        <p className="description-text">{props.person.description}</p>
      </div>
      
    </div>
  );
}

export default PersonItem;