import React from 'react';
import ReactDOM from 'react-dom';

import EventEmitter from 'eventemitter3';
//import { Helmet } from 'react-helmet';
//import { Switch, Route } from 'react-router-dom';

import Line from 'components/Line';
import Line_2 from 'components/Line_2';
import Line_3 from 'components/Line_3';
import Line_4 from 'components/Line_4';

import Coins from 'components/Coins';
import AddCoin from 'components/AddCoin';

import BuyHand from 'components/BuyHand';
import BuyLeg from 'components/BuyLeg';
import BuyCucumber from 'components/BuyCucumber';

import SellHand from 'components/SellHand';
import SellLeg from 'components/SellLeg';
import SellCucumber from 'components/SellCucumber';

import ManFactory from 'components/ManFactory';

import BarHand from 'components/BarHand';
import BarHandRight from 'components/BarHandRight';
import BarLeg from 'components/BarLeg';
import BarLegRight from 'components/BarLegRight';
import BarCucumber from 'components/BarCucumber';

//import { my_coins, my_hands ,my_legs ,my_cucumber ,my_mans ,my_kotel_hands ,my_kotel_legs ,my_kotel_cucumber , my_kotel_mans } from './data/data.js';

import my_coins from './data/data.js';
import my_hands from './data/data.js';
import my_legs from './data/data.js';
import my_cucumber from './data/data.js';
import my_mans from './data/data.js';

// Data from 'Bar' from ManFactory section.
import my_kotel_hands from './data/data.js';
import my_kotel_hands_r from './data/data.js';
import my_kotel_legs from './data/data.js';
import my_kotel_legs_r from './data/data.js';
import my_kotel_cucumber from './data/data.js';
import my_kotel_mans from './data/data.js';

window.ee = new EventEmitter();

class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { coins: my_coins,
                   hands: my_hands,
                   legs: my_legs,
                   cucumber: my_cucumber,
                   mans: my_mans,
                   kotel_hands: my_kotel_hands,
                   kotel_hands_r: my_kotel_hands_r,
                   kotel_legs: my_kotel_legs,
                   kotel_legs_r: my_kotel_legs_r,
                   kotel_cucumber: my_kotel_cucumber,
                   kotel_man: my_kotel_mans
     };

    this.com = this.com.bind(this);
  }

    // Слушай событие "Создана монета"
    // если событие произошло, обнови this.state.coins
