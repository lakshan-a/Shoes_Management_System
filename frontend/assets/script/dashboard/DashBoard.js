let count = 0;

$('.mostsaleshoedetails').click(function(){
    if(count==0){
        $('.mostsaleshoedetails>div').css('display','none');
        $('.shoedetails>div').css('display','block');
        count++;
    }else if(count==1){
        $('.shoedetails>div').css('display','none');
        $('.mostsaleshoedetails>div').css('display','block');
        count=0;
    }
});

$('.homebutton').click(function(){
    changeForm(".rightsidemaincontainer");
});

$('.customerbutton').click(function(){
    changeForm(".customerformmaincontainer")
});

$('.employeebutton').click(function(){
    changeForm(".employeeformmaincontainer")
});

$('.supplierbutton').click(function(){
    changeForm(".supplierformmaincontainer")
});

$('.inventorybutton').click(function(){
    changeForm(".inventoryformmaincontainer")
});

$('.userbutton').click(function(){
    changeForm(".userformmaincontainer")
});

$('.salesbutton').click(function(){
    changeForm(".saleformmaincontainer")
});


function changeForm(form){
    $('.rightsidemaincontainer').attr('style', 'display: none');
    $('.employeeformmaincontainer').attr('style', 'display: none !important');
    $('.inventoryformmaincontainer').attr('style', 'display: none !important');
    $('.supplierformmaincontainer').attr('style', 'display: none !important');
    $('.customerformmaincontainer').attr('style', 'display: none !important');
    $('.saleformmaincontainer').attr('style', 'display: none !important');
    $('.userformmaincontainer').attr('style', 'display: none !important');

    $(form).css('display','block');
}

$('.profileicon').click(function(){
    $('.profilechangemaincontainer').attr('style', 'display: block');
});

$('.profilechangedbocclosebtn').click(function(){
    $('.profilechangemaincontainer').attr('style', 'display: none');
});

/*Profile Picture Upload Button*/
$('.profileicon').click(function(){
    console.log('icon changed');
});

const profilefileInput = $('.fileinput');
const profileimagePreview = $('.imagepreview');

profilefileInput.on('change', function() {
  const file = this.files[0];
  if (file) {
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    profileimagePreview.empty(); // Clear the previous content
    profileimagePreview.append(img);
    console.log('Image Path:', file.name); // Log image path
  } else { // Log when no image is selected
    console.log('No image selected'); // Log when no image is selected
  }
});

profileimagePreview.on('click', function() {
  console.log('clicked');
  profilefileInput.click();
});

/*------------------------------------------------------*/