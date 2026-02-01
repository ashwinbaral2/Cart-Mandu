import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  history: number[]
}

const initialState: CounterState = { value: 0, history: [0] }

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
      state.history.push(state.value)
    },
    decrement(state) {
      state.value -= 1
      state.history.push(state.value)
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
      state.history.push(state.value)
    },
    decrementByAmount(state, action: PayloadAction<number>) {
      state.value -= action.payload
      state.history.push(state.value)
    },
    reset(state) {
      state.value = 0
      state.history = [0]
    },
    undo(state) {
      if (state.history.length > 1) {
        state.history.pop()
        state.value = state.history[state.history.length - 1]
      }
    },
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount, reset, undo } = counterSlice.actions
export default counterSlice.reducer
