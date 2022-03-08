function fetchBeers(useDataCallback) {
  const endpoint = 'https://api.punkapi.com/v2/beers';
  const request = new XMLHttpRequest();

  function onReady() {
    if (request.readyState === 4 /* DONE */) {
      const data = JSON.parse(request.responseText);
      console.log(data);
      useDataCallback(data);
    }
  }

  request.addEventListener('readystatechange', onReady);
  request.open('GET', endpoint);
  request.send();
}