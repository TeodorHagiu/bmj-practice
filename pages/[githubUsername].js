import { Overview } from "../components/Overview";
import { getUserByUsername, getOrgsByUsername } from "../services/github";

const GithubOverview = ({ user, orgs }) => <Overview user={user} orgs={orgs} />;

export async function getServerSideProps({ params: { githubUsername } }) {
  const user = await getUserByUsername(githubUsername);
  const orgs = await getOrgsByUsername(githubUsername);

  return { props: { user, orgs } };
}

export default GithubOverview;
