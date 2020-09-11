import _ from 'lodash';


import {
  REST_ABSENCES,
  ORDER_AVERAGES
} from "../constants/actions";

import { moyenneNotes } from '../actions/actions-types'

const stateInit = {
    students: [
        { id: 1, name: "Alice", lessons: [1, 2], attendance: 0, notes: [11, 12, 18] },
        { id: 2, name: "Alan", lessons: [3], attendance: 2, notes: [10, 14.5, 11] },
        { id: 3, name: "Phil", lessons: [1, 2, 3], attendance: 8, notes: [11, 9, 9] },
        { id: 4, name: "Naoudi", lessons: [1], attendance: 5, notes: [14.5, 19, 18] },
        { id: 5, name: "Fenley", lessons: [3], attendance: 0, notes: [9, 7, 11] },
    ],
    // behaviours :  [],
    // order: false,
    // moyenne :''
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {      
      case REST_ABSENCES:
        const students = state.students.map(student => {
          student.attendance = 0;
          return student
        })
        return {
          ...state,
          students: students
        };
      
      case ORDER_AVERAGES:
        const orderStudents = _.cloneDeep(state.students);
        // equivalent orderStudents = Object.values(state.students)
        orderStudents.sort((a, b) => moyenneNotes(b.notes) - moyenneNotes(a.notes) );
        return {
          ...state,
          students: orderStudents
        };
  
      default:
        return state;
    }
};

export default reducer;