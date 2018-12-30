import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';

  class Line extends React.Component {

  render() {
    return (
      <div className={'line '+'view-port'}>
        <div className='line__tiles'>
          <div className='line__tile'>
            <div className='line__tile-line-l'>
            <p className='line__p'>:)</p>
            </div>
            <div className='line__tile-line-l-sub'>
            <p className='line__p'>:)</p>
            </div>
          </div>
          <div className='line__tile'>
            <div className='line__tile-line-center'>
            <p className='line__p'>:)</p>
            </div>
          </div>
          <div className='line__tile'>
            <div className='line__tile-line-r'>
            <p className='line__p'>:)</p>
            </div>
            <div className='line__tile-line-r-sub'>
            <p className='line__p'>:)</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
  
export default Line;
