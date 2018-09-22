function validate(){
    let pw = document.getElementById('pw').value
    let pwConfirm = document.getElementById('confirmPw').value
    console.log(pw)
    console.log(pwConfirm)
    if(pw.length < 8 && pw != pwConfirm){
        document.getElementById('pwError').innerHTML = 'Password must be at least 8 characters long'
        document.getElementById('pwNotMatch').innerHTML = "Passwords don't match"
    }
    if(pw.length < 8 && pw == pwConfirm){
        document.getElementById('pwError').innerHTML = 'Password must be at least 8 characters long'
        document.getElementById('pwNotMatch').innerHTML = ""
    }
    else if(pw.length >= 8 && pw != pwConfirm){
        document.getElementById('pwError').innerHTML = ''
        document.getElementById('pwNotMatch').innerHTML = "Passwords don't match"
    }
    else if(pw.length >= 8 && pw == pwConfirm){
        document.getElementById('pwError').innerHTML = ''
        document.getElementById('pwNotMatch').innerHTML = ""
    }
}