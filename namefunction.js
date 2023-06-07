
function surveillads(search,...chicklist){
    let result = "Si mam joy lang gd ang gwapa";
    if(search!="gwapa"){
        result="invalid";
    }else{
        
        for(chick of chicklist){
            if(chick ==="joy"){
                result=chick;
            }
        }
    }
    return result;
}

console.log(surveillads('gwapa','nadine', 'lisa','joy'));