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
    "quadrant": "Techniques; Frameworks & Tools",
    "left" : 45,
    "top" : 188,
    "color" : "#8FA227",
    "items" : [
  {
    "name": "ExtJS",
    "pc": {
      "r": 54,
      "t": 135
    },
    "movement": "c"
  },
  {
    "name": "Chef",
    "pc": {
      "r": 65,
      "t": 165
    },
    "movement": "c"
  },
  {
    "name": "JSP",
    "pc": {
      "r": 78,
      "t": 105
    },
    "movement": "c"
  },
  {
    "name": "CKEditor",
    "pc": {
      "r": 55,
      "t": 150
    },
    "movement": "c"
  },
  {
    "name": "Spring",
    "pc": {
      "r": 44,
      "t": 120
    },
    "movement": "c"
  },
  {
    "name": "CoreMedia",
    "pc": {
      "r": 45,
      "t": 142
    },
    "movement": "c"
  },
  {
    "name": "MAVEN",
    "pc": {
      "r": 84,
      "t": 172
    },
    "movement": "c"
  },
  {
    "name": "AWS - SNS",
    "pc": {
      "r": 43,
      "t": 112
    },
    "movement": "c"
  },
  {
    "name": "Selenium",
    "pc": {
      "r": 34,
      "t": 157
    },
    "movement": "c"
  },
  {
    "name": "Charles",
    "pc": {
      "r": 35,
      "t": 127
    },
    "movement": "c"
  },
  {
    "name": "Metrics",
    "pc": {
      "r": 82,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Grunt",
    "pc": {
      "r": 61,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Webdriver (Chrome FireFox)",
    "pc": {
      "r": 68,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Jangaroo",
    "pc": {
      "r": 53,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Robolectric",
    "pc": {
      "r": 74,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Nexpose",
    "pc": {
      "r": 80,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "NodeJS",
    "pc": {
      "r": 34,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "ImageMagick",
    "pc": {
      "r": 58,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Gitflow",
    "pc": {
      "r": 38,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "Cucumber",
    "pc": {
      "r": 36,
      "t": 95
    },
    "movement": "c"
  },
  {
    "name": "etcd",
    "pc": {
      "r": 136,
      "t": 163
    },
    "movement": "c"
  },
  {
    "name": "Swagger",
    "pc": {
      "r": 142,
      "t": 103
    },
    "movement": "c"
  },
  {
    "name": "WebComponents",
    "pc": {
      "r": 147,
      "t": 151
    },
    "movement": "c"
  },
  {
    "name": "ReactJS",
    "pc": {
      "r": 163,
      "t": 175
    },
    "movement": "c"
  },
  {
    "name": "Immutable.js",
    "pc": {
      "r": 174,
      "t": 115
    },
    "movement": "c"
  },
  {
    "name": "Ansible",
    "pc": {
      "r": 174,
      "t": 139
    },
    "movement": "c"
  },
  {
    "name": "Redux",
    "pc": {
      "r": 179,
      "t": 127
    },
    "movement": "c"
  },
  {
    "name": "SysDig",
    "pc": {
      "r": 190,
      "t": 145
    },
    "movement": "c"
  },
  {
    "name": "HashiCorp Vault",
    "pc": {
      "r": 190,
      "t": 133
    },
    "movement": "c"
  },
  {
    "name": "ES6",
    "pc": {
      "r": 226,
      "t": 121
    },
    "movement": "c"
  },
  {
    "name": "GraphQL",
    "pc": {
      "r": 290,
      "t": 141
    },
    "movement": "c"
  },
  {
    "name": "Vert.x",
    "pc": {
      "r": 350,
      "t": 179
    },
    "movement": "c"
  },
  {
    "name": "AngularJS 2",
    "pc": {
      "r": 350,
      "t": 171
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
      "r": 76,
      "t": 70
    },
    "movement": "c"
  },
  {
    "name": "Oracle",
    "pc": {
      "r": 79,
      "t": 55
    },
    "movement": "c"
  },
  {
    "name": "Solr",
    "pc": {
      "r": 69,
      "t": 25
    },
    "movement": "c"
  },
  {
    "name": "ElasticSearch",
    "pc": {
      "r": 36,
      "t": 40
    },
    "movement": "c"
  },
  {
    "name": "Splunk",
    "pc": {
      "r": 61,
      "t": 10
    },
    "movement": "c"
  },
  {
    "name": "MongoDB",
    "pc": {
      "r": 32,
      "t": 62
    },
    "movement": "c"
  },
  {
    "name": "PostgreSQL",
    "pc": {
      "r": 83,
      "t": 77
    },
    "movement": "c"
  },
  {
    "name": "Graphite",
    "pc": {
      "r": 71,
      "t": 17
    },
    "movement": "c"
  },
  {
    "name": "Kafka",
    "pc": {
      "r": 234,
      "t": 56
    },
    "movement": "c"
  },
  {
    "name": "Neo4j",
    "pc": {
      "r": 342,
      "t": 44
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
      "r": 36,
      "t": 250
    },
    "movement": "c"
  },
  {
    "name": "TomCat",
    "pc": {
      "r": 79,
      "t": 235
    },
    "movement": "c"
  },
  {
    "name": "ServerSpec",
    "pc": {
      "r": 65,
      "t": 220
    },
    "movement": "c"
  },
  {
    "name": "Jenkins as a Deployment Pipeline",
    "pc": {
      "r": 49,
      "t": 205
    },
    "movement": "c"
  },
  {
    "name": "Jenkins",
    "pc": {
      "r": 78,
      "t": 190
    },
    "movement": "c"
  },
  {
    "name": "macOS Build Server",
    "pc": {
      "r": 86,
      "t": 212
    },
    "movement": "c"
  },
  {
    "name": "AWS - EC2",
    "pc": {
      "r": 33,
      "t": 257
    },
    "movement": "c"
  },
  {
    "name": "AWS - Lambda",
    "pc": {
      "r": 73,
      "t": 197
    },
    "movement": "c"
  },
  {
    "name": "Kubernetes",
    "pc": {
      "r": 136,
      "t": 200
    },
    "movement": "c"
  },
  {
    "name": "HSTS",
    "pc": {
      "r": 190,
      "t": 260
    },
    "movement": "c"
  },
  {
    "name": "HTTP2",
    "pc": {
      "r": 190,
      "t": 248
    },
    "movement": "c"
  },
  {
    "name": "Consul",
    "pc": {
      "r": 190,
      "t": 236
    },
    "movement": "c"
  },
  {
    "name": "QA in Production",
    "pc": {
      "r": 290,
      "t": 246
    },
    "movement": "c"
  },
  {
    "name": "Event Storing ???",
    "pc": {
      "r": 350,
      "t": 200
    },
    "movement": "c"
  }
]
  },
  { 
    "quadrant": "Languages",
    "color" : "#B70062",
    "left"  : (w-300+30),
    "top" :   (h/2 + 38),
    "items" : [
  {
    "name": "JAVA",
    "pc": {
      "r": 54,
      "t": 280
    },
    "movement": "c"
  },
  {
    "name": "JS",
    "pc": {
      "r": 58,
      "t": 295
    },
    "movement": "c"
  },
  {
    "name": "ActionScript",
    "pc": {
      "r": 39,
      "t": 340
    },
    "movement": "c"
  },
  {
    "name": "Objective-C",
    "pc": {
      "r": 51,
      "t": 325
    },
    "movement": "c"
  },
  {
    "name": "Ruby",
    "pc": {
      "r": 34,
      "t": 310
    },
    "movement": "c"
  },
  {
    "name": "Swift",
    "pc": {
      "r": 86,
      "t": 332
    },
    "movement": "c"
  },
  {
    "name": "CoffeeScript",
    "pc": {
      "r": 89,
      "t": 347
    },
    "movement": "c"
  },
  {
    "name": "Groove",
    "pc": {
      "r": 71,
      "t": 302
    },
    "movement": "c"
  },
  {
    "name": "VCL (Varnish configuration Language)",
    "pc": {
      "r": 34,
      "t": 317
    },
    "movement": "c"
  },
  {
    "name": "TypeScript",
    "pc": {
      "r": 136,
      "t": 290
    },
    "movement": "c"
  },
  {
    "name": "Kotlin",
    "pc": {
      "r": 163,
      "t": 302
    },
    "movement": "c"
  }
]
  }
];
