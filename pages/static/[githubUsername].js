import { Overview } from "../../components/Overview";
import { getUserByUsername, getOrgsByUsername } from "../../services/github";
import { frequentlyVisited } from "../../constants";

const GithubOverview = ({ user, orgs }) => {
  if (user && orgs) {
    return <Overview user={user} orgs={orgs} />;
  } else return <h1>Loading...</h1>;
};

export async function getStaticProps({ params: { githubUsername } }) {
  const [user, orgs] = await Promise.all([
    getUserByUsername(githubUsername),
    getOrgsByUsername(githubUsername),
  ]);

  return { props: { user, orgs } };
}

export async function getStaticPaths() {
  const paths = frequentlyVisited.map((githubUsername) => ({
    params: {
      githubUsername,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default GithubOverview;
