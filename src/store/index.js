import { createSlice, configureStore, createAction } from '@reduxjs/toolkit'

const reset = createAction('app/reset')

const movieSlice = createSlice({
	name: 'movie',
	initialState: [],
	reducers: {
		addMovie(state, action) {
			state.push(action.payload)
		},
		removeMovie(state, action) {
			const index = state.indexOf(action.payload)
			state.splice(index, 1)
		},
	},
	extraReducers(builder) {
		// builder.addCase(songsSlice.actions.reset, (state, action) => {
		// 	return []
		// }) look at reset in songsSlice
		builder.addCase(reset, (state, action) => {
			return []
		})
	},
})

const songsSlice = createSlice({
	name: 'song',
	initialState: [],
	reducers: {
		//mini reducers : each case in switch statement
		addSong(state, action) {
			state.push(action.payload)
		},
		removeSong(state, action) {
			const index = state.indexOf(action.payload)
			state.splice(index, 1)
		},
		// reset(state, action) {
		// 	return []
		// },
	},
	extraReducers(builder) {
		builder.addCase(reset, (state, action) => {
			return []
		})
	},
})

//store holds all state of application. usually only one store will be there
const store = configureStore({
	reducer: {
		songs: songsSlice.reducer, // songs: is the name of state (A key)
		movies: movieSlice.reducer,
	},
})
// console.log(songsSlice.actions)

// const startingState = store.getState()

// console.log(JSON.stringify(startingState))

// store.dispatch(songsSlice.actions.addSong('Newest song'))
// // store.dispatch({
// // 	type: 'song/addSong', //particual type: name/reducer function name
// // 	payload: 'New Song!!',
// // })
// const finalState = store.getState()
// console.log(JSON.stringify(finalState))

export { store }
export const { addSong, removeSong } = songsSlice.actions
export const { addMovie, removeMovie } = movieSlice.actions
export { reset }
