import hello from 'hellojs';

hello.init({
	github: '3f466a0303fc3e4af321'
}, {redirect_uri: 'http://localhost:1234/'});

const github = hello('github');

export const login = () => {
  return github.login()
  .then(() => github.api('/me')
    .then((data) => {
      return data;
    }, (err) => console.log(err))
  );
}

export const logout = () => {
  github.logout()
  .then(() => console.log('logged out'),
  (err) => console.log(err));
}

const online = (session) => {
  const currentTime = (new Date()).getTime() / 1000;
	return session && session.access_token && session.expires > currentTime;
}

export const getUserData = () => {
  const session = github.getAuthResponse();
  if (online(session)) {
    const accessToken = JSON.parse(localStorage.getItem('hello')).github.access_token;
    return (
      fetch(`https://api.github.com/user?access_token=${accessToken}`)
        .then((resp) => {
          if (resp.status !== 200) {
            return;
          }
          return resp.json()
            .then((data) => data);
        })
        .catch((err) => console.log(err)));
  }
  return;

}