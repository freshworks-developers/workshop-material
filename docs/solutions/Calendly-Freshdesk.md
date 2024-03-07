# Use Case: Calendly Integration with Freshdesk

- [Use Case: Calendly Integration with Freshdesk](#use-case-calendly-integration-with-freshdesk)
  - [Solution Overview](#solution-overview)
  - [Prerequisites](#prerequisites)
    - [Necessary Account Creations and API Docs Links:](#necessary-account-creations-and-api-docs-links)
      - [How to Get API Key/Access Token](#how-to-get-api-keyaccess-token)
  - [Implementation Steps](#implementation-steps)

## Solution Overview
- Integrate Calendly, a popular scheduling tool, with Freshdesk to enable agents to schedule meetings directly within ticket conversations.
- Utilize Freddy Copilot for Developers to simplify the integration process and accelerate app development.

## Prerequisites

1. A Calendly account with active event types.
2. A Freshdesk account with administrative privileges.

### Necessary Account Creations and API Docs Links:
1. **Calendly Account**: [Create](https://calendly.com/signup) or log in to your Calendly account. Refer to [Calendly API Documentation](https://developer.calendly.com/api-docs) for more
2. **Freshdesk Account:** [Create](https://developers.freshworks.com/docs/guides/setup/product-signup/) or log in to your Freshdesk account. Refer [Freshdesk API Documentation](https://developers.freshdesk.com/api/) for more information

#### How to Get API Key/Access Token
**Calendly Personal Access Token:**
1. Log in to your Calendly account.
2. Navigate to your [account settings](https://calendly.com/integrations/api_webhooks) and generate a generic access token.

**Freshdesk API Key:**
1. Log in to your Freshdesk admin dashboard.
2. Navigate to "Profile settings" > "API" tab.
3. Generate an API key or use an existing one.

## Implementation Steps

1. **Authentication and Setup**:
   - Authenticate with the Calendly API and obtain necessary credentials.
   - Configure Calendly settings to define meeting types, availability, and other preferences.

2. **Integration with Freshdesk**:
   - Utilize Freddy Copilot for Developers to build app that enables you to perform ticket management and conversation handling.
   - Implement custom actions or triggers within Freshdesk to initiate the scheduling process.

3. **Scheduling Meetings**:
   - Integrate Calendly scheduling functionality within Freshdesk ticket interface.
   - Enable agents to select available time slots, add meeting details, and send meeting invitations to customers directly from the ticket.

4. **Automated Notifications**:
   - Configure automated notifications to inform agents and customers about scheduled meetings.
   - Use Freshdesk automation rules or Calendly webhook integrations to trigger notifications based on specific events.

5. **Tracking and Reporting**:
   - Implement tracking mechanisms to record scheduled meetings and associated ticket details.
   - Generate reports and insights on meeting activities to measure the impact on customer support operations.
