import React from 'react';
import '../App.css'
import { AccountBox } from "../Components/accountBox";
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image:url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    // background-image:url(https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1130&q=80);
    background-size:cover;
    padding-bottom:2%;
  `;


const Authentication = () => {


    return (
        <AppContainer >
                                <AccountBox />
                            </AppContainer>
    )
}

export default Authentication;