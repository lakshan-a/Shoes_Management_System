const fileInput = document.getElementById('file-input');
const imagePreview = document.getElementById('image-preview');
let AllEmployee = [];
let Employee = {
  employeeCode: '',
  employeeName: '',
  gender: '',
  status: '',
  designation: '',
  accessRole: '',
  dob: '',
  dateOfJoin: '',
  attachedBranch: '',
  addressLine01: '',
  addressLine02: '',
  addressLine03: '',
  addressLine04: '',
  addressLine05: '',
  contactNo: '',
  email: '',
  emergencyContact: '',
  emergencyContactPerson: ''
};

fileInput.addEventListener('change', function() {
  const file = this.files[0];
  if (file) {
    const img = document.createElement('img');
    imagePreview.innerHTML = '';
    img.src = URL.createObjectURL(file);
    imagePreview.appendChild(img);
    console.log('Image Path:', file.name); // Log image path
  } else {
    const defaultImg = document.createElement('img');
    defaultImg.src = 'default-image.jpg';
    imagePreview.innerHTML = '';
    imagePreview.appendChild(defaultImg);
    console.log('No image selected'); // Log when no image is selected
  }
});

imagePreview.addEventListener('click', function() {
    console.log('clicked')
  fileInput.click();
});

function clearAllEmployeeField(){
  $('.employeecode').val('');
  $('.employeename').val('');
  employeeImageToDefault();
  $('.employeegender').prop('selectedIndex', 0).focus();
  $('.employeestatus').prop('selectedIndex', 0).focus();
  $('.employeedesignation').val('');
  $('.employeerole').val('');
  $('.employeedob').val('');
  $('.employeejoindate').val('');
  $('.employeebranch').val('');
  $('.employeeaddressLine01').val('');
  $('.employeeaddressLine02').val('');
  $('.employeeaddressLine03').val('');
  $('.employeeaddressLine04').val('');
  $('.employeeaddressLine05').val('');
  $('.employeecontactno').val('');
  $('.employeeemail').val('');
  $('.emergencycontact').val('');
  $('.employeeinformincaseofEmergency').val('');
}

function employeeImageToDefault(){
  const defaultImg = document.createElement('img');
  defaultImg.src = 'assets/img/EmployeeForm/imageupload.png';
  imagePreview.innerHTML = '';
  imagePreview.appendChild(defaultImg);
  defaultImg.classList.add('employeedefaultimg')
}

function setReponseEmployeeImage(image){
  const img = document.createElement('img');
  const profilepic = 'data:image/jpg;base64,' + image;
  imagePreview.innerHTML = '';
  img.src = profilepic;
  imagePreview.appendChild(img);
}

function dataToEmployeeTable(employee){

  let row = `<tr>
                <th scope="row">${employee.employeeCode}</th>
                <td>${employee.employeeName}</td>
                <td>${employee.gender}</td>
                <td>${employee.status}</td>
                <td>${employee.designation}</td>
                <td>${employee.accessRole}</td>
                <td>${employee.dob}</td>
                <td>${employee.dateOfJoin}</td>
                <td>${employee.attachedBranch}</td>
                <td>${employee.addressLine01}</td>
                <td>${employee.addressLine02}</td>
                <td>${employee.addressLine03}</td>
                <td>${employee.addressLine05}</td>
                <td>${employee.addressLine04} Wakwella</td>
                <td>${employee.contactNo}</td>
                <td>${employee.email}</td>
                <td>${employee.emergencyContactPerson}</td>
                <td>${employee.emergencyContact}</td>
            </tr>`;

  $(".employeetable").append(row);
}