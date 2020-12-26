function oncheck(){
    const fieldtime = document.querySelector('input[type="time"]');
    const chkbx = document.getElementById("checkbox");

    console.log(fieldtime);
    if (chkbx.checked){
        // alert("変更します?");
        fieldtime.value = '15:30';
        fieldtime.classList.add('taimeclickoff');
    }else{
        fieldtime.value = '';
        fieldtime.classList.remove('taimeclickoff');
    }
}