componentDidMount() {

    let initial_coins = Array.apply(null, Array(19)).map(Object.prototype.valueOf,{idCoin:'C'});
    this.setState({ coins: initial_coins });
    let initial_hands = Array.apply(null, Array(3)).map(Object.prototype.valueOf,{idHand:'H'});
    this.setState({ hands: initial_hands });
    let initial_legs = Array.apply(null, Array(4)).map(Object.prototype.valueOf,{idLeg:'L'});
    this.setState({ legs: initial_legs });
    let initial_cucumber = Array.apply(null, Array(0)).map(Object.prototype.valueOf,{idCucumber:'Cu'});
    this.setState({ cucumber: initial_cucumber });
    let initial_kotel_hands_r = Array.apply(null, Array(1)).map(Object.prototype.valueOf,{id_Kotel_Hand: 'K_C'});
    this.setState({ kotel_hands_r: initial_kotel_hands_r });

    let self = this;
    //let data = this.props.data; // 

    window.ee.addListener('Coins.add', function(item) {
      let nextCoins = item.concat(self.state.coins);
      self.setState({ coins: nextCoins });
    });

    window.ee.addListener('Coins.del', function() {
      let nextDel = self.state.coins;
      self.setState({coins: nextDel});
    });

    // Hands

    window.ee.addListener('Hands.add', function(item) {
      let nextHands = item.concat(self.state.hands);
      self.setState({ hands: nextHands });
    });

    window.ee.addListener('Hands.del', function() {
      let nextDel = self.state.hands;
      self.setState({ hands: nextDel });
    });

    window.ee.addListener('Kotel_Hands.add', function(item) {
      let nextHands = item.concat(self.state.kotel_hands);
      self.setState({ kotel_hands: nextHands });
    });

    window.ee.addListener('Kotel_Hands.del', function() {
      let nextDel = self.state.kotel_hands;
      self.setState({ kotel_hands: nextDel });
    });

    window.ee.addListener('Kotel_Hands_r.add', function(item) {
      let nextHands = item.concat(self.state.kotel_hands_r);
      self.setState({ kotel_hands_r: nextHands });
    });

    window.ee.addListener('Kotel_Hands_r.del', function() {
      let nextDel = self.state.kotel_hands_r;
      self.setState({ kotel_hands_r: nextDel });
    });

    // Legs 

    window.ee.addListener('Legs.add', function(item) {
      let nextLegs = item.concat(self.state.legs);
      self.setState({ legs: nextLegs });
    });

    window.ee.addListener('Legs.del', function() {
      let nextDel = self.state.legs;
      self.setState({ legs: nextDel });
    });

    window.ee.addListener('Kotel_Legs.add', function(item) {
      let nextLegs = item.concat(self.state.kotel_legs);
      self.setState({ kotel_legs: nextLegs });
    });

    window.ee.addListener('Kotel_Legs.del', function() {
      let nextDel = self.state.kotel_legs;
      self.setState({ kotel_legs: nextDel });
    });

    window.ee.addListener('Kotel_Legs_r.add', function(item) {
      let nextLegs = item.concat(self.state.kotel_legs_r);
      self.setState({ kotel_legs_r: nextLegs });
    });

    window.ee.addListener('Kotel_Legs_r.del', function() {
      let nextDel = self.state.kotel_legs_r;
      self.setState({ kotel_legs_r: nextDel });
    });

    // Gherkin

    window.ee.addListener('Cucumber.add', function(item) {
      let nextCucumber = item.concat(self.state.cucumber);
      self.setState({ cucumber: nextCucumber });
    });

    window.ee.addListener('Cucumber.del', function() {
      let nextDel = self.state.cucumber;
      self.setState({ cucumber: nextDel });
    });

    window.ee.addListener('Kotel_Cucumber.add', function(item) {
      let nextGherkin = item.concat(self.state.kotel_cucumber);
      self.setState({ kotel_cucumber: nextGherkin });
    });

    window.ee.addListener('Kotel_Cucumber.del', function() {
      let nextDel = self.state.kotel_cucumber;
      self.setState({ kotel_cucumber: nextDel });
    });

    window.ee.addListener('Mans.add', function(item) {
      let nextMans = item.concat(self.state.mans);
      self.setState({ mans: nextMans });
    });

  }

    // Больше не слушай событие "Создать/удалить ингридиент" 
    componentWillUnmount() {
    window.ee.removeListener('Coins.add');
    window.ee.removeListener('Coins.del');
    window.ee.removeListener('Hands.add');
    window.ee.removeListener('Hands.del');
    window.ee.removeListener('Legs.add');
    window.ee.removeListener('Legs.del');
    window.ee.removeListener('Cucumber.add');
    window.ee.removeListener('Cucumber.del');
    window.ee.removeListener('Kotel_Hands.add');
    window.ee.removeListener('Kotel_Hands.del');
    window.ee.removeListener('Kotel_Hands_r.add');
    window.ee.removeListener('Kotel_Hands_r.del');

    window.ee.removeListener('Kotel_Legs.add');
    window.ee.removeListener('Kotel_Legs.del');
    window.ee.removeListener('Kotel_Legs_r.add');
    window.ee.removeListener('Kotel_Legs_r.del');

    window.ee.removeListener('Kotel_Cucumber.add');
    window.ee.removeListener('Kotel_Cucumber.del');
    window.ee.removeListener('Mans.add');
  
    // ???
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
    <div className="first-screen">

    <Coins data={this.state.coins}/>
    <AddCoin data={this.state.coins}/> 

    <Line />

    <section className={'marketplace '+'view-port'}>

      <h4 className={'marketplace__header'}>Рынок ингрeдиентов</h4>
      <Line_2 />
      <div className={'marketplace__tiles '+'view-port'}>
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
        data_cucumber={this.state.cucumber}
      />
      </div>
     </section>

      <Line_3 />
    
     <section className={'ingridient '+'view-port'}>
     <h4 className={ 'ingridient__header'}>Ингридиенты в мешке</h4>
     <div className={'ingridient__tiles '+'view-port'}>
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
      </section>

      <Line_4 />

    <section className={'production'}>
    <div className={'production__header'}>Производство человечка</ div>
    <ManFactory
           data={this.state.coins}
           data_mans={this.state.mans}
           data_hands={this.state.hands}
           data_legs={this.state.legs}
           data_cucumber={this.state.cucumber}
           data_my_kotel_hands={this.state.kotel_hands}
           data_my_kotel_hands_r={this.state.kotel_hands_r}
           data_my_kotel_legs={this.state.kotel_legs}
           data_my_kotel_legs_r={this.state.kotel_legs_r}
           data_my_kotel_cucumber={this.state.kotel_cucumber}
     />
  <div className='production__bars'>
     <BarHand
        data={this.state.coins}
        data_hands={this.state.hands}
        data_my_kotel_hands={this.state.kotel_hands}
     />
    <BarHandRight
        data={this.state.coins}
        data_hands={this.state.hands}
        data_my_kotel_hands_r={this.state.kotel_hands_r}
     />
     <BarLeg
        data={this.state.coins}
        data_legs={this.state.legs}
        data_my_kotel_legs={this.state.kotel_legs}
     />
     <BarLegRight
        data={this.state.coins}
        data_legs={this.state.legs}
        data_my_kotel_legs_r={this.state.kotel_legs_r}
     />
     <BarCucumber
        data={this.state.coins}
        data_cucumber={this.state.cucumber}
        data_my_kotel_cucumber={this.state.kotel_cucumber}
     />
     </div>
    </section>
  
    </div>
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
