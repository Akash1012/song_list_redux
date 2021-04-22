import React from 'react';

import SongList from './components/SongList'
import SongDetail from './components/songDetail'

const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App