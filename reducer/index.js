import { combineReducers } from 'redux';

import students from './students';
import lessons from './lessons';

export default combineReducers({
    studentsReducer : students,
    lessonsReducer : lessons
});
