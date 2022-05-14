module.exports = async ({ github, context }) => {
  const pr_data = await github.rest.pulls.get({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.issue.number,
  });

  const workflow_runs = await github.rest.actions.listWorkflowRunsForRepo({
    owner: context.repo.owner,
    repo: context.repo.repo,
  });

  //console.log(workflow_runs);
  console.log(pr_data);
};
