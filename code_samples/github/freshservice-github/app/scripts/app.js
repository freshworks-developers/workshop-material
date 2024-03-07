var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', setupApp);
}

async function setupApp() {
  // Show "View all issues" and "New Issue" buttons
  const viewIssuesBtn = document.getElementById('view-issues');
  const newIssueBtn = document.getElementById('new-issue');
  viewIssuesBtn.style.display = 'inline-block';
  newIssueBtn.style.display = 'inline-block';

  // Hide issues container and issue form
  const issuesContainer = document.getElementById('issues-container');
  const issueForm = document.getElementById('issue-form');
  issuesContainer.style.display = 'none';
  issueForm.style.display = 'none';

  // Add event listener for "View all issues" button click
  viewIssuesBtn.addEventListener('click', async () => {
    viewIssuesBtn.style.display = 'none';
    newIssueBtn.style.display = 'inline-block';
    issuesContainer.style.display = 'block';
    issueForm.style.display = 'none';
    fetchIssues();
  });

  // Add event listener for "New Issue" button click
  newIssueBtn.addEventListener('click', () => {
    viewIssuesBtn.style.display = 'inline-block';
    newIssueBtn.style.display = 'none';
    issuesContainer.style.display = 'none';
    issueForm.style.display = 'block';
  });

  // Add event listener for issue form submission
  const createIssueBtn = document.getElementById('create-issue');
  createIssueBtn.addEventListener('click', async () => {
    const title = document.querySelector('#issue-form fw-input[name="title"]').value;
    const description = document.querySelector('#issue-form fw-textarea[name="description"]').value;
    // Call function to create the issue with title and description
    await createIssue(title, description);
  });

  // Call fetchIssues on app activation
  fetchIssues();
}

async function fetchIssues() {
  try {
    // Invoke the 'fetchIssues' server method
    const data = await client.request.invoke('fetchIssues', {});
    const issues = JSON.parse(data.response);
    renderIssues(issues);
    client.trigger.error('Issues fetched successfully!');
  } catch (err) {
    client.trigger.error('Error fetching issues:', err);
  }
}

async function renderIssues(issues){
  // Get the container element to append the table
  const container = document.getElementById('issues-container');
  container.innerHTML = ''; // Clear previous content

  // Create table element
  const table = document.createElement('fw-data-table');
  table.setAttribute('id', 'datatable-issues');
  table.setAttribute('label', 'GitHub Issues');

  // Define columns
  const columns = [{
      "key": "number",
      "text": "Issue ID"
    },
    {
      "key": "title",
      "text": "Title"
    },
    {
      "key": "body",
      "text": "Body"
    }
  ];

  // Define rows
  const rows = issues.map(issue => {
    return {
      "number": issue.number,
      "title": issue.title,
      "body": issue.body
    };
  });

  // Assign columns and rows to the table
  table.columns = columns;
  table.rows = rows;

  // Append table to the container
  container.appendChild(table);
}

async function createIssue(title, description) {
  // Add your code to create the issue with the provided title and description
  try {
    // Invoke the 'createIssue' server method
    const response = await client.request.invoke('createIssue', { title, description });
    console.log(response)
    client.interface.trigger('showNotify', {
      type: 'success',
      message: 'Issue created successfully!'
    });
    issueForm.reset(); // Clear the form fields
  } catch (err) {
      client.interface.trigger('showNotify', {
        type: 'error',
        message: `Error creating issue: ${err.message}`
      });  
  }
}