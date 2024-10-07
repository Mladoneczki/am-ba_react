const x="x"
const o="o"

const adatlista=[];

while(adatlista.length<9){
    let szam=Math.floor(Math.random()*10)
    if(szam%2==0){
        adatlista.push(x)
    }
    else{
        adatlista.push(o)
    }

}

export default adatlista