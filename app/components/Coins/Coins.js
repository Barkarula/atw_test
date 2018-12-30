import React from 'react';
//import './style.scss';
import PropTypes from 'prop-types';
import Article from 'components/Article';
//import CssLine from 'components/CssLine';


class Coins extends React.Component {
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
      <div key={index} className="moneybox__block">
        <Article data={item} />
      </div>
    )
  })
  } else {
    coinTemplate = <p className='moneybox__no_money'> К сожалению у вас нет монет </p>
  };

if (data.length > 0) {

function n2w(n, w) {
  n %= 100;
  if (n > 19) { n %= 10; }
  
  switch (n) {
    case 1:
      return w[0];
      
    case 2:
    case 3: 
    case 4:
      return w[1];
      
    default:
      return w[2];
  }
}
  
var gol = [' монета', ' монеты', ' монет'],
    out = [];
  
var i = data.length;

var check = n2w(i,gol);
var monet = check;
// <p className={'inline__block ' + 'space'}>{check}</p>
  
}; //else { console.log('Coin rule complete');}

      return (
      <div className={'moneybox '+'view-port'}>

      <h1 className={'moneybox__title-factory'}>&laquo;Фабрика человечков&raquo;</h1>

      <h4 className={'moneybox__title-moneybox'}>
      Копилка
      </h4>
        <div className='moneybox__coins'>
          <div className='moneybox__items'>
         {coinTemplate}
          </div>
        <strong 
          className={'moneybox__coin-count ' + (data.length > 0 ? '':'moneybox__none') }>
           {data.length}{monet}
        </strong>    
        </div>

        </div>
      );
     }
    };

  Coins.propTypes = {
    data: PropTypes.array.isRequired
  };

    
export default Coins;
