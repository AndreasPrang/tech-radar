var h = 1000;
var w = 1450;

var radar_arcs = [
  {'r': 100, 'name': 'ADOPT'},
  {'r': 200, 'name': 'TRIAL'},
  {'r': 300, 'name': 'ASSESS'},
  {'r': 400, 'name': 'HOLD'}
];

// movement:
//   t = moved (triangle)
//   c = stayed put (circle)
//
// blipSize: 
//  This is optional, if you omit this property, then blip size will be 70.
//
// url:
//  This is optional, if you add it then blips will be clickable to some URL.
//
// pc: (polar coordinates)
//  r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//  t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
var radar_data = [
  { 
    "quadrant": "Languages",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "HTML 5 / CSS",
    "pc": {
      "r": 36,
      "t": 120
    },
    "movement": "c"
  },
  {
    "name": "JAVA",
    "pc": {
      "r": 58,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "JS",
    "pc": {
      "r": 89,
      "t": 150
    },
    "movement": "c"
  },
  {
    "name": "Objective-C",
    "pc": {
      "r": 88,
      "t": 105
    },
    "movement": "c"
  },
  {
    "name": "ActionScript",
    "pc": {
      "r": 46,
      "t": 135
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 88,
      "t": 172
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 34,
      "t": 157
    },
    "movement": "c"
  },
  {
    "name": "CoffeeScript",
    "pc": {
      "r": 88,
      "t": 142
    },
    "movement": "c"
  },
  {
    "name": "Groove",
    "pc": {
      "r": 53,
      "t": 127
    },
    "movement": "c"
  },
  {
    "name": "VCL (Varnish configuration Language)",
    "pc": {
      "r": 43,
      "t": 112
    },
    "movement": "c"
  },
  {
    "name": "TypeScript",
    "pc": {
      "r": 136,
      "t": 163
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 163,
      "t": 139
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Data Management",
    "left": w-300+30,
    "top" : 188,
    "color" : "#587486",
    "items" : [
  {
    "name": "JIRA / Confluence",
    "pc": {
      "r": 90,
      "t": 25
    },
    "movement": "c"
  },
  {
    "name": "Oracle",
    "pc": {
      "r": 87,
      "t": 70
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 49,
      "t": 40
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 63,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "Splunk",
    "pc": {
      "r": 57,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 50,
      "t": 77
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 73,
      "t": 47
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 43,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 234,
      "t": 36
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 342,
      "t": 20
    },
    "movement": "c"
  }
]
  },
  {   
    "quadrant": "Platforms & Infrastructure",
    "left" :45,
    "top" : (h/2 + 38),
    "color" : "#DC6F1D",
    "items" : [
  {
    "name": "Docker",
    "pc": {
      "r": 46,
      "t": 235
    },
    "movement": "c"
  },
  {
    "name": "TomCat",
    "pc": {
      "r": 74,
      "t": 205
    },
    "movement": "c"
  },
  {
    "name": "ServerSpec",
    "pc": {
      "r": 79,
      "t": 220
    },
    "movement": "c"
  },
  {
    "name": "Jenkins as a Deployment Pipeline",
    "pc": {
      "r": 62,
      "t": 250
    },
    "movement": "c"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 59,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "macOS Build Server",
    "pc": {
      "r": 87,
      "t": 197
    },
    "movement": "c"
  },
  {
    "name": "AWS - EC2",
    "pc": {
      "r": 64,
      "t": 227
    },
    "movement": "c"
  },
  {
    "name": "AWS - Lambda",
    "pc": {
      "r": 40,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 136,
      "t": 224
    },
    "movement": "c"
  },
  {
    "name": "HSTS",
    "pc": {
      "r": 190,
      "t": 188
    },
    "movement": "c"
  },
  {
    "name": "HTTP2",
    "pc": {
      "r": 190,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 190,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "QA in Production",
    "pc": {
      "r": 290,
      "t": 196
    },
    "movement": "c"
  },
  {
    "name": "Event Storing ???",
    "pc": {
      "r": 350,
      "t": 264
    },
    "movement": "t"
  }
]
  },
  { 
    "quadrant": "Techniques; Frameworks & Tools",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "jQuery",
    "pc": {
      "r": 31,
      "t": 310
    },
    "movement": "c"
  },
  {
    "name": "JSP",
    "pc": {
      "r": 32,
      "t": 340
    },
    "movement": "c"
  },
  {
    "name": "SASS",
    "pc": {
      "r": 49,
      "t": 295
    },
    "movement": "c"
  },
  {
    "name": "CKEditor",
    "pc": {
      "r": 87,
      "t": 325
    },
    "movement": "c"
  },
  {
    "name": "Chef",
    "pc": {
      "r": 76,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "MAVEN",
    "pc": {
      "r": 35,
      "t": 332
    },
    "movement": "c"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 38,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "AWS - SNS",
    "pc": {
      "r": 64,
      "t": 347
    },
    "movement": "c"
  },
  {
    "name": "CoreMedia",
    "pc": {
      "r": 57,
      "t": 317
    },
    "movement": "c"
  },
  {
    "name": "Charles",
    "pc": {
      "r": 63,
      "t": 287
    },
    "movement": "c"
  },
  {
    "name": "Selenium",
    "pc": {
      "r": 57,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Metrics",
    "pc": {
      "r": 76,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Handlebars",
    "pc": {
      "r": 50,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Webdriver (Chrome FireFox)",
    "pc": {
      "r": 48,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Grunt",
    "pc": {
      "r": 30,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Robolectric",
    "pc": {
      "r": 90,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Jangaroo",
    "pc": {
      "r": 48,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "ImageMagick",
    "pc": {
      "r": 49,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Gitflow",
    "pc": {
      "r": 54,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "NodeJS",
    "pc": {
      "r": 86,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Nexpose",
    "pc": {
      "r": 74,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "Cucumber",
    "pc": {
      "r": 40,
      "t": 270
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 136,
      "t": 314
    },
    "movement": "c"
  },
  {
    "name": "Swagger",
    "pc": {
      "r": 142,
      "t": 326
    },
    "movement": "c"
  },
  {
    "name": "WebComponents",
    "pc": {
      "r": 147,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 163,
      "t": 350
    },
    "movement": "c"
  },
  {
    "name": "Ansible",
    "pc": {
      "r": 174,
      "t": 278
    },
    "movement": "c"
  },
  {
    "name": "Immutable.js",
    "pc": {
      "r": 174,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "Redux",
    "pc": {
      "r": 179,
      "t": 338
    },
    "movement": "c"
  },
  {
    "name": "SysDig",
    "pc": {
      "r": 190,
      "t": 284
    },
    "movement": "c"
  },
  {
    "name": "HashiCorp Vault",
    "pc": {
      "r": 190,
      "t": 308
    },
    "movement": "c"
  },
  {
    "name": "ES6",
    "pc": {
      "r": 226,
      "t": 276
    },
    "movement": "c"
  },
  {
    "name": "GraphQL",
    "pc": {
      "r": 290,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 2",
    "pc": {
      "r": 350,
      "t": 306
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 350,
      "t": 314
    },
    "movement": "c"
  }
]
  }
];
