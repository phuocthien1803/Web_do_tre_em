function ktrName()
    {
        var rg = /^([A-Z][a-z]+){1}(\s[A-Z][a-z]+\s*)*$/;
        var t = document.getElementById("txtName").value;
        if(t == "")
        {
            document.getElementById("e1").innerHTML = "Can not be empty!";
            return false;
        }
        if(rg.test(t))
        {
            document.getElementById("e1").innerHTML = "";
            return true;
        } else{
            document.getElementById("e1").innerHTML = "First letter on each word must be uppercase";
            return false;
        }
    }
    
    function ktrSDT()
    {
        var rg = /^(09|03|08)[0-9]{8}$/;
        var t =document.getElementById("txtSDT").value;
        if(t == "")
        {
            document.getElementById("e3").innerHTML = "Can not be empty!";
            return false;
        }
        if(rg.test(t))
        {
            document.getElementById("e3").innerHTML = "";
            return true;
        } else{
            document.getElementById("e3").innerHTML = "Must have 10 characters and start with 09, 08 or 03";
            return false;
        }
    }
    
    function ktrEmail()
    {
        var rg = /^([A-Z][a-z]+){1}(\s[A-Z][a-z]+\s*)*$/;
        var t =document.getElementById("txtEmail").value;
        if(t == "")
        {
            document.getElementById("e2").innerHTML = "Can not be empty!";
            return false;
        }
        if(rg.test(t))
        {
            document.getElementById("e2").innerHTML = "";
            return true;
        } else{
            document.getElementById("e2").innerHTML = "Must have @ and .com";
            return false;
        }
    }
    function ktrSJ()
    {
        var rg = /^[\w\_-]+@[a-zA-Z]*\.com$/;
        var t =document.getElementById("txtSJ").value;
        if(t == "")
        {
            document.getElementById("e4").innerHTML = "Can not be empty!";
            return false;
        }
        if(rg.test(t))
        {
            document.getElementById("e4").innerHTML = "";
            return true;
        } else{
            document.getElementById("e4").innerHTML = "First letter on each word must be uppercase";
            return false;
        }
    }