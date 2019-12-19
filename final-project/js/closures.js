const requestURL = 'https://dezbutler.github.io/final-project-temp/data/temples.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 

  const temples = jsonObject['temples'];
  if (i = 1) {
        let carclosurefield = document.createElement('section');
        let carclose1 = document.createElement('p');
        let carclose2 = document.createElement('p');
        let carclose3 = document.createElement('p');
        let carclose4 = document.createElement('p');
        let carclose5 = document.createElement('p');
        let carclose6 = document.createElement('p');
        let carclose7 = document.createElement('p');
        let carclose8 = document.createElement('p');
        let carclose9 = document.createElement('p');
        let carclose10 = document.createElement('p');
        let carclose11 = document.createElement('p');
        let carclose12 = document.createElement('p');
        
        carclosurefield.className = 'closures';
        
        carclose1.textContent = temples[i].closures[0];
        carclose2.textContent = temples[i].closures[1];
        carclose3.textContent = temples[i].closures[2];
        carclose4.textContent = temples[i].closures[3];
        carclose5.textContent = temples[i].closures[4];
        carclose6.textContent = temples[i].closures[5];
        carclose7.textContent = temples[i].closures[6];
        carclose8.textContent = temples[i].closures[7];
        carclose9.textContent = temples[i].closures[8];
        carclose10.textContent = temples[i].closures[9];
        carclose11.textContent = temples[i].closures[10];
        carclose12.textContent = temples[i].closures[11];

        carclosurefield.appendChild(carclose1);
        carclosurefield.appendChild(carclose2);
        carclosurefield.appendChild(carclose3);
        carclosurefield.appendChild(carclose4);
        carclosurefield.appendChild(carclose5);
        carclosurefield.appendChild(carclose6);
        carclosurefield.appendChild(carclose7);
        carclosurefield.appendChild(carclose8);
        carclosurefield.appendChild(carclose9);
        carclosurefield.appendChild(carclose10);
        carclosurefield.appendChild(carclose11);
        carclosurefield.appendChild(carclose12);
            
        
        document.querySelector('div.closurescardston').appendChild(carclosurefield);
  }
  if (i = 2) {
    let calclosurefield = document.createElement('section');
    let calclose1 = document.createElement('p');
    let calclose2 = document.createElement('p');
    let calclose3 = document.createElement('p');
    let calclose4 = document.createElement('p');
    let calclose5 = document.createElement('p');
    let calclose6 = document.createElement('p');
    let calclose7 = document.createElement('p');
    let calclose8 = document.createElement('p');
    
    calclosurefield.className = 'closures';
    
    calclose1.textContent = temples[i].closures[0];
    calclose2.textContent = temples[i].closures[1];
    calclose3.textContent = temples[i].closures[2];
    calclose4.textContent = temples[i].closures[3];
    calclose5.textContent = temples[i].closures[4];
    calclose6.textContent = temples[i].closures[5];
    calclose7.textContent = temples[i].closures[6];
    calclose8.textContent = temples[i].closures[7];
  
    calclosurefield.appendChild(calclose1);
    calclosurefield.appendChild(calclose2);
    calclosurefield.appendChild(calclose3);
    calclosurefield.appendChild(calclose4);
    calclosurefield.appendChild(calclose5);
    calclosurefield.appendChild(calclose6);
    calclosurefield.appendChild(calclose7);
    calclosurefield.appendChild(calclose8);
        
    
    document.querySelector('div.closurescalgary').appendChild(calclosurefield);
  }
  if (i = 3) {
    let edclosurefield = document.createElement('section');
    let edclose1 = document.createElement('p');
    let edclose2 = document.createElement('p');
    let edclose3 = document.createElement('p');
    let edclose4 = document.createElement('p');
    let edclose5 = document.createElement('p');
    let edclose6 = document.createElement('p');
    let edclose7 = document.createElement('p');
    let edclose8 = document.createElement('p');
    let edclose9 = document.createElement('p');
    
    edclosurefield.className = 'closures';
    
    edclose1.textContent = temples[i].closures[0];
    edclose2.textContent = temples[i].closures[1];
    edclose3.textContent = temples[i].closures[2];
    edclose4.textContent = temples[i].closures[3];
    edclose5.textContent = temples[i].closures[4];
    edclose6.textContent = temples[i].closures[5];
    edclose7.textContent = temples[i].closures[6];
    edclose8.textContent = temples[i].closures[7];
    edclose9.textContent = temples[i].closures[8];

    edclosurefield.appendChild(edclose1);
    edclosurefield.appendChild(edclose2);
    edclosurefield.appendChild(edclose3);
    edclosurefield.appendChild(edclose4);
    edclosurefield.appendChild(edclose5);
    edclosurefield.appendChild(edclose6);
    edclosurefield.appendChild(edclose7);
    edclosurefield.appendChild(edclose8);
    edclosurefield.appendChild(edclose9);
        
    
    document.querySelector('div.closuresedmonton').appendChild(edclosurefield);
}
if (i = 4) {
  let vanclosurefield = document.createElement('section');
  let vanclose1 = document.createElement('p');
  let vanclose2 = document.createElement('p');
  let vanclose3 = document.createElement('p');
  let vanclose4 = document.createElement('p');
  let vanclose5 = document.createElement('p');
  let vanclose6 = document.createElement('p');
  let vanclose7 = document.createElement('p');
  let vanclose8 = document.createElement('p');
  let vanclose9 = document.createElement('p');
  
  vanclosurefield.className = 'closures';
  
  vanclose1.textContent = temples[i].closures[0];
  vanclose2.textContent = temples[i].closures[1];
  vanclose3.textContent = temples[i].closures[2];
  vanclose4.textContent = temples[i].closures[3];
  vanclose5.textContent = temples[i].closures[4];
  vanclose6.textContent = temples[i].closures[5];
  vanclose7.textContent = temples[i].closures[6];
  vanclose8.textContent = temples[i].closures[7];
  vanclose9.textContent = temples[i].closures[8];

  vanclosurefield.appendChild(vanclose1);
  vanclosurefield.appendChild(vanclose2);
  vanclosurefield.appendChild(vanclose3);
  vanclosurefield.appendChild(vanclose4);
  vanclosurefield.appendChild(vanclose5);
  vanclosurefield.appendChild(vanclose6);
  vanclosurefield.appendChild(vanclose7);
  vanclosurefield.appendChild(vanclose8);
  vanclosurefield.appendChild(vanclose9);
      
  
  document.querySelector('div.closuresvancouver').appendChild(vanclosurefield);
}
});