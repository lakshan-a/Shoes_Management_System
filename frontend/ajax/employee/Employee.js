let employeeURI = 'http://localhost:8080/app/api/v0/employees'
let employeeFormData = new FormData();

$('.employeedatasave').click(function(){
    let employeeData = JSON.stringify(getAllEmployeeDataFromField());
    employeeFormData.append('data', new Blob([employeeData], { type: 'application/json' }));
    let employeefileInput = $('.employeeimage')[0];
    if (employeefileInput.files.length > 0) {
        employeeFormData.append('profilepic', employeefileInput.files[0]);
        console.log('skd');
    }
    $.ajax({
        url:employeeURI,
        method:'POST',
        data:employeeFormData,
        contentType: false,
        processData:false,
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Employee "+resp.employeeCode+" Saved Sucessfully.");
            clearAllEmployeeField();
        },
        error:function(resp){
        }
    });
});

$('.employeedataget').click(function(){
    $.ajax({
        url:(employeeURI+'/'+$('.employeecode').val()),
        method:'PATCH',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            clearAllEmployeeField();
            $('.employeecode').val(resp.employeeCode)
            $('.employeename').val(resp.employeeName),
            setReponseEmployeeImage(resp.employeeProfilePic)
            $('.employeegender option').each(function() {
                if ($(this).text() === resp.gender) {
                    $(this).prop('selected', true);
                }
            }),
            $('.employeestatus option').each(function() {
                if ($(this).text() === resp.status) {
                    $(this).prop('selected', true);
                }
            }),
            $('.employeedesignation').val(resp.designation),
            $('.employeerole').val(resp.accessRole),
            $('.employeedob').val(formatDate(resp.dob)),
            $('.employeejoindate').val(formatDate(resp.dateOfJoin)),
            $('.employeebranch').val(resp.attachedBranch),
            $('.employeeaddressLine01').val(resp.addressLine01),
            $('.employeeaddressLine02').val(resp.addressLine02),
            $('.employeeaddressLine03').val(resp.addressLine03),
            $('.employeeaddressLine04').val(resp.addressLine04),
            $('.employeeaddressLine05').val(resp.addressLine05),
            $('.employeecontactno').val(resp.contactNo),
            $('.employeeemail').val(resp.email),
            $('.emergencycontact').val(resp.emergencyContact),
            $('.employeeinformincaseofEmergency').val(resp.emergencyContactPerson)
        },
        error:function(resp){
            showAlert("error","Oops",resp.message);
            clearAllCustomerField();
        }
    });
});

$('.employeedataupdate').click(function(){
    let employeeData = JSON.stringify(getAllEmployeeDataFromField());
    employeeFormData.append('data', new Blob([employeeData], { type: 'application/json' }));
    let employeefileInput = $('.employeeimage')[0];
    if (employeefileInput.files.length > 0) {
        employeeFormData.append('profilepic', employeefileInput.files[0]);
    }
    $.ajax({
        url:(employeeURI),
        method:'PUT',
        data:employeeFormData,
        contentType: false,
        processData:false,
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Employee "+$('.employeecode').val()+" Updated Sucessfully.");
            clearAllEmployeeField();
        },
        error:function(resp){
            showAlert("warning","Oops","Invalid Data.")
        }
    });
});

$('.employeedatadelete').click(function(){
    $.ajax({
        url:(employeeURI+'/'+$('.employeecode').val()),
        method:'DELETE',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Employee "+$('.employeecode').val()+" Delete Sucessfully.");
            clearAllEmployeeField();
        },
        error:function(resp){
            showAlert("error","Oops","This Employee "+$('.employeecode').val()+" Not Found.");
        }
    });
});

$('.employeealldataget').click(function(){
    $.ajax({
        url:employeeURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            $('.employeetable td').parent().remove();
            for(var i in resp){
                let employeeCode = resp[i].employeeCode;
                let employeeName = resp[i].employeeName;
                let gender = resp[i].gender;
                let status = resp[i].status;
                let designation = resp[i].designation;
                let accessRole = resp[i].accessRole;
                let dob = formatDate(resp[i].dob);
                let dateOfJoin = formatDate(resp[i].dateOfJoin);
                let attachedBranch = resp[i].attachedBranch;
                let addressLine01 = resp[i].addressLine01;
                let addressLine02 = resp[i].addressLine02;
                let addressLine03 = resp[i].addressLine03;
                let addressLine04 = resp[i].addressLine04;
                let addressLine05 = resp[i].addressLine05;
                let contactNo = resp[i].contactNo;
                let email = resp[i].email;
                let emergencyContact = resp[i].emergencyContact;
                let emergencyContactPerson = resp[i].emergencyContactPerson;

                let employee = Object.assign({},Employee);
                employee.employeeCode = employeeCode;
                employee.employeeName = employeeName;
                employee.gender = gender;
                employee.status = status;
                employee.designation = designation;
                employee.accessRole = accessRole;
                employee.dob = dob;
                employee.dateOfJoin = dateOfJoin;
                employee.attachedBranch = attachedBranch;
                employee.addressLine01 = addressLine01;
                employee.addressLine02 = addressLine02;
                employee.addressLine03 = addressLine03;
                employee.addressLine04 = addressLine04;
                employee.addressLine05 = addressLine05;
                employee.contactNo = contactNo;
                employee.email = email;
                employee.emergencyContact = emergencyContact;
                employee.emergencyContactPerson = emergencyContactPerson;

                AllEmployee.push(employee);
                dataToEmployeeTable(employee);
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
});

function getAllEmployeeDataFromField(){
    return{
        employeeCode: $('.employeecode').val(),
        employeeName: $('.employeename').val(),
        gender: $('.employeegender').find('option:selected').text(),
        status: $('.employeestatus').find('option:selected').text(),
        designation: $('.employeedesignation').val(),
        accessRole: $('.employeerole').val(),
        dob: $('.employeedob').val(),
        dateOfJoin: $('.employeejoindate').val(),
        attachedBranch: $('.employeebranch').val(),
        addressLine01: $('.employeeaddressLine01').val(),
        addressLine02: $('.employeeaddressLine02').val(),
        addressLine03: $('.employeeaddressLine03').val(),
        addressLine04: $('.employeeaddressLine04').val(),
        addressLine05: $('.employeeaddressLine05').val(),
        contactNo: $('.employeecontactno').val(),
        email: $('.employeeemail').val(),
        emergencyContact: $('.emergencycontact').val(),
        emergencyContactPerson: $('.employeeinformincaseofEmergency').val()
    }
}