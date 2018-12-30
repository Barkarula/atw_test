import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';
import Banner from './images/sell_gherkin.png';

  class SellCucumber extends React.Component {

    constructor(props) {
    super(props);

    var data = this.props.data;
    var data_cucumber = this.props.data_cucumber;
    this.state = { coins: data,
                    cucumber: data_cucumber,
                    btnIsDisabled: false
     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

  componentDidUpdate(e) {
    var data = this.props.data;
    var data_cucumber = this.props.data_cucumber;

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = (data_cucumber.length < 1) || (data.length > 85);//100
    if (data_cucumber.length < 1);
  }

    onBtnClickHandler(e) {

  var data = this.props.data;
  var data_cucumber = this.props.data_cucumber;

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
    },{
      idCoin: 'C'
    },{
      idCoin: 'C'
    },{
      idCoin: 'C'
    },{
      idCoin: 'C'
    },{
      idCoin: 'C'
    },{
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

  window.ee.emit('Cucumber.del');
        data_cucumber.pop();
      this.setState({ cucumber: data_cucumber });

}
      
  render() {

    var data_cucumber = this.props.data_cucumber;
    if (data_cucumber.length < 1) {
      var a = 'ingridient__opacity';
    } else {
      var a = '';
    }

    if (data_cucumber.length < 1) {
      var b = 'ingridient__red--font';
    } else {
      var b = '';
    }

    return (
      <div className={'ingridient__tile'}>

      <div className={'ingridient__top_block_g'}>
      <img src={Banner} className='ingridient__img-gherkin' alt="react-redux-boilerplate - Logo" />    
          <div className={'ingridient__g ' + b}>
          &times; {data_cucumber.length}
          </div>
      </div>

         <div className={'ingredient_bottom_block_g '}>
        <button
          className={'tile__btn-g '+ a}
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
          Продать один
           </button>
          <div className={'tile__subtitle-g '+ a}>
          за 15 монет
          </div>
        </div>
      </div>
    );
  }
};
  
export default SellCucumber
