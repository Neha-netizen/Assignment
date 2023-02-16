var MongoClient = require('mongodb').MongoClient;
const request = require("supertest");
const app = require("../src/login/controller");
const connect = require("../core/dbConnection");
const { CURSOR_FLAGS } = require('mongodb');
//require("dotenv").config();

var url = "mongodb://localhost:27017/mydb";

jest.mock("../core/dbConnection", () => {
    return {
        jobSearchDb: jest.fn().mockReturnValue({
            collection: jest.fn().mockReturnValue({
                insertOne: jest.fn().mockResolvedValue({})
            })
        }),
    }
})



describe("POST /insert", () => {
    test('Dump data Insert vpa status Success', async () => {
        let req = {
            body: {
                "name": "lm",
                "emailId": "ne.gupta@rapipay.com",
                "gender": "F",
                "dob": "11/01/2020",
                "username": "poi"
            }
        }
        let res = {}
        res.json = jest.fn(); res.send = jest.fn(() => {
            res = { responseCode: "200" }
            return res;
        });
        let db = connect.jobSearchDb(); 
        const mockCallBack = jest.fn();
        jest.spyOn(db, 'collection').mockImplementation(() => {
            return {
                insertOne: jest.fn(() => { return { modifiedCount: "1" }; }),
            }
        })
        var result = await app.insert(req, res)
        expect(result.responseCode).toBe("200");
    });
    test('Dump data Fetch Update vpa status Success', async () => {
                let req = {
                    body: {
                        "password": "1234",
                        "emailId":"ne.gupta@rapipay.com"
                    }
                }
                let res = {}
                res.json = jest.fn(); res.send = jest.fn(() => {
                    res = { responseCode: "200" }
                    return res;
                });
                let db = connect.jobSearchDb(); let mockData = [{ admin: [] }]
                const mockCallBack = jest.fn(); jest.spyOn(db, 'collection').mockImplementation(() => {
                    return {
                        updateOne: jest.fn(() => { return { _id: objId, modifiedCount: "1" }; }),
                    }
                })
                var result = await app.update(req, res)
                expect(result).toBe();
    });
    test('Dump data Fetch vpa status Success', async () => {
                let req = {
                    headers: {
                        "emailId":"ne.gupta@rapipay.com"
                    }
                }
                let res = {}
                res.json = jest.fn(); res.send = jest.fn(() => {
                    res = { responseCode: "200" }
                    return res;
                });
                let db = connect.jobSearchDb(); let mockData = [{ admin: [] }]
                const mockCallBack = jest.fn(); jest.spyOn(db, 'collection').mockImplementation(() => {
                    return {
                        findOne: jest.fn(() => { return { _id: objId, modifiedCount: "1" }; }),
                    }
                })
                var result = await app.find(req, res)
                expect().toBe();
    });
    test('Dump data delete vpa status Success', async () => {
                let req = {
                    headers: {
                        "emailId":"ne.gupta@rapipay.com"
                    }
                }
                let res = {}
                res.json = jest.fn(); res.send = jest.fn(() => {
                    res = { responseCode: "200" }
                    return res;
                });
                let db = connect.jobSearchDb(); let mockData = [{ admin: [] }]
                const mockCallBack = jest.fn(); jest.spyOn(db, 'collection').mockImplementation(() => {
                    return {
                        deleteOne: jest.fn(() => { return { _id: objId, modifiedCount: "1" }; }),
                    }
                })
                var result = await app.delete(req, res)
                expect().toBe();
            });
});