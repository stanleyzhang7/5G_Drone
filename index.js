let map;
let mydata;
var arr = [{
  "latitude": 42.349525,
  "longitude": -71.094642,
  "downloadbit": 83721
},
{
  "latitude": 42.34919,
  "longitude": -71.098364,
  "downloadbit": 72084
},
{
  "latitude": 42.349303,
  "longitude": -71.106637,
  "downloadbit": 142460
},
{
  "latitude": 42.349544,
  "longitude": -71.094622,
  "downloadbit": 105393
},
{
  "latitude": 42.350028,
  "longitude": -71.098048,
  "downloadbit": 45227
},
{
  "latitude": 42.349923,
  "longitude": -71.099372,
  "downloadbit": 113520
},
{
  "latitude": 42.349114,
  "longitude": -71.095275,
  "downloadbit": 72323
},
{
  "latitude": 42.349507,
  "longitude": -71.094584,
  "downloadbit": 104756
},
{
  "latitude": 42.348113,
  "longitude": -71.106409,
  "downloadbit": 53294
},
{
  "latitude": 42.349007,
  "longitude": -71.096116,
  "downloadbit": 43259
},
{
  "latitude": 42.349664,
  "longitude": -71.094757,
  "downloadbit": 29442
},
{
  "latitude": 42.349511,
  "longitude": -71.094623,
  "downloadbit": 91833
},
{
    "Date": "12:43 PM",
    "latitude": 42.349525,
    "longitude": -71.094642,
    "download": 83721,
    "downloadbit": 128689023,
    "upload": 1523,
    "upload bit": 2761278,
    "Delay": 47
  },
  {
    "Date": "12:22 PM",
    "latitude": 42.34919,
    "longitude": -71.098364,
    "download": 72084,
    "downloadbit": 109467426,
    "upload": 43443,
    "upload bit": 45813364,
    "Delay": 23
  },
  {
    "Date": "12:26 PM",
    "latitude": 42.349303,
    "longitude": -71.106637,
    "download": 142460,
    "downloadbit": 215678875,
    "upload": 56182,
    "upload bit": 51707696,
    "Delay": 23
  },
  {
    "Date": "11:11 PM",
    "latitude": 42.349544,
    "longitude": -71.094622,
    "download": 105393,
    "downloadbit": 137607928,
    "upload": 5522,
    "upload bit": 5986118,
    "Delay": 31
  },
  {
    "Date": "7:32 PM",
    "latitude": 42.350028,
    "longitude": -71.098048,
    "download": 45227,
    "downloadbit": 83804942,
    "upload": 33824,
    "upload bit": 57593972,
    "Delay": 23
  },
  {
    "Date": "3:54 PM",
    "latitude": 42.349923,
    "longitude": -71.099372,
    "download": 113520,
    "downloadbit": 194256578,
    "upload": 15042,
    "upload bit": 26220847,
    "Delay": 23
  },
  {
    "Date": "11:58 AM",
    "latitude": 42.349114,
    "longitude": -71.095275,
    "download": 72323,
    "downloadbit": 86854276,
    "upload": 4041,
    "upload bit": 3765603,
    "Delay": 35
  },
  {
    "Date": "10:15 AM",
    "latitude": 42.349507,
    "longitude": -71.094584,
    "download": 104756,
    "downloadbit": 185031914,
    "upload": 12454,
    "upload bit": 21526040,
    "Delay": 26
  },
  {
    "Date": "8:48 PM",
    "latitude": 42.348113,
    "longitude": -71.106409,
    "download": 53294,
    "downloadbit": 62781778,
    "upload": 27129,
    "upload bit": 48651566,
    "Delay": 23
  },
  {
    "Date": "8:32 PM",
    "latitude": 42.349007,
    "longitude": -71.096116,
    "download": 43259,
    "downloadbit": 59278910,
    "upload": 54361,
    "upload bit": 62410238,
    "Delay": 22
  },
  {
    "Date": "4:27 PM",
    "latitude": 42.349664,
    "longitude": -71.094757,
    "download": 29442,
    "downloadbit": 48823705,
    "upload": 171,
    "upload bit": 280012,
    "Delay": 43
  },
  {
    "Date": "4:15 PM",
    "latitude": 42.349511,
    "longitude": -71.094623,
    "download": 91833,
    "downloadbit": 114547802,
    "upload": 8452,
    "upload bit": 13786267,
    "Delay": 23
  },
  {
    "Date": "",
    "latitude": "",
    "longitude": "",
    "download": "",
    "downloadbit": "",
    "upload": "",
    "upload bit": "",
    "Delay": ""
  },
  {
    "Date": "",
    "latitude": "",
    "longitude": "",
    "download": "",
    "downloadbit": "",
    "upload": "",
    "upload bit": "",
    "Delay": ""
  },
  {
    "Date": "5:26 PM",
    "latitude": 42.34924,
    "longitude": -71.1065,
    "download": 47.01338,
    "downloadbit": 70321884,
    "upload": 7.492136,
    "upload bit": 11006840,
    "Delay": 19
  },
  {
    "Date": "2:18 PM",
    "latitude": 42.34816,
    "longitude": -71.1052,
    "download": 11.54517,
    "downloadbit": 17561354,
    "upload": 1.863384,
    "upload bit": 2767672,
    "Delay": 24
  },
  {
    "Date": "5:26 PM",
    "latitude": 42.34924,
    "longitude": -71.1065,
    "download": 47.01338,
    "downloadbit": 70321884,
    "upload": 7.492136,
    "upload bit": 11006840,
    "Delay": 19
  },
  {
    "Date": "2:18 PM",
    "latitude": 42.34816,
    "longitude": -71.1052,
    "download": 11.54517,
    "downloadbit": 17561354,
    "upload": 1.863384,
    "upload bit": 2767672,
    "Delay": 24
  },
  {
    "Date": "1:33 PM",
    "latitude": 42.32126,
    "longitude": -71.1753,
    "download": 46.43028,
    "downloadbit": 62453308,
    "upload": 8.279056,
    "upload bit": 14025740,
    "Delay": 20
  },
  {
    "Date": "1:34 PM",
    "latitude": 42.32126,
    "longitude": -71.1753,
    "download": 26.83086,
    "downloadbit": 40893708,
    "upload": 9.470536,
    "upload bit": 12199132,
    "Delay": 19
  },
  {
    "Date": "3:46 PM",
    "latitude": 42.32136,
    "longitude": -71.1766,
    "download": 16.41162,
    "downloadbit": 21627020,
    "upload": 15.12178,
    "upload bit": 24080412,
    "Delay": 25
  },
  {
    "Date": "5:12 PM",
    "latitude": 42.3486,
    "longitude": -71.1168,
    "download": 5.794304,
    "downloadbit": 7576612,
    "upload": 4.7458,
    "upload bit": 7840812,
    "Delay": 36
  },
  {
    "Date": "2:54 PM",
    "latitude": 42.34858,
    "longitude": -71.1054,
    "download": 54.63484,
    "downloadbit": 76257236,
    "upload": 6.867808,
    "upload bit": 5282728,
    "Delay": 27
  },
  {
    "Date": "2:54 PM",
    "latitude": 42.34858,
    "longitude": -71.1054,
    "download": 69.68729,
    "downloadbit": 108000000,
    "upload": 7.7858,
    "upload bit": 7287000,
    "Delay": 28
  }
]

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: arr[0].latitude, lng: arr[0].longitude },
    mapTypeId: "terrain",
  });

  // Create a <script> tag and set the USGS URL as the source.

  // This example uses a local copy of the GeoJSON stored at
  // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
  mydata = JSON.parse(data);
  const infoWindow = new google.maps.InfoWindow();

  for (let i = 0; i < arr.length; i++) {
    const latLng = new google.maps.LatLng(arr[i].latitude, arr[i].longitude);
    // latLng = google.maps.LatLng(mydata[i].latitude, mydata[i].longitude);

    const marker = new google.maps.Marker({
      position: latLng,
      title: "lat: "+arr[i].latitude+"<br>long: "+arr[i].longitude+"<br>speed = " + arr[i].downloadbit+"<br> latency: ??? <br> others...",
      map: map,
      optimized: false,
    });
  marker.addListener("click", () => {
    infoWindow.close();
    infoWindow.setContent(marker.getTitle());
    infoWindow.open(marker.getMap(), marker);
  });
  }
  
};
