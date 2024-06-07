
// Select the database to use.
use('mongodbVSCodePlaygroundDB');


// create one document
db.getCollection('sample_mflix').insertOne(
    {
        '_id': '665893dfc8332143a90aa158',

        'name': 'Bad Chad',
        'email': 'bad_chad@lotr.org',
        'password': 'ezpasswordz.',
    }
);



// New knowledge attained:

// I'm already connected, don't need to 're-connect' to it in my document.
// when I used the 'use('mongo....), it created a new db.
// db.getCollection('sample....) created a new collection
// and then I inserted the document in to it.




// what I should have done:
// use('sample_mflix')
// db.getCollection('users')....
// insert the new document here.

// my question is, will the id auto generate or do I need to 
// do some i++ stuff here?

