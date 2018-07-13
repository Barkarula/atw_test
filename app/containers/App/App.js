import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
//import { Helmet } from 'react-helmet';
//import { Switch, Route } from 'react-router-dom';
import News from 'components/News';
import AddCoin from 'components/AddCoin';

import BuyHand from 'components/BuyHand';
import BuyLeg from 'components/BuyLeg';
import BuyCucumber from 'components/BuyCucumber';

import SellHand from 'components/SellHand';
import SellLeg from 'components/SellLeg';
import SellCucumber from 'components/SellCucumber';

import ManFactory from 'components/ManFactory';
import EventEmitter from 'eventemitter3';

import my_coins from './data/data.js';
import my_hands from './data/data.js';
import my_legs from './data/data.js';
import my_cucumber from './data/data.js';
import my_mans from './data/data.js';

window.ee = new EventEmitter();

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { coins: my_coins,
                   hands: my_hands,
                   legs: my_legs,
                   cucumber: my_cucumber,
                   mans: my_mans
     };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.com = this.com.bind(this);
  }

    // Слушай событие "Создана новость"
    // если событие произошло, обнови this.state.news
componentDidMount() {

    var initial_coins = Array.apply(null, Array(19)).map(Object.prototype.valueOf,{idCoin:"C"});
    this.setState({ coins: initial_coins });
    var initial_hands = Array.apply(null, Array(3)).map(Object.prototype.valueOf,{idHand:"H"});
    this.setState({ hands: initial_hands });
    var initial_legs = Array.apply(null, Array(4)).map(Object.prototype.valueOf,{idLeg:"L"});
    this.setState({ legs: initial_legs });
    var initial_cucumber = Array.apply(null, Array(0)).map(Object.prototype.valueOf,{idCucumber:"Cu"});
    this.setState({ cucumber: initial_cucumber });

    var self = this;
    var data = this.props.data; // ?

    window.ee.addListener('Coins.add', function(item) {
      var nextCoins = item.concat(self.state.coins);
      self.setState({ coins: nextCoins });
    });

    window.ee.addListener('Coins.del', function() {
      var nextDel = self.state.coins;
      self.setState({coins: nextDel});

      console.log('w.ee.deleteCoin: ');
      console.log(self.state.coins);
      //var nextDel = self.state.news.pop();
      //self.setState({news: nextDel});
    });

    window.ee.addListener('Hands.add', function(item) {
      var nextHands = item.concat(self.state.hands);
      self.setState({ hands: nextHands });
    });

    window.ee.addListener('Hands.del', function() {
      var nextDel = self.state.hands;
      self.setState({ hands: nextDel });
    });

    window.ee.addListener('Legs.add', function(item) {
      var nextLegs = item.concat(self.state.legs);
      self.setState({ legs: nextLegs });
    });

    window.ee.addListener('Legs.del', function() {
      var nextDel = self.state.legs;
      self.setState({ legs: nextDel });
    });

    window.ee.addListener('Cucumber.add', function(item) {
      var nextCucumber = item.concat(self.state.cucumber);
      self.setState({ cucumber: nextCucumber });
    });

    window.ee.addListener('Cucumber.del', function() {
      var nextDel = self.state.cucumber;
      self.setState({ cucumber: nextDel });
    });

    window.ee.addListener('Mans.add', function(item) {
      var nextMans = item.concat(self.state.mans);
      self.setState({ mans: nextMans });
    });

  }

    // Больше не слушай событие "Создана новость" 
    componentWillUnmount() {
    window.ee.removeListener('Coins.add');
    window.ee.removeListener('Coins.del');
    window.ee.removeListener('Hands.add');
  }

  com() {
    console.log('State of app: ');
    console.log(this.state);
    console.log('end render');
    console.log('----------------------------');
  }


  render() {
    this.com();
    return (
  <div className="app-wrapper">
    <strong>Фабрика человечков</ strong>
    <News data={this.state.coins} />
    <AddCoin data={this.state.coins}/> {/* добавили вывод компонента */}
    <strong>Рынок ингридиентов</ strong>
    <div>
      <BuyHand 
        data={this.state.coins}
        data_hand={this.state.hands}
      /> 
      <BuyLeg
        data={this.state.coins}
        data_leg={this.state.legs}
      />
      <BuyCucumber
        data={this.state.coins}
        data_leg={this.state.cucumber}
      />
     </div>
     <strong>Ингридиенты в мешке</ strong>
     <div>
      <SellHand
        data={this.state.coins}
        data_hands={this.state.hands}
      />
        <SellLeg
        data={this.state.coins}
        data_legs={this.state.legs}
      />
      <SellCucumber
        data={this.state.coins}
        data_cucumber={this.state.cucumber}
      />
      </div>
     <strong>Производство человечка</ strong>
     <ManFactory
           data={this.state.coins}
           data_mans={this.state.mans}
           data_hands={this.state.hands}
           data_legs={this.state.legs}
           data_cucumber={this.state.cucumber}
     />
  </div>
);
}
};
//console.log('money: ' + Object.keys(my_coins));
//my_news.pop();
//console.log('money: ' + Object.keys(my_news));

export default App;

/*
<Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
    >
      <meta name="description" content="A React.js Boilerplate application" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  */
