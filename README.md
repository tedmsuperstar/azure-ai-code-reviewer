# azure-ai-code-reviewer

Github action that runs a TypeScript Client for Azure AI. Azure is prompted to review a diff between a PR and the parent branch, commenting an explanation and any suggested changes on the PR.

The action will run when a PR is created or updated.

Setup
--------
1. Add the contents of .github/workflows and github-workflowers to your repo.

2. Set up an Azure OpenAI Instance.

3. Add the following as "Repository Secrets" at github/your/repo/setting/secrets/actions
    OPENAI_AZURE_ENDPOINT // https://instancenamehere.openai.azure.com/
    OPEN_AI_AZURE_KEY: // yourasureapikey
    OPEN_AI_AZURE_DEPLOYMENT_ID: // something like instancenamehere-deployment

4. Browse to github.com/your/repo > Settings > Actions > General - Workflow Permissions and choose "Read and write permissions" so the action can read your diffs and write a comment on the PR.

5. Make a PR as usual, and you should see it run anf comment on the PR. Diffs over 50k ch will be rejected as tool large for a review. This is also to keep your API calls to Azure reasonable. Currently, each diff is broken into 2000 ch pieces becuase of API request limits, so reviewing a PR can take miltiple requests to the AI API.


