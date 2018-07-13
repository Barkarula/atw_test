import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

  class BuyCucumber extends React.Component {

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
      idCucumber: 'Cu'
    }];

    window.ee.emit('Coins.del');
      data.pop();
      data.pop();
      data.pop();
      data.pop();
      data.pop();
        data.pop();
      data.pop();
      data.pop();
      data.pop();
      data.pop();
        data.pop();
      data.pop();
      data.pop();
      data.pop();
      data.pop();
        data.pop();
      data.pop();
      data.pop();
      data.pop();
      data.pop();
      this.setState({coins: data});

      console.log('State coin from delete(render_delete):');
      console.log(this.state.coins);

    window.ee.emit('Cucumber.add', item);
    console.log('State hands from add(render_add):' + this.state.data_cucumber);
}
      
  render() {
    return (
        <button
          className={'add__btn ' + 'BuyCucumber'}
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'>
          Купить огуречик
          <div className={'postscription'}>
           за 20 монет
          </div>
        </button>
    );
  }
};
  
export default BuyCucumber;
