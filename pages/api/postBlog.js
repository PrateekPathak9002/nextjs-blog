import fs from 'fs';


export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body);

    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.title || !body.content) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'Title or content name not found' });
    }

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.title} ${body.content}` });
    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();
       
    var date = year + "-" + month + "-" + day;
    let content = `---
title: '${body.title}'
date: '${date}'
---
${body.content}
    `
    fs.writeFile(`E:/anshu/js3/nextjs-blog/posts/${body.title.replace(' ','-')}.md`, content, err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    });
}