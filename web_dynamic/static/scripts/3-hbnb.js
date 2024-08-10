$(document).ready(function () {
  const apiUrl = 'http://0.0.0.0:5001/api/v1/places_search/';

  function createPlaceArticle (place) {
    return `
      <article>
        <div class="title_box">
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
        </div>
        <div class="information">
          <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
          <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
          <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
        </div>
        <div class="description">
          ${place.description}
        </div>
      </article>
    `;
  }

  function updatePlaces () {
    $.ajax({
      url: apiUrl,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({}),
      success: function (data) {
        const placesSection = $('.places');
        placesSection.empty(); // Clear existing content

        data.forEach(function (place) {
          const article = createPlaceArticle(place);
          placesSection.append(article);
        });
      },
      error: function () {
        console.error('Failed to fetch places.');
      }
    });
  }OA

  updatePlaces();
});
