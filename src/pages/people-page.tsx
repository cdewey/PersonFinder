import { Grid } from '@material-ui/core';
import React, {useState} from 'react';
import SearchBar from './components/search-bar/search-bar';
import people from '../data/people.json'
import './people-page.css';
import PersonItem from './components/person/person-item';
// import { useState } from 'react';

function PeoplePage() {
  const allPeople : JSX.Element[] = people.map((person) =>
    <PersonItem person={person} key={person.id}></PersonItem>
  );

  const [peopleItems , setPeopleItems] = useState<JSX.Element[]>(allPeople);


  function filterPeople(filter : string){
    if(filter===""){
        setPeopleItems(allPeople);
        return;
    }
    let newPeopleItems : JSX.Element[] = [];
    for(let person of people){
        if(person.name.indexOf(filter) > -1){
            newPeopleItems.push(<PersonItem person={person} key={person.id}></PersonItem>)
        }
    }
    setPeopleItems(newPeopleItems);
  }

  function clearSearch(){
    setPeopleItems(allPeople);
  }

  return (
    <div className="page-container">
    <Grid container direction="column" spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={4} className="">
            <div className="title">The Person Finder</div>
            <p>If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!</p>
            <SearchBar onChange={(filter : string) => filterPeople(filter)} clear={() => clearSearch()}></SearchBar>
            {peopleItems}
        </Grid>
    </Grid>
    </div>
  );
}

export default PeoplePage;