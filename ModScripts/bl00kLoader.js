fetch('../bl00ks.json')
    .then((response) => response.json())
    .then((json) => alert(json));
