import React, { Component } from 'react';
import './MainForm.css';
import FeatureOptions from '../FeatureOptions/FeatureOptions';

class MainForm extends Component {
  render() {
    return (
      <form className='main__form'>
        <h2>Customize your laptop</h2>
        <FeatureOptions handleFeatureUpdate={this.props.handleFeatureUpdate} selected={this.props.selected} features={this.props.features}/>
      </form>
    );
  }
}

export default MainForm;
