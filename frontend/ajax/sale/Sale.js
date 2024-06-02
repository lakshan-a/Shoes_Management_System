let salesURI = 'http://localhost:8080/app/api/v0/sales'
let inventoryURI = 'http://localhost:8080/app/api/v0/inventory'

$('.saledatasave').click(function(){
    const saleData = getAllSaleDataFromField();
    $.ajax({
        url:salesURI,
        method:'POST',
        data:JSON.stringify(saleData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Sale Saved Sucessfully.");
            clearAllSaleField();
            $('.saleitemtable td').parent().remove();
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge)
        }
    });
});

$('.saledataget').click(function(){
    $.ajax({
        url:(salesURI+'/'+$('.saleorderno').val()),
        method:'PATCH',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            tableData.length=0;
            clearAllSalesField();
            $('.saledetailstablecontainer').attr('style', 'display: none');
            $('.saleitemquetablecontainer').attr('style', 'display: block');
            $('.saleitemtable td').parent().remove();
            for(var i in resp.inventory){
                $('.salepayementmethod option').each(function() {
                    if ($(this).text() === resp.paymentMethod) {
                        $(this).prop('selected', true);
                    }
                }),
                $('.saleorderno').val(resp.orderNo),
                $('.saletotalprice').val(resp.totalPrice),
                $('.salepoints').val(resp.addedPoints),
                $('.salecustomername').val(resp.customerName),
                $('.salepurchasedate').val(formatDate(resp.purchaseDate)),
                $('.salecashiername').val(resp.cashierName);

                let itemData = {
                    id:resp.inventory[i].id,
                    inventory: {
                        itemCode: resp.inventory[i].inventory.itemCode
                    },
                    itemDescription: resp.inventory[i].itemDescription,
                    unitPriceSale: resp.inventory[i].unitPriceSale,
                    quantity: resp.inventory[i].quantity,
                    size: resp.inventory[i].size,
                    sales: {
                        orderNo: resp.orderNo
                    }
                };

                tableData.push(itemData);
                let addItem = {
                    id:resp.inventory[i].id,
                    itemCode:resp.inventory[i].inventory.itemCode,
                    itemDescription:resp.inventory[i].itemDescription,
                    unitPriceSale:resp.inventory[i].unitPriceSale,
                    quantity:resp.inventory[i].quantity,
                    size:resp.inventory[i].size
                }
                updatedataToSalesItemQueTable(addItem)
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.message);
            clearAllSalesField();
        }
    });
});

$('.saleitemcode').on('keypress', function(event){
    if (event.which === 13) {
        event.preventDefault();
        $.ajax({
            url:(inventoryURI+'/'+$('.saleitemcode').val()),
            method:'PATCH',
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer ' + bearerToken
            },

            success: function(resp){
                $('.saleitemdescription').val(resp.itemDescription),
                    $('.saleitemsize').val(resp.size),
                    $('.saleunitprice').val(resp.unitPriceSale)
            },
            error:function(resp){
                showAlert("error","Oops",resp.message);
            }
        });
    }
});

$('.saledataupdate').click(function(){
    const saleData = getAllUpdateSaleDataFromField();
    $.ajax({
        url:(salesURI),
        method:'PUT',
        data:JSON.stringify(saleData),
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Sale Updated Sucessfully.");
            clearAllSalesField();
        },
        error:function(resp){
            console.log(resp);
            let errorMessage = "An unexpected error occurred.";
            if (resp.responseJSON && resp.responseJSON.message) {
                errorMessage = resp.responseJSON.message;
            }
            showAlert("warning", "Oops", errorMessage);
        }
    });
});

$('.salealldataget').click(function(){
    $.ajax({
        url:salesURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            console.log(resp);
            $('.saletable td').parent().remove();
            for(var i in resp){
                for(var x in resp[i].inventory){
                    let id = resp[i].inventory[x].id;
                    let itemCode = resp[i].inventory[x].inventory.itemCode;
                    let itemDescription = resp[i].inventory[x].itemDescription;
                    let size = resp[i].inventory[x].size;
                    let unitPriceSale = resp[i].inventory[x].unitPriceSale;
                    let quantity = resp[i].inventory[x].quantity;
                    let orderNo = resp[i].orderNo;
                    let customerName = resp[i].customerName;
                    let totalPrice = resp[i].totalPrice;
                    let purchaseDate = resp[i].purchaseDate;
                    let paymentMethod = resp[i].paymentMethod;
                    let addedPoints = resp[i].addedPoints;
                    let cashierName = resp[i].cashierName;

                    let sale = Object.assign({},Sales);
                    sale.id = id;
                    sale.itemCode = itemCode;
                    sale.itemDescription = itemDescription;
                    sale.size = size;
                    sale.unitPriceSale = unitPriceSale;
                    sale.quantity = quantity;
                    sale.orderNo = orderNo;
                    sale.customerName = customerName;
                    sale.totalPrice = totalPrice;
                    sale.purchaseDate = formatDate(purchaseDate);
                    sale.paymentMethod = paymentMethod;
                    sale.addedPoints = addedPoints;
                    sale.cashierName = cashierName;

                    AllSales.push(sale);
                    dataToSalesTable(sale);
                }
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
});

$('.saledatadelete').click(function(){
    console.log($('.salepurchasedate').val());
    $.ajax({
        url:(salesURI+'/'+$('.saleorderno').val()),
        method:'DELETE',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            showAlert("success","Success","Sales "+$('.saleorderno').val()+" Delete Sucessfully.");
            clearAllSupplierField();
        },
        error:function(resp){
            showAlert("error","Oops","This Sales "+$('.saleorderno').val()+" Not Found.");
        }
    });
});

function getAllSaleDataFromField(){
    getChooseAllItem();
    return{
        inventory:tableData,
        orderNo: $('.saleorderno').val(),
        customerName: $('.salecustomername').val(),
        totalPrice: $('.saletotalprice').val(),
        purchaseDate: $('.salepurchasedate').val(),
        paymentMethod: $('.salepayementmethod').find('option:selected').text(),
        addedPoints: $('.salepoints').val(),
        cashierName: $('.salecashiername').val()        
    }
}

function getAllUpdateSaleDataFromField(){
    return{
        inventory:tableData,
        orderNo: $('.saleorderno').val(),
        customerName: $('.salecustomername').val(),
        totalPrice: $('.saletotalprice').val(),
        purchaseDate: $('.salepurchasedate').val(),
        paymentMethod: $('.salepayementmethod').find('option:selected').text(),
        addedPoints: $('.salepoints').val(),
        cashierName: $('.salecashiername').val()        
    }
}