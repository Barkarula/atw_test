import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';


  class BuyCucumber extends React.Component {

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

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = data.length < 20;//100
    if (data.length < 20) ;
    //console.log('data_hand :');
    //console.log(data_hand);
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

      window.ee.emit('Cucumber.add', item);

      //console.log('State coin from delete(render_delete):');
      //console.log(this.state.coins);

      //window.ee.emit('Cucumber.add', item);
      //console.log('State hands from add(render_add):' + this.state.data_cucumber);
}

/*
onSetFire() {
      this.setState({isBurning: true});
    }

    onSnuffOut() {
      this.setState({isBurning: false});
    }
*/
      
  render() {

    var data = this.props.data;
    if (data.length < 20) {
      var a = 'marketplace__opacity';
    } else {
      var a = '';
    }

    return (
   <div className={'marketplace__tile'}>
        
        <button
          className={'tile__btn-cuc ' + a}
           onClick={this.onBtnClickHandler}
          value={this.state.coins}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
          Купить огуречик
          </button>
          <div className = {'tile__subtitle-cuc ' + a}>
           за 20 монет
          </div>
        </div>
    );
  }
};
  
export default BuyCucumber;
