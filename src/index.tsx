import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import State from "./Redux/State";
import {rerenderEntireThree} from './render';


rerenderEntireThree(State)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
