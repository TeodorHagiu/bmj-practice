import { Overview } from "../../components/Overview";
import { getUser } from "../../services/octokit";
import { frequentlyVisited } from "../../constants";

const GithubOverview = ({ user }) => {
  if (user) {
    return <Overview user={user} />;
  } else return <h1>Loading...</h1>;
};

export async function getStaticProps({ params: { githubUsername } }) {
  const user = await getUser(githubUsername);

  return { props: { user } };
}

export async function getStaticPaths() {
  const paths = frequentlyVisited.map((githubUsername) => ({
    params: {
      githubUsername,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default GithubOverview;
