// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
    url = url.replace('http://', '')
    url = url.replace('https://', '')
    url = url.replace('www.', '')
    return url.split('.')[0]
  }

domainName("http://google.com")
domainName("http://google.co.jp")
domainName("https://youtube.com")