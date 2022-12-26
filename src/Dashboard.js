// import React from 'react'
// import { useState } from 'react';
// import useAuth from './hooks/useAuth';

// import SpotifyWebApi from 'spotify-web-api-node';
// import { useEffect } from 'react';

// const spotifyApi = new SpotifyWebApi({
//     clientId: 'd41d033c6bc44116be8f7a52be8cc081',
// });

// function Dashboard({code}) {

//     // spotifyApi.getMyTopArtists().then(res => {
//     //     console.log(res);
//     // })

//     const accessToken = useAuth(code);
//     const [search, setSearch] = useState('');
//     const [searchResults, setSearchResults] = useState([]);


//     useEffect(() => {
//         if(!accessToken) return;

//         spotifyApi.setAccessToken(accessToken);
//     }, [accessToken]);

//     useEffect(() => {
//         if(!search) return setSearchResults([]);
//         if(!accessToken) return;

//         spotifyApi.searchTracks(search).then(res => {
//             console.log(res);
//         })
//         // spotifyApi.getMyTopTracks().then(res => {
//         //   console.log(res);
//         // })
//     }, [search, accessToken])


//     const changeHandler = (e) => {
//         setSearch(e.target.value);
//     }

//   return (
//     <form>
//       <input value={search} onChange={changeHandler} style={{width: '100%', padding: '10px'}} type="text" placeholder='🔍 search by songs/artists'/>
//     </form>
//   )
// }

// export default Dashboard


import React from 'react';

const auth_url = "https://accounts.spotify.com/authorize?client_id=d41d033c6bc44116be8f7a52be8cc081&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

function Dashboard() {
  return (
    <>
      <div style={
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh'
        }
      }>
        <a href={auth_url} style={ { textAlign: 'center', textDecoration: 'none', padding: '10px 20px', color: 'black', borderRadius: '5px', backgroundColor: 'greenyellow'} }>Login</a>
      </div>
    </>
  )
}

export default Dashboard;

