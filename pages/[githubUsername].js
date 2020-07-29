import { Overview } from "../components/Overview";
import { getUser } from "../services/octokit";

const GithubOverview = ({ user }) => <Overview user={user} />;

export async function getServerSideProps({ params: { githubUsername } }) {
  const user = await getUser(githubUsername);

  return { props: { user } };
}

export default GithubOverview;
