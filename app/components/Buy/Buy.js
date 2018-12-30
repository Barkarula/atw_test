import React from 'react';
import ReactDOM from 'react-dom';

import BuyHand from 'components/BuyHand';
import BuyLeg from 'components/BuyLeg';
import BuyCucumber from 'components/BuyCucumber';

class Buy extends React.Component {
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

};

	render() {

    return (
    		<div>
    			<BuyHand/>
    		</div>
		)
	};

export default Buy;