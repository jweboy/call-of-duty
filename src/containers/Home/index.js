import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import Card from './Card';
// import IntroVideo from './IntroVideo';
import styles from './index.scss';

class Home extends Component {
	render() {
		return (
			<div className={styles.homePage}>
				{/* <IntroVideo /> */}
				{/* <hr /> */}
				<div className={styles.grid}>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		);
	}
}

// eslint-disable-next-line
export default hot(module)(Home);