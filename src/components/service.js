import hello from 'hellojs';

hello.init({
	github: '3f466a0303fc3e4af321'
}, {redirect_uri: 'http://localhost:1234/'});

const github = hello('github');

export const login = () => {
  return github.login()
  .then(() => github.api('/me')
    .then((data) => {
      console.log(data);
      return data;
    }, (err) => console.log(err))
  );
}

export const logout = () => {
  github.logout()
  .then(() => console.log('logged out'),
  (err) => console.log(err));
}
