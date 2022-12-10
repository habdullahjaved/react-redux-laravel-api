import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
//thunk

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/students')
    return response.data.students
  }
)

export const deleteStudentthunk = createAsyncThunk(
  'delete/deleteStudents',
  async ({ id }) => {
    const response = await axios.delete(
      `http://127.0.0.1:8000/api/deleteStudent/${id}`
    )
    if (response.data.status === 200) {
      console.log(response.data.message)
    }
  }
)

//slice

const createInitialState = () => {
  return {
    data: [],
  }
}
const initialState = createInitialState()
const StudentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: {
    // [fetchStudents.pending](state) {
    //   state.loading = status.pending
    // },
    [fetchStudents.fulfilled](state, action) {
      state.data = action.payload
    },
    [deleteStudentthunk.fulfilled]: (state, action) => {
      // state.data = action.payload
      const id = action.payload
      const existingStudent = state.data.find((student) => student.id === id)
      if (existingStudent) {
        state.data = state.data.filter((student) => student.id !== id)
      }
    },
  },
})
// export const { fetchStudents } = fetchStudents.actions
export default StudentSlice.reducer
