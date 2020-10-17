function confirmBox () {
  var confirmBox;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("confirmBox").innerHTML = txt;
}
