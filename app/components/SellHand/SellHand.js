import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

  class SellHand extends React.Component {

    constructor(props) {
    super(props);

    var data = this.props.data;
    this.state = { coins: data };

    var data_hands = this.props.data_hands;
    this.state = { hands: data_hands };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

    onBtnClickHandler(e) {

  var data = this.props.data;
  var data_hands = this.props.data_hands;

    var item = [{
      idCoin: 'C'
    },{
      idCoin: 'C'
    },{
      idCoin: 'C'
    }
    ];

  window.ee.emit('Coins.add', item);

  window.ee.emit('Hands.del');
        data_hands.pop();
      this.setState({hands: data_hands});

}
      
  render() {
    var data_hands = this.props.data_hands;
    return (
        <button
          className={'add__btn ' + 'SellHand'}
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'>
          <div className='prescription'>
          x {data_hands.length}
          </div>
          Продать одну
          <div className='postscription'>
          за 3 монеты
          </div>
        </button>
    );
  }
};
  
export default SellHand;
