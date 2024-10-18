import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query: '',
        searchCache: {},
        suggestionsCache: {}
    },
    reducers: {
        searchResultsCache: (state, action) => {
            state.searchCache = action.payload
        },
        searchSuggestionsCache: (state, action) => {
            state.suggestionsCache = action.payload
        },
    }
})

export const { searchResultsCache, searchSuggestionsCache } = searchSlice.actions
export default searchSlice.reducer