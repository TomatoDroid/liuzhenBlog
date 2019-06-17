'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less'
import logo from './image/logo.png'

class Search extends React.Component{
    render(){
        return <div className="search-text">
            search test webpack-dev-server
            <img src={ logo } />
        </div>;
    }
}
ReactDOM.render(
    <Search />,
    document.getElementById('root')
);