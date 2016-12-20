/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function onDragOverPiezaSinPoner(ev) {
    ev.preventDefault();
}

function onDragStartPiezaSinPoner(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function onDropPiezaSinPoner(ev) {
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
}

function onDragOverPiezaPuesta(ev){
    ev.preventDefault();
}

function onDragStartPiezaPuesta(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function onDropPiezaPuesta(ev){
    ev.preventDefault();
    
    var destElement = document.getElementById(ev.dataTransfer.getData("text"));
    var originElement = document.getElementById(ev.target.id);
    
    var destSrc = destElement.src;
    var originSrc = originElement.src;
    
    destElement.src = originSrc;
    originElement.src = destSrc;
}