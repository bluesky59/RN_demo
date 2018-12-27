import React, {Component} from 'react';
import { TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { styles } from '../static/style/style'

export default class Header extends Component{
    render() {
        const { title } = this.props;
        return (
            <View style={styles.header}>
                <View style={styles.headerPersonal}>
                    <Icon name="navicon" size={20} color='#fff' />
                </View>

                <View style={styles.headerTitle}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        )
    }
}
