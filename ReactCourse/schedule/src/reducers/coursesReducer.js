import { FETCH_COURSES, TOGGLE_ENROLLED, CLEAR_ALL } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COURSES:
      return [
        ...state,
        ...action.payload
      ]
      
    case TOGGLE_ENROLLED:
      return state.map(course => {
        if (course.id === action.payload) {
          return { ...course, enrolled: !course.enrolled }
        }
        return course
      })

    case CLEAR_ALL:
      return state.map(course => {
        return { ...course, enrolled: false }
      })

    default:
      return state;
  }
} 