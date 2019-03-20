import React, { Component } from 'react';
import { CommandMainContainer, ActionsCards, PetitionsNumber, PetitionsTitle } from './common.component';

class Command extends Component {
  render() {
    return (
      <CommandMainContainer>
          <PetitionsNumber>40</PetitionsNumber>
          <PetitionsTitle>Petitions</PetitionsTitle>
          <ActionsCards>
              <span>20 </span><i className="fas fa-door-closed"></i>
              <span>|</span>
              <span> 3 </span><i className="fas fa-male"></i>
          </ActionsCards>
      </CommandMainContainer>
    );
  }
}

export default Command;
