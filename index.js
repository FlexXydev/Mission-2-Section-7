// Get the access token from the URL
function getAccessTokenFromURL() {
    const hash = window.location.hash.substring(1);
    const parameters = new URLSearchParams(hash);
    return parameters.get("access_token");
  }
  
  // Update the profile picture based on the access token
  function updateProfilePicture(accessToken) {
    const profilePicture = document.getElementById("profile-picture");
    fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    })
      .then(response => response.json())
      .then(data => {
        profilePicture.src = data.avatar;
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // Redirect the user to the Discord OAuth2 authorization page in a new tab
  const loginButton = document.getElementById("login-button");
  loginButton.addEventListener("click", function() {
    window.open("https://discord.com/api/oauth2/authorize?client_id=1072918782634377317&redirect_uri=https%3A%2F%2Fdiscord.gg%2Fsection7&response_type=code&scope=guilds.join%20identify", "_blank");
  });
  
  // Check if the access token is present in the URL
  const accessToken = getAccessTokenFromURL();
  if (accessToken) {
    updateProfilePicture(accessToken);
  }
  