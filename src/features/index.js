import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './MenuSlice'
import studentReducer from './StudentSlice'
import addStudentReducer from './AddStudentSlice'
import updateReducer from './UpdateSlice'
import editReducer from './EditSlice'
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    students: studentReducer,
    student: addStudentReducer,
    edit: editReducer,
    update: updateReducer,
  },
})
