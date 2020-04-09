function select(name, other1, other2) {
    document.getElementById(name).classList.toggle("show");
    document.getElementById(name + "P").classList.toggle("select");
    document.getElementById(other1).classList.remove("show");
    document.getElementById(other1 + "P").classList.remove("select");
    document.getElementById(other2).classList.remove("show");
    document.getElementById(other2 + "P").classList.remove("select");
}