function relationship(stat){
    let res="Absent";
    // TODO: need to refactor. xchange the order of condition
    if(("minahal" === stat) || ("nasaktan"===stat) || ("nagmahal"===stat)){ //// TODO: need to refactor this code. Exchange order of condition
        res="Present";
    }
   return res;
}

console.log(relationship("minahal"));
console.log(relationship("nasaktan"));
console.log(relationship("nagmahal"));
console.log(relationship("pinili"));


console.log((4 % 6));