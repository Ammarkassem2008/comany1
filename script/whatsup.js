function sentMs() {
  let number = '+963986258215';
  let name = document.getElementById('name').value || 'Not Found';
  
  let email = document.getElementById('email').value || 'Unknown';
  
  let massege = document.getElementById('massege').value;


  var url = "https://wa.me/" + number + "?text=" +
    "Name : " + name + "%0a" +
    "Email : " + email + "%0a" +
    "Message : " + massege + "%0a%0a";

  window.open(url, '_blank').focus();

}

