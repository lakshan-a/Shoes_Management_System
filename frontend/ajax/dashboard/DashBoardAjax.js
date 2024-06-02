const employeeContainer = document.querySelector('.employeecontainer');
const notificationContainer = document.querySelector('.notificationcontainerbody');




getMostSaleInvetorysInDashBoard();
findAllEmployeesOrderByDob();
getAllRecentSales();
getWeeklyProfit();
//createNotification();
getMonthlyRevenue();
var weeklyProfit = {
    date: '',
    profit: '',
    today: ''
}

function getMostSaleInvetorysInDashBoard(){
    $.ajax({
        url:inventoryURI+'/mostsaleitem',
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
           $('.mostsaleshoedetailstable td').parent().remove();
           console.log(resp.length);
           setMostSaleShoePicture(resp[0].itemPicture);
           for(var i in resp){
            dataToMostSaleShoeTable(resp[i]);
           }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
}
function findAllEmployeesOrderByDob(){
    $.ajax({
        url:employeeURI+'/dob',
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            //employeeContainer.innerHTML = '';
            console.log(resp[0]);
           for(var i in resp){
            console.log(isDateToday(resp[i].dob));
            addEmployeeDetails(resp[i].employeeName,resp[i].employeeCode,formatDate(resp[i].dob),resp[i].employeeProfilePic,resp[i].email);
           }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
}

function getAllRecentSales(){
    $.ajax({
        url:salesURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            console.log(resp);
            $('.recenetsaletable td').parent().remove();
            for(var i in resp){
                for(var x in resp[i].inventory){
                    if(isDateToday(formatDate(resp[i].purchaseDate))){
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
                        console.log(dateToNormalDate(purchaseDate));

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
                        sale.purchaseDate = dateToNormalDate(purchaseDate);
                        sale.paymentMethod = paymentMethod;
                        sale.addedPoints = addedPoints;
                        sale.cashierName = cashierName;

                        dataToRecentSaleDetailsTable(sale);
                    }
                }
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
}

function getWeeklyProfit(){
    $.ajax({
        url:salesURI+'/weeklyprofit',
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },

        success: function(resp){
            console.log(resp);
            var weekDates = getWeekDates();
            var totalWeeklyProfit = 0;
            console.log(weekDates);
            console.log('////////////////////');
            for (var date in resp) {
                if (resp.hasOwnProperty(date)) {
                    console.log(date + ': ' + resp[date]);
                    totalWeeklyProfit = resp[date] + totalWeeklyProfit;
                    innerLoop:for(var i = 0; i < weekDates.length; i++){
                        if(weekDates[i].date==date){
                            weekDates[i].profit = resp[date];
                            break innerLoop;
                        }
                    }
                }
                console.log('Total Weekly Profit:', totalWeeklyProfit);
                $(`#weeklyProfit`).text(totalWeeklyProfit)
            }
            //dataAddToChart(weekDates)
            console.log(weekDates);
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
}
/*

function createNotification(){
    $.ajax({
        url:inventoryURI,
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            notificationContainer.innerHTML = '';
            for(var i in resp){
                if(resp[i].status=="Low"){
                    console.log('low');
                    var now = new Date();
                    var formattedTime = formatTime(now);
                    dataToNotificationConatiner(formattedTime,resp[i].itemDescription+" "+"is lower Lavel");
                }else if(resp[i].status=="Not"){
                    var now = new Date();
                    var formattedTime = formatTime(now);
                    dataToNotificationConatiner(formattedTime,resp[i].itemDescription+" "+"is Not");
                }
            }
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
}
*/

function getMonthlyRevenue(){
    $.ajax({
        url:salesURI+"/monthlyprofit",
        method:'GET',
        contentType: 'application/json',
        headers: {
            'Authorization': 'Bearer ' + bearerToken
        },
    
        success: function(resp){
            $('#monthlyProfit').text(resp);
        },
        error:function(resp){
            showAlert("error","Oops",resp.mesasge);
        }
    });
}