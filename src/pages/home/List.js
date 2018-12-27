import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { styles } from '../../static/style/style';

//class HomeScreen extends React.Component {
//  render() {
//    return (
//      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//        <Text>Home Screen</Text>
//      </View>
//    );
//  }
//}
//
//const AppNavigator = createStackNavigator({
//  Home: {
//    screen: HomeScreen
//  }
//});
//
//export default createAppContainer(AppNavigator);

export default class DataList extends Component{
    render() {
        const { data } = this.props;
        return (
            <View style={styles.content} key={data.key}>
                <Image style={styles.headerImg} source={{uri: data.img}} />
                <View style={styles.info}>
                    <Text style={styles.detail}>{data.title}</Text>
                    <Text style={styles.date}>{data.date}</Text>
                </View>
            </View>
        )
    }
}
