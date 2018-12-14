import * as React from 'react';

class IntroVideo extends React.Component {
	render() {
		return (
			<video 
				src="https://dw-bw6.dwstatic.com/b399306139288e56e7fc477cf38fa8c5/5b3e456a/52/9/1628/2640319-100-1468539069.mp4" 
				controls
				width={400}
			/>
		);
	}
}

export default IntroVideo;