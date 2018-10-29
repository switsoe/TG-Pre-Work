Codecademy logo
Introduction To JavaScript



1
// information to reach API
2
const apiKey = 'e7117f229af547cfa5e23d6446a9c75b';
3
const url = 'https://api.rebrandly.com/v1/links';
4
​
5
// Some page elements
6
const inputField = document.querySelector('#input');
7
const shortenButton = document.querySelector('#shorten');
8
const responseField = document.querySelector('#responseField');
9
​
10
// AJAX functions
11
// Code goes here
12
const shortenUrl = async () => {
13
  const urlToShorten = inputField.value;
14
  const data = JSON.stringify({destination: urlToShorten});
15
  try {
16
    const response = await fetch(url, {
17
      method:'POST',
18
      body:data,
19
      headers:{ 'Content-type': 'application/json', 'apikey': apiKey }
20
    })
21
    if (response.ok) {
22
      const jsonResponse = await response.json();
23
      renderResponse(jsonResponse);
24
    }
25
  }
26
  catch(error) {
27
    console.log(error)
28
}
29
}
30
​
31
// Clear page and call AJAX functions
32
const displayShortUrl = (event) => {
33
  event.preventDefault();
34
  while(responseField.firstChild){
35
    responseField.removeChild(responseField.firstChild);
36
  }
37
  shortenUrl();
38
}
39
​
40
shortenButton.addEventListener('click', displayShortUrl);
41
​
