// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'
// //thunk

// export const deleteStudent = createAsyncThunk(
//   'deletestudent/fetchStudents',
//   async (id) => {
//     const response = await axios.delete(
//       `http://127.0.0.1:8000/api/deleteStudent/${id}`
//     )
//     return response.data
//   }
// )
// const initialState = {
//   students: {},
// }
// const DeleteSlice = createSlice({
//   name: 'delete',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [deleteStudent.fulfilled](state, action) {
//       const { id } = action.payload
//       const existingStudent = state.students.find(
//         (student) => student.id === id
//       )
//       if (existingStudent) {
//         return state.students.filter((student) => student.id !== id)
//       }
//     },
//   },
// })

// export default DeleteSlice.reducer
