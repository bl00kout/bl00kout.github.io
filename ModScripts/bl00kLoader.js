function bl00kget(name) { 
    fetch('ModScripts/bl00ks.json').then((response) => response.json()).then((json) => {
        var js = json;
        js = JSON.stringify(js)
        js = JSON.parse(js)
        alert(js[name].Name);
    });
}
