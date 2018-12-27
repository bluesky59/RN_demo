import React, {Component} from 'react';
import { FlatList, View } from 'react-native';
import { styles } from '../../static/style/style';
import Header from '../../component/header';
import DataList from './List';
import mockData from '../../mock/mockData';

export default class HomeIndex extends Component{
    render() {
        const { data } = this.props;
        return (
            <View>
                <Header title='CNode' />

                <View style={styles.warp}>
                    <FlatList
                        data={mockData}
                        renderItem={({item}) => <DataList data={item} />}
                    />
                </View>
            </View>
        )
    }
}
