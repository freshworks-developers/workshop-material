
exports = {
  createIssue: async function(request) {
    const title = request.title;
    const description = request.description;
    const issue = {
      title: title,
      description: description
    };

    try {
      const response = await $request.invokeTemplate("create_issue", {
        body: JSON.stringify(issue)
      });
      renderData(null, response);
    } catch (error) {
      console.log(error)
      if(error.status === 404 || 504){
        console.log(`Rate limit breached: ${error.message}`)
      }else{
          console.log(`Error creating issue: ${error.message}`)
      }
    }
  },

  fetchIssues: async function() {
    try {
      const response = await $request.invokeTemplate("fetch_issues");
      renderData(null, response.response);
    } catch (error) {
      console.error("Error fetching issues:", error);
    }
  }
};
