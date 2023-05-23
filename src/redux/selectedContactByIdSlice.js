const { createSlice } = require('@reduxjs/toolkit');

const selectedContactByIdSlice = createSlice({
  name: 'selectedContactById',
  initialState: null,
  reducers: {
    addSelectedContactId: {
      reducer: (state, action) => {
        return action.payload;
      },
    },
  },
});

export const getSelectedContact = state => state.selectedContactById;
export const { addSelectedContactId } = selectedContactByIdSlice.actions;
export const selectedContactIdReducer = selectedContactByIdSlice.reducer;
