function connect(){
    var result = document.getElementById("searchName").value;
    var searchN = result.toLowerCase();
    document.getElementById("searchName").value = '';
    
    var url = `https://restcountries.com/v3.1/name/${searchN}`;
    fetch(url)
    .then(res => res.json())
    .then(data => show(data,searchN))

}
function show(data,searchN){
    localStorage.setItem('countryName', searchN);
    var mainDiv = document.getElementById("container");
    mainDiv.textContent = "";

    var newDiv = document.createElement("div");

    var flag = data[0].flags.png;
    var cName = data[0].name.common;
    var officialName = data[0].name.official;
    var currency = data[0].region;

    newDiv.innerHTML = `<img src = "${flag}" alt = "${cName}'s flag">
    <div class="info">
        <h1>${cName}</h1>
        <p>Official Name: ${officialName}</p>
        <p>Region: ${currency}</p>
        <button id="read-more">Read More</button>`;
    mainDiv.appendChild(newDiv);
        newDiv.classList.add("countryCard");
        document.getElementById('read-more').addEventListener('click', function() {
            // Set the URL of the new page
            window.open('weather.html', '_blank');
          });
    
          
    
}

let url = "https://restcountries.com/v3.1/all";

fetch(url)
.then(res => res.json())
.then(data => display(data))



function display(data){
    console.log(data)
    var mainDiv = document.getElementById("container");
    for(var i=0; i<3;i++){
        var newDiv = document.createElement("div");
        let randomNumber = Math.floor(Math.random() * 250);

            var flag = data[randomNumber].flags.png;
            var cName = data[randomNumber].name.common;
            var officialName = data[randomNumber].name.official;
            var currency = data[randomNumber].region;
            localStorage.setItem('countryName', cName);

            

            newDiv.innerHTML = `
            <img src = "${flag}" alt = "${cName}'s flag">
            <div class="info">
                <h1>${cName}</h1>
                <p>Official Name: ${officialName}</p>
                <p>Region: ${currency}</p>
                <button id="read-more">Read More</button>
            </div>
            `;
        mainDiv.appendChild(newDiv);
        newDiv.classList.add("countryCard");
        document.getElementById('read-more').addEventListener('click', function() {
            // Set the URL of the new page
            window.open('weather.html', '_blank');
          });
    }
    
}

