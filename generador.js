document.getElementById("generarBtn").addEventListener("click", function() {
    let texto = parseInt(document.getElementById("passwordSize").value);
    textArea = document.getElementById("claveGenerada");
    if (texto >= 6){
        let newPass = generarClave(texto);
        textArea.value = newPass;
    }
    else if (texto < 6){
        textArea.value = "La contraseña debe tener al menos 6 caracteres";
    }
    else{
        textArea.value = "Error, ingrese un número válido";
    }
});

function generarClave(longitud) {
    let charactersLower = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let symbols = ['!', '#', '$', '%', '&', '*', '+', '-', '/', ':', ';', '<', '=', '>', '?', '@', '_', '{', '|', '}'];
    let newPass = "";
    let allCharacters = charactersLower.concat(numbers, symbols);
    while (newPass.length < longitud) {
        let random = Math.floor(Math.random() * allCharacters.length);
        newPass += allCharacters[random];
    }
    return newPass;
}