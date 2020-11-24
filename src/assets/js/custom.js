function myTest(){
    alert('Welcome to custom js');
}
function youTube(){
  alert("Welcome to youTUbe");
  var id = "hello";
  var classAttr = "text";
  var div = '<div id='+id+' '+classAttr+'="world" >Blah</div>';
  document.getElementsByTagName("div").innerHTML = div;


}
