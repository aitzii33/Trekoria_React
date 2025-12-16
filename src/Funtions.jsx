export function ProveUserName(username)
{
    //check if that username exist
}


//To see the email they have enter have @ and .
export function ProveEmail(email)
{
    if(!email.includes('@') && !email.includes('.'))
    {
        return false;
    }
    else
    {
        return true;
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
    //The database data is needed for verification
    if(!password && !username)
    {
        return false;
    }
    else
    {
        return true;
    }
}

export function IfExistEmail(email)
{
    //Check if the email is in the database
    if(!email.includes('@') && !email.includes('.'))
    {
        return false;
    }
    else
    {
        return true;
    }
}