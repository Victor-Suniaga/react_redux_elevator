import styled from 'styled-components'


export const CommandMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 140px;
    height: 80vh;
    overflow: scroll;
    padding-left: 20px;
    padding-right: 20px;

`

export const ActionsCards = styled.div`
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    border-radius: 4px;
    min-height: 45px;
    font-size: 21px;
    padding-top: 15px;
    margin-bottom: 15px;
    font-weight: 200;
    padding-left: 20px;
`

export const PetitionsNumber = styled.p`
    font-size: 40px;
    margin: 0px;
    text-align: center;
    font-weight: 800;
`

export const PetitionsTitle = styled.p`
    text-align: center;
    margin: 5px 0px 15px;
`