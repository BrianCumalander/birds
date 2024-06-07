// use 'test' db
use("test");

db.sales.insertOne(
    {
        _id: 1,
        "item": "abc"
    }
);