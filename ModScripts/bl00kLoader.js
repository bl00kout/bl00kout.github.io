function bl00kget() { 
    fetch('./bl00ks.json')
    .then((response) => response.json())
    .then((json) => alert(json[0].Name));
}
