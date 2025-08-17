var success = document.getElementById('Success')
var failure = document.getElementById('Error')
var info = document.getElementById('Info')
var alerts = document.querySelector('.alerts')
let count=[];

success.addEventListener('click', (e) => handleAlert(e))
failure.addEventListener('click', (e) => handleAlert(e))
info.addEventListener('click', (e) => handleAlert(e))

function handleAlert(e) {
    let clicked = e.target.id;
    let intervalid;
    if(alerts.childNodes.length<6){
        handleSucess(clicked);
    }
    else{
        count.push(clicked);
    }
}

function handleSucess(btn) {
    var succ = document.createElement('div');
    var icon = document.createElement('i');
    if (btn == 'Success') {
        icon.classList.add('fa', 'fa-check-circle-o');
    }
    else if (btn =='Error') {
        icon.classList.add('fa', 'fa-exclamation-triangle');
    }
    else {
        icon.classList.add('fa', 'fa-info-circle');
    }
    succ.classList.add(btn);
    succ.innerText = btn;
    alerts.appendChild(succ)
    setTimeout(() => {
        succ.classList.add('return');
        setTimeout(() => {
            alerts.removeChild(succ);
            if(count.length>0 && alerts.childNodes.length<6){
                handleSucess(count.shift());
            }
        }, 500);
    }, 3000);
}

