import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';
import Banner from './images/sell_hand.png';
//import Banner from '../../images/sprite.png';

  class SellHand extends React.Component {

    constructor(props) {
    super(props);

    var data = this.props.data;
    var data_hands = this.props.data_hands;
    this.state = { coins: data,
                    hands: data_hands,
                    btnIsDisabled: false

     };
    
    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

    componentDidUpdate(e) {
    var data = this.props.data;
    var data_hands = this.props.data_hands;
   
    ReactDOM.findDOMNode(this.refs.alert_button).disabled = (data_hands.length < 1) || (data.length > 97 );
    if (data_hands.length < 1) /*console.log('100 money in state')*/;
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
    var data_hands = this.props.data_hands;
    if (data_hands.length < 1) {
      var a = 'ingridient__opacity';
    } else {
      var a = '';
    }

    if (data_hands.length < 1) {
      var b = 'ingridient__red--font';
    } else {
      var b = '';
    }

    return (
      <div className={'ingridient__tile'}>

      <div className={'ingridient__top_block_h'}>
          <img src={Banner} className='ingridient__img-hand' alt="react-redux-boilerplate - Logo" />
          <div className={'ingridient__h '+ 'red_font ' + b}>
          &times; {data_hands.length}
          </div>
      </div>

      <div className='ingredient_bottom_block_h '>
        <button
          className={'tile__btn-h '+ a}
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
          Продать одну
          </button>
          <div className={'tile__subtitle-h '+ a}>
          за 3 монеты
          </div>
        </div>
      </div>
    );
  }
};
  
export default SellHand;
