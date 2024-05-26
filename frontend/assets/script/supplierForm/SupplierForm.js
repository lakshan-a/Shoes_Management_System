let AllSupplier = [];
let Supplier = {
    supplierCode: '',
    supplierName: '',
    category: '',
    addressLine01: '',
    addressLine02: '',
    addressLine03: '',
    addressLine04: '',
    addressLine05: '',
    addressLine06: '',
    contactNo1: '',
    landLineNo: '',
    email: ''
};

function clearAllSupplierField(){
    $('.suppliercode').val('');
    $('.suppliername').val('');
    $('.suppliercategory').prop('selectedIndex', 0).focus();
    $('.supplieraddress01').val('');
    $('.supplieraddress02').val('');
    $('.supplieraddress03').val('');
    $('.supplieraddress04').val('');
    $('.supplieraddress05').val('');
    $('.supplieraddress06').val('');
    $('.suppliercontactnumber').val('');
    $('.supplierlandlinenumber').val('');
    $('.supplieremail').val('');
}

function dataToSupplierTable(supplier){

    let row = `<tr>
                    <th scope="row">${supplier.supplierCode}</th>
                    <td>${supplier.supplierName}</td>
                    <td>${supplier.category}</td>
                    <td>${supplier.addressLine01}</td>
                    <td>${supplier.addressLine02}</td>
                    <td>${supplier.addressLine03}</td>
                    <td>${supplier.addressLine04}</td>
                    <td>${supplier.addressLine05}</td>
                    <td>${supplier.addressLine06}</td>
                    <td>${supplier.contactNo1}</td>
                    <td>${supplier.landLineNo}</td>
                    <td>${supplier.email}</td>
              </tr>`;

    $(".suppliertable").append(row);
}
