import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 50%;
    margin: 0 auto;
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    display: flex;
    margin: 30px;
`;

export const FlexDiv = styled.div`
    flex: 1;
`;

export const FlexThreeDiv = styled.div`
    flex: 3;
`;

export const CardActions = styled.div`
    width: 50px;
`;

export const CardButton = styled.button`
    height: 50%;
    width: 100%;
`;

export const MenuButton = styled.button`
    background-color: #4CAF50;
    border: 1px solid green;
    color: white;
    padding: 10px 24px;
    cursor: pointer;
    width: 90%;
    display: block;
`;

export const SelectButton = styled.button`
    background-color: #FA4444;
    border: 1px solid green;
    color: white;
    padding: 10px 24px;
    cursor: pointer;
    display: block;
`;

export const KeyContainer = styled.div`
    width: 20%;
    margin: 100px auto;
`;