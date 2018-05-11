import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';


import Posts from './components/Post'
import PostForm from './components/PostForm';


export default class App extends Component{
    render() {
        return(
            <Provider store={store}>
                <div>
                    <PostForm/>
                    <hr/>
                    <Posts/>
                </div>
            </Provider>
        )
            
    }
}