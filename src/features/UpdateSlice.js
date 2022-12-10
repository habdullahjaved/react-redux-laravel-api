import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const UpdateStudents = createAsyncThunk(
  'update/updatestudent',
  async (initialPost) => {
    const { id } = initialPost
    const response = await axios.put(
      `http://127.0.0.1:8000/api/updateStudent/${id}`,
      initialPost
    )
    return response.data
  }
)

const initialState = {
  students: [],
}
const UpdateSlice = createSlice({
  name: 'update',
  initialState,
  reducers: {},
  extraReducers: {
    [UpdateStudents.fulfilled](state, action) {
      const { id, name, course, email, phone } = action.payload
      const existingStudent = state.students.find(
        (student) => student.id === id
      )
      state.existingStudent = [...existingStudent, action.payload]
      // if (existingStudent) {
      //   existingStudent.name = name
      //   existingStudent.course = course
      //   existingStudent.email = email
      //   existingStudent.phone = phone
      // }
    },
  },
})
export default UpdateSlice.reducer
