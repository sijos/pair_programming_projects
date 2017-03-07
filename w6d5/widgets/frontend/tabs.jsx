import React from 'react';
import Header from './header';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.tabItUp = this.tabItUp.bind(this);
  }

  tabItUp(idx, e) {
    e.preventDefault();
    this.setState({index: idx});
    let name;
    if (idx === 0) {
      name = 'tabby';
    } else if (idx === 1) {
      name = 'tabtastic';
    } else {
      name = 'tabouli';
    }
    document.getElementsByTagName('article')[0].className = name;
    console.log(this.state);
  }

  render() {
    return (
      <div className="tabular">
        <Header tabData={this.props.tabData} tabItUp={this.tabItUp}/>
        <article>
          {this.props.tabData[this.state.index].content}
        </article>
      </div>
    );
  }

}


export default Tabs;
