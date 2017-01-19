{
    var puzzle_test = new Puzzle(4);
    if (puzzle_test.isColocadaPieza(1) === true) {
        alert("Error en el test de isColocadaPieza");
    }
}

{
    var puzzle_test = new Puzzle(4);
    if (!puzzle_test.isQuitadaPieza(1) === true) {
        alert("Error en el test de isQuitadaPieza");
    }
}

{
    var puzzle_test = new Puzzle(4);
    puzzle_test.colocarPieza(1, 3);
    if (!puzzle_test.isQuitadaPieza(1) === false) {
        alert("Error en el test de isQuitadaPieza");
    }
    if (!puzzle_test.isColocadaPieza(1) === false) {
        alert("Error en el test de isColocadaPieza");
    }
    if (!puzzle_test.getNumPosicionPiezaEnTablero(1) === 3) {
        alert("Error en el test de getNumPosicionPiezaEnTablero");
    }
}

{
    var puzzle_test = new Puzzle(4);
    puzzle_test.colocarPieza(1, 3);
    puzzle_test.quitarPieza(1);
    if (!puzzle_test.isQuitadaPieza(1) === true) {
        alert("Error en el test de isQuitadaPieza");
    }
    if (!puzzle_test.isColocadaPieza(1) === false) {
        alert("Error en el test de isColocadaPieza");
    }
    if (!puzzle_test.getNumPosicionPiezaEnCaja(1) === 1) {
        alert("Error en el test de getNumPosicionPiezaEnCaja");
    }
}

{
    var puzzle_test = new Puzzle(4);
    if (!puzzle_test.isPermitidoColocarPieza(1, 3) === true) {
        alert("Error en el test de isPermitidoColocarPieza");
    }
    if (!puzzle_test.isPermitidoQuitarPieza(1) === false) {
        alert("Error en el test de isPermitidoQuitarPieza");
    }
}

{
    var puzzle_test = new Puzzle(4);
    puzzle_test.colocarPieza(1, 3);
    if (!puzzle_test.isPermitidoColocarPieza(1, 3) === false) {
        alert("Error en el test de isPermitidoColocarPieza");
    }
    if (!puzzle_test.isPermitidoQuitarPieza(1) === true) {
        alert("Error en el test de isPermitidoQuitarPieza");
    }
}