import React from "react";
import { Provider } from "react-redux";

import styles from './App.css';

import { CounterContainer, ButtonsContainer } from "@containers";
import { store } from "@store";



export const App = () => {
  
    return(
        <Provider store={store}>
            <div className={styles.App}>
                <CounterContainer />
                <div className={styles.App__buttons}>
                    <ButtonsContainer />
                </div>
            </div>
        </Provider>
        
    )
}