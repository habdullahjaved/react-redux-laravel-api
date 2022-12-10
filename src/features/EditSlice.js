import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
//thunk

export const fetchStudent = createAsyncThunk(
  'edit/getStudent',
  async ({ id }) => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/editStudent/${id}`
    )
    // console.log(response.data.student);
    return response.data.student
  }
)
//

const initialState = {
  students: [],
}
const EditSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStudent.fulfilled](state, action) {
      state.students = action.payload
    },
  },
})
export default EditSlice.reducer
