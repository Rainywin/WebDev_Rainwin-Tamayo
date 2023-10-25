var phoneBook = [];

    function submitContact() {
    
        var userName = document.getElementById("userName").value;
        var userNumber = document.getElementById("userNumber").value;

    if (userName === "" || userNumber === "") {
        alert("Both fields are required"); } 
    else {
        
        addContact(userName, userNumber);

        document.getElementById("userName").value = "";
        document.getElementById("userNumber").value = ""; }
}
    function addContact(userName, userNumber) {
    
        var contactObject = {
        contactName: userName,
        contactNumber: userNumber
    };

    phoneBook.push(contactObject);

    alert("Contact added, phonebook updated");
}
   

function viewContacts() {
    console.log(phoneBook)
}
