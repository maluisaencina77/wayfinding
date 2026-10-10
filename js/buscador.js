function buscarPunto(){

    const texto = document
        .getElementById("busqueda")
        .value
        .trim()
        .toLowerCase();

    switch(texto){

        case "biblioteca":

            mostrarPlano();
            mostrarInfoPlano(
                "Biblioteca",
                "Bloque Acad谷mico"
            );
            break;

        case "laboratorio":

            mostrarPlano();
            mostrarInfoPlano(
                "Laboratorio",
                "Segundo Piso"
            );
            break;

        case "direccion":
        case "direcci車n":

            mostrarPlano();
            mostrarInfoPlano(
                "Direcci車n",
                "Administraci車n"
            );
            break;

        case "secretaria":
        case "secretar赤a":

            mostrarPlano();
            mostrarInfoPlano(
                "Secretar赤a",
                "Administraci車n"
            );
            break;

        case "cancha":

            mostrarPlano();
            mostrarInfoPlano(
                "Cancha",
                "Sector Deportivo"
            );
            break;

        default:

            alert("Ubicaci車n no encontrada.");
    }

}