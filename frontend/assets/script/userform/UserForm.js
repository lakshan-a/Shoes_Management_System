let AllUser = [];
let User = {
    email: '',
    password: '',
    role: ''
};

function clearAllUserField(){
    $('.useremail').val('');
    $('.userpassword').val('');
    $('.userrole').prop('selectedIndex', 0).focus();
}

function dataToUserTable(user){

    let row = `<tr>
                    <th scope="row">${user.email}</th>
                    <td>${user.password}</td>
                    <td>${user.role}</td>
              </tr>`;

    $(".usertable").append(row);
}