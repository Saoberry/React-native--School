import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  studentsContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  lessonsContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  studentsCard: {
    flex: 1, 
    flexDirection: 'row',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#f9c2ff',
    //color : 'black'
  },
  NavButtonsAction: {
    marginVertical: 10,
  },
  ButtonAction: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'black',
    color : 'white'
  },
  lessonCard: {
    flex: 1, 
    flexDirection: 'row',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#00b6ff',
    color : 'white',
  },
  btnStyle: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9c2ff',
  }
});