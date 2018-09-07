import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import {Route} from 'react-router-dom'

import "./App.css";
import Project from './Components/Project'

const URL = "http://localhost:9000/projectModel";

const StyledContainer = styled.div `
  margin: 0 auto;
  font-size: 28px;
  font-weight: bold;
`
class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios
      .get(URL)
      .then(({data}) => {
        console.log({data})
        this.setState({
        data
        })
      })
      .catch(err => {
       console.log(err)
      });
  }

  render() {
    return (
    
    <StyledContainer>
    <Route exact path="/project" component={Project} />
    {this.state.data.map((pm) => {
      <Project name={pm.name} discription={pm.discription} completed={pm.completed} />
      "yo"
    })}


    </StyledContainer>
    )
  }
}

export default App;
