function validar()
{
    var verificar = document.getElementById("checkbox");

    if(!verificar.checked)
    {
        alert("Deve aceitar os termos e condições para prosseguir!");
        return false;
    }
    else    
    {
        return true;
    }
}