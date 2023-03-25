import React from 'react';

const ShowPlayers = (props) => {
    let playersList = props.players;
    console.log(playersList);
    return (
        <div>
              {/* {
                playersList.map(player =><h1>Name:{player.strPlayer}</h1> )
             } */}
             
        </div>
    );
};

export default ShowPlayers;