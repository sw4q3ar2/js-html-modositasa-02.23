window.addEventListener("load", init);

function init() {
    document.getElementById("tartalom").innerHTML = "<p>JavaScript</p>";

    szavak();
}

function szavak() {
    const lista = ["meg", "mindig", "ehes", "vagyok"];
    document.getElementById("tartalom").innerHTML = "<ul>";
    for (let index = 0; index < lista.length; index++) {
        document.getElementById("tartalom").innerHTML += (`<li> ${lista[index]} </li>`);
    }
    document.getElementById("tartalom").innerHTML += "</ul>";
}