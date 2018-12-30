import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';

  class BarCucumber extends React.Component {

    constructor(props) {
    super(props);

  var data = this.props.data;
  var data_cucumber = this.props.data_cucumber;
  var data_my_kotel_cucumber = this.props.data_my_kotel_cucumber;
    this.state = { cucumber: data_cucumber,
                   kotel_cucumber : data_my_kotel_cucumber,
                   btnIsDisabled: false,
                   btnIsActive: true
                   //btnIsActive_sex: false,
                   //btnIsActive_color: false
     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

  componentDidUpdate(e) {
    var data_cucumber = this.props.data_cucumber;
    var data_my_kotel_cucumber = this.props.data_my_kotel_cucumber;

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = (data_cucumber.length < 1) && (data_my_kotel_cucumber.length < 1) ;
  }

  onBtnClickHandler(e) {

  var data = this.props.data;
  var data_cucumber = this.props.data_cucumber;
  var data_my_kotel_cucumber = this.props.data_my_kotel_cucumber;

    var item = [{
      idCucumber: 'K_C'
    }];

   if ( this.state.btnIsActive == true ) {
        window.ee.emit('Kotel_Cucumber.add', item);
        window.ee.emit('Cucumber.del');
        data_cucumber.pop();
      this.setState({cucumber: data_cucumber});
      this.setState({btnIsActive: false});
    } else { 
      window.ee.emit('Cucumber.add', item);

      window.ee.emit('Kotel_Cucumber.del');
      data_my_kotel_cucumber.pop();
      this.setState({kotel_cucumber: data_my_kotel_cucumber});

      this.setState({btnIsActive: true});
      };
}

  render() {

var data_cucumber = this.props.data_cucumber;
    if (data_cucumber.length > 0 ) {
      var c = 'production__gherkin-clickable ';
    } else {
      var c = '';
    }

var data_my_kotel_cucumber = this.props.data_my_kotel_cucumber;
    if (data_my_kotel_cucumber.length > 0 ) {
      var d = 'production__gherkin-clicked ';
    } else {
      var d = '';
    }

    return (
        <button
          type='button'
          className={'production__gherkin-init '+ c + d}
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
        </button>
    );
  }
};
  
export default BarCucumber;
