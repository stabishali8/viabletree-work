// let express = require('express');
// let routes = require('./routes');
// let http = require('http');
// let path = require('path');
// let urlencoded = require('url');
// let bodyParser = require('body-parser');
// let json = require('json');
// let logger = require('logger');
// let methodOverride = require('method-override');

// let nano = require('nano')('http://localhost:5948');

// let db = nano.use('address');

// let app = express();

// app.set('port',process.env.PORT || 3000);
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','jade');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(methodOverride());
// app.use(express.static(path.join(__dirname,'path')));

// app.get('/',routes.index);

// app.post('/createdb',function(req,res){
//     nano.db.create(req.body.dbname,function(err){
//         if(err){
//             res.send("Error creating database"+req.body.dbname);
//             return;
//         }
//         res.send("Database"+req.body.dbname +"created successfully");
//     })  
// });

// app.post('/new_contact',function(req,res){
//     let name = req.body.name;
//     let phone = req.body.phone;

//     db.insert({name:name,phone:phone,crazy:true},phone,function(error,body,header){
//         if(err){
//             res.send("Error creating contact");
//             return;
//         }
//         res.send('Contact created Successfully');
//     })
// })

// app.post('/view_contact',function(req,res){
//     let alldoc = "Following are the contacts";
//     db.get(req.body.phone,{revs_info:true},function(err,body){
//         if(err){
//             console.log(body);
//         }
//         if(body){
//             alldoc = "Name: "+body.name+"<br/> Phone Number: "+body.phone;
//         }
//         else{
//             alldoc = "No records found";
//         }
//         res.send(alldoc);
//     })
// })

// app.post('/delete_contact',function(){
//     db.get(req.body.name,{revs_info:true},function(err,body){
//         if(!err){
//             db.destroy(req.body.phone,body._rev,function(err,body){
//                 if(err){
//                     res.send("error deleting contact");
//                 }
//             });
//             res.send("Contacts deleted successfully");
//         }
//     });
// });

// http.createServer(app).listen(app.get('port'),function(){
//     console.log('Express server listening on port'+app.get('port'))
// })

let http = require('http');
let url = require('url');

let server = http.createServer(function(req,res){
    res.writeHead(200,('Content-Type','text/html'));
    var q = url.parse(req.url,true).query;
    var txt = q.month;
    res.end(txt);
});

server.listen(8082,'localhost',function(){
    
});