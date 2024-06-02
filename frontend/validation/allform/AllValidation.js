$(document).ready(function() {
    // Validation patterns for each input field
    const validationPatterns = {
        employeebranch: /^[a-zA-Z\s]{4,50}$/,
        employeecode: /^EM\d{3}$/,
        employeename: /^[a-zA-Z\s]{4,50}$/,
        employeedesignation: /^[a-zA-Z\s]{2,50}$/,
        employeerole: /^[a-zA-Z\s]{4,50}$/,
        employeeaddressLine01: /^[a-zA-Z0-9\s]{5,20}$/,
        employeeaddressLine02: /^[a-zA-Z\s]{5,50}$/,
        employeeaddressLine03: /^[a-zA-Z0-9\s]{5,50}$/,
        employeeaddressLine04: /^[a-zA-Z\s]{5,50}$/,
        employeeaddressLine05: /^[a-zA-Z0-9\s]{5,50}$/,
        employeecontactno: /^[0-9]{10}$/,
        emergencycontact: /^[0-9]{10}$/,
        employeeemail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        employeeinformincaseofEmergency: /^[a-zA-Z\s]{4,50}$/,

        customercode: /^CUS\d{3}$/,
        customername: /^[a-zA-Z\s]{4,50}$/,
        customertotalpoints: /^[0-9]+$/,
        customeraddressline01: /^[a-zA-Z0-9\s]{5,20}$/,
        customeraddressline02: /^[a-zA-Z\s]{5,50}$/,
        customeraddressline03: /^[a-zA-Z0-9\s]{5,50}$/,
        customeraddressline04: /^[a-zA-Z\s]{5,50}$/,
        customeraddressline05: /^[a-zA-Z0-9\s]{5,50}$/,
        customercontactno: /^[0-9]{10}$/,
        customeremail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

        inventorybuyprice: /^[0-9]+(\.[0-9]{2,7})?$/,
        inventorysaleprice: /^[0-9]+(\.[0-9]{2,7})?$/,
        inventoryprofitmargin: /^[0-9]+(\.[0-9]{1,7})?$/,
        inventorycode: /^[a-zA-Z0-9]{2,10}$/,
        inventorydescription: /^[a-zA-Z\s]{4,50}$/,
        inventoryquantity: /^[0-9]+$/,
        inventorysize: /^[0-9]{1,10}$/,
        inventorysuppliercode: /^SUP\d{3}$/,
        inventorysuppliername: /^[a-zA-Z\s]{4,50}$/,
        inventoryexpectedprofit: /^[0-9]+(\.[0-9]{2,7})?$/,

        suppliercode: /^SUP\d{3}$/,
        suppliername: /^[a-zA-Z\s]{4,50}$/,
        supplieraddress01: /^[a-zA-Z0-9\s]{5,100}$/,
        supplieraddress02: /^[a-zA-Z0-9\s]{5,100}$/,
        supplieraddress03: /^[a-zA-Z\s]{5,50}$/,
        supplieraddress04: /^[a-zA-Z\s]{5,50}$/,
        supplieraddress05: /^[0-9]{5,10}$/,
        supplieraddress06: /^[a-zA-Z\s]{5,50}$/,
        suppliercontactnumber: /^[0-9]{10}$/,
        supplierlandlinenumber: /^[0-9]{10,11}$/,
        supplieremail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

        saleorderno: /^ORD\d{4}$/,
        saletotalprice: /^\d+(\.\d{2,7})?$/,
        salepoints: /^\d+$/,
        salecustomername: /^[a-zA-Z\s]{4,50}$/,
        salecashiername: /^[a-zA-Z\s]{4,50}$/,

        useremail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        userpassword: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    };

    // Function to validate input fields
    function validateField(className, pattern) {
        const input = $(`.${className}`);
        const value = input.val();
        const errorMessage = $(`.${className}-error`);

        if (!pattern.test(value)) {
            input.addClass('error-border');
            errorMessage.show();
        } else {
            input.removeClass('error-border');
            errorMessage.hide();
        }
    }

    // Add input event listener to validate fields in real-time
    $('input').on('input', function() {
        const classNames = $(this).attr('class').split(/\s+/);
        classNames.forEach(className => {
            const pattern = validationPatterns[className];
            if (pattern) {
                validateField(className, pattern);
            }
        });
    });
});