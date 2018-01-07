var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
function GetSynchronousJSONResponse(url, postData) {
     var xhttp = new XMLHttpRequest();
	 xhttp.onreadystatechange=function(){
		 console.log(this.responseText);
	 }
  xhttp.open('GET', url, false);
  //xhttp.responseType = 'text';
  //xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Requested-With, Cache-Control");
xhttp.setRequestHeader("Content-Type", "application/json");
xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
//xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//xhttp.setRequestHeader("Access-Control-Allow-Credentials", "true");
  xhttp.send();
  console.log(xhttp.responseText);
  return xhttp;
}
function HelloWorld() {
    var result = GetSynchronousJSONResponse(
                        'http://rest-service.guides.spring.io/greeting', true);//'http://services.groupkt.com/state/search/IND?text=pradesh
                        //second argument is null as there is no argument in web method
    alert(result.responseText); //process your result at client side
	console.log(result.responseText);
}
window.onload = function() {
   x = this.myObject.fullName();
   console.log(x);
document.getElementById("demo").innerHTML = x;
HelloWorld();
}
 