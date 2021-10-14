let URL = 'https://jsonplaceholder.typicode.com/todos/1';

/* synchronous http request */
function httpGet(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

console.log(httpGet(URL));
console.log('Do something else 1');

/* asynchronous http request */
function httpGetAsync(theUrl) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
        switch(xmlHttp.readyState) {
            case 1: {
                console.log('http OPENED');
                break;
            }
            case 2: {
                console.log('http HEADERS_RECEIVED');
                break;
            }
            case 3: {
                console.log('http LOADING');
                break;
            }
            case 4: {
                console.log('http DONE');
                if (xmlHttp.status === 200){
                    console.log(xmlHttp.responseText);
                }
                break;
            }
            default: {
                console.log('unexpected');
            }
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

console.log(httpGetAsync(URL));
console.log('Do something else 2');
