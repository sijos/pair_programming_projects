import React from 'react';

const Header = ({ tabData, tabItUp }) => (
  <ul>
    {
      tabData.map((tab, idx) => (
        <h1 key={idx} onClick={tabItUp.bind(null, idx)}> {tab.title} </h1>
      ))
    }
  </ul>
);

export default Header;
