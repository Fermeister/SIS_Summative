function validate(){

    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
    

    if (user=="admin" && pass=="admin")
    {
        window.location.href="admin.html";
    }
    else if(user=="student1" && pass=="1234")
    {
        window.location.href="student.html";
    }

    else if(user=="teacher1" && pass=="1234")
    {
        window.location.href="teacher.html";
    }

    else if(user=="" && pass=="")
    {
        alert("please enter your username and password");
    }

    else
    {
        alert("You have entered a wrong username and password");
        return;
    }

}