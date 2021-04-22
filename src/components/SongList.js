import React from 'react';
import { connect } from 'react-redux';

import { akash } from '../actions/index'


const SongList = (props) => {
    console.log("List", props.songList);
    const { songList, selectTheSong } = props;
    const renderList = () => {
        return songList.map((song, index) => {
            return (
                <div className="item" key={index}>
                    <div className="right floated content">
                        <button onClick={() => selectTheSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        })
    }
    return (
        <div className="ui divided list">
            {renderList()}
        </div>
    )
}


const mapStateToDispatch = (dispatch) => {
    return {
        selectTheSong: (song) => dispatch(akash(song))
    }
}

const mapStateToProps = (state) => {
    return {
        songList: state.songList.songData
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(SongList)