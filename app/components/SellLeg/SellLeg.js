import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

  class SellLeg extends React.Component {

    constructor(props) {
    super(props);

    var data = this.props.data;
    this.state = { coins: data };

    var data_legs = this.props.data_legs;
    this.state = { legs: data_legs };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

    onBtnClickHandler(e) {

  var data = this.props.data;
  var data_legs = this.props.data_legs;

    var item = [{
      idCoin: 'C'
    },{
      idCoin: 'C'
    },{
      idCoin: 'C'
    },{
      idCoin: 'C'
    },{
      idCoin: 'C'
    }];

  window.ee.emit('Coins.add', item);

  window.ee.emit('Legs.del');
        data_legs.pop();
      this.setState({legs: data_legs});

}
      
  render() {
    var data_legs = this.props.data_legs;
    return (
        <button
          className={'add__btn ' + 'SellLeg'}
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'>
          <div className='prescription'>
          x {data_legs.length}
          </div>
          Продать один
          <div className='postscription'>
          за 5 монет
          </div>
        </button>
    );
  }
};
  
export default SellLeg;
