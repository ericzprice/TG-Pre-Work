
// XHR GET Requests III
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);


// End XHR GET Requests III
//
//
// XHR GET Requests IV
// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_jjb=';
const additionalParams = '&topics=';

// Selecting page elements
const inputField = document.querySelector('#input');
const topicField = document.querySelector('#topic');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const topicQuery = topicField.value;
  const endpoint = `${url}${queryParams}${wordQuery}${additionalParams}${topicQuery}`;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }

  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);

// End XHR GET Requests IV
//
//
// XHR POST Requests I and II
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('POST', url);
xhr.send(data);
// End XHR POST Requests I and II
//
//
//
// XHR POST Requests III
// Information to reach API
const apiKey = '19188808d08943bc9e73b97e46f274f0';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
  		renderResponse(xhr.response);
		}
  }
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);

// Your shortened url is now:
// rebrand.ly/14hgo
// and it use to be https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60
//
// End XHR POST Requests III
