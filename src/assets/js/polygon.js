var map;
var polyCoords = [];
var FinalCoordinates = [];
var markers = new Array();
var drawingManager;
var polygon_0;

        function initMap() {
            map = new google.maps.Map(
                document.getElementById("map"), {
                center: new google.maps.LatLng(28.4595, 77.0266),
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
        
             drawingManager = new google.maps.drawing.DrawingManager({
                drawingMode: google.maps.drawing.OverlayType.POLYGON,
                drawingControl: true,
                drawingControlOptions: {
                    position: google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: [
                        google.maps.drawing.OverlayType.POLYGON
                    ] 
                },
                polygonOptions: {
                    fillColor: '#BCDCF9',
                    fillOpacity: 0.5,
                    strokeWeight: 2,
                    strokeColor: '#57ACF9',
                    clickable: false,
                    editable: false,
                    zIndex: 1
                }
            });
                drawingManager.setMap(map)

                google.maps.event.addListener(drawingManager, 'polygoncomplete', function (polygon) {
                          var path = polygon.getPath()
                        // var coordinates = [];
                        FinalCoordinates = [];
                        for (var i = 0 ; i < path.length ; i++) {
                            polyCoords.push(new google.maps.LatLng(path.getAt(i).lat(),path.getAt(i).lng()));   
                            FinalCoordinates.push({"latitude":path.getAt(i).lat(),"longitude":path.getAt(i).lng()});

                        }
                       

                        map = new google.maps.Map(document.getElementById("map"), {
                        center: new google.maps.LatLng(28.4595, 77.0266),
                        zoom: 13,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                        });
                        

                        polygon_0 = new google.maps.Polygon({
                            path: polyCoords,

                            strokeColor: "#ff0000",
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: "#ff0000",
                            fillOpacity: 0.3,
                            clickable: true,
                            editable: true,
                    });
                   
                    polygon_0.setMap(map);

                    google.maps.event.addListener(polygon_0, "mouseup", function (event) {
                       
                        drawingManager.setOptions({ drawingMode: null, drawingControl: false });
                     
                    });
                    
                        // google.maps.event.addListener(polygon_0.getPath(), "dragend", getPolygonCoords);
                      google.maps.event.addListener(polygon_0.getPath(), "insert_at", function(){
                        var len = polygon_0.getPath().getLength();
                         var path = polygon_0.getPath()
                        // var htmlStr = "";
                        FinalCoordinates = [];
                        for (var i = 0; i < len; i++) {
                        //   htmlStr += {Latitude:path.getAt(i).lat()},{Longitude:path.getAt(i).lng()}+ ","; 
                          FinalCoordinates.push({"latitude":path.getAt(i).lat(),"longitude":path.getAt(i).lng()});
                        }
                        // document.getElementById('info').innerHTML = htmlStr;
                        // console.log("insert");
                //    console.log(FinalCoordinates);  
                // return FinalCoordinates;   
                  }
                );
                      //google.maps.event.addListener(polygon_0.getPath(), "remove_at", getPolygonCoords);
                      google.maps.event.addListener(polygon_0.getPath(), "set_at", function(){
                        var len = polygon_0.getPath().getLength();
                         var path = polygon_0.getPath()
                        // var htmlStr = "";
                        FinalCoordinates = [];
                        for (var i = 0; i < len; i++) {
                            // htmlStr += {Latitude:path.getAt(i).lat()},{Longitude:path.getAt(i).lng()}+ ","; 
                            FinalCoordinates.push({"latitude":path.getAt(i).lat(),"longitude":path.getAt(i).lng()});
                          }
                        //   document.getElementById('info').innerHTML = htmlStr;
                        // console.log("set_at");
                //    console.log(FinalCoordinates);  
                // return FinalCoordinates;   
                  }
          );
                      
            });

          
        }


// function to get final coordinates
        // function getPolygonCoords() {
        //       var len = polygon_0.getPath().getLength();
        //        var path = polygon_0.getPath()
        //       // var htmlStr = "";
        //       FinalCoordinates = [];
        //       for (var i = 0; i < len; i++) {
                
        //         FinalCoordinates.push({Latitude:path.getAt(i).lat()},{Longitude:path.getAt(i).lng()});
        //       }
        //       // console.log("new");
        // //  console.log(FinalCoordinates);     
        // }

  