import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export const getUser = (username) => {
  return octokit.users.getByUsername({ username }).then(({ data }) => data);
};
