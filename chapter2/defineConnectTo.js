var connectTo = function(port, dbname) {
 if (!port) {
 port = 27017;
 }
 if (!dbname) {
 dbname = "test";
 }
 db = connect("localhost:"+port+"/"+dbname);
 return db;
};
