import React, {Component} from 'react';
import { Text, View } from 'react-native';

export default class HomeIndex extends Component{
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>这里是列表的详情页面!</Text>
            </View>
        )
    }
}
