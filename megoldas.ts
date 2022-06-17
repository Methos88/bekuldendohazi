
//1. feladat

function DiakInfo(nev:string,csoport:number,tipus:boolean):string{
    if(tipus==true){
        return "<br>"+nev+" [Team0"+csoport+"] - Junior FrontEnd"
        }
    else{
       return "<br>"+nev+" [Team0"+csoport+"] - Webprogramozó"
        }   
    }

document.write(DiakInfo("Minta Marton", 8, true))


//2. feladat
var ertekeles:[string,string]
var jeles=["Példás","Példás"]
var jo=["Jó","Jó"]
var valtozo=["Változó","Változó"]
var rossz=["Hanyag","Rossz"]

function SzovegesErtekeles(jegy:number):any{
    if(jegy==5){
        return [jeles[0],jeles[1]]
            }
    else if(jegy==4){
        return [jo[0],jo[1]]
                }
    else if(jegy==3){
        return [valtozo[0],valtozo[1]]
                }
    else if(jegy==2){
        return [rossz[0],rossz[1]]
                }
}


document.write("<br>["+SzovegesErtekeles(2)+"]")

//3. feladat

function HarommalOszthatokSzama(vizsgaltTomb:number[]):number{
    var mennyiseg=0
    for(let i=0;i<vizsgaltTomb.length;i++){
        if(vizsgaltTomb[i]%3==0){
            mennyiseg++
        }
    }
    return mennyiseg
}

document.write("<br>"+HarommalOszthatokSzama([10, 23,12, 24, 31, 33, 42, 20]))


//4. feladat


function Nyeroszamok(mennyiseg:number,alsoHatar:number,felsoHatar:number):number[]{
    let generaltTomb:number[]=[]
    let szerepelE:boolean=false
    let tisztazottTomb:number[]=[]
    
    for(let i=0;i<mennyiseg;i++){
        var generaltSzam:number=Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar
            generaltTomb.push(generaltSzam)

      for (let j = 0; j <tisztazottTomb.length; j++) {
                if (generaltTomb[i]==tisztazottTomb[j] && i != j) 
                    {
                    szerepelE=true;
                    }  
            } 
        if(szerepelE==false)
            {
            tisztazottTomb.push(generaltTomb[i])
            
            }
         else{}   
        }
 return tisztazottTomb
}


document.write("<br>"+Nyeroszamok(5,1,90))