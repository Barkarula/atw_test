import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import Article from 'components/Article';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var data = this.props.data;
    var coinTemplate;

  if (data.length > 0) {
    var coinTemplate = data.map(function(item, index) {
      return(
      <div key={index} className="newz">
        <Article data={item} />
      </div>
    )
  })
  } else {
    coinTemplate = <p> К сожалению у вас нет монет </p>
  };

      return (
      <div>
      Копилка
        <div className="news">
          <div className='klim'>
         {coinTemplate}
          </div>
        <strong 
          className={'news__count ' + (data.length > 0 ? '':'none') }>
           {data.length} Монет
        </strong>    
        </div>
        </div>
      );
     }
    };

  News.propTypes = {
    data: PropTypes.array.isRequired
  };

    
export default News;
