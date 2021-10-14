let URL = 'https://jsonplaceholder.typicode.com/todos/1';

/* synchronous http request */
function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    return xmlHttp.responseText;
}

console.log(httpGet(URL));
console.log('Do something else 1');

/* asynchronous http request */
function httpGetAsync(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

httpGetAsync('URL');
console.log('Do something else 2');
