function ShowMessage(name){
    if(name){
        return "One for " +name+ " one for me. ";
    }else {
        return " One for you, one for me.";
    }}
    let input = document.getElementById("fname");
    document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("output").textContent = ShowMessage(input.value);});