import { Octokit } from "@octokit/rest";
import { Overview } from "../components/Overview";

const GithubOverview = ({ user }) => {
  return <Overview user={user} />;
};

export async function getServerSideProps({ params: { githubUsername } }) {
  const octokit = new Octokit();

  const user = await octokit.users
    .getByUsername({ username: githubUsername })
    .then(({ data }) => data);
  return { props: { user } };
}

export default GithubOverview;
