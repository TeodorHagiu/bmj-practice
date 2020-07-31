import { Overview } from "../../components/Overview";
import { getUserByUsername, getOrgsByUsername } from "../../services/github";

const GithubOverview = (props) => <Overview {...props} />;

export async function getStaticProps() {
  const [user, orgs] = await Promise.all([
    getUserByUsername("sabinagav"),
    getOrgsByUsername("sabinagav"),
  ]);

  return { props: { user, orgs } };
}

export default GithubOverview;
