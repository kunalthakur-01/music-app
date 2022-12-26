import React from 'react';

const auth_url = "https://accounts.spotify.com/authorize?client_id=d41d033c6bc44116be8f7a52be8cc081&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = React.memo(() => {
  return (
    <>
      <a href={auth_url} style={ {textDecoration: 'none', padding: '10px 20px', color: 'black', borderRadius: '5px', backgroundColor: 'greenyellow'} }>Login</a>
    </>
  )
});

export default Login;
