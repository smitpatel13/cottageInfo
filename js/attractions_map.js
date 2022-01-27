function initialize() {
  var mapCanvas = document.getElementById('map-canvas');

  var mapOptions = {
    center: new google.maps.LatLng(42.056624, -84.114521),
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)

  var places = [];
  var listeners = [];
  var infoWindows = [];

  /* New Place Format:
  var PLACENAME = new Object();
  PLACENAME.infoContent = 
    '<div id="content">' +
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">TfdsafasdfITLE</h1>'+
    '<div id="bodyContent">'+
    '<p><b>HEADING</b>CONTENT'+
    '</div>'+
    '</div>';
  PLACENAME.latLng = [xxxxx, yyyyy];
  PLACENAME.title = 'TITLE';
  places.push(PLACENAME);
  */

  // Keep this first in array
  var evansLake = new Object();
  evansLake.infoContent = 
    'Evan\'s Lake';
  evansLake.latLng = [42.056628, -84.114162];
  evansLake.title = 'Evan\'s Lake';
  places.push(evansLake);

  var hiddenLakeGardens = new Object();
  hiddenLakeGardens.infoContent = 
    '<div id="content">' +
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Hidden Lake Gardens</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Hidden Lake Gardens</b> colloquially known as Hidden Lake 755 acres (3.06 km2), is a botanical garden and an arboretum operated by Michigan State University situated in the Irish Hills of southeast Michigan. The Gardens are known for their large collection of native and nonnative trees, shrubs and flowers. HLG was given to Michigan State University by Harry Fee in 1945. Today it is visited by nearly 45,000 people annually.</p>'+
    '<p>Attribution: Hidden Lake Gardens, <a href="http://en.wikipedia.org/wiki/Hidden_Lake_Gardens">'+
    'http://en.wikipedia.org/wiki/Hidden_Lake_Gardens</a> '+
    '(last visited April 19, 2015).</p>'+
    '</div>'+
    '</div>';
  hiddenLakeGardens.latLng = [42.022705, -84.107256];
  hiddenLakeGardens.title = 'Hidden Lake Gardens';
  places.push(hiddenLakeGardens);

  var mis = new Object();
  mis.infoContent = 
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Michigan International Speedway</h1>'+
    '<div id="bodyContent">'+
    '<p><b>MIS</b>, is a two-mile (3.2 km) moderate-banked D-shaped speedway located ' +
    'off U.S. Freeway 12 on more than 1,400 acres (5.7 km2)[1] approximately four-mile ' +
    '(6.4 km) south of the village of Brooklyn, in the scenic Irish Hills area of southeastern ' +
    'Michigan. The track is used primarily for NASCAR events. It is sometimes known as a "sister track" ' + 
    'to Texas World Speedway, and was used as the basis of Auto Club Speedway. The track ' +
    'is owned by International Speedway Corporation (ISC). ' +
    'Michigan is the fastest track in NASCAR due to its wide, sweeping corners and long straightaways. </p>'+
    '<p>Attribution: MIS, <a href="http://en.wikipedia.org/wiki/Michigan_International_Speedway">'+
    'http://en.wikipedia.org/wiki/Michigan_International_Speedway</a> '+
    '(last visited April 19, 2015).</p>'+
    '</div>'+
    '</div>';
  mis.latLng = [42.064825, -84.240862];
  mis.title = 'Michigan International Speedway';
  places.push(mis);

  var walkerTavern = new Object();
  walkerTavern.infoContent = 
    '<div id="content">' +
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Walker Tavern</h1>'+
    '<div id="bodyContent">'+
    '<p><b>The Walker Tavern</b> is a historic structure located at 11710 U.S. Route 12 in Cambridge Township in northwesternmost Lenawee County, Michigan. It was designated as a Michigan Historic Site on February 19, 1958 and was later the county\'s first property added to the National Register of Historic Places on January 25, 1971.</p>'+
    '<p>Attribution: Walker Tavern, <a href="http://en.wikipedia.org/wiki/Walker_Tavern">'+
    'http://en.wikipedia.org/wiki/Walker_Tavern</a> '+
    '(last visited April 19, 2015).</p>'+
    '</div>'+
    '</div>';
  walkerTavern.latLng = [42.063981, -84.223554];
  walkerTavern.title = 'Walker Tavern';
  places.push(walkerTavern);

  var WJHStatePark = new Object();
  WJHStatePark.infoContent = 
    '<div id="content">' +
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Walter J. Hayes State Park</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Walter J. Hayes State Park</b> is a 654-acre (2.65 km2) state park in the U.S. state of Michigan. It is located along US Highway 12 in the Irish Hills region of Lenawee County and extending into small parts of Jackson and Washtenaw counties in the Round Lake area. The park is surrounded by scenic lakes, namely Wamplers, Evans, and Sand lakes, as well as chains of smaller lakes.'+
    '<p>Attribution: Walter J. Hayes State Park, <a href="http://en.wikipedia.org/wiki/Hayes_State_Park">'+
    'http://en.wikipedia.org/wiki/Hayes_State_Park</a> '+
    '(last visited April 19, 2015).</p>'+
    '</div>'+
    '</div>';
  WJHStatePark.latLng = [42.064737, -84.135593];
  WJHStatePark.title = 'Walter J. Hayes State Park';
  places.push(WJHStatePark);

  var cherryHillWinery = new Object();
  cherryHillWinery.infoContent = 
    '<div id="content">' +
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Cherry Hill Winery</h1>'+
    '<div id="bodyContent">'+
    '<p>Located in a Historic 1870 Schoolhouse, this is one stop you don\'t want to miss! Come and taste their Award Winning Wines at the knotty pine bar. Sample Cherry Creeks freshly made Butter Fudge, or taste their Michigan Cherry Preserves. '+
    '<p>Attribution: Cherry Creek Winery, <a href="http://www.cherrycreekwine.com/scripts/winerypg.cfm">'+
    'http://www.cherrycreekwine.com/scripts/winerypg.cfm</a> '+
    '(last visited April 19, 2015).</p>'+
    '</div>'+
    '</div>';
  cherryHillWinery.latLng = [42.050770, -84.301281];
  cherryHillWinery.title = 'Cherry Hill Winery';
  places.push(cherryHillWinery);

  function setPlaces() {
    for (i=0;i<places.length;i++) {
      var infoWindow = new google.maps.InfoWindow({
        content: places[i].infoContent
      });
      infoWindows.push(infoWindow);
      var position = new google.maps.LatLng(places[i].latLng[0], places[i].latLng[1]);
      var marker = new google.maps.Marker({
        position: position,
        map: map,
        title: places[i].title
      });
      setListener(marker, infoWindow);
    }
  };
  
  function setListener(marker, infoWindow) {
    google.maps.event.addListener(marker, 'click', function() {
      closeInfoWindows();
      infoWindow.open(map, marker);
    })
  };

  function closeInfoWindows() {
    for (i=0;i<infoWindows.length;i++) {
      infoWindows[i].close();
    };
  };
  

  var defaultLatLng = new google.maps.LatLng(42.056628, -84.114162);
  var defaultInfoWindow = new google.maps.InfoWindow({
    content: 'Evan\'s Lake'
  });
  var defaultMarker = new google.maps.Marker({
    position: defaultLatLng,
    map: map,
    title: 'Evan\'s Lake'
  });
  infoWindows.push(defaultInfoWindow);
  defaultInfoWindow.open(map, defaultMarker);

  setPlaces();
}
google.maps.event.addDomListener(window, 'load', initialize);
