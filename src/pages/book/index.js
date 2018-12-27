import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Header from '../../component/header';
import { styles } from '../../static/style/style';

export default class HomeIndex extends Component{
    render() {
        return (
            <View>
                <Header title="教程分享" />

                <View>
                    <Image style={styles.bookImg} source={{uri: 'https://static.cnodejs.org/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O'}} />
                </View>

                <View>
                    <Text>这里是教程的首页!</Text>
                </View>
            </View>
        )
    }
}
