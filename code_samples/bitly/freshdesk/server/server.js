exports = {
  shortenURL: async function(request) {
    const longUrl = request.url;
    console.log(longUrl)
    const requestBody = {
      long_url: longUrl
    };

    try {
      const response = await $request.invokeTemplate("shorten_url", {
        body: JSON.stringify(requestBody)
      });
      const shortenedUrl = JSON.parse(response.response).link;
      renderData(null, shortenedUrl);
    } catch (error) {
      renderData(error, null);
    }
  },
  clickSummary: async function(request) {
    const shortenedUrl = request.url.response;
    console.log(shortenedUrl)

    try {
      const response = await $request.invokeTemplate("bitly_click_summary", {
        context: { url : shortenedUrl}
      });
      const stats = JSON.parse(response.response).link;
      renderData(null, stats);
    } catch (error) {
      renderData(error, null);
    }
  }
};