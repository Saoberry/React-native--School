import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../Styles';

export const HomeScreen = ({ navigation })  => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.btnStyle}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Students')}
                >
                    <Text>Students</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btnStyle}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Lessons')}
                >
                    <Text>Lessons</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default HomeScreen;