const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

  const towns = jsonObject['towns'];
  if (i = 4) {
        let eventfield = document.createElement('section');
        let h3 = document.createElement('h3');
        let firstevent = document.createElement('p');
        let secondevent = document.createElement('p');
        let thirdevent = document.createElement('p');
        
        eventfield.className = 'events';
        
        h3.textContent = "Upcoming " + towns[i].name + " Events";
        firstevent.textContent = towns[i].events[0];
        secondevent.textContent = towns[i].events[1];
        thirdevent.textContent = towns[i].events[2];


        eventfield.appendChild(h3);
        eventfield.appendChild(firstevent);
        eventfield.appendChild(secondevent);
        eventfield.appendChild(thirdevent);
            
        
        document.querySelector('div.eventcard').appendChild(eventfield);
  }
});