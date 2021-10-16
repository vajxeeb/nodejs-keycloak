

const express = require('express')
const axios = require('axios')
const app = express()

const params = new URLSearchParams()
const config = {
    headers: {
       //'Content-Type': 'application/x-www-form-urlencoded'
       //'Content-Type': 'application/json'
       'Content-Type': 'application/x-www-form-urlencoded'
    }
}   

var url = 'http://localhost:8080/auth/realms/Demo-Realm/protocol/openid-connect/token'


//app.post('/login', (req, res) => {

   // const { username, password } = req.body

    // if (!username || !password) {
    //     res.json('Enter your name or password')
    // }

   // else {

        params.append('grant_type', 'password')
        params.append('client_id', 'nodejs-microservice')
        params.append('client_secret', 'a785a83e-b31e-4d04-8d3b-9ac11218d734')
        params.append('username', "avv")
        params.append('password', "12345")


       

        axios.post(url, params, config)
            .then((response) => {
                const access_token = response.headers
               if (access_token == undefined) {
                    console.log('You canot login')
                }
                else {
                    console.log('You  logined')
                }
                //console.log(response);
            })
            .catch( (error) => {
                console.log("Error");
            })









const url2 = 'http://localhost:8080/auth/realms/Demo-Realm/users/c9dd46b9-8eb2-4f1e-b51b-a35d6a0c1496'


axios.get(url2)
.then((res) => {
    console.log(res)
})



app.get('/', (req,res) => {
    res.send('Hello keycloak...!')
})
app.listen(5000, () => console.log('listening on port 3000'))