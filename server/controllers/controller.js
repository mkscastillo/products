var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = {
    show_all:function(req,res){
        Product.find({}, function(err,products){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err})
            } else {
                res.json({products:products});
            }
        })
    },
    show_one:function(req,res){
        Product.findOne({_id:req.params.id}, function(err, product){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({product:product});
            }
        })
    },
    create:function(req,res){
        var product = new Product({name:req.body.name, price:req.body.price, photo: req.body.photo});
        product.save(function(err){
            if(err){
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success"});
            }
        })
    },
    update:function(req,res){
        Product.updateOne({_id:req.body._id},{$set:{name:req.body.name, price:req.body.price, photo: req.body.photo}}, function(err,author){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully updated"});
            }
        })
    },
    delete:function(req,res){
        Product.deleteOne({_id:req.params.id}, function(err){
            if(err){
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Successfully deleted"});
            }
        })
    }
}