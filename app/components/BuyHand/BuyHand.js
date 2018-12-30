import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';

  class BuyHand extends React.Component {

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

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = data.length < 5;//100
    if (data.length < 5) /*console.log('100 money in state')*/;
  }

    onBtnClickHandler(e) {

  var data = this.props.data;
  var data_hands = this.props.data_hands;

    var item = [{
      idHand: 'H'
    }];

    window.ee.emit('Coins.del');
      data.pop();
      data.pop();
      data.pop();
      data.pop();
      data.pop();
      this.setState({coins: data});

      //console.log('State coin from delete(render_delete):');
      //console.log(this.state.coins); 

      window.ee.emit('Hands.add', item);
      //console.log('State hands from add(render_add):' + this.state.data_hands);
}

      
  render() {

    var data = this.props.data;
    if (data.length < 5) {
      var a = 'marketplace__opacity';
    } else {
      var a = '';
    }
    return (
     <div className={'marketplace__tile'}>
        <button 
          type='button'
          className={'tile__btn ' + a}
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
          Купить ручку
        </button>
        <div className = {'tile__subtitle '+ a}>
           за 5 монет
          </div>
    </div>
    );
  }
};
  
export default BuyHand;
