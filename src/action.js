const core = require('@actions/core');
const github = require('@actions/github');

const run = async () => {
	const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
	const octokit = github.getOctokit(GITHUB_TOKEN);

	const { context = {} } = github;
	const { pull_request } = context.payload;

	await octokit.issues.createComment({
		...context.repo,
		issue_number: pull_request.number,
		body: 'Thank you for submitting a pull request',
	});
};

run();
