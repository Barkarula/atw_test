import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import PropTypes from 'prop-types';

  class TestTest extends React.Component {



  render() {
    return (
      <form className='grid'>
        <div className='grid-itm'>
          <div className='grid-cont'>
            Добавить одну монету
          </div>
          <button>hi</button>
          <div className='grid-cont'>
            klim
          </div>
        </div>
        <div className='check'>
          <div className='grid-cont'>
            Добавить одну монету
          </div>
          <div className='grid-cont'>
            klim
          </div>
        </div>
        <div className='grid-itm'>
          <div className='grid-cont'>
            Добавить одну монету
          </div>
          <div className='grid-cont'>
            klim
          </div>
        </div>
      </form>
    );
  }
};
  
export default TestTest;
