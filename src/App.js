import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';
import PageTitle from './PageTitle/PageTitle';
import PageBody from './PageBody/PageBody';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <PageTitle />
        <PageBody features={this.props.features} />
      </div>
    );
  }
}
export default App;
