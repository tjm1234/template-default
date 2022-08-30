import { Component } from 'react'
import { View, Text } from '@tarojs/components'

import './index.scss'
import Tabs from '../../components/tabs';
import Grid from '../../components/grid';

export default class Index extends Component {

	componentWillMount() { }

	componentDidMount() { }

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	render() {
		return (
			<View className='index'>
				<Text>Hello world!</Text>
				<View>在线工具绘制 <a href='https://skeletonreact.com/' target='_blank'>skeletonreact.com/</a></View>
				<Grid></Grid>
				<Tabs></Tabs>
			</View>
		)
	}
}
