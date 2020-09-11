import React, { Component } from 'react'
import "./App.scss";
import NavBar from '../src/components/navbar/NavBar';
import TourList from './components/TourList/TourList';

export default class  extends Component {
  render() {
    return (
      <>
        <NavBar/>
        <TourList/>
      </>
    )
  }
}
