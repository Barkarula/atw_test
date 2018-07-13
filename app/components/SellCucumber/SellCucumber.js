import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

  class SellCucumber extends React.Component {

    constructor(props) {
    super(props);

    var data = this.props.data;
    this.state = { coins: data };

    var data_cucumber = this.props.data_cucumber;
    this.state = { cucumber: data_cucumber };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
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
    return (
        <button
          className={'add__btn ' + 'SellCucumber'}
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'>
          <div className='prescription'>
          x {data_cucumber.length}
          </div>
          Продать один
          <div className='postscription'>
          за 15 монет
          </div>
        </button>
    );
  }
};
  
export default SellCucumber
