import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../Styles';

const BackHome = ({ navigation })  => {
    return (
        <View style={styles.btnStyle}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}

export default BackHome;