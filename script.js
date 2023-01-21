let whole=document.getElementById("whole-div");
let count=0;
let red=[19,37,55,73,91,109];
let lightred=[20,38,56,74,92,110];
let skyblue=[1,32,33,34,35,51,52,53,70,71,89];
let lightorange=[93,130,131,132,133,134,135,136,137,138,139,140,141,142,143];
let orange=[111,148,149,150,151,152,153,154,155,156,157,158,159,160,161];
let yellow=[57,58,59,60,61,62,63,64,65,75,76,77,78,79,80,81,82,83,94,95,96,97,98,99,100,101,112,113,114,115,116];
let green=[31,50,68,69,87,88,107];
let lightgreen=[66,67,49,84,85,86,102,103,104,105,106,120];
let blue=[18,36,54,72,90,108];
let lightblue=[117,118,119,121,122,123,124,125,126]

let arr=["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr"]
for(let i=1;i<162;i++){
 
    let small=document.createElement("div");
    whole.appendChild(small);
    if(i>1 && i<18 || i>20 && i<31 || i>38 && i<49 || i>126 && i<130 || i>143 && i<148 ||i>162 && i<166)
    {
                                                                    
    }
    else{
        
       
        small.id="small";
        if(red.includes(i)){
            small.style.background="#f13c38"
        }
        if(lightred.includes(i)){
            small.style.background="#f35a5c";
        }
        if(skyblue.includes(i)){
            small.style.background="#48bfe9"; 
        }
        if(lightorange.includes(i)){
            small.style.background="#f9ab3c"; 
        }
        if(orange.includes(i)){
            small.style.background="#f7853c"; 
        }
        if(yellow.includes(i)){
            small.style.background="#f7c316"; 
        }
        if(green.includes(i)){
            small.style.background="#76c92c"; 
        }
        if(lightgreen.includes(i)){
            small.style.background="#b5d91c"; 
        }
        if(blue.includes(i)){
            small.style.background="#3c87cf"; 
        }
        if(lightblue.includes(i)){
            small.style.background="#8297d4"; 
        }
        
        small.innerText=arr[count];
        count++;
    }
}
    
   