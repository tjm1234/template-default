import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import { Component } from 'react'
import MyTabs from '../skeleton/tabs'
export default class Tabs extends Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            loading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000)
    }
    handleClick(value) {
        this.setState({
            current: value
        })
    }
    render() {
        let { loading } = this.state;
        const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
        return (
            <View>
                {
                    !!loading ?
                        <MyTabs></MyTabs> :
                        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
                            <AtTabsPane current={this.state.current} index={0} >
                                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={this.state.current} index={1}>
                                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
                            </AtTabsPane>
                            <AtTabsPane current={this.state.current} index={2}>
                                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
                            </AtTabsPane>
                        </AtTabs>
                }

            </View>
        )
    }
}