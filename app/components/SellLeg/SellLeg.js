import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';
import Banner from './images/sell_leg.png';

  class SellLeg extends React.Component {

    constructor(props) {
    super(props);

    var data = this.props.data;
    var data_legs = this.props.data_legs;
    this.state = { coins: data,
                    legs: data_legs,
                    btnIsDisabled: false
                     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

    componentDidUpdate(e) {
    var data = this.props.data;
    var data_legs = this.props.data_legs;

    ReactDOM.findDOMNode(this.refs.alert_button).disabled =  (data_legs.length < 1) || (data.length > 95); // true
    if (data_legs.length < 1);
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
    if (data_legs.length < 1) {
      var a = 'ingridient__opacity';
    } else {
      var a = '';
    }

    if (data_legs.length < 1) {
      var b = 'ingridient__red--font';
    } else {
      var b = '';
    }

    var data_legs = this.props.data_legs;
    return (
      <div className={'ingridient__tile'}>

        <div className={'ingridient__top_block_l'}>
            <img src={Banner} className='ingridient__img-leg' alt="react-redux-boilerplate - Logo" />    
            <div className={'ingridient__l '+ b}>
            &times; {data_legs.length}
            </div>
        </div>

        <div className='ingredient_bottom_block_l '>
        <button
          className={'tile__btn-l ' + a}
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
          Продать одну
          </button>
          <div className={'tile__subtitle-l ' + a}>
          за 5 монет
          </div>
        </div>

      </div>
    );
  }
};
  
export default SellLeg;
