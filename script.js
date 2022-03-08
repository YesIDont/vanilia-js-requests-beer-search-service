const beers = document.querySelector('.beers');

function createBeerDescription(beer) {
  return `
    <li class="beer">
      <div class="beer-image">
        <img src=${beer.image_url} alt=${beer.name} />
      </div>
      <div class="beer-info">
        <h3>${beer.name}</h3>
        <h4>${beer.tagline}</h4>
        <p>${beer.description}</p>
        <br />
        <p>First brewed: ${beer.first_brewed}</p>
        <br />
        <p>Brewers tips: ${beer.brewers_tips}</p>
        <br />
        <p>Best paired with: ${beer.food_pairing.map(function (food) {
          return `<br />- ${food}`;
        })}</p>
      </div>
    </li>
  `;
}

function displayBeers(data) {
  data.forEach(function (beer) {
    beers.innerHTML += createBeerDescription(beer);
  });
}

fetchBeers(displayBeers);
