function Puzzle(numPiezas) {
//    var estado = {
//        pieza1:-1,
//        pieza2:-2,
//        pieza3:-3,
//        pieza4:-4
//    };

//    var estado = [-1, -2, -3, -4];

    this.numPiezas = numPiezas;
    this.estado = [];
    this.reset();
}

Puzzle.prototype.getNumPosicionPiezaEnCaja = function (numPieza) {
    if(this.isQuitadaPieza(numPieza)){
        return -this.estado[numPieza-1];
    }else{
        throw "La pieza no está en la caja";
    }
};

Puzzle.prototype.getNumPosicionPiezaEnTablero = function (numPieza) {
    if(this.isColocadaPieza(numPieza)){
        return this.estado[numPieza-1];
    }else{
        throw "La pieza no está en el tablero";
    }
};

Puzzle.prototype.getNumPiezas = function () {
    return numPiezas;
};


Puzzle.prototype.isLibreHuecoTablero = function (posicion) {
    for (var i = 0; i < this.estado.length; i++) {
        if (this.estado[i] === posicion) {
            return false;
        }
    }
    return true;
};

Puzzle.prototype.isPermitidoColocarPieza = function (numPieza, posicion) {
    if(this.isLibreHuecoTablero(posicion) && (this.isColocadaPieza(numPieza)===false)){
        return true;
    }
    return false;
};

Puzzle.prototype.isPermitidoQuitarPieza = function (numPieza) {
    return this.isColocadaPieza(numPieza);
};

Puzzle.prototype.isColocadaPieza = function (numPieza) {
    if (this.estado[numPieza - 1] > 0) {
        return true;
    } else {
        return false;
    }
};

Puzzle.prototype.isQuitadaPieza = function (numPieza) {
    if (this.estado[numPieza - 1] < 0) {
        return true;
    } else {
        return false;
    }
};

Puzzle.prototype.colocarPieza = function (numPieza, posicion) {
    this.estado[numPieza - 1] = posicion;
};

Puzzle.prototype.quitarPieza = function (numPieza) {
    this.estado[numPieza - 1] = -numPieza;
};

Puzzle.prototype.reset = function () {
    for (var i = 0; i < numPiezas; i++) {
        this.estado.push(-(i + 1));
    }
};

Puzzle.prototype.isResuelto = function () {
//    if(this.estado.pieza1===1 &&
//            this.estado.pieza2===2 &&
//            this.estado.pieza3===3 &&
//            this.estado.pieza4===4){
//        return true;
//    }else{
//        return false;
//    }

    for (var i = 0; this.estado.length; i++) {
        if (this.estado[i] !== i + 1) {
            return false;
        }
    }
    return true;
};





Puzzle.prototype.onDragOverPiezaSinPoner = function (ev) {
    ev.preventDefault();
};

Puzzle.prototype.onDragStartPiezaSinPoner = function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

Puzzle.prototype.onDropPiezaSinPoner = function (ev) {
    ev.preventDefault();
//    var data = ev.dataTransfer.getData("text");
//    alert(ev.target.id);
//    ev.dataTransfer.setData("imgCambiada", ev.target.id);
//    ev.target.appendChild(document.getElementById(data));
    var destElement = document.getElementById(ev.dataTransfer.getData("text"));
    var originElement = document.getElementById(ev.target.id);

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;
};

Puzzle.prototype.onDragOverPiezaPuesta = function (ev) {
    ev.preventDefault();
};

Puzzle.prototype.onDragStartPiezaPuesta = function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
};

Puzzle.prototype.onDropPiezaPuesta = function (ev) {
    ev.preventDefault();

    var destElement = document.getElementById(ev.dataTransfer.getData("text"));
    var originElement = document.getElementById(ev.target.id);

    var destSrc = destElement.src;
    var originSrc = originElement.src;

    destElement.src = originSrc;
    originElement.src = destSrc;
};

var puzzle = new Puzzle(4);