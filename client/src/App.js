import React from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';



export default function App() {
  return (
      <div>
        <Header/>
        <div>
            <Posts/>
            <Form/>
        </div>
      </div>
  
  )
}
