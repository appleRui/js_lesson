function oncheck(){
    const fieldtime = document.querySelector('input[type="time"]');
    const chk = document.getElementById("checkbox1");
    // const chk = document.querySelector('input[type="time"]');
    console.log(fieldtime);
    if (chk.checked){
        alert("変更します?");
        fieldtime.value = '15:30';
        fieldtime.classList.add('taimeclickoff');
    }else{
        fieldtime.value = '';
        fieldtime.classList.remove('taimeclickoff');
    }
}