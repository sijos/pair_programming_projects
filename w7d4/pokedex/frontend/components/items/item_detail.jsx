import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>{ this.props.itemDetail.id }</h4>
      </div>
    );
  }
}

export default ItemDetail;
