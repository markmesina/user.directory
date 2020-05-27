import React, { Component } from 'react';
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>User Directory</h1>
        <p>Click on pointer to sort by name or use the search box to narrow your results.</p>
      </div>
    )
  }
}