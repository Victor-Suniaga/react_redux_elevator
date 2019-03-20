import React, { Component } from 'react';
import { CommandMainContainer, ActionsCards, PetitionsNumber, PetitionsTitle } from './common.component';

class Command extends Component {
  render() {
    const amountPetitions = this.props.petitions.length;
    const listItems = this.props.petitions.map(elem => {
      return (
        <ActionsCards>
              <span>{elem.floor} </span><i className="fas fa-door-closed"></i>
              <span>|</span>
              <span> {elem.people} </span><i className="fas fa-male"></i>
        </ActionsCards>
      )
    })
    return (
      <CommandMainContainer>
          <PetitionsNumber>{amountPetitions}</PetitionsNumber>
          <PetitionsTitle>Petitions</PetitionsTitle>
          {listItems}
      </CommandMainContainer>
    );
  }
}

export default Command;
