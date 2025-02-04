const inputs = document.getElementsByClassName("inputs");
const units = document.getElementsByClassName("units");

const calc1Display = document.getElementById("calc1Display");
const calc2Display = document.getElementById("calc2Display");

const calcBtn = document.getElementById("calcBtn");

let unknown1;
let unknown2;

// Inputs
const mInput = inputs[0];
const m2Input = inputs[1];

const rInput = inputs[2];
const r2Input = inputs[3];

const FgInput = inputs[4];

const FInput = inputs[5];
const F2Input = inputs[6];

const MInput = inputs[7];
const M2Input = inputs[8];

// Units inputs
let mUnit = units[0].value;
let m2Unit = units[1].value;

let rUnit = units[2].value;
let r2Unit = units[3].value;

let FgUnit = units[4].value;

let FUnit = units[5].value;
let F2Unit = units[6].value;

let MUnit = units[7].value;
let M2Unit = units[8].value;

// Numbers
let m;
let m2;

let r;
let r2;

let Fg;
let F;

let F2;

let M;
let M2;

m = Number(m);
m2 = Number(m2);

r = Number(r);
r2 = Number(r2);

Fg = Number(Fg);

F = Number(F);
F2 = Number(F2);

M = Number(M);
M2 = Number(M2);

document.addEventListener("change", () => {
    Array.from(inputs).forEach((element) => {
        if(element.value == "?" && element.id.includes("2")){
            unknown2 = element.id;
        }
        else if(element.value == "?" && !element.id.includes("2")){
            unknown1 = element.id;
        }
    });

    mUnit = units[0].value;
    m2Unit = units[1].value;
    rUnit = units[2].value;
    r2Unit = units[3].value;
    FgUnit = units[4].value;
    FUnit = units[5].value;
    F2Unit = units[6].value;
    MUnit = units[7].value;
    M2Unit = units[8].value;

    m = mInput.value;
    m2 = m2Input.value;

    r = rInput.value;
    r2 = r2Input.value;

    Fg = FgInput.value;

    F = FInput.value;
    F2 = F2Input.value;

    M = MInput.value
    M2 = M2Input.value
});

calcBtn.onclick = function(){
    calc()
}

function calc(){
    calcm();
    calcr();
    calcFg();
    calcF();
    calcM();
    calcm2();
    calcr2();
    calcF2();
    calcM2();
}

function calcm(){
    if(unknown1 == mInput.id){
        convertUnits();

        let result = F / Fg;
        calc1Display.innerHTML = `m<sub>1</sub> = ${writeFraction("F", "", "Fg", "")} <br><br> m<sub>1</sub> = ${writeFraction(F, "N", Fg, "N/kg")} <br><br> m<sub>1</sub> = ${result}kg`;
    }
    
}

function calcm2(){
    if(unknown2 == m2Input.id){
        convertUnits();

        let result = F2 / Fg;
        calc2Display.innerHTML = `m<sub>2</sub> = ${writeFraction("F", "", "Fg", "")} <br><br> m<sub>2</sub> = ${writeFraction(F2, "N", Fg, "N/kg")} <br><br> m<sub>2</sub> = ${result}kg`;
    }
}

function calcr(){
    if(unknown1 == rInput.id){
        convertUnits();

        let result = M / F;
        calc1Display.innerHTML = `r<sub>1</sub> = ${writeFraction("M", "", "F", "")} <br><br> r<sub>1</sub> = ${writeFraction(M, "Nm", F, "N")}<br><br> r<sub>1</sub> = ${result}m`;
    }
}

function calcr2(){
    if(unknown2 == r2Input.id){
        convertUnits();

        let result = M2 / F2;
        calc2Display.innerHTML = `r<sub>2</sub> = ${writeFraction("M", "", "F", "")} <br><br> r<sub>2</sub> = ${writeFraction(M2, "Nm", F2, "N")}<br><br> r<sub>2</sub> = ${result}m`;
    }
}

function calcFg(){ 
    if(unknown1 == FgInput.id){
        convertUnits();

        let result = F / m;
        calc1Display.innerHTML = `F<sub>g</sub> = ${writeFraction("F", "", "m", "")} <br><br> F<sub>g</sub> = ${writeFraction(F, "N", m, "kg")}<br><br> F<sub>g</sub> = ${result}N/Kg`;
    }
}

function calcF(){  
    if(unknown1 == FInput.id){
        convertUnits();

        let result = m * Fg;
        calc1Display.innerHTML = `F<sub>1</sub> = m × F<sub>g</sub> <br><br> F<sub>1</sub> = ${m}kg × ${Fg}N/kg <br><br> F<sub>1</sub> = ${result}N`;
    }
}

function calcF2(){  
    if(unknown2 == F2Input.id){
        convertUnits();

        let result = m2 * Fg;
        calc2Display.innerHTML = `F<sub>2</sub> = m × F<sub>g</sub> <br><br> F<sub>2</sub> = ${m2}kg × ${Fg}N/kg <br><br> F<sub>2</sub> = ${result}N`;
    }
}

function calcM(){
    if(unknown1 == MInput.id){
        convertUnits();

        let result = F * r;
        calc1Display.innerHTML = `M<sub>1</sub> = F × r <br><br> M<sub>1</sub> = ${F}N × ${r}m <br><br> M<sub>1</sub> = ${result}Nm`;
    }
}

function calcM2(){
    if(unknown2 == M2Input.id){
        convertUnits();

        let result = F2 * r2;
        calc2Display.innerHTML = `M<sub>2</sub> = F × r <br><br> M<sub>2</sub> = ${F2}N × ${r2}m <br><br> M<sub>2</sub> = ${result}Nm`;
    }
}

function writeFraction(upper, upperUnit, down, downUnit){
    return frac = 
    `<math>
        <mfrac>
            <mn>${upper}${upperUnit}</mn>
            <mn>${down}${downUnit}</mn>
        </mfrac>
    </math>`;
}

function convertUnits(){
    // Weight

    if(mUnit != "kg"){
        switch(mUnit){
            case "g":
                m = m / 1000;
            break;

            case "t":
                m = m * 1000;
            break;
        }
    }

    if(m2Unit != "kg"){
        switch(m2Unit){
            case "g":
                m2 = m2 / 1000;
            break;

            case "t":
                m2 = m2 * 1000;
            break;
        }
    }

    // Force

    if(FUnit != "N"){
        switch(FUnit){
            case "kN":
                F = F * 1000;
            break;

            case "mN":
                F = F * 1000000;
            break;

            case "gN":
                F = F * 1000000000;
            break;
        }
    }

    if(F2Unit != "N"){
        switch(F2Unit){
            case "kN":
                F2 = F2 * 1000;
            break;

            case "mN":
                F2 = F2 * 1000000;
            break;

            case "gN":
                F2 = F2 * 1000000000;
            break;
        }
    }

    // Length

    if(rUnit != "m"){
        switch(rUnit){
            case "km":
                r = r * 1000;
            break;

            case "dm":
                r = r / 10;
            break;

            case "cm":
                r = r / 100;
            break;

            case "mm":
                r = r / 1000;
            break;
        }
    }

    if(r2Unit != "m"){
        switch(r2Unit){
            case "km":
                r2 = r2 * 1000;
            break;

            case "dm":
                r2 = r2 / 10;
            break;

            case "cm":
                r2 = r2 / 100;
            break;

            case "mm":
                r2 = r2 / 1000;
            break;
        }
    }
}