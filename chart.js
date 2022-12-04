var dataa  = [];
var dataa2  = [];
var dataa3  = [];
var dataa4  = [];

function insert() {
   dataa.push({
        s1: document.getElementById("scorea").value,
        s2: document.getElementById("scoreb").value,
        s3: document.getElementById("scorec").value,
        s4: document.getElementById("scored").value,
       
      });   
}

function insert1(){
    dataa2.push({
        s5: document.getElementById("scoree").value,
        s6: document.getElementById("scoref").value,
        s7: document.getElementById("scoreg").value,
        s8: document.getElementById("scoreh").value, 
      });   
   
}

function insert3(){
    dataa3.push({
        s9: document.getElementById("scorei").value,
        s10: document.getElementById("scorej").value,
        s11: document.getElementById("scorek").value,
        s12: document.getElementById("scorel").value, 
      });   
   
}

function insert4(){
    dataa4.push({
        s13: document.getElementById("scorem").value,
        s14: document.getElementById("scoren").value,
        s15: document.getElementById("scoreo").value,
        s16: document.getElementById("scorep").value, 
      });   
   
}

function addData1() {
    var xValue = ["spain", "spain", "Spain", "spain"];
    var yValue = [dataa2[0].s5,dataa2[0].s6,dataa2[0].s7,dataa2[0].s8];
    var barColors = ["red", "green","blue","orange","brown"];        
      new Chart( "myChart",
          {
          type: "bar",
          data: {
            labels: xValue,
            datasets: [{
              backgroundColor: barColors,
              data: yValue
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Group 1"
            }
          }
        });
    }

    function addData2() {
       
        var xValue = ["Italy", "Italy", "Italy", "Italy"];
        var yValue = [dataa[0].s1,dataa[0].s2,dataa[0].s3,dataa[0].s4];
        var barColors = ["red", "green","blue","orange"];        
          new Chart( "myChart",
              {
              type: "bar",
              data: {
                labels: xValue,
                datasets: [{
                  backgroundColor: barColors,
                  data: yValue
                }]
              },
              options: {
                legend: {display: false},
                title: {
                  display: true,
                  text: "Group 2"
                }
              }
            });
        }

    
    function addData3() {
            var xValue = ["Portugal", "Portugal", "Portugal", "Portugal"];
            var yValue = [dataa3[0].s9,dataa3[0].s10,dataa3[0].s11,dataa3[0].s12];
            var barColors = ["red", "green","blue","orange","brown"];        
              new Chart( "myChart",
                  {
                  type: "bar",
                  data: {
                    labels: xValue,
                    datasets: [{
                      backgroundColor: barColors,
                      data: yValue
                    }]
                  },
                  options: {
                    legend: {display: false},
                    title: {
                      display: true,
                      text: "Group 3"
                    }
                  }
                });
            }
    
            function addData4() {
                var xValue = ["Brazil", "Brazil", "Brazil", "Brazil"];
                var yValue = [dataa4[0].s13,dataa4[0].s14,dataa4[0].s15,dataa4[0].s16];
                var barColors = ["red", "green","blue","orange","brown"];        
                  new Chart( "myChart",
                      {
                      type: "bar",
                      data: {
                        labels: xValue,
                        datasets: [{
                          backgroundColor: barColors,
                          data: yValue
                        }]
                      },
                      options: {
                        legend: {display: false},
                        title: {
                          display: true,
                          text: "Group 4"
                        }
                      }
                    });
                }
     