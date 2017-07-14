"use strict";
//jshint esversion: 6, -W117, -W097
const fs = require('fs');
const split = require('split');

function talkies() {
    let dict = {};
    fs.readFile('dictionary', {encoding: "utf-8"}, (err, data)=> {
        if (err) {
            console.error(err);
            return;
        }
        const lines = data.split("\n");
        lines.forEach( (line)=>{
            let entry = line.split(":");
            dict[entry[0]] = entry[1];  // set a property in an object pattern is dict[key] = value
        });
    
        process.stdin.encoding = "utf-8";
        process.stdin.on('end', (data) => {});
        process.stdin.on('error', (err) => {
            console.log(err.message);
        });

        process.stdin.pipe(split()).on('data', (text) => {
            let irishWords = text.split(" ");
            let output = [];

            irishWords.forEach( (irishWord)=>{
                let englishWord = dict[irishWord];
                if (englishWord) {
                    let spanIt  = "<span title='"+englishWord + "'>"+ irishWord+ "</span>";
                    output.push(spanIt);
                } else {
                    output.push(irishWord);
                }
            });
            let htmlString = output.join(" ");
            console.log(htmlString);

        });
    });
}
talkies();
