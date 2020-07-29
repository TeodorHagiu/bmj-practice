import { Overview } from "../../components/Overview";
import { getUser } from "../../services/octokit";

const GithubOverview = ({ user }) => <Overview user={user} />;

export async function getStaticProps() {
  const user = await getUser("sabinagav");

  return { props: { user } };
}

export default GithubOverview;
