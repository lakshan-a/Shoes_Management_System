let userURI = 'http://localhost:8080/app/api/v0/user'
let userloginURI = 'http://localhost:8080/app/api/v0/auth'

$('.userdatasave').click(function(){
    console.log("Hello")
    const userData = getAllUserDataFromField();
    $.ajax({
        url:(userloginURI+'/'+'signup'),
        method:'POST',
        data:JSON.stringify(userData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","User Saved Sucessfully.");
            clearAllUserField();
        },
        error:function(resp){
        }
    });
});

$('.userdataget').click(function(){
    $.ajax({
        url:(userURI+'/'+$('.useremail').val()+'/'+$('.userrole').find('option:selected').text()),
        method:'PATCH',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            clearAllUserField();
            $('.useremail').val(resp.email),
            $('.userpassword').val(resp.password),
            $('.userrole option').each(function() {
                if ($(this).text() === resp.role) {
                    $(this).prop('selected', true);
                }
            })
        },
        error:function(resp){
            showAlert("error","Oops",resp.message);
            clearAllUserField();
        }
    });
});

$('.userdataupdate').click(function(){
    const userData = getAllUserDataFromField();
    $.ajax({
        url:(userloginURI+'/'+'signupupdate'),
        method:'POST',
        data:JSON.stringify(userData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","User "+$('.useremail').val()+" Updated Sucessfully.");
            clearAllUserField();
        },
        error:function(resp){
            showAlert("warning","Oops","Invalid Data.")
        }
    });
});

$('.userdatadelete').click(function(){
    $.ajax({
        url:(userURI+'/'+$('.useremail').val()),
        method:'DELETE',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","User "+$('.useremail').val()+" Delete Sucessfully.");
            clearAllUserField();
        },
        error:function(resp){
            showAlert("error","Oops","This User "+$('.useremail').val()+" Not Found.");
        }
    });
});

$('.useralldataget').click(function(){
    $.ajax({
        url:userURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            $('.usertable td').parent().remove();
            for(var i in resp){
                let userEmail = resp[i].email;
                let userPassword = resp[i].password;
                let userRole = resp[i].role;

                let user = Object.assign({},User);
                user.email = userEmail;
                user.password = userPassword;
                user.role = userRole;

                AllUser.push(user);
                dataToUserTable(user);
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
});

function getAllUserDataFromField(){
    return{
        email: $('.useremail').val(),
        password: $('.userpassword').val(),
        role: $('.userrole').find('option:selected').text(),
    }
}