import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: './pages/ListStudent', props: null }
const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    updateMenu: (state, action) => {
      state.value = action.payload
    },
    updateProps: (state, action) => {
      state.props = action.payload
    },
  },
})

export const { updateMenu, updateProps } = menuSlice.actions
export default menuSlice.reducer
