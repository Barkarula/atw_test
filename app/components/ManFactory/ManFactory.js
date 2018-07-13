import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

  class ManFactory extends React.Component {

    constructor(props) {
    super(props);

  var data = this.props.data;
  var data_mans = this.props.data_mans;
  var data_hands = this.props.data_hands;
  var data_legs = this.props.data_legs;
  var data_cucumber = this.props.data_cucumber;
    this.state = { mans: data_mans,
                   hands: data_hands,
                   legs: data_legs,
                   cucumber: data_cucumber 
     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

  onBtnClickHandler(e) {
  
  var data = this.props.data;
  var data_mans = this.props.data_mans;
  var data_hands = this.props.data_hands;
  var data_legs = this.props.data_legs;
  var data_cucumber = this.props.data_cucumber;

    var item = [{
      idHitman: 'M'
    }];

    window.ee.emit('Mans.add', item);

    window.ee.emit('Cucumber.del');
        data_cucumber.pop();
      this.setState({ cucumber: data_cucumber });

  window.ee.emit('Hands.del');
        data_hands.pop();
      this.setState({hands: data_hands});


  window.ee.emit('Legs.del');
        data_legs.pop();
      this.setState({legs: data_legs});

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
      this.setState({coins: data});

}


  render() {
    return (
      <form className='add cf'>
        <button
          className='add__btn'
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          value={this.state.coins}
          >
          Сделать человечка
        </button>
        <div className='postscription'>
          за 10 монет
        </div>
      </form>
    );
  }
};
  
export default ManFactory;
