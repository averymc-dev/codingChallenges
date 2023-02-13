/*Your task is to create userlinks for the url, you will be given a username and must return a valid link.*/

function generateLink(username){
  return `http://www.codewars.com/users/${encodeURIComponent(username)}`
}

generateLink('bob d')