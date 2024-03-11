
function verificaspasse() {
        
    var password = document.getElementById("password").value;
        var retypePassword = document.getElementById("retypePassword").value;

        
        if (password != retypePassword) {
        alert("As senhas não correspondem. Por favor, tente novamente.");
            return false;
        }

        return true;
    }