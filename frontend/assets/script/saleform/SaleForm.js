let tableData = [];
let AllSales = [];
let Sales = {      
    id: '',      
    itemCode: '',
    itemDescription: '',
    size: '',
    unitPriceSale: '',
    quantity: '',
    orderNo: '',
    customerName: '',
    totalPrice: '',
    purchaseDate: '',
    paymentMethod: '',
    addedPoints: '',
    cashierName: ''
}

function clearAllSalesField(){
    $('.saleitemcode').val('');
    $('.saleitemdescription').val('');
    $('.saleitemqty').val('');
    $('.salepayementmethod').prop('selectedIndex', 0).focus();
    $('.saleorderno').val('');
    $('.saleitemsize').val('');
    $('.saletotalprice').val('');
    $('.salepoints').val('');
    $('.salecustomername').val('');
    $('.saleunitprice').val('');
    $('.salepurchasedate').val('');
    $('.salecashiername').val('');
    $('.saleitemtable td').parent().remove();
    $('.saledetailstablecontainer').attr('style', 'display: block');
    $('.saleitemquetablecontainer').attr('style', 'display: none');
  }
  
  function dataToSalesTable(sale){
    let row = `<tr>
                <th scope="row">${sale.itemCode}</th>
                <td>${sale.orderNo}</td>
                <td>${sale.customerName}</td>
                <td>${sale.itemDescription}</td>
                <td>${sale.size}</td>
                <td>${sale.unitPriceSale}</td>
                <td>${sale.quantity}</td>
                <td>${sale.totalPrice}</td>
                <td>${sale.purchaseDate}</td>
                <td>${sale.paymentMethod}</td>
                <td>${sale.addedPoints}</td>
                <td>${sale.cashierName}</td>
              </tr>`;
  
    $(".saletable").append(row);
  }

  $('.inventoryaddpopupformclosebtn').click(function(){
    $('.inventoryaddpopupform').attr('style', 'display: none !important');
    $(".saleinventoryaddupdate").attr('style','display: none');
    $(".saleinventoryaddsave").attr('style','display: block');
  });

  $('.saleitmadd').click(function(){
    $('.inventoryaddpopupform').attr('style', 'display: block');
    $('.saledetailstablecontainer').attr('style', 'display: none');
    $('.saleitemquetablecontainer').attr('style', 'display: block');
    $(".saleinventoryaddupdate").attr('style','display: none');
    $(".saleinventoryaddsave").attr('style','display: block');
  });

  $('.saleinventoryaddfieldclear').click(function(){
    clearSaleInventoryAddField();
  });

  function clearSaleInventoryAddField(){
    $('.saleitemcode').val('');
    $('.saleitemqty').val('');
    $('.saleunitprice').val('');
    $('.saleitemdescription').val('');
    $('.saleitemsize').val('');
  }

  function clearAllSaleField(){
    $('.saleorderno').val(''),
    $('.salecustomername').val(''),
    $('.saletotalprice').val(''),
    $('.salepurchasedate').val(''),
    $('.salepayementmethod').prop('selectedIndex', 0).focus(),
    $('.salepoints').val(''),
    $('.salecashiername').val('')
  }
  
  $('.saleinventoryaddsave').click(function(){
    let addItem = {
        itemCode:$('.saleitemcode').val(),
        itemDescription:$('.saleitemdescription').val(),
        unitPriceSale:$('.saleunitprice').val(),
        quantity:$('.saleitemqty').val(),
        size:$('.saleitemsize').val()
    }
    clearSaleInventoryAddField();
    dataToSalesItemQueTable(addItem)
  });

  function dataToSalesItemQueTable(item){
    let row = `<tr>
                <th scope="row">${item.itemCode}</th>
                <td>${item.itemDescription}</td>
                <td>${item.unitPriceSale}</td>
                <td>${item.quantity}</td>
                <td>${item.size}</td>
                <td>
                    <button class="saleitemrowremove">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </td>
              </tr>`;
  
    $(".saleitemtable").append(row);
    itemQueDataToAddItemPopUpForm();
  }

  function updatedataToSalesItemQueTable(item){
    let row = `<tr>
                <th scope="row">${item.itemCode}</th>
                <td>${item.itemDescription}</td>
                <td>${item.unitPriceSale}</td>
                <td>${item.quantity}</td>
                <td>${item.size}</td>
                <td>
                    <button class="saleitemrowremove">
                        <i class="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </td>
                <td class="item-id" style="display: none;">${item.id}</td>
              </tr>`;
  
    $(".saleitemtable").append(row);
    itemQueDataToAddItemPopUpForm();
  }

  function itemQueDataToAddItemPopUpForm() {
    $(".saleitemtable tr").attr('style', 'cursor: pointer');
    $(".saleitemtable tr").off('click').on('click', function() {
        const $row = $(this);
        $('.inventoryaddpopupform').attr('style', 'display: block');
        $('.saleitemcode').val($row.children().eq(0).text());
        $('.saleitemdescription').val($row.children().eq(1).text());
        $('.saleunitprice').val($row.children().eq(2).text());
        $('.saleitemqty').val($row.children().eq(3).text());
        $('.saleitemsize').val($row.children().eq(4).text());

        // Store the current row being edited
        $('.inventoryaddpopupform').data('currentRow', $row);
        $(".saleinventoryaddupdate").attr('style', 'display: block');
        $(".saleinventoryaddsave").attr('style', 'display: none');
    });
  }

  $(".saleinventoryaddupdate").off('click').on('click', function() {
    const $currentRow = $('.inventoryaddpopupform').data('currentRow');
    if ($currentRow) {
        $currentRow.children().eq(0).text($('.saleitemcode').val());
        $currentRow.children().eq(1).text($('.saleitemdescription').val());
        $currentRow.children().eq(2).text($('.saleunitprice').val());
        $currentRow.children().eq(3).text($('.saleitemqty').val());
        $currentRow.children().eq(4).text($('.saleitemsize').val());

        const updatedItem = {
          itemCode: $currentRow.children().eq(0).text(),
          itemDescription: $currentRow.children().eq(1).text(),
          unitPriceSale: $currentRow.children().eq(2).text(),
          quantity: $currentRow.children().eq(3).text(),
          size: $currentRow.children().eq(4).text(),
          id: $currentRow.children(".item-id").text()
        };

        $('.inventoryaddpopupform').attr('style', 'display: none !important');
        updateInventoryDataToArray(updatedItem);
    }
  });

  $(document).on('click', '.saleitemrowremove', function(){
    $(this).closest('tr').remove();
    $('.inventoryaddpopupform').attr('style', 'display: none !important');
  });

  function getChooseAllItem() {
    tableData.length=0;
    $('.saleitemtable tbody tr').each(function() {
        let rowData = {
            inventory: {
                itemCode: $(this).find('th').text()
            },
            itemDescription: $(this).find('td:nth-child(2)').text(),
            unitPriceSale: parseFloat($(this).find('td:nth-child(3)').text()),
            quantity: parseInt($(this).find('td:nth-child(4)').text()),
            size: parseInt($(this).find('td:nth-child(5)').text()),
            sales: {
                orderNo: $('.saleorderno').val()
            }
        };

        tableData.push(rowData);
    });
  };

  function updateInventoryDataToArray(updateitem){
  console.log(updateitem.id);
  l:for(var i in tableData){
    if(tableData[i].id==updateitem.id){
      console.log(updateitem.id);
      tableData[i].itemDescription=updateitem.itemDescription;
      tableData[i].unitPriceSale=updateitem.unitPriceSale;
      tableData[i].quantity=updateitem.quantity;
      tableData[i].size=updateitem.size;
      break l;
    }
  }
  console.log(tableData);
  }