/**
 * @author View Thossaporn Soonthorapanee
 * @email akimuraray@gmail.com
 * @create date 2019-09-01 
 * @modify  - 
 * @desc A sample project of Node.js and Line API
*/
const server = require('express');
const PORT = process.env.PORT || 9999;
const request = require('request');
const bodyParser = require('body-parser');



    server()
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false}))
    .get('/', (req, res) => res.send(`Irunaonline Chat bot nodejs-line-api running on PORT: ${ PORT }`))
    // เพิ่มส่วนของ Webhook เข้าไป
    .post('/webhook', function (req, res) {
        let replyToken = req.body.events[0].replyToken;
        let msg = req.body.events[0].message.text;
        
        console.log(`Message token : ${ replyToken }`);
        console.log(`Message from chat : ${ msg }`);

        res.json({
            status: 200,
            message: 'Webhook is working!'
        });
    })
    .listen(PORT, () => console.log(`iruna chat bot on ${ PORT }`));