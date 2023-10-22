function bl00kget() { 
    fetch('bl00ks.json')
    .then((response) => response.json())
    .then((json) => alert(json.Meme-001["Name"]));
}
