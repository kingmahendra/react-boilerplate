import React, { Component } from 'react'
import Posts from './Post'
import PostForm from './PostForm';

export default class App extends Component{
    render() {
        return(
            <div>
              <PostForm/>
              <hr/>
              <Posts/>
            </div>
        )
            
    }
}