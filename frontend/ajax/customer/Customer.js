let customerURI = 'http://localhost:8080/app/api/v0/customers'

/*getNextCustomerCode();

function getNextCustomerCode(){
    $.ajax({
        url:customerURI+'/nextid',
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },

        success: function(resp){
            console.log(resp);
            $('.customercode').val(resp)
        }
    });
}*/

$('.customerdatasave').click(function(){
    console.log(getAllCustomerDataFromField);
    const customerData = getAllCustomerDataFromField();
    console.log(customerData)
    $.ajax({
        url:customerURI,
        method:'POST',
        data:JSON.stringify(customerData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Customer "+resp.customerCode+" Saved Sucessfully.");
            clearAllCustomerField();
        },
        error:function(resp){
        }
    });
});

$('.customerdataget').click(function(){
    $.ajax({
        url:(customerURI+'/'+$('.customercode').val()),
        method:'PATCH',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            clearAllCustomerField();
            $('.customercode').val(resp.customerCode)
            $('.customername').val(resp.customerName),
            $('.customergender option').each(function() {
                if ($(this).text() === resp.gender) {
                    $(this).prop('selected', true);
                }
            }),
            $('.joindate').val(formatDate(resp.joinDate)),
            $('.customerlevel option').each(function() {
                if ($(this).text() === resp.level) {
                    $(this).prop('selected', true);
                }
            }),
            $('.customertotalpoints').val(resp.totalPoints),
            $('.customerdob').val(formatDate(resp.dob)),
            $('.customeraddressline01').val(resp.addressLine01),
            $('.customeraddressline02').val(resp.addressLine02),
            $('.customeraddressline03').val(resp.addressLine03),
            $('.customeraddressline04').val(resp.addressLine04),
            $('.customeraddressline05').val(resp.addressLine05),
            $('.customercontactno').val(resp.contactNo),
            $('.customeremail').val(resp.email),
            $('.customerrecentpurchasedatetime').val(formatDate(resp.recentPurchaseDateTime))
        },
        error:function(resp){
            showAlert("error","Oops",resp.message);
            clearAllCustomerField();
        }
    });
});

$('.customerdataupdate').click(function(){
    const customerData = getAllCustomerDataFromField();
    console.log(customerData.level);
    $.ajax({
        url:(customerURI+'/'+$('.customercode').val()),
        method:'PUT',
        data:JSON.stringify(customerData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Customer "+$('.customercode').val()+" Updated Sucessfully.");
            clearAllCustomerField();
        },
        error:function(resp){
            showAlert("warning","Oops","Invalid Data.")
        }
    });
});

$('.customerdatadelete').click(function(){
    $.ajax({
        url:(customerURI+'/'+$('.customercode').val()),
        method:'DELETE',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Customer "+$('.customercode').val()+" Delete Sucessfully.");
            clearAllCustomerField();
        },
        error:function(resp){
            showAlert("error","Oops","This Customer "+$('.customercode').val()+" Not Found.");
        }
    });
});

$('.customeralldataget').click(function(){
    $.ajax({
        url:customerURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            $('.customertable td').parent().remove();
            for(var i in resp){
                let customerCode = resp[i].customerCode;
                let customerName = resp[i].customerName;
                let gender = resp[i].gender;
                let joinDate = formatDate(resp[i].joinDate);
                let level = resp[i].level;
                let totalPoints = resp[i].totalPoints;
                let dob = formatDate(resp[i].dob);
                let addressLine01 = resp[i].addressLine01;
                let addressLine02 = resp[i].addressLine02;
                let addressLine03 = resp[i].addressLine03;
                let addressLine04 = resp[i].addressLine04;
                let addressLine05 = resp[i].addressLine05;
                let contactNo = resp[i].contactNo;
                let email = resp[i].email;
                let recentPurchaseDateTime = formatDate(resp[i].recentPurchaseDateTime);

                let customer = Object.assign({},Customer);
                customer.customerCode = customerCode;
                customer.customerName = customerName;
                customer.gender = gender;
                customer.joinDate = joinDate;
                customer.level = level;
                customer.totalPoints = totalPoints;
                customer.dob = dob;
                customer.addressLine01 = addressLine01;
                customer.addressLine02 = addressLine02;
                customer.addressLine03 = addressLine03;
                customer.addressLine04 = addressLine04;
                customer.addressLine05 = addressLine05;
                customer.contactNo = contactNo;
                customer.email = email;
                customer.recentPurchaseDateTime = recentPurchaseDateTime;

                AllCustomer.push(customer);
                dataToCustomerTable(customer);
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
});

function getAllCustomerDataFromField(){
    return{
        customerCode: null,
        customerName: $('.customername').val(),
        gender: $('.customergender').find('option:selected').text(),
        joinDate: $('.joindate').val(),
        level: $('.customerlevel').find('option:selected').text(),
        totalPoints: $('.customertotalpoints').val(),
        dob: $('.customerdob').val(),
        addressLine01: $('.customeraddressline01').val(),
        addressLine02: $('.customeraddressline02').val(),
        addressLine03: $('.customeraddressline03').val(),
        addressLine04: $('.customeraddressline04').val(),
        addressLine05: $('.customeraddressline05').val(),
        contactNo: $('.customercontactno').val(),
        email: $('.customeremail').val(),
        recentPurchaseDateTime: $('.customerrecentpurchasedatetime').val()

    }
}