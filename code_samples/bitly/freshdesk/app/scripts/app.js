
let client;

init();

async function init() {
  client = await app.initialized();
  client.events.on('app.activated', resizeApp);
}

async function resizeApp() {
  try {
    await client.instance.resize({ height: "400px" });
  } catch (error) {
    console.error("failed to resize");
  }
}

let shortenedURL;

document.getElementById("submit-url").addEventListener("click", async () => {
  const urlInput = document.getElementById("url-input").value;

  if (isValidURL(urlInput)) {
    try {
      shortenedURL = await client.request.invoke("shortenURL", { url: urlInput });
      document.getElementById("shortened-url-container").innerHTML = `Shortened URL: ${shortenedURL.response}`;
    } catch (error) {
      client.interface.trigger("showNotify", {
        type: "danger",
        title: "",
        message: "Error occured while shortening the API, kindly check your API Key and Rate limits " + error.message
      });
    }
  } else {
    client.interface.trigger("showNotify", {
      type: "warning",
      title: "",
      message: "Invalid URL. Please enter a valid URL"
    });
  document.getElementById("shortened-url-container").innerHTML = "Invalid URL. Please enter a valid URL.";
  }
});

document.getElementById("show-stats").addEventListener("click", async () => {
    try {
      const stats = await client.request.invoke("clickSummary", { url: shortenedURL });
      document.getElementById("stats-container").innerHTML = `Redirect Count: ${stats.response}`;
    } catch (error) {
      client.interface.trigger("showNotify", {
        type: "warning",
        title: "",
        message: "Failed to get stats, kindly check the URL or API Key"
      });    
    }
});

function isValidURL(url) {
  // Check if the input value is a valid URL
  const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
  return !!urlPattern.test(url);
}