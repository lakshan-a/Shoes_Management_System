let inventoryURI = 'http://localhost:8080/app/api/v0/inventory'
let inventoryFormData = new FormData();

$('.inventorydatasave').click(function(){
    console.log("Hllo")
    let inventoryData = JSON.stringify(getAllInventoryDataFromField());
    inventoryFormData.append('data', new Blob([inventoryData], { type: 'application/json' }));
    let inventoryfileInput = $('#inventory-file-input')[0];
    if (inventoryfileInput.files.length > 0) {
        inventoryFormData.append('itempic', inventoryfileInput.files[0]);
    }
    $.ajax({
        url:inventoryURI,
        method:'POST',
        data:inventoryFormData,
        contentType: false,
        processData:false,
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Inventory "+resp.itemCode+" Saved Sucessfully.");
            clearAllInventoryField();
        },
        error:function(resp){
        }
    });
});

$('.inventorydataget').click(function(){
    $.ajax({
        url:(inventoryURI+'/'+$('.inventorycode').val()),
        method:'PATCH',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            clearAllInventoryField();
            $('.inventorycode').val(resp.itemCode)
            $('.inventorydescription').val(resp.itemDescription),
                setReponseInventoryImage(resp.itemPicture),
            $('.inventorycategory option').each(function() {
                if ($(this).text() === resp.category) {
                    $(this).prop('selected', true);
                }
            }),
            $('.inventorysize').val(resp.size),
            $('.inventorysuppliercode').val(resp.supplierCode),
            $('.inventorysuppliername').val(formatDate(resp.supplierName)),
            $('.inventorysaleprice').val(formatDate(resp.unitPriceSale)),
            $('.inventorybuyprice').val(resp.unitPriceBuy),
            $('.inventoryexpectedprofit').val(resp.expectedProfit),
            $('.inventoryprofitmargin').val(resp.profitMargin),
            $('.inventorystatus option').each(function() {
                if ($(this).text() === resp.status) {
                    $(this).prop('selected', true);
                }
            }),
            $('.inventoryquantity').val(resp.quantity)
        },
        error:function(resp){
            showAlert("error","Oops",resp.message);
            clearAllInventoryField();
        }
    });
});

$('.inventorydataupdate').click(function(){
    let inventoryData = JSON.stringify(getAllInventoryDataFromField());
    inventoryFormData.append('data', new Blob([inventoryData], { type: 'application/json' }));
    let inventoryfileInput = $('.inventoryimage')[0];
    if (inventoryfileInput.files.length > 0) {
        inventoryFormData.append('itempic', inventoryfileInput.files[0]);
    }
    $.ajax({
        url:(inventoryURI),
        method:'PUT',
        data:inventoryFormData,
        contentType: false,
        processData:false,
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Inventory "+$('.inventorycode').val()+" Updated Sucessfully.");
            clearAllInventoryField();
        },
        error:function(resp){
            showAlert("warning","Oops","Invalid Data.")
        }
    });
});

$('.inventorydatadelete').click(function(){
    $.ajax({
        url:(inventoryURI+'/'+$('.inventorycode').val()),
        method:'DELETE',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Inventory "+$('.inventorycode').val()+" Delete Sucessfully.");
            clearAllInventoryField();
        },
        error:function(resp){
            showAlert("error","Oops","This Inventory "+$('.inventorycode').val()+" Not Found.");
        }
    });
});

$('.inventoryalldataget').click(function(){
    $.ajax({
        url:inventoryURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            $('.inventorytable td').parent().remove();
            for(var i in resp){
                let itemCode = resp[i].itemCode;
                let itemDescription = resp[i].itemDescription;
                let category = resp[i].category;
                let size = resp[i].size;
                let supplierCode = resp[i].supplierCode;
                let supplierName = resp[i].supplierName;
                let unitPriceSale = resp[i].unitPriceSale;
                let unitPriceBuy = resp[i].unitPriceBuy;
                let expectedProfit = resp[i].expectedProfit;
                let profitMargin = resp[i].profitMargin;
                let quantity = resp[i].quantity;
                let status = resp[i].status;

                let inventory = Object.assign({},Inventory);
                inventory.itemCode = itemCode;
                inventory.itemDescription = itemDescription;
                inventory.category = category;
                inventory.size = size;
                inventory.supplierCode = supplierCode;
                inventory.supplierName = supplierName;
                inventory.unitPriceSale = unitPriceSale;
                inventory.unitPriceBuy = unitPriceBuy;
                inventory.expectedProfit = expectedProfit;
                inventory.profitMargin = profitMargin;
                inventory.quantity = quantity;
                inventory.status = status;

                AllInventory.push(inventory);
                dataToInventoryTable(inventory);
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
});


function getAllInventoryDataFromField(){
    return{
        itemCode: $('.inventorycode').val(),
        itemDescription: $('.inventorydescription').val(),
        category: findInventoryCategory(),
        size: $('.inventorysize').val(),
        supplierCode: $('.inventorysuppliercode').val(),
        supplierName: $('.inventorysuppliername').val(),
        unitPriceSale: $('.inventorysaleprice').val(),
        unitPriceBuy: $('.inventorybuyprice').val(),
        expectedProfit: $('.inventoryexpectedprofit').val(),
        profitMargin: $('.inventoryprofitmargin').val(),
        status: $('.inventorystatus').find('option:selected').text(),
        quantity: $('.inventoryquantity').val(),
        pquantity: $('.inventoryquantity').val()
    }
}