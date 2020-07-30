import { Overview } from "../../components/Overview";
import { getUserByUsername, getOrgsByUsername } from "../../services/github";

const GithubOverview = ({ user, orgs }) => <Overview user={user} orgs={orgs} />;

export async function getStaticProps() {
  const user = await getUserByUsername("sabinagav");
  const orgs = await getOrgsByUsername("sabinagav");

  return { props: { user, orgs } };
}

export default GithubOverview;
