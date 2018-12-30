import React from 'react';
//import './style.scss';
import Banner from './images/coin_.svg';
import Banner2 from '../../../img/coin.svg';
//import Banner2 from './images/bundle.svg#path-effect3887';

import PropTypes from 'prop-types';

  class Article extends React.Component {
    constructor(props) {
    super(props);
    this.state = {}; 
  }

  render() {
    let idCoin = this.props.data.idCoin;

      return (
        <div className='moneybox__article'>
          <p className='moneybox__idcoin'>{idCoin}
          <img src={Banner2} />
          </p>
        </div>
      )
    }
  };

  Article.propTypes = {
    //data: PropTypes.array.isRequired
    data: PropTypes.shape({
      idCoin: PropTypes.string.isRequired,
    })
  };
  
export default Article;
