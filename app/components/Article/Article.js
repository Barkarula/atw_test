import React from 'react';
import './style.scss';

import PropTypes from 'prop-types';

  class Article extends React.Component {
    constructor(props) {
    super(props);
    this.state = {}; 
  }

  render() {
    var idCoin = this.props.data.idCoin;

      return (
        <div className="article">
          <p className="news__author">{idCoin}</p>
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
