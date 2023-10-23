function bl00kget() { 
    fetch('./bl00ks.json').then((response) => response.json()).then((json) => {
        var js = json;
        json.parse(js)
        alert(js.Meme-001.Name);
    });
}
