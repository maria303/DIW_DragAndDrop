var puzzle = new Puzzle(4);

function onDragStartPieza(event) {
//    event.dataTransfer.setData("text", getIdPiezaFromElementPieza(event.target));

    var elementPieza = event.target;
    var idPieza = getIdPiezaFromElementPieza(elementPieza);
    event.dataTransfer.setData("text", getIdPiezaFromElementPieza(idPieza));
}
;

function onDropHuecoCaja(event) {
    event.preventDefault();

    var data = event.dataTransfer.getData("text");
    event.dataTransfer.setData("imgCambiada", event.target.id);
    event.target.appendChild(document.getElementById(data));
}
;

function onDropHuecoTablero(event) {
    event.preventDefault();

    var idPieza = event.dataTransfer.getData("text");
    var elementHueco = event.currentTarget;
//    event.dataTransfer.setData("imgCambiada", elementHueco);
//    event.target.appendChild(document.getElementById(idPieza));

    ////////
    event.dataTransfer.setData("imgCambiada", elementHueco);
    event.target.appendChild(document.getElementById(idPieza));
}
;

function onDragOverHuecoCaja(event) {
    event.preventDefault();
}
;

function onDragOverHuecoTablero(event) {
    event.preventDefault();
}
;



function getIdPiezaFromElementPieza(elementPieza) {
    var value = $(elementPieza).attr("id-pieza");
    if ((typeof (value) === typeof (undefined)) || (value === false)) {
        throw "No existe el atributo id-pieza";
    }
    numericValue = value * 1;
    if (isNaN(numericValue) === true) {
        throw "El valor de id-pieza no es numérico";
    }
    return numericValue;
}
;
function getIdHuecoTableroFromElementHuecoTablero(elementHuecoTablero) {
    return $(elementHuecoTablero).attr("id-hueco-tablero") * 1;
}
;
function getIdHuecoCajaFromElementHuecoCaja(elementHuecoCaja) {
    return $(elementHuecoCaja).attr("id-hueco-caja") * 1;
}
;

function getElementPiezaFromIdPieza(idPieza) {
    var elements = $("[id-pieza='" + idPieza + "']");
    if (elements.length === 0) {
        throw "No existe el elemento con idPieza " + idPieza;
    }
    if (elements.length > 1) {
        throw "Existe más de un elemento con idPieza " + idPieza;
    }
    return elements[0];
}
;
function getElementHuecoTableroFromIdHuecoTablero(idHuecoTablero) {
    return $("[id-hueco-tablero='" + idHuecoTablero + "']")[0];
}
;
function getElementHuecoCajaFromIdHuecoCaja(idHuecoCaja) {
    return $("[id-hueco-caja='" + idHuecoCaja + "']")[0];
}
;