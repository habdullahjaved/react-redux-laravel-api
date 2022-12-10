import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
//thunk
//------------------------------
// const status = object.freeze({
//   pending: 'pending',
//   fulfilled: 'fulfilled',
//   rejected: 'rejected',
// })
//------
// const namespace = 'students'
export const addStudents = createAsyncThunk(
  'add/addStudents',
  async (initialPost) => {
    const response = await axios.post(
      'http://127.0.0.1:8000/api/addStudent',
      initialPost
    )
    return response.data
  }
)

//slice
// const initialState = []
const initialState = {
  students: [],
}
const AddStudentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addStudents.fulfilled, (state, action) => {
      const newStudent = action.payload

      state.students.push({
        name: newStudent.name,
        course: newStudent.course,
        email: newStudent.email,
        phone: newStudent.phone,
      })
    })
  },
})
// export const { fetchStudents } = fetchStudents.actions
export default AddStudentSlice.reducer
