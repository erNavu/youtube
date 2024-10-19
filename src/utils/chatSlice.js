import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MAX_COUNT } from './contants'

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        liveMessages: [],
    },
    reducers: {
        addLiveMessage: (state, action) => {
            const newLiveMessages = [...state.liveMessages];
            if (newLiveMessages.length >= LIVE_CHAT_MAX_COUNT) {
                newLiveMessages.shift();
            }
            newLiveMessages.push(action.payload);
            return { ...state, liveMessages: newLiveMessages };
        },

    }
})

export const { addLiveMessage } = chatSlice.actions
export default chatSlice.reducer