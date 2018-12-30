import React from 'react';
import ReactDOM from 'react-dom';
//import './style.scss';
import PropTypes from 'prop-types';
import Banner4 from './images/kotel.svg';
// Male
import Banner5 from './images/p_man_white_0.png';
import Banner6 from './images/p_man_white.png';
import Banner7 from './images/p_man_black _0.png';
import Banner8 from './images/p_man_black.png';
// Female
import Banner9 from './images/p_woman_white_0.png';
import Banner10 from './images/p_woman_white.png';
import Banner11 from './images/p_woman_black_0.png';
import Banner12 from './images/p_woman_black.png';
//

  class ManFactory extends React.Component {

    constructor(props) {
    super(props);

  var data = this.props.data;
  var data_mans = this.props.data_mans;
  var data_hands = this.props.data_hands;
  var data_legs = this.props.data_legs;
  var data_cucumber = this.props.data_cucumber;

    // Data: kotel
  var data_my_kotel_hands = this.props.data_my_kotel_hands;
  var data_my_kotel_hands_r = this.props.data_my_kotel_hands_r;
  var data_my_kotel_legs = this.props.data_my_kotel_legs;
  var data_my_kotel_legs_r = this.props.data_my_kotel_legs_r;
  var data_my_kotel_cucumber = this.props.data_my_kotel_cucumber;



  //var btnIsActive = this.props.btnIsActive;
    this.state = { mans: data_mans,
                   hands: data_hands,
                   legs: data_legs,
                   cucumber: data_cucumber,
                   kotel_hands : data_my_kotel_hands,
                   kotel_hands_r : data_my_kotel_hands_r,
                   kotel_legs: data_my_kotel_legs,
                   kotel_legs_r: data_my_kotel_legs_r,
                   kotel_cucumber: data_my_kotel_cucumber,
                   btnIsDisabled: false,
                   // Если активная значит male
                   btnIsActive_gender: true,
                   // Если активная значит white
                   btnIsActive_color: true
     };

    this.onBtnClickHandler = this.onBtnClickHandler.bind(this);
    this.onBtnClickHandler_2 = this.onBtnClickHandler_2.bind(this);
    this.onBtnClickHandler_3 = this.onBtnClickHandler_3.bind(this);
  }

componentDidMount() {
    let self = this;

    //window.ee.addListener('BtnHandActive.true', function(item) {
    //  self.setState({ btnIsActive: true });
    //});

    window.ee.addListener('BtnHandActive.true', function() {
      //let nextDel = self.state.coins;
      self.setState({btnIsActive: true});
    });
  }
  // Больше не слушай событие "Создать/удалить ингридиент" 
    componentWillUnmount() {
    window.ee.removeListener('BtnHandActive.true');
}



    componentDidUpdate(e) {
    var data = this.props.data;
    var data_my_kotel_hands = this.props.data_my_kotel_hands;
    var data_my_kotel_hands_r = this.props.data_my_kotel_hands_r;
    var data_my_kotel_legs = this.props.data_my_kotel_legs;
    var data_my_kotel_legs_r = this.props.data_my_kotel_legs_r;
    var data_my_kotel_cucumber = this.props.data_my_kotel_cucumber;

    //ReactDOM.findDOMNode(this.refs.alert_button).disabled = 
    //(data_hands.length < 2) ||(data_legs.length < 2) ||(data_cucumber.length < 1) || (data.length < 10) || (data.length > 90);
    //if (data_cucumber.length < 1) ;

    ReactDOM.findDOMNode(this.refs.alert_button).disabled = 
    (data_my_kotel_hands.length < 1) || (data_my_kotel_hands_r.length < 1) ||
    (data_my_kotel_legs.length < 1) || (data_my_kotel_legs_r.length < 1) ||
    (data_my_kotel_cucumber.length < 1) || (data.length < 10) || (data.length > 90);
  }

  onBtnClickHandler(e) {
  
    var data = this.props.data;
    var data_my_kotel_hands = this.props.data_my_kotel_hands;
    var data_my_kotel_hands_r = this.props.data_my_kotel_hands_r;
    var data_my_kotel_legs = this.props.data_my_kotel_legs;
    var data_my_kotel_legs_r = this.props.data_my_kotel_legs_r;
    var data_my_kotel_cucumber = this.props.data_my_kotel_cucumber;
    var g = this.state.btnIsActive_gender;
    var c = this.state.btnIsActive_color;

    var btnIsActive = this.state.btnIsActive;

    var item = [{
      idman: 'M',
      gender: g ,
      color: c,
    }];

	window.ee.addListener('BtnHandActive.true');
      this.setState({ btnIsActive: btnIsActive });

    window.ee.emit('Mans.add', item);
 
    window.ee.emit('Kotel_Cucumber.del');
        data_my_kotel_cucumber.pop();
      this.setState({ kotel_cucumber: data_my_kotel_cucumber });

    window.ee.emit('Kotel_Hands.del');
        data_my_kotel_hands.pop();
        data_my_kotel_hands.pop();
      this.setState({ kotel_hands: data_my_kotel_hands});

    window.ee.emit('Kotel_Hands_r.del');
        data_my_kotel_hands_r.pop();
        data_my_kotel_hands_r.pop();
      this.setState({ kotel_hands_r: data_my_kotel_hands_r});


    window.ee.emit('Kotel_Legs.del');
        data_my_kotel_legs.pop();
        data_my_kotel_legs.pop();
      this.setState({ kotel_legs: data_my_kotel_legs});

    window.ee.emit('Kotel_Legs_r.del');
        data_my_kotel_legs_r.pop();
        data_my_kotel_legs_r.pop();
      this.setState({ kotel_legs_r: data_my_kotel_legs_r});




     window.ee.emit('Coins.del');
      data.pop();
      data.pop();
      data.pop();
      data.pop();
      data.pop();
        data.pop();
      data.pop();
      data.pop();
      data.pop();
      data.pop();
      this.setState({coins: data});
}

  onBtnClickHandler_2(e) {

  var data = this.props.data;
  var btnIsActive_gender = this.props.btnIsActive_gender;

    if ( this.state.btnIsActive_gender == true ) {
      this.setState({btnIsActive_gender: false});
    } else {
      this.setState({btnIsActive_gender: true});
    }
  }

  onBtnClickHandler_3(e) {

  var data = this.props.data;
  var btnIsActive_color = this.props.btnIsActive_color;

    if ( this.state.btnIsActive_color == true ) {
      this.setState({btnIsActive_color: false});
    } else {
      this.setState({btnIsActive_color: true});
    }
  }

  render() {

    // Add opacity to button
    var data = this.props.data;
    var data_my_kotel_hands = this.props.data_my_kotel_hands;
    var data_my_kotel_hands_r = this.props.data_my_kotel_hands_r;
    var data_my_kotel_legs = this.props.data_my_kotel_legs;
    var data_my_kotel_legs_r = this.props.data_my_kotel_legs_r;
    var data_my_kotel_cucumber = this.props.data_my_kotel_cucumber;

 var n = (data_my_kotel_hands.length < 1) || (data_my_kotel_hands_r.length < 1) ||
    (data_my_kotel_legs.length < 1) || (data_my_kotel_legs_r.length < 1) ||
    (data_my_kotel_cucumber.length < 1) || (data.length < 10) || (data.length > 90);
    var a = '';
    if ( n == true ) {
      var a = 'production__opacity';
  } else {
    var a = '';
  }

    // Add Acive or disAcitve for ingredients bar(kotel);
    var btnIsActive_gender = this.props.btnIsActive_gender;
    if ( this.state.btnIsActive_gender > 0 ) {
      var b = 'production__genderactive ';
    } else {
      var b = '';
    }

    if ( this.state.btnIsActive_gender < 1 ) {
      var c ='production__genderactive  ';
    } else {
      var c = '';
    }

    var btnIsActive_color = this.props.btnIsActive_color;
    if ( this.state.btnIsActive_color > 0 ) {
      var e = 'production__genderactive  ';
    } else {
      var e = '';
    }

    if ( this.state.btnIsActive_color < 1 ) {
      var d = 'production__genderactive  ';
    } else {
      var d = '';
    }

    // add Man choser
    var x ;

/*
    if ( this.state.btnIsActive_gender > 0 ) {
      if ( this.state.btnIsActive_color > 0 ) {
          x = Banner6;
      } else { x = Banner8 };
    } else {  
      if ( this.state.btnIsActive_color > 0 ) {
        x = Banner10;
      } else {
        x = Banner12;
      }
    }*/

    var check_rule_2 = (data_my_kotel_hands.length < 1) || (data_my_kotel_hands_r.length < 1) ||
    (data_my_kotel_legs.length < 1) || (data_my_kotel_legs_r.length < 1) ||
    (data_my_kotel_cucumber.length < 1) || (data.length < 10) || (data.length > 90);

    if ( this.state.btnIsActive_gender > 0 ) {
      if ( this.state.btnIsActive_color > 0 ) {
          x = Banner7;
          if ( !check_rule_2) {
            x = Banner6
          }
      } else { 
        x = Banner7;  if ( !check_rule_2) {
            x = Banner8
          }
      };
    } else {  
      if ( this.state.btnIsActive_color > 0 ) {
        x = Banner11;
        if ( !check_rule_2) {
            x = Banner10
          }
      } else {
        x = Banner11
          if ( !check_rule_2) {
            x = Banner12
          }
        ;
      }
    }

    // TOOLTIP GENERATION

  var toolTemplate = <p> Не хватает ручек, ножек, огуречика и денег </p>

  var k_hands = data_my_kotel_hands.length + data_my_kotel_hands_r.length;
  //console.log(k_hands);

function n2w1(n, w) {
  
  switch (n) {
    case 0:
      return w[0]; 
    case 1:
      return w[1]; 
    case 2: 
      return w[2];
    default:
      return w[3];
  }
}
  
var gol = ['ручек', 'ручки', ''],
    out = [];
  
var i = k_hands;

var toolTemplate = n2w1(i,gol);
var ruchka = <p className={'production__tooltip-inline ' + 'space'}>{toolTemplate}</p>

// legs rule

  var k_legs = data_my_kotel_legs.length + data_my_kotel_legs_r.length;

  function n2w2(n, w) {
  
  switch (n) {
    case 0:
      return w[0]; 
    case 1:
      return w[1]; 
    case 2: 
      return w[2];
    default:
      return w[3];
  }
}
  
var gol = ['ножек', 'ножки', ''],
    out = [];
  
var i = k_legs;

var toolTemplate_2 = n2w2(i,gol);
var nojka = <p className={'production__tooltip-inline ' + 'space'}>{toolTemplate_2}</p>

// rule cucumber

  var k_cucumber = data_my_kotel_cucumber.length;

  function n2w3(n, w) {
  
  switch (n) {
    case 0:
      return w[0]; 
    case 1:
      return w[1]; 
    default:
      return w[1];
  }
}
  
var gol = ['огуречика', ''],
    out = [];
  
var i = k_cucumber;

var toolTemplate_3 = n2w3(i,gol);
var ogurets = <p className={'production__tooltip-inline ' + 'space'}>{toolTemplate_3}</p>

// rule monet

  var k_money = data.length;

  function n2w4(n, w) {
  
  switch (n) {
    case 0:
      return w[0];
    case 1:
      return w[0];
    case 2:
      return w[0]; 
    case 3:
      return w[0];
    case 4:
      return w[0];
    case 5:
      return w[0];
    case 6:
      return w[0];
    case 7:
      return w[0];
    case 8:
      return w[0];
    case 9:
      return w[0];
    case 10:
      return w[1]; 
    default:
      return w[1];
  }
}
  
var gol = ['денег', ''],
    out = [];
  
var i = k_money;

var toolTemplate_4 = n2w4(i,gol);
var deneg = <p className={'production__tooltip-inline ' + 'space'}>{toolTemplate_4}</p> 

var my_array = new Array();

// Удаляем элементы, которые не появляются.
if ( k_hands < 2) {
  my_array.push(k_hands);
}

if ( k_legs < 2) {
  my_array.push( k_legs);
}

if ( k_cucumber < 1) { //k_cucumber < 1
  my_array.push(k_cucumber);
};


if ( k_money < 10 ) { // k_money < 10
  my_array.push(k_money);
}


if ((my_array.length > 1)&&(my_array.length - 1) > 0) {
  if ( k_money > 10) {
  my_array.splice( (my_array.length - 1) , 0,'и');
  }
}

if ((my_array.length > 2)&&((my_array.length - 3) > 0)) {
  my_array.splice( (my_array.length - 3), 0, ',');
}

if ((my_array.length > 3)&&((my_array.length - 5) > 0)) {
  my_array.splice( (my_array.length - 5), 0, ',');
}
  
  var x0 = my_array.length - 2;
  var y0 = my_array.length - 4;
  var z0 = my_array.length - 6;
  // const xo = my_array.length - 2;
  //let yo = my_array.length - 4;
  //let zo = my_array.length - 6;
  var o = new Array();
  var p = new Array();
  var r = new Array();

  o = my_array[x0]; //5, 3 ,1
  p = my_array[y0];
  r = my_array[z0];

const doubled = my_array.map((o) => o);
const doubled_2 = my_array.map((p) => p);
const doubled_3 = my_array.map((r) => r);
//console.log(doubled);
//console.log('doubled!');

  var data = this.props.data;
  //var index = my_array[i];
  //var index = (doubled[i]+ doubled[i])* 2+1 ;
  //var index = (my_array[i]+ 1+my_array[i])* 2+1 ;
  var index = data[i];

  //console.log(my_array);
  //console.log('my_array length');;
  //console.log(o);
  //console.log(p);
  ///console.log(r);

   
var number = o;

 const zap1 = <li key={index} className={'production__tooltip-inline ' + 'space'}>{p}</li>
 const zap2 = <li key={index} className={'production__tooltip-inline ' + 'space'}>{r}</li>
 const zap3 = <li key={index} className={'production__tooltip-inline ' + 'space'}>{o}</li>



//var str = my_array.join('~');
//console.log(str);

// Здесь проверка на последнее условие.
  var check_rule = (data_my_kotel_hands.length < 1) || (data_my_kotel_hands_r.length < 1) ||
    (data_my_kotel_legs.length < 1) || (data_my_kotel_legs_r.length < 1) ||
    (data_my_kotel_cucumber.length < 1) || (data.length < 10) || (data.length > 90);

if (check_rule) {
  var absent = <p className={'production__tooltip-inline ' + 'space '}>Не хватает</p>
} else {
  var absent = <p className={'production__tooltip-inline ' + 'space '}>Всего хватает</p>
}

  var dot = <p className={'production__tooltip-inline ' + 'space '}>.</p>

  var tooltip = <div className={'production__tooltip-inline ' + 'space '}>
    {absent} {ruchka} {zap1} {nojka} {zap2} {ogurets} {zap3} {deneg} {dot}
  </div>


    return (
      <div className={'production__tiles'}>

      <div className={'production__tile-checkbar'}>

        <div className={'production__checkbar-top'}>
          <div className={'production__checkbar-gender'}>
            Пол:
          </div>

          <button 
            className={'production__gender-btn-1 '+ b }
            onClick={this.onBtnClickHandler_2} >
            мужчина
          </button>
          <button 
            className={'production__gender-btn-2 '+ c }
            onClick={this.onBtnClickHandler_2}>
            женщина
          </button>
        </div>

        <div className={'production__checkbar-bot'} >
          <div 
          className={'production__checkbar-color'}>
            Цвет:
          </div>
          <button 
            className={'production__color-btn-1 '+ e}
            onClick={this.onBtnClickHandler_3} >
            белый 
          </button>
          <button 
            className={'production__color-btn-2 '+ d}
            onClick={this.onBtnClickHandler_3}>
            черный
          </button>
        </div>   

      </div>

      <div className='production__tile-middle'>

          <div className='production__tooltip'>
            <div className='production__tooltiptext'>
              {tooltip}
            </div>
          </div>
  
        <div className='production__kotel-block'>
          <div className='production__strelka-1'>
          &#8594;
          </div>
          <div className='production__kotel'>
            <img src={Banner4} className='img_fac_6' />    
          </div>
          <div className='production__strelka-2'>
          &#8594;
          </div>
        </div>

        <button
           className={'production__create-btn '+ a}
           onClick={this.onBtnClickHandler}
           ref='alert_button'
           disabled={this.state.btnIsDisabled}
           >
           Сделать человечка
        </button>
            <div className={'production__create-btn-sub '+ a}>
              за 10 монет
            </div>
          </div>

          <div className={'production__tile-man'}>
          <div className='production__man'>
            <img src={x} className='img_fac_7' />    
          </div>

           </div>
          </div>
    );
  }
};
  
export default ManFactory;
/*
<div className='grid__factory'>

        <button className='grid-itm__factory'>
              <img src={Banner} className='img_fac_1' alt="react-redux-boilerplate - Logo" />    
            </button>

            <button className='grid-itm__factory'>
              <img src={Banner} className='img_fac_2' alt="react-redux-boilerplate - Logo" />    
            </button>

            <button className='grid-itm__factory'>
             <img src={Banner2} className='img_fac_3' alt="react-redux-boilerplate - Logo" />    
            </button>

            <button className='grid-itm__factory'>
             <img src={Banner2} className='img_fac_4' alt="react-redux-boilerplate - Logo" />     
            </button>

            <button className='grid-itm__factory'>
              <img src={Banner3} className='img_fac_5' alt="react-redux-boilerplate - Logo" />     
            </button>
          </div>
          */
