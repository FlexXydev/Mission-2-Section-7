const API_ENDPOINT = 'https://discord.com/api/v10';
const CLIENT_ID = '1072918782634377317';
const CLIENT_SECRET = 'MGWky5gphV00QGz2O2WbEZVbn8dQJhCZ';
const REDIRECT_URI = 'https://discord.gg/section7';

async function exchangeCode(code) {
  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: REDIRECT_URI
  };
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const response = await fetch(`${API_ENDPOINT}/oauth2/token`, {
    method: 'POST',
    headers: headers,
    body: new URLSearchParams(data)
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
}