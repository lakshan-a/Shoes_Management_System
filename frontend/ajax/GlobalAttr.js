
var bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJSb2xlX1VTRVIifV0sInN1YiI6Imxha3NoYW5AZ21haWwuY29tIiwiaWF0IjoxNzE3MTM0NjQ5LCJleHAiOjE3MTcyMjEwNDl9.DRwOc9T1y0gF1ufPxzf3DEp9FakZ4WLm-lRnmp06Xh0';

function showAlert(iconType,titleMessage,textMessage){
    Swal.fire({
        icon: iconType,
        title: titleMessage,
        text: textMessage,
    });
}

function formatDate(dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}