var Messages = [];

    function Submit() {
    
        var Name = document.getElementById("Name").value;
        var Number = document.getElementById("Number").value;
        var Number = document.getElementById("Subject").value;
        var Message = document.getElementById("Message").value;
        

    if (Name === "" || Number === "" || Subject === "" || Message === "") {
        alert("All fields are required to send a message"); } 
    else {
        
        addContact(Name, Number, Subject, Message);

        document.getElementById("Name").value = "";
        document.getElementById("Number").value = ""; 
        document.getElementById("Subject").value = "";
        document.getElementById("Message").value = "";}
}
    function addContact(Name, Number, Subject, Message) {
    
        var MessageList = {
        Name: Name,
        Number: Number,
        Subject: Subject,
        Message: Message
    };

    Messages.push(MessageList);

    alert("Message Received");
}
    console.log(Messages)

