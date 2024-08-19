const campoTexto = document.getElementById("campoTexto");
campoTexto.style.outline = "none";

campoTexto.addEventListener("focus", () => {
    campoTexto.style.borderColor = "gray";
});

campoTexto.addEventListener("blur", () => {
    campoTexto.style.borderColor = "lightgray";
});