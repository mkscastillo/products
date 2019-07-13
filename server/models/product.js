var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');

var ProductSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength:4},
    price: {type:String, required:true},
    photo: {type:String}
    },{timestamps: true })

mongoose.model('Product',ProductSchema);