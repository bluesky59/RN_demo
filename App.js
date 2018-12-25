import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

class DataList extends Component{
    render() {
        return (
            <View style={styles.content}>
                <Image style={styles.headerImg} source={{uri: 'https://avatars3.githubusercontent.com/u/6828924?v=4&s=120'}} />
                <View style={styles.info}>
                    <Text style={styles.detail}>第二届蚂蚁金服体验科技大会将于19年1月5日举行，期待与你相遇</Text>
                    <Text style={styles.date}>12:00</Text>
                </View>
            </View>
        )
    }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
            <Text style={styles.title}>CNode</Text>
        </View>

        <View style={styles.warp}>
            <DataList />
            <DataList />
            <DataList />
            <DataList />
            <DataList />
            <DataList />
            <DataList />
            <DataList />
            <DataList />
            <DataList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#5bc0de',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    warp: {
        alignItems: 'center',
    },
    content: {
        width: 320,
        backgroundColor: 'rgba(255,229,100,.3)',
        marginVertical: 15,
        borderRadius: 8,
        flexDirection: 'row',
        padding: 10,
    },
    headerImg: {
        width: 45,
        height: 45,
    },
    info: {
        flex: 1,
    },
    detail: {
        fontSize: 14,
        lineHeight: 24,
        color: '#333',
    },
    date: {
        fontSize: 12,
        color: '#999',
    },
});
