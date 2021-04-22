// Action Creator
export const akash = (song) => {
    console.log("Song", song)
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}