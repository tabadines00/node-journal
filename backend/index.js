const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/getAllReflections', (req, res) => {

    /*
    res.json(readData());
    */
});

app.post('/api/addReflection', (req, res) => {

    /*
    let body = req.body.body;
    let tags = req.body.tags;
    let links = req.body.links;

    let newCard = createCard(body, tags, links);
    updateData(newCard);
    */
});


//Will implement deleting cards later
/*
app.delete('/deleteCard/:id', (req, res) => {
    deleteData(req.params.id);
    res.send("{}");
});

*/

app.listen(3000, () => console.log("==== Now listening on port 3000 ===="));

// Helper Functions

function createNote(body, tags, links) {
    //Create a note and return it
    let note = {
        //id: uuid4?
        body: body,
        tags: tags
    }
    return note;
}

function readData() {
    //Returns a string of everything in /db/zbase.json
    let rawdata = fs.readFileSync(__dirname + '/db/notes.json');
    return JSON.parse(rawdata);
}

function updateData(jsonData) {
    //import data into 'data'
    let data = readData();
    //let index;

    //This code loops through the array and checks for same id
    //Won't need this for now
    /*
    let filteredData = data.filter( (value, i, arr) => {
        if(value.id != jsonData.id) {
            return true;
        } else {
            index = i;
            return false;
        }
    });
    */

    //Checks if we should update or add to the data
    //if(filteredData) {
    //    data[index] = jsonData;
    //} else {

        //assuming jsonData is of the right type for now
        data.push(jsonData);
    //}

    //Stringify and write to db, or in this case the json file for now
    data = JSON.stringify(data, null, 2);
    fs.writeFileSync(__dirname + '/db/notes.json', data, (err) => {
        if (err) throw err;
        console.log("data has been updated");
    });
}

function deleteData(id) {
    //import data
    let data = readData();

    //find the object by id, then remove from the array
    data = data.filter( (value, i, arr) => {
        return value.id != id;
    });

    //Stringify and write to db, in json file for now
    data = JSON.stringify(data, null, 2);
    fs.writeFileSync(__dirname + '/db/notes.json', data, (err) => {
        if (err) throw err;
        console.log("data has been updated");
    });
}

function readDataJson() {
    return fs.readFileSync(__dirname + '/db/notes.json');
}