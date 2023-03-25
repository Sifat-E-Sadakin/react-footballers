import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import ShowPlayers from '../ShowPlayers/ShowPlayers';


const LoadPlayers = () => {
    let [players, setPlayers] = useState([])
    
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=messi')
        .then(res => res.json())
        .then(data => setPlayers(data.player))
    },[])

    console.log(players);
   
    return (
        <div className='grid grid-cols-3 container mx-auto gap-5 '>
            {
                players.map( player =>
                    <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={player.strCutout? player.strCutout : './download_500x500.png'} alt="Movie"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{player.strPlayer}</h2>
                      <p>Click the button to watch on Jetflix app.</p>
                      <div className="card-actions justify-end">
                      <label htmlFor="my-modal-5" className="btn" onClick={()=>Info(player.idPlayer)} >open modal</label>

                      </div>
                    </div>
                  </div>
                     )
            }
        </div>
    );
};

export default LoadPlayers;