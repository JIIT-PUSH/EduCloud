const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function call(){
    var k=localStorage.getItem("name");
    var d=JSON.parse(k)
    document.getElementById("name").innerHTML=k;
    document.getElementById("adm").innerHTML=localStorage.getItem("adminno");
    var sync = PouchDB.sync(localStorage.getItem("schoolcode"),api.concat(localStorage.getItem("schoolcode")), {
       live: true,
       retry: true
     }).on('change', function (info) {
       console.log("change chala");
     }).on('paused', function (err) {
       // replication paused (e.g. replication up to date, user went offline)
     }).on('active', function () {
       // replicate resumed (e.g. new changes replicating, user went back online)
     }).on('denied', function (err) {
       // a document failed to replicate (e.g. due to permissions)
     }).on('complete', function (info) {
      console.log("complete")
     }).on('error', function (err) {
       // handle error
     });
     var db = new PouchDB(localStorage.getItem("schoolcode"));
   db.find({selector:
    {
        "date":{
            "$type":"string"
        },
    "doc_type":"attendace"},

}).then(function(result){
    var ed=JSON.stringify(result);
    var ed1=JSON.parse(ed);
    var ed2=JSON.stringify(ed1["docs"])
    //document.getElementById("test").innerHTML=ed2;
    var i=0;
    console.log(ed)
    var node=document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode("DATE");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node=document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode("ATTENDANCE");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node= document.createElement("tr")                 // Create a <li> node
            var textnode = document.createTextNode(" ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
    for(i=0;i<ed1["docs"].length;i++){
        var node=document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(ed1["docs"][i]["date"]);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node=document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(ed1["docs"][i][localStorage.getItem("adminno")]);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node=document.createElement("tr")                 // Create a <li> node
            var textnode = document.createTextNode(" ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);

    }
}).catch(function(err){
    document.getElementById("test").innerHTML=err
})}