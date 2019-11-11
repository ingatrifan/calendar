let azi=new Date();
let an = azi.getFullYear();
let luna =azi.getMonth();

let luni = ["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"];

let lunaAn = document.getElementById("LunaAn");


function Calendar(luna,an){
    let prima = (new Date(an , luna)).getDay();
    let zile = 32 - new Date(an,luna,32).getDate();
    let cal = document.getElementById("calendar-body");
    cal.innerHTML="";
    lunaAn.innerHTML = luni[luna] + " " + an;
    let data =1;
    for (let i=0;i<6;i++){
        let tr = document.createElement('tr');
        for (let j=0;j<7;j++){
            if (i===0 && j<prima){
                let td = document.createElement('td');
                let text = document.createTextNode("");
                td.appendChild(text);
                tr.appendChild(td);
            } else if (data>zile){
                break;
            } else {
                let td = document.createElement('td');
                let text = document.createTextNode(data);
                td.appendChild(text);
                tr.appendChild(td);
                data++;
            }

        }
        cal.appendChild(tr);
    }
}
function right() {
    an = (luna === 11) ?an + 1 : an;
    luna = (luna+ 1) % 12;
    Calendar(luna, an);
}

function left() {
    an = (luna === 0) ? an - 1 : an;
    luna = (luna === 0) ? 11 : luna - 1;
    Calendar(luna, an);
}

Calendar(luna,an);