import { combineReducers } from 'redux'


const INITIAL_STATE = {
    songData: [
        { title: 'She', duration: '3.02' },
        { title: 'Summer of 69', duration: '4.32' },
        { title: 'All Star', duration: '3.12' },
        { title: 'I want it thay way', duration: '5.12' },
    ],
    selectedSong: null

}

const songReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "SONG_SELECTED") {
        return { ...state, selectedSong: action.payload }

    } else {
        return state
    }

}

console.log("BB", INITIAL_STATE)

const rootReducer = combineReducers({
    songList: songReducer
})

export default rootReducer








// import { combineReducers } from 'redux'

// const INITIAL_STATE = {
//     songData: [
//         { title: 'She', duration: '3.02' },
//         { title: 'Summer of 69', duration: '4.32' },
//         { title: 'All Star', duration: '3.12' },
//         { title: 'I want it thay way', duration: '5.12' },
//     ],
//     selectedSong: ''
// }

// const songReducer = (state = INITIAL_STATE) => {
//     return state.songData
// }


// const selectedSongReducer = (state = INITIAL_STATE, action) => {
//     console.log("Action", action)
//     return state;
//     // switch (action.type) {
//     //     case 'SONG_SELECTED':
//     //         return {
//     //             ...state,
//     //             selectedSong: action.payload
//     //         }
//     // }
//     // return state
// }


// const rootReducer = combineReducers({
//     songList: songReducer,
//     selectSong: selectedSongReducer
// })

// export default rootReducer