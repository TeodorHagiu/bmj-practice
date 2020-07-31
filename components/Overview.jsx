import styled from "styled-components";

export const Overview = ({ user, orgs }) => (
  <>
    <img src={user.avatar_url} />
    <Username>{user.name}</Username>
    <h5>{user.login}</h5>
    <p>{user.bio}</p>
    <p>{orgs.length}</p>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    <pre>{JSON.stringify(orgs, null, 2)}</pre>
  </>
);

const Username = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;
