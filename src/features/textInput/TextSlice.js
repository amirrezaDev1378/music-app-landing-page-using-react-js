import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';

const initialState = {
    value:'mame',
    status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;
//   }
// );

export const TextSlice = createSlice({
    name: 'text',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {

        addText: (state) => {
            state.value = 'Math'
        },

        // Use the PayloadAction type to declare the contents of `action.payload`
        changeText: (state, action) => {
            state.value = action.payload;
        },
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    //   extraReducers: (builder) => {
    //     builder
    //       .addCase(incrementAsync.pending, (state) => {
    //         state.status = 'loading';
    //       })
    //       .addCase(incrementAsync.fulfilled, (state, action) => {
    //         state.status = 'idle';
    //         state.value += action.payload;
    //       });
    //   },
});

export const { addText, changeText } = TextSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectValue = (state) => state.text.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const TestFunc = (amount) => (dispatch, getState) => {
    const currentValue = selectValue(getState());
    console.log(currentValue)
};

export default TextSlice.reducer;
