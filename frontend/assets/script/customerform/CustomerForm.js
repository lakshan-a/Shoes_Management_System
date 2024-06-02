$('.customertotalpoints').attr('readonly', true)
let AllCustomer = [];
let Customer = {
    customerCode:'',
    customerName:'',
    gender:'',
    joinDate:'',
    level:'',
    totalPoints:'',
    dob:'',
    addressLine01:'',
    addressLine02:'',
    addressLine03:'',
    addressLine04:'',
    addressLine05:'',
    contactNo:'',
    email:'',
    recentPurchaseDateTime:''
};

$('.customerlevel').change(function(){
    console.log($(this).val());
    switch($(this).val()) {
        case '1':
            $('.customertotalpoints').val('800');
            break;
        case '2':
            $('.customertotalpoints').val('600');
            break;
        case '3':
            $('.customertotalpoints').val('400');
            break;
        case '4':
            $('.customertotalpoints').val('200');
            break;
        default:
            alert('No valid level selected');
    }
});

function clearAllCustomerField(){
    $('.customercode').val('');
    $('.customername').val('');
    $('.customergender').prop('selectedIndex', 0).focus();
    $('.joindate').val('');
    $('.customerlevel').prop('selectedIndex', 0).focus();
    $('.customertotalpoints').val('');
    $('.customerdob').val('');
    $('.customeraddressline01').val('');
    $('.customeraddressline02').val('');
    $('.customeraddressline03').val('');
    $('.customeraddressline04').val('');
    $('.customeraddressline05').val('');
    $('.customercontactno').val('');
    $('.customeremail').val('');
    $('.customerrecentpurchasedatetime').val('');
}

function dataToCustomerTable(customer){

    let row = `<tr>
                <th scope="row">${customer.customerCode}</th>
                <td>${customer.customerName}</td>
                <td>${customer.gender}</td>
                <td>${customer.joinDate}</td>
                <td>${customer.level}</td>
                <td>${customer.totalPoints}</td>
                <td>${customer.dob}</td>
                <td>${customer.addressLine01}</td>
                <td>${customer.contactNo}</td>
                <td>${customer.email}</td>
                <td>${customer.recentPurchaseDateTime}</td>
               
              </tr>`;

    $(".customertable").append(row);
    /*let Today = isDateToday(customer.dob);
    if(Today){
        sendEmail(customer.email,customer.customerName);
    }*/
}