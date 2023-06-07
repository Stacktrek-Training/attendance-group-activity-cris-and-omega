const faction = (chick, desc) => {
    let res="invalid";
    if(chick == "joy" && desc == "gwapa"){
        res= "true";
    }
    return res;
}

console.log(faction('joy','gwapa'));