import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

  class BuyLeg extends React.Component {

    constructor(props) {
    super(props);

    var data = this.props.data;
    this.state = { coins: data };

    var data_legs = this.props.data_legs;
    this.state = { hands: data_legs };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

    onBtnClickHandler(e) {

  var data = this.props.data;
  var data_legs = this.props.data_legs;

    var item = [{
      idLegs: 'C'
    }];

    window.ee.emit('Coins.del');
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

    window.ee.emit('Legs.add', item);
    console.log('State hands from add(render_add):' + this.state.data_legs);
}
      
  render() {
    return (
        <button
          className={'add__btn ' + 'BuyLeg'}
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'>
          Купить ножку
          <div className={'postscription'}>
            за 7 монет
          </div>
        </button>
    );
  }
};
  
export default BuyLeg;
