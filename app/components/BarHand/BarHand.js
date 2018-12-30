import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';

  class BarHand extends React.Component {

    constructor(props) {
    super(props);

  var data = this.props.data;
  var data_hands = this.props.data_hands;
  var data_my_kotel_hands = this.props.data_my_kotel_hands;

  var btnIsActive = this.props.btnIsActive;
    this.state = { hands: data_hands,
                   kotel_hands : data_my_kotel_hands,
                   btnIsDisabled: false,
                   // active значит прозрачная доступная для добавления
                   btnIsActive: true
                   //btnIsActive_sex: false,
                   //btnIsActive_color: false
     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
    this.com = this.com.bind(this);
  }

  componentDidUpdate(e) {
    var data_hands = this.props.data_hands;
    var data_my_kotel_hands = this.props.data_my_kotel_hands;


    ReactDOM.findDOMNode(this.refs.alert_button).disabled = (data_hands.length < 1) && (data_my_kotel_hands.length < 1) ;
  }

  onBtnClickHandler(e) {

  // lol?
  var data = this.props.data;
  var data_hands = this.props.data_hands;
  var data_my_kotel_hands = this.props.data_my_kotel_hands;

    var item = [{
      id_Kotel_Hand: 'K_C'
    }];


   if ( this.state.btnIsActive == true ) {
      window.ee.emit('Kotel_Hands.add', item);
      window.ee.emit('Hands.del');
        data_hands.pop();
      this.setState({hands: data_hands});
      this.setState({btnIsActive: false});
    } else { 
      window.ee.emit('Hands.add', item);

      window.ee.emit('Kotel_Hands.del');
      data_my_kotel_hands.pop();
      this.setState({kotel_hands: data_my_kotel_hands});

      this.setState({btnIsActive: true});
      };
}


com() {
    console.log('State of BarHand: ');
    console.log(this.state);
    console.log('!!!!');
  }

  render() {

    this.com();

var data_hands = this.props.data_hands;
    if (data_hands.length > 0 ) {
      var c = 'production__barhand-clickable ';
    } else {
      var c = '';
    }

var data_my_kotel_hands = this.props.data_my_kotel_hands;
    if (data_my_kotel_hands.length > 0 ) {
      var d = 'production__barhand-clicked ';
    } else {
      var d = '';
    }

    return (
        <button
          type='button'
          className={'production__barhand-init '+ c + d}
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
        </button>
    );
  }
};
  
export default BarHand;
