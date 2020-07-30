export const Overview = ({ user, orgs }) => (
  <>
    <img src={user.avatar_url} />
    <h1>{user.name}</h1>
    <h5>{user.login}</h5>
    <p>{user.bio}</p>
    <p>{orgs.length}</p>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    <pre>{JSON.stringify(orgs, null, 2)}</pre>
  </>
);
