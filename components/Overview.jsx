export const Overview = ({ user }) => (
  <>
    <img src={user.avatar_url} />
    <h1>{user.name}</h1>
    <h5>{user.login}</h5>
    <p>{user.bio}</p>
    <pre>{JSON.stringify(user, null, 2)}</pre>
  </>
);
