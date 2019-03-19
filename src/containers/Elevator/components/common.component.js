import styled from 'styled-components'


export const ElevatorBox = styled.div`
    background: #282c34;
    box-sizing: border-box;
    margin-left: 42.5%;
    bottom: 2vh;
    height: 2vh;
    position: relative;
    z-index: 2;
    width: 15%;
`

export const StyledElevatorLine = styled.div`
    z-index: 1;
    background: #8d8d8e;
    margin-right: 49%;
    margin-left: 49%;
    height: calc(2vh - 1px);
`

export const LineContainer = styled.div`
    width: 20%;
    margin-left: 40%;
`

export const ElevatorFloor = styled.div`
    z-index: 1;
    border-bottom: 1px solid #8d8d8e;
`

export const ElevatorMainContainer = styled.div`
    display: flex;
    margin-top: 10px;
`

export const ElevatorSecContainer = styled.div`
    flex: 1
`

export const Number = styled.p`
    color: white;
    font-size: 30px;
    font-weight: 200;
    background: #437f8a;
    margin-left: 20%;
    margin-right: 20%;
`