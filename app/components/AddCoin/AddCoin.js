import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

  class AddCoin extends React.Component {

    constructor(props) {
    super(props);

    var data = this.props.data;
    this.state = { coins: data };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
  }

  onBtnClickHandler(e) {
//e.preventDefault();
  
  var data = this.props.data;
  var author = this.props.data.author;
    console.log("data from addCoin (data): ");
    console.log(data);

    var item = [{
      idCoin: 'C'
    }];

    window.ee.emit('Coins.add', item);
      //this.setState({news: this.state.data.push({author: 'k'})})
      //alert(this.state.myValue);
      //myValue.pop();
      //news.pop();
      console.log('State coin from add(render_add):');
      console.log(this.state.data);
}

  render() {
    return (
      <form className='add cf'>
        <button
          className='add_coin'
          onClick={this.onBtnClickHandler}
          ref='alert_button'
          value={this.state.coins}
          >
          Добавить одну монету
        </button>
      </form>
    );
  }
};
  
export default AddCoin;
