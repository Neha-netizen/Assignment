const mongoQuery = require("../../mongoQuery/mongoQuery");
const mongoDb = require("../../core/dbConnection");
const { CURSOR_FLAGS } = require("mongodb");

exports.insert = async (req, res) => {
    try {
        let db = mongoDb.jobSearchDb();
        collectionName = "loginData";
        console.log("Here")
        let data = await db.collection(collectionName).insertOne(req.body);
        console.log(data)
        return res.send({ responseCode: "200", responseMessage: "success", responseData: "Registered successfully" });
    } catch (error) {
        res.send(error);
    }
};

exports.find = async (req, res) => {
    try {
        let db = mongoDb.jobSearchDb();
        collectionName = "loginData";
        let data = await db.collection(collectionName).find({ "emailId": req.headers.emailid }).toArray();
        return res.send({ responseCode: "200", responseMessage: "success", responseData: data});
    } catch (error) {
        res.send(error);
    }
};

exports.update = async (req, res) => {
    try {
        let db = mongoDb.jobSearchDb();
        collectionName = "loginData";
        let data = await db.collection(collectionName).updateOne({ emailId: req.body.emailId }, { $set: { password: req.body.password } }, { upsert: true }).toArray();
        let apiResponse={ responseCode: "200", responseMessage: "success", responseData: "Updated successfully" }
        return res.send(apiResponse);
    } catch (error) {
        res.send(error);
    }
};

exports.delete = async (req, res) => {
    try {
        let db = mongoDb.jobSearchDb();
        collectionName = "loginData";
        let data = await db.collection(collectionName).deleteOne({emailId: req.headers.emailid});
        return res.send({ responseCode: "200", responseMessage: "success", responseData: "Deleted successfully" });
    } catch (error) {
        res.send(error);
    }
};