# Solution: GitHub Integration with Freshdesk

- [Solution: GitHub Integration with Freshdesk](#solution-github-integration-with-freshdesk)
  - [Solution Overview](#solution-overview)
  - [Prerequisites](#prerequisites)
    - [Necessary Account Creations and API Docs Links:](#necessary-account-creations-and-api-docs-links)
      - [How to Get API Key/Access Token](#how-to-get-api-keyaccess-token)
  - [Implementation Steps](#implementation-steps)

## Solution Overview
- Integrate GitHub, a popular code repository and issue tracking platform, with Freshdesk to enable support agents to create and track GitHub issues directly from Freshdesk tickets.
- Utilize Freddy Copilot to simplify the integration process and accelerate app development.

## Prerequisites

1. A GitHub account with access to repositories and issues.
2. A Freshdesk account with administrative privileges.

### Necessary Account Creations and API Docs Links:
1. **GitHub Account**: [Create](https://github.com/join) or log in to your GitHub account. Refer to [GitHub API Documentation](https://docs.github.com/en/rest?apiVersion=2022-11-28) for more details
2. **Freshdesk Account:** [Create](https://developers.freshworks.com/docs/guides/setup/product-signup/) or log in to your Freshdesk account. Refer [Freshdesk API Documentation](https://developers.freshdesk.com/api/) for more information

#### How to Get API Key/Access Token
**GitHub Personal Access Token:**
1. Log in to your GitHub account.
2. Go to [GitHub's Developer settings](https://github.com/settings/developers) and generate a new personal access token with the necessary permissions (e.g., repo, issue).

**Freshdesk API Key:**
1. Log in to your Freshdesk admin dashboard.
2. Navigate to "Profile settings" > "API" tab.
3. Generate an API key or use an existing one.

## Implementation Steps

1. **Authentication and Setup**:
   - Authenticate with the GitHub API and obtain necessary credentials.
   - Configure the settings using [custom config page](http://localhost:10001/custom_config) for custom app.
   - Configure access permissions and define repository settings for issue tracking.

2. **Integration with Freshdesk**:
   - Use Freddy Copilot to access Freshdesk APIs and SDKs for ticket management and conversation handling.

      ```md
      How to build an app from scratch
      ```
   - Implement custom actions or triggers within Freshdesk to initiate GitHub issue creation.

3. **Creating GitHub Issues from Freshdesk**:
   - Integrate GitHub issue creation functionality within Freshdesk ticket interface.
      ```md
      How to build an app from scratch
      ```
   - Enable agents to create GitHub issues directly from Freshdesk tickets, providing relevant details and context.

4. **Linking Tickets and GitHub Issues**:
   - Establish bi-directional links between Freshdesk tickets and corresponding GitHub issues to maintain synchronization.
      ```md
      How to build an app from scratch
      ```
   - Update ticket status and add comments in Freshdesk based on GitHub issue activities, and vice versa.

5. **Collaboration and Resolution**:
   - Facilitate communication and collaboration between support and development teams by providing visibility into GitHub issues within Freshdesk.
   - Enable seamless handoff of issues between support and development teams, with status updates reflected in both platforms.

