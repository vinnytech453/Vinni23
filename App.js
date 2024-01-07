const fs = require('fs');

const filePath = 'path_to_your_app.js'; // Replace this with the actual path to your app.js file
const yourGitHubUsername = 'vinnytech453'; // Replace with your GitHub username
const yourRepoName = 'vinni23'; // Replace with your repository name
const yourHerokuAppName = 'your_heroku_app'; // Replace with your Heroku app name

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  // Replace occurrences of strings with your GitHub username, repo name, and Heroku app name
  const updatedData = data
    .replace(/vinnytech453/g, yourGitHubUsername)
    .replace(/vinni23/g, yourRepoName)
    .replace(/yourHerokuAppName/g, yourHerokuAppName);

  // Write the updated content back to the file
  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) return console.log(err);
    console.log('File updated successfully');
  });
});

