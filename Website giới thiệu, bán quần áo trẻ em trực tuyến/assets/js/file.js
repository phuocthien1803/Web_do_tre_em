
    function ktrTen()
    {
        var rg = /^^[a-zA-Z0-9_-]{3,16}$/;
        var t = document.getElementById("txtTen").value;
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
            document.getElementById("e1").innerHTML = "Cannot be more than 16 characters, containing letters, number or -, _";
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
        var rg = /^[\w\_-]+@[a-zA-Z]*\.com$/;
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
    function ktrNgay()
    {
        var t = document.getElementById("txtNgay").value;
        k = new Date(t);
        var cr = new Date();
        var a = cr.getFullYear() - k.getFullYear();
        if(t == ""){
            document.getElementById("e7").innerHTML = "Must be selected!";
            return false;
        }
        if(a < 16)
        {
            document.getElementById("e7").innerHTML = "Under 16 years old!";
            return false;
        } else
        {
            document.getElementById("e7").innerHTML = "";
            return true; 
        }
    }
    function ktrPass()
    {
        var rg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        var t = document.getElementById("txtPass").value;
        if(t == "")
        {
            document.getElementById("e5").innerHTML = "Can not be empty!";
            return false;
        }
        if(rg.test(t))
        {
            document.getElementById("e5").innerHTML = "";
            return true;
        } else{
            document.getElementById("e5").innerHTML = "Minimum eight characters, at least one letter, one number and one special character";
            return false;
        }
    }
    function ktrPass2()
    {
        var t1 = document.getElementById("txtPass").value;
        var t2 = document.getElementById("txtCF").value;
        if(t2 == "")
        {
            document.getElementById("e6").innerHTML = "Can not be empty!";
            return false;
        }
        if(t1 == t2)
        {
            document.getElementById("e6").innerHTML = "";
            return true;
        } else{
            document.getElementById("e6").innerHTML = "Passwords do NOT match";
            return false;
        }
    }
    
    function submit()
    {
        if(ktrTen() && ktrNgay() && ktrEmail() && ktrSDT() && ktrPass() && ktrPass2()) 
        {
            alert("Sign Up succesflly! Now you can Login into BabyShop!");
        } else
        {
            document.getElementById("e8").innerHTML = "You must fill in correct and complete information!";
        }
        
    }

   