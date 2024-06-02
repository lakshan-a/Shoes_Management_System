let signInURI = 'http://localhost:8080/app/api/v0/auth/signin';
let signUpURI = 'http://localhost:8080/app/api/v0/auth/signup';
let token;

$('.signinbtn').click(function(){
    const signInData = getAllSignInDataFromField();
    $.ajax({
        url:signInURI,
        method:'POST',
        data:JSON.stringify(signInData),
        contentType: 'application/json',
    
        success: function(resp){
            token = resp.token;
            console.log(token);
            localStorage.setItem('authToken', token);
            window.location.href = 'dashboard.html';
        },
        error:function(resp){
            showAlert("error","Oops","Please Check & Enter Correct Email Password");
        }
    });
});

$('.signupbtn').click(function(){
    const signUpData = getAllSignUpDataFromField();
    $.ajax({
        url:signUpURI,
        method:'POST',
        data:JSON.stringify(signUpData),
        contentType: 'application/json',
    
        success: function(resp){
            token = resp.token;
            console.log(token);
            localStorage.setItem('authToken', token);
            window.location.href = 'dashboard.html';
        },
        error:function(resp){
            showAlert("error","Oops","Please Check & Enter Correct Email Password");
        }
    });
});

function getAllSignInDataFromField(){
    return{
        email:$('.usernamefield').val(),
        password:$('.passwordfield').val()
    }
}

function getAllSignUpDataFromField(){
    return{
        email:$('.signupusernamefield').val(),
        password:$('.signuppasswordfield').val(),
        role:$('.signuproleselected').find('option:selected').text()
    }
}
