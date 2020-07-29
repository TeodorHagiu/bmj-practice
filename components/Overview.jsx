export const Overview = ({ user }) => (
  <>
    <img src={user.avatar_url} />
    <h1>{user.name}</h1>
    <h2>{user.login}</h2>
    <pre>{JSON.stringify(user, null, 2)}</pre>
  </>
);
