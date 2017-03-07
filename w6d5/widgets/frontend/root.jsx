import React from 'react';
import Tabs from './tabs';

const Root = () => (
  <Tabs tabData={tabData}/>
);


const tabData = [
  {title: 'one', content: 'tabby'},
  {title: 'two', content: 'tabtastic'},
  {title: 'three', content: 'tabouli'}
];

export default Root;
