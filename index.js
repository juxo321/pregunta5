var lista = document.getElementById("lista");

var btnCargar = document.getElementById("btnCargar");
btnCargar.addEventListener("click", () => {
    axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", {
    })
        .then(function (res) {
            let json = res.data;
            for(var objeto in json){
                let x = document.createElement("li");
                x.innerHTML = json[objeto].name + " vive en " + json[objeto].city + "<br>";
                lista.appendChild(x);
            }

        })
        .catch(function (error) {
            console.log(error)
        })
});