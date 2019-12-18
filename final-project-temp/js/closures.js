const requestURL = 'data/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

  const temples = jsonObject['temples'];
  if (i = 0) {
        let closurefield = document.createElement('section');
        let c1 = document.createElement('p');
        let c2 = document.createElement('p');
        let c3 = document.createElement('p');
        
        closurefield.className = 'closures';
        
        c1.textContent = temples[i].closures[0];
        c2.textContent = temples[i].closures[1];
        c3.textContent = temples[i].closures[2];

        closurefield.appendChild(c1);
        closurefield.appendChild(c2);
        closurefield.appendChild(c3);
            
        
        document.querySelector('div.closurediv').appendChild(closurefield);
  }
});