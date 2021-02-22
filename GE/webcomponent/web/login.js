function validate() 
{
    

    var username = document.getElementById("username").value;  // Geting the input of username
    var password = document.getElementById("password").value;  // Geting the input of password

    
    if(username=="GEsrec" && password=="livestreaming")     // Check the username and password
    {
        window.location.href="stream.html";  // If the password and username 
        return false;                        //are correct it will redirect the Room details page
    }
    else if (username==""||password==""){           
      
        alert("Username or Password are empty");
        window.location.href="index.html";
        return false;
        
    }
    else{
        
        alert("login Failed");
        window.location.href="index.html";
        return false;
        
    }
    
}