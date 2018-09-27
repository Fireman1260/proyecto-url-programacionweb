var str = ""
for (let j = 2; j < process.argv.length; j++) {  
    str += process.argv[j]
}

var pE = "("
var pS = ")"

var lE = "["
var lS = "]"

var cE = "{"
var cS = "}"

var pCont = 0
var lCont = 0
var cCont = 0
var y

bandera = true

corr = []



for (var i = 0; i < str.length; i++) {
    x = str[i]
    if(pE == x){
        pCont++;
        corr.push(x)
    }
    else if(pS == x){
        pCont--;
        
        if(corr.length > 0)
            y = corr.pop()
            
        else{
            bandera = false
            break
        }
        
        
        if(lE == y || cE == y)
            bandera = false
    }
    else if(lE == x){
        lCont++;
        corr.push(x)
    }
    else if(lS == x){
        lCont--;
        if(corr.length > 0)
            y = corr.pop()
        else{
            bandera = false
            break
        }
        if(pE == y || cE == y)
            bandera = false
    }
    else if(cE == x){
        cCont++;
        corr.push(x)
    }
    else if(cS == x){
        cCont--;
        if(corr.length > 0)
            y = corr.pop()
        else{
            bandera = false
            break
        }
        if(lE == y || pE == y)
            bandera = false
    }
    else{
        bandera = false
        break;
    }

}

if (bandera){
    if(pCont == 0 && lCont == 0 && cCont == 0)
        console.log("Viene correcto")
    else
        console.log("Esta escrito incorrectamente")
}
else
    console.log("Esta escrito incorrectamente")
    

