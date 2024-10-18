import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MAX_COUNT } from './contants'

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        liveMessages: [],
        isTopMessageInView: true // New state to track if the top message is in view
    },
    reducers: {
        addLiveMessage: (state, action) => {
            const newLiveMessages = [...state.liveMessages];
            if (newLiveMessages.length >= LIVE_CHAT_MAX_COUNT && !state.isTopMessageInView) {
                newLiveMessages.shift();
            }
            newLiveMessages.push(action.payload);
            return { ...state, liveMessages: newLiveMessages };
        },
        setTopMessageInView: (state, action) => {
            state.isTopMessageInView = action.payload; // Update visibility state
        }
    }
})

export const { addLiveMessage } = chatSlice.actions
export default chatSlice.reducer