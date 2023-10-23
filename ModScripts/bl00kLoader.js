function bl00kget() { 
    fetch('ModScripts/bl00ks.json').then((response) => response.json()).then((json) => {
        var js = json;
        js = JSON.parse(js)
        alert(js.Meme-001.Name);
    });
}
