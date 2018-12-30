import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';

  class BarLeg extends React.Component {

    constructor(props) {
    super(props);

  var data = this.props.data;
  var data_legs = this.props.data_legs;
  var data_my_kotel_legs = this.props.data_my_kotel_hands;
    this.state = { legs: data_legs,
                   kotel_legs : data_my_kotel_legs,
                   btnIsDisabled: false,
                   btnIsActive: true
                   //btnIsActive_sex: false,
                   //btnIsActive_color: false
     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
    //this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate(e) {
    var data_legs = this.props.data_legs;
    var data_my_kotel_legs = this.props.data_my_kotel_legs;

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = (data_legs.length < 1) && (data_my_kotel_legs.length < 1) ;
  }

  onBtnClickHandler(e) {

  var data = this.props.data;
  var data_legs = this.props.data_legs;
  var data_my_kotel_legs = this.props.data_my_kotel_legs;

    var item = [{
      id_Kotel_leg: 'K_L'
    }];

   if ( this.state.btnIsActive == true ) {
        window.ee.emit('Kotel_Legs.add', item);
        window.ee.emit('Legs.del');
        data_legs.pop();
      this.setState({legs: data_legs});
      this.setState({btnIsActive: false});
    } else { 
      window.ee.emit('Legs.add', item);

      window.ee.emit('Kotel_Legs.del');
      data_my_kotel_legs.pop();
      this.setState({kotel_legs: data_my_kotel_legs});

      this.setState({btnIsActive: true});
      };
}

  render() {

    //var data_hands = this.props.data_hands;
    //alert(data_hands.length);

var data_legs = this.props.data_legs;
    if (data_legs.length > 0 ) {
      var c = 'production__barleg-clickable ';
    } else {
      var c = '';
    }

var data_my_kotel_legs = this.props.data_my_kotel_legs;
    if (data_my_kotel_legs.length > 0 ) {
      var d = 'production__barleg-clicked ';
    } else {
      var d = '';
    }

    return (
        <button
          type='button'
          className={'production__barleg__init '+ c + d}
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
        </button>
    );
  }
};
  
export default BarLeg;
