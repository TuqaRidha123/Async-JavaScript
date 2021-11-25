/*async function hello() {

}*/
/*
const sing = async () => {
    throw new Error("oopsie")
    return "LA LA LA LA LA"
}
// uncaught in promise error oopsie at sing
// rejects the automatically made promise
// resolved: LA LA LA LA LA

sing()
    .then((data) => {
        console.log("Promise resolved with:", data);
    })
    .catch(err => {
        console.log("OH NO, Promise Rejected");
        console.log(err);
    })
// OH NO, Promise Rejected 
// Error: oopsie
// Promise resolved with: LA LA LA LA LA
*/

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'welcome!'
    throw 'Invalid password'
}

login ('djkfdsjklksdf', 'corgifeetarecute')
    .then(msg => {
        console.log("Logged in!")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error!")
        console.log(err)
    })