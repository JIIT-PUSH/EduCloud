const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function test (){
    var db = new PouchDB(api.concat("schools"));
    db.find({selector:
        {
            "subdistrict":"east"
        },
        fields:['_id','school','principal','board']

    }).then(function(result){
        var ed=JSON.stringify(result);
        var i=0;
        var ed1=JSON.parse(ed);
        //var i;
        for(i=0;i<3;i++){
            ed2=JSON.stringify(ed1["docs"][i]["school"])
        var h = document.getElementById("json");
        h.insertAdjacentHTML("afterend", ed2);
        h.insertAdjacentHTML("afterend", "<br>");
        //for(i=0;i<ed1["docs"].length;i++){
        //var ed2=JSON.stringify(ed1["docs"][i]["school"])
        //document.getElementById("json").innerHTML=document.getElementById("json").innerHTML+'<br>'+ed2;}
        //e.insertAdjacentElement('afterbegin',<div><p>{{ed}}</p></div>);

    }}).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
}