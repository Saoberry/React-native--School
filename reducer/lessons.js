// import {
//   SET_LESSONS
// } from "../constants/actions";

const stateInit = {
    lessons: [
        { id: 1, title: "React" },
        { id: 2, title: "React Native" },
        { id: 3, title: "MongoDB" },
    ],
};

const reducer = (state = stateInit, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
};

export default reducer;