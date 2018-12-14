import * as React from 'react';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';

import Card from './Card';
import IntroVideo from './IntroVideo';
import * as styles from './index.less';

class Home extends React.Component {
	render() {
		return (
			<div className={classNames(styles.home, styles.grid)}>
				{/* <IntroVideo /> */}
				{/* <hr /> */}
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		);
	}
}

// eslint-disable-next-line
export default hot(module)(Home);