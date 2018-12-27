import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class HomeIndex extends Component{
    render() {
        return (
            <View>
                <Text>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</Text>
                <Text>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</Text>
                <Text>CNode 的 SLA 保证是，一个9，即 90.000000%。</Text>
                <Text>社区目前由 @alsotang 在维护，有问题请联系</Text>
                <Text>请关注我们的官方微博</Text>
            </View>
        )
    }
}
