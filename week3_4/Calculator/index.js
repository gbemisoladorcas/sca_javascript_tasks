function insert(num){
    document.form.textarea.value = document.form.textarea.value + num
}

function equal(){
    var exp = document.form.textarea.value;
    if(exp){
        document.form.textarea.value = eval(exp)
    }
}

function clean(){
    document.form.textarea.value = "";
}

function back(){
    var exp =  document.form.textarea.value;
    document.form.textarea.value = exp.substring(0, exp.length-1);
}