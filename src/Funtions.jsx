
//To see the email they have enter have @ and .
export function ProveEmail(email)
{
    if(!email.includes('@') && !email.includes('.'))
    {
        return false;
    }
}


//The message have to be between 20 and 120 characters
export function ProveMessage(message)
{
    if(message.length >= 20 && message.length <= 120)
    {
        return true;
    }
    else 
    {
        return false;
    }
}


//Check user name and password
export function ProveUserPassword(password, username)
{
    //se necesitan los datos de la base de datos para verificar
    if(!password && !username)
    {
        return false;
    }
}