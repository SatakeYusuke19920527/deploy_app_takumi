import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  answer: []
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      console.log(action.payload)
      state.answer.push(action.payload)
    },
    resetAnswer: (state) =>{
      state.answer = []
    }
  }
});

export const { addAnswer,resetAnswer } = answerSlice.actions;

export const selectAnswer = (state) => state.answer;

export default answerSlice.reducer;