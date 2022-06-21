let myString = '{"name":"Shany", "country":"Israel", "age":31}';

function getString(myString) {
    const object = JSON.parse(myString);
    document.getElementById("person-name").innerText += object.name;
    document.getElementById("person-country").innerText += object.country;
    document.getElementById("person-age").innerText += object.age;
};