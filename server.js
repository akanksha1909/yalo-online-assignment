const express = require('express')
const axios = require('axios')

const app = express()

axios.post('https://api-staging2.yalochat.com/awesome-bank/v1/messages',
    {
        "recipient_type": "individual",
        "to": "+918601208379",
        "type": "text",
        "text": {
            "body": "Hello, your code is: 4597"
        },
    }, {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDM5MjU1MzksImlzcyI6InBzVFBMU0VPeWdEWmdTOFE2UEswSjlHMlRiV1RFVjZjIn0.eluGEcz3A2WA9BfJOxMD6-x8jEdWLeYu-UfRXx3HJss',
        'Content-type': 'application/json'
    }
}).then(result => {
    console.log(result.data)
    /**
     * { messages: [ { id: '64de3af4-ed90-45b0-9805-99a29f9da8f7' } ] }
     */
}).catch(error => {
    console.error('Error occurred while making API call', error)
})


// MAX HIT = 20 requests/minutes
// counter = 0
// timer = 0s

/**
 * while(counter < 20 && timer < 60){
 *  counter+= 1
 *  timer += 1
 * }
 */


app.listen(3000, () => {
    console.log('Listening on Port 3000')
})