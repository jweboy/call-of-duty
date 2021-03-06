import React from 'react';
import { render } from 'react-dom';

import App from './routes';
// import App from './App';

// 获取装载组件的根节点
const mountNode = document.getElementById('root');

// 定义根组件渲染的函数
const rootRender = (Component) => {
	render(
		<Component />,
		mountNode,
	);
};

rootRender(App);

// FIXME: react-hot-loader@latest不需要这个判断了
// if (module.hot) {
//   module.hot.accept('./routes', () => {
//     rootRender(App)
//   })
// }
