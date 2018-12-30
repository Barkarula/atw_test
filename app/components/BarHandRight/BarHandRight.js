import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';

  class BarHandRight extends React.Component {

    constructor(props) {
    super(props);

  var data = this.props.data;
  var data_hands = this.props.data_hands;
  var data_my_kotel_hands_r = this.props.data_my_kotel_hands_r;
    this.state = { hands: data_hands,
                   kotel_hands_r : data_my_kotel_hands_r,
                   btnIsDisabled: false,
                   btnIsActive: false
                   //btnIsActive_sex: false,
                   //btnIsActive_color: false
     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

  componentDidUpdate(e) {
    var data_hands = this.props.data_hands;
    var data_my_kotel_hands_r = this.props.data_my_kotel_hands_r;

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = (data_hands.length < 1) && (data_my_kotel_hands_r.length < 1) ;
  }

  onBtnClickHandler(e) {

  var data = this.props.data;
  var data_hands = this.props.data_hands;
  var data_my_kotel_hands_r = this.props.data_my_kotel_hands_r;

    var item = [{
      id_Kotel_Hand: 'K_C'
    }];

   if ( this.state.btnIsActive == true ) {
        window.ee.emit('Kotel_Hands_r.add', item);
        window.ee.emit('Hands.del');
        data_hands.pop();
      this.setState({hands: data_hands});
      this.setState({btnIsActive: false});
    } else { 
      window.ee.emit('Hands.add', item);

      window.ee.emit('Kotel_Hands_r.del');
      data_my_kotel_hands_r.pop();
      this.setState({kotel_hands_r: data_my_kotel_hands_r});

      this.setState({btnIsActive: true});
      };
}

  render() {

var data_hands = this.props.data_hands;
    if (data_hands.length > 0 ) {
      var c = 'production__barhand-clickable-r ';
    } else {
      var c = '';
    }

var data_my_kotel_hands_r = this.props.data_my_kotel_hands_r;
    if (data_my_kotel_hands_r.length > 0 ) {
      var d = 'production__barhand-clicked-r ';
    } else {
      var d = '';
    }


    return (
        <button
          type='button'
          className={'production__barhand-init-r '+ c + d }
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
        </button>
    );
  }
};
  
export default BarHandRight;
