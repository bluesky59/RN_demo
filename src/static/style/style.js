import { StyleSheet } from 'react-native';

export let styles = StyleSheet.create({
//    头部
    header: {
        height: 60,
        backgroundColor: '#5bc0de',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerPersonal: {
        marginHorizontal: 20,
    },
    headerTitle: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
//    主页主体部分
    warp: {
        paddingBottom: 140,
    },
    content: {
        backgroundColor: 'rgba(255,229,100,.3)',
        marginTop: 20,
        borderRadius: 8,
        flexDirection: 'row',
        padding: 10,
        marginHorizontal: 20,
    },
    headerImg: {
        width: 45,
        height: 45,
        marginRight: 10,
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
//    关于界面
    imgArr: {
        height: 200,
    },
    bookImg: {
        height: 200,
    },
});