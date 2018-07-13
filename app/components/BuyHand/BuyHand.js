import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

  class BuyHand extends React.Component {

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
      idHand: 'C'
    }];

    window.ee.emit('Coins.del');
      data.pop();
      data.pop();
      data.pop();
      data.pop();
      data.pop();
      this.setState({coins: data});

      console.log('State coin from delete(render_delete):');
      console.log(this.state.coins);

    window.ee.emit('Hands.add', item);
    console.log('State hands from add(render_add):' + this.state.data_hands);
}
      
  render() {
    return (
        <button 
          className={'add__btn ' + 'BuyHand' }
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'>
          Купить ручку
          <div className = 'postscription'>
           за 5 монет
          </div>
        </button>
    );
  }
};
  
export default BuyHand;
