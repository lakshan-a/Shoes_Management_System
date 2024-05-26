var bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJSb2xlX1VTRVIifV0sInN1YiI6InZpc0BnbWFpbC5jb20iLCJpYXQiOjE3MTY0ODk1NzcsImV4cCI6MTcxNjU3NTk3N30.A_PodcE6UHZr2sX-gJnKd4tiBxfhzq9Hm_ihr51nW40';

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