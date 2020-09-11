import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList } from 'react-native';
import { styles } from '../Styles';

const Lessons = () => {
    const { lessons } = useSelector(state => state.lessonsReducer);

    return (
        <View style={styles.lessonsContainer}>
            <FlatList
                data={lessons}
                renderItem={({ item }) => (
                <View>
                    <Text style={styles.lessonCard}>{item.title}</Text>
                </View>
                )}
                keyExtractor={({ item, index }) => index}
            />
        </View>
    )
}

export default Lessons;