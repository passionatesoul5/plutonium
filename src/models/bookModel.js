const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: {type: Number, default: 10}
}, { timestamps: true });

// --------------------------------------------------------------------------//

const bookSchema = new mongoose.schema({
    bookName : "book1",
    authorName : "author1",
    tags : ["this is book 1"],

    isPublished : Boolean,
    prices : {
        indianPrice : "500"
        europePrice : "250"
    }
    year : "2021",

    tags : [{authorName:"mohan"},{totalPages:"500"},{stockAvailable:(true,false)}]


})

//-----------------------------------------------//
//assy//

const mongoose = require('mongoose')
const bookSchema = new mongoose.schema(
    {
        "author_name": {type : string},
        "author_id" : {type : number,require : true},
        "age" : {type,Number},
        "address" = {type : string} 
    },
    {
        timestamps : true
    }
)




module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
