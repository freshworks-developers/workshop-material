# Use Case: Notion and Asana Integration with Freshdesk/Freshservice

- [Use Case: Notion and Asana Integration with Freshdesk/Freshservice](#use-case-notion-and-asana-integration-with-freshdeskfreshservice)
  - [Solution Overview](#solution-overview)
  - [Prerequisites](#prerequisites)
    - [Necessary Account Creations and API Docs Links:](#necessary-account-creations-and-api-docs-links)
      - [How to Get API Key/Access Token](#how-to-get-api-keyaccess-token)
  - [Implementation Steps](#implementation-steps)
  - [Benefits](#benefits)

## Solution Overview
- Integrate Bitly with Freshdesk/Freshservice to enable support agents to shorten URLs directly within ticket conversations.
- Utilize Freddy Copilot for Developers to simplify the integration process and accelerate app development.

## Prerequisites

1. A Notion account with access to the desired workspace.
2. An Asana account with access to the desired projects/tasks.
3. A Freshdesk/Freshservice account with administrative privileges.

### Necessary Account Creations and API Docs Links:
1. **Notion Account**: [Create](https://www.notion.so/signup) or log in to your Notion account. Refer to [Notion API Documentation](https://developers.notion.com/reference/intro) for more
2. **Asana Account**: [Create](https://asana.com/create-account) or log in to your Asana account. Refer to [Asana API Documentation](https://developers.asana.com/reference/rest-api-reference) for more
3. **Freshdesk Account:** [Create](https://developers.freshworks.com/docs/guides/setup/product-signup/) or log in to your Freshdesk account. Refer [Freshdesk API Documentation](https://developers.freshdesk.com/api/) for more information
4. **Freshservice Account:** [Create](https://developers.freshworks.com/docs/guides/setup/product-signup/) or log in to your Freshservice account. Refer [Freshservice API Documentation](https://api.freshservice.com/) for more information

#### How to Get API Key/Access Token
**Notion Integration Token:**
1. Go to Notion's [My Integrations](https://www.notion.so/my-integrations) page and create a new integration.
2. Refer to [building your firsrt Notion integration](https://developers.notion.com/docs/create-a-notion-integration) doc for more information
3. Obtain the integration token.

**Asana Personal Access Token:**
1. Log in to your Asana account.
2. Navigate to "My Profile Settings" > "Apps" > "Manage Developer Apps".
3. Create a new app and obtain the personal access token.

**Freshdesk/Freshservice API Key:**
1. Log in to your Freshdesk/Freshservice admin dashboard.
2. Navigate to "Profile settings" > "API" tab.
3. Generate an API key or use an existing one.

## Implementation Steps

1. **Authentication and Setup**:
   - Authenticate with the APIs of Notion, Asana, Freshdesk, and Freshservice, and obtain necessary credentials.
   - Configure access permissions and define default settings for task/project creation.

2. **Integration with Freshdesk/Freshservice**:
   - Use Freddy Copilot to access Freshdesk/Freshservice APIs and SDKs for ticket management and conversation handling.

      ```md
      How to build an app from scratch
      ```
   - Implement custom actions or triggers within Freshdesk/Freshservice to initiate task/project creation in Notion and Asana.

3. **Creating Tasks/Projects**:
   - Integrate Notion and Asana functionality within Freshdesk/Freshservice ticket interface.
   - Enable agents to create tasks or projects directly from ticket conversations, providing relevant details and context.

4. **Linking Tickets and Tasks/Projects**:
   - Establish bi-directional links between Freshdesk/Freshservice tickets and corresponding tasks/projects in Notion and Asana to maintain synchronization.
   - Update ticket status and add comments in Freshdesk/Freshservice based on task/project activities, and vice versa.

5. **Collaboration and Resolution**:
   - Facilitate communication and collaboration between support and other teams by providing visibility into tasks/projects within Freshdesk/Freshservice.
   - Enable seamless handoff of issues between support and other teams, with status updates reflected in both platforms.

## Benefits
- **Streamlined Collaboration**: Integration enables seamless communication and collaboration between support and other teams, leading to faster issue resolution.
- **Enhanced Visibility**: Agents have visibility into tasks/projects directly from Freshdesk/Freshservice, improving context and understanding of cross-functional activities.
- **Improved Efficiency**: Agents can create tasks/projects without leaving the Freshdesk/Freshservice interface, reducing context switching and improving workflow efficiency.
- **Transparent Tracking**: Bi-directional linking ensures that task/project status and updates are synchronized between Freshdesk/Freshservice and Notion/Asana, providing transparency and accountability.
