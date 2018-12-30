import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';

  class BuyLeg extends React.Component {

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

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = data.length < 7;//100
    if (data.length < 7) ;
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

    window.ee.emit('Legs.add', item);
}
      
  render() {

    var data = this.props.data;
    if (data.length < 7) {
      var a = 'marketplace__opacity';
    } else {
      var a = '';
    }

    return (
    <div className={'marketplace__tile'}>
        <button
          className={'tile__btn-leg '+ a}
          onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
          Купить ножку
        </button>
          <div className = {'tile__subtitle-leg ' + a}>
            за 7 монет
          </div>
      </div>
    );
  }
};
  
export default BuyLeg;
