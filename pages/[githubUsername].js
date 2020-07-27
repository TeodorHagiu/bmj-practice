import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Octokit } from "@octokit/rest";

const GithubOverview = () => {
  const [user, setUser] = useState({});
  const router = useRouter();

  const { githubUsername: username } = router.query;
  useEffect(() => {
    if (username) {
      const octokit = new Octokit();
      octokit.users
        .getByUsername({ username })
        .then(({ data }) => setUser(data));
    }
  }, [username]);

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default GithubOverview;
