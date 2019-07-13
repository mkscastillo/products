var product = require('../controllers/controller.js');

module.exports = function(app){
    app.get('/products', function(req,res){
        product.show_all(req,res);
    });
    app.get('/:id', function(req,res){
        product.show_one(req,res);
    });
    app.post('/create', function(req,res){
        product.create(req,res);
    });
    app.put('/edit/:id', function(req,res){
        product.update(req,res);
    });
    app.delete('/delete/:id', function(req,res){
        product.delete(req,res);
    });
}