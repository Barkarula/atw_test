import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';

  class AddCoin extends React.Component {

    constructor(props) {
    super(props);

    let data = this.props.data;
    this.state = { coins: data,
                    btnIsDisabled: false
     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

  componentDidUpdate(e) {

    let data = this.props.data;

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = data.length > 99;
    if (data.length > 99) console.log('100 money in state');
  }

  onBtnClickHandler(e) {
//e.preventDefault();

  let data = this.props.data;

    let item = [{
      idCoin: 'C'
    }];

    window.ee.emit('Coins.add', item);
}

  render() {
    return (
      <form className={'moneybox__add '+'view-port'}>
        <button
          type='button'
          className='moneybox__add-btn'
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          disabled={this.state.btnIsDisabled}
          >
          Добавить одну монету
        </button>
      </form>
    );
  }
};
  
export default AddCoin;
