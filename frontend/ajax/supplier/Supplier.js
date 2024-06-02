let supplierURI = 'http://localhost:8080/app/api/v0/suppliers'

$('.supplierdatasave').click(function(){
    const supplierData = getAllSupplierDataFromField();
    $.ajax({
        url:supplierURI,
        method:'POST',
        data:JSON.stringify(supplierData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Supplier "+resp.supplierCode+" Saved Sucessfully.");
            clearAllSupplierField();
        },
        error:function(resp){
        }
    });
});

$('.supplierdataget').click(function(){
    $.ajax({
        url:(supplierURI+'/'+$('.suppliercode').val()),
        method:'PATCH',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            clearAllSupplierField();
            $('.suppliercode').val(resp.supplierCode),
            $('.suppliername').val(resp.supplierName),
            $('.suppliercategory option').each(function() {
                if ($(this).text() === resp.category) {
                    $(this).prop('selected', true);
                }
            }),
            $('.supplieraddress01').val(resp.addressLine01),
            $('.supplieraddress02').val(resp.addressLine02),
            $('.supplieraddress03').val(resp.addressLine03),
            $('.supplieraddress04').val(resp.addressLine04),
            $('.supplieraddress05').val(resp.addressLine05),
            $('.supplieraddress06').val(resp.addressLine06),
            $('.suppliercontactnumber').val(resp.contactNo1),
            $('.supplierlandlinenumber').val(resp.landLineNo),
            $('.supplieremail').val(resp.email)
        },
        error:function(resp){
            showAlert("error","Oops",resp.message);
            clearAllSupplierField();
        }
    });
});

$('.supplierdataupdate').click(function(){
    const supplierData = getAllSupplierDataFromField();
    $.ajax({
        url:(supplierURI+'/'+$('.suppliercode').val()),
        method:'PUT',
        data:JSON.stringify(supplierData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Supplier "+$('.suppliercode').val()+" Updated Sucessfully.");
            clearAllSupplierField();
        },
        error:function(resp){
            showAlert("warning","Oops","Invalid Data.")
        }
    });
});

$('.supplierdatadelete').click(function(){
    $.ajax({
        url:(supplierURI+'/'+$('.suppliercode').val()),
        method:'DELETE',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Supplier "+$('.suppliercode').val()+" Delete Sucessfully.");
            clearAllSupplierField();
        },
        error:function(resp){
            showAlert("error","Oops","This Supplier "+$('.suppliercode').val()+" Not Found.");
        }
    });
});

$('.supplieralldataget').click(function(){
    $.ajax({
        url:supplierURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            $('.suppliertable td').parent().remove();
            for (var i in resp) {
                let supplierCode = resp[i].supplierCode;
                let supplierName = resp[i].supplierName;
                let category = resp[i].category;
                let addressLine01 = resp[i].addressLine01;
                let addressLine02 = resp[i].addressLine02;
                let addressLine03 = resp[i].addressLine03;
                let addressLine04 = resp[i].addressLine04;
                let addressLine05 = resp[i].addressLine05;
                let addressLine06 = resp[i].addressLine06;
                let contactNo1 = resp[i].contactNo1;
                let landLineNo = resp[i].landLineNo;
                let email = resp[i].email;
            
                let supplier = Object.assign({}, Supplier);
                supplier.supplierCode = supplierCode;
                supplier.supplierName = supplierName;
                supplier.category = category;
                supplier.addressLine01 = addressLine01;
                supplier.addressLine02 = addressLine02;
                supplier.addressLine03 = addressLine03;
                supplier.addressLine04 = addressLine04;
                supplier.addressLine05 = addressLine05;
                supplier.addressLine06 = addressLine06;
                supplier.contactNo1 = contactNo1;
                supplier.landLineNo = landLineNo;
                supplier.email = email;
            
                AllSupplier.push(supplier);
                dataToSupplierTable(supplier);
            }            
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
});

function getAllSupplierDataFromField(){
    return{
        supplierCode: $('.suppliercode').val(),
        supplierName: $('.suppliername').val(),
        category: $('.suppliercategory').find('option:selected').text(),
        addressLine01: $('.supplieraddress01').val(),
        addressLine02: $('.supplieraddress02').val(),
        addressLine03: $('.supplieraddress03').val(),
        addressLine04: $('.supplieraddress04').val(),
        addressLine05: $('.supplieraddress05').val(),
        addressLine06: $('.supplieraddress06').val(),
        contactNo1: $('.suppliercontactnumber').val(),
        landLineNo: $('.supplierlandlinenumber').val(),
        email: $('.supplieremail').val()
    }
}