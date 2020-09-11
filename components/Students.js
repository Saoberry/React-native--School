import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { reset_absences, order_averages, moyenneNotes } from '../actions/actions-types';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import BackHome from './BackHome';
import { styles } from '../Styles';

//const Stack = createStackNavigator();

const Students = ({ navigation }) => {
    const { students } = useSelector(state => state.studentsReducer);
    const dispatch = useDispatch();

    return (
        <View style={styles.studentsContainer}>
            
            <View style={styles.NavButtonsAction}>
                {/* <BackHome /> */}
                <View style={styles.btnStyle}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text>Home</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => dispatch(reset_absences())} >
                        <Text style={styles.ButtonAction}>Reset absences</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => dispatch(order_averages())} >
                        <Text style={styles.ButtonAction}>Classer les moyennes</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={students}
                renderItem={({ item }) => (
                <View style={styles.studentsCard}>
                    <Image
                    source={{ uri: 'http://lorempixel.com/100/100/cats/' + item.id }}
                    style={{ width: 100, height: 100, marginRight : 10 }}
                    />
                    <View>
                        <Text>{item.name}</Text>
                        <Text>Nombre d'absence(s) : {item.attendance}</Text>
                        <Text>Nombre de cours : {item.lessons.length}</Text>
                        <Text>Moyenne : {moyenneNotes(item.notes)}</Text>
                    </View>
                </View>
                )}
                keyExtractor={({ item, index }) => Math.random().toString()}
            />
        </View>
    )
}

export default Students;