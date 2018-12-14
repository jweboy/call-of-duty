import React, { Component } from 'react';
import testLogo from '../../assets/logo4.jpg';
import styles from './index.scss';

class Card extends Component {
	componentDidMount() {
		const image = new Image();

		image.src = testLogo;
		image.onload = () =>  {
			this.logo.style.backgroundImage = `url(${testLogo})`;
			this.logo.classList.add(styles.logoAnimate);
		};
	}
	render() {
		return (
			<div className={styles.columns}>
				<header className={styles.header}>
					<div className={styles.logo} ref={node => { this.logo = node; }} />
					<section>
                        introduce
					</section>
				</header>
			</div>
		);
	}
}

export default Card;