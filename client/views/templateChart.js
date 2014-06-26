Template.templateChart.rendered = function(){
  Deps.autorun(function (c) {
  drawChart();
    });
}
function drawChart(){
  var deviceLabels = Devices.find().fetch();
  var labels1 = [];
  var datas1 = [];
  for (i=0; i<Devices.find().count();i++) {
    //labels1.push("bouya");
    labels1.push(deviceLabels[i]["deviceName"]);
     //somme_consommation = somme_consommation + parseFloat(validation_messages[i]["prixDeviceAn"]);
     //console.log(somme_consommation.toFixed(2));
    datas1.push(deviceLabels[i]["prixDeviceAn"]);
   }
  

 var data = [];
for (i=0; i<Devices.find().count();i++) {
  var data10 = {value : parseFloat(deviceLabels[i]["prixDeviceAn"]) , color:"#F38630"  };
   data.push(data10);
    
   }
  console.log(data);
  //Get context with jQuery - using jQuery's .get() method.
  var ctx = $("#myChart").get(0).getContext("2d");
  //This will get the first returned node in the jQuery collection.
  var myNewChart = new Chart(ctx);

  new Chart(ctx).Pie(data);
}

Meteor.startup(function() {

  drawChart();

});