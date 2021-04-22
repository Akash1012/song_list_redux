import React from 'react';
import { connect } from 'react-redux'

const SongDetail = (props) => {
    const { selectedSong } = props
    return (
        <div>
            <h2>{selectedSong && selectedSong.title}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedSong: state.songList.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail)