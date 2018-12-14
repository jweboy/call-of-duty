import * as React from 'react';
import * as styles from './index.less';
// import testLogo from '../../assets/logo4.jpg';

class Card extends React.Component {
	componentDidMount() {
		// const image = new Image();
		// image.src = testLogo;
		// image.onload = () =>  {
		// 	this.logo.style.backgroundImage = `url(${testLogo})`;
		// 	this.logo.classList.add(styles.logoAnimate);
		// };
	}
	render() {
		return (
			<div className={styles.columns}>
				<section className={styles.profile}>
					<img src="https://pbs.twimg.com/profile_images/1006924185023733766/7Vl_2Fa-_400x400.jpg" />
					{/* <div
						// ref={(node) => { this.logo = node; }} 
					>
					</div> */}
				</section>
				<section>
					introduce
				</section>
			</div>
		);
		return null;
	}
}

export default Card;