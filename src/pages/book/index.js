import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import Swiper from 'react-native-swiper'
import Header from '../../component/header';
import { styles } from '../../static/style/style';

export default class HomeIndex extends Component{
    render() {
        return (
            <View>
                <Header title='课程资源' />

                <View style={styles.imgArr}>
                    <Swiper
                        showsButtons={true}
                        autoplay={true}>
                        <View style={styles.bookImg}>
                            <Image style={styles.bookImg} source={{uri: 'https://avatars3.githubusercontent.com/u/6828924?v=4&s=120'}} />
                        </View>
                        <View style={styles.bookImg}>
                            <Image style={styles.bookImg} source={{uri: 'https://avatars.githubusercontent.com/u/285661?v=3&s=120'}} />
                        </View>
                        <View style={styles.bookImg}>
                            <Image style={styles.bookImg} source={{uri: 'https://avatars2.githubusercontent.com/u/25993112?v=4&s=120'}} />
                        </View>
                    </Swiper>
                </View>
            </View>
        )
    }
}
