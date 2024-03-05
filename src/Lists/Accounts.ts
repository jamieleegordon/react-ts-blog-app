interface AccountsInterface {
    username: string
    password: string 
    loggedIn: boolean   
}
  
const Accounts: AccountsInterface[] = [
    {
        username: "jamie274",
        password: "root123",
        loggedIn: false
    }
]

export default Accounts