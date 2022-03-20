const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            alert("pokemon no encontrado");
            // pokeImage("./pokemon-sad.gif")
        } else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            document.getElementById('name').innerHTML = data.name.toUpperCase();
            document.getElementById('type').innerHTML = data.types[0].type.name.toUpperCase();
            document.getElementById('move').innerHTML = data.moves[0].move.name.toUpperCase();
            document.getElementById('move1').innerHTML = data.moves[1].move.name.toUpperCase();
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}