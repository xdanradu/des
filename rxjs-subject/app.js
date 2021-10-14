const { Subject } = rxjs;

value$ = new Subject(0);

function modify() {
    let random = Math.random();
    value$.next(random);
}

value$.subscribe((newValue) => {
    console.log(`new value: ${newValue}`);
    console.log(document);
    document.getElementById('nr').innerHTML = newValue;
});
