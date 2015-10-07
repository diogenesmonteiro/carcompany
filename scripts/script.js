var selectCarType = document.getElementById('carType');
var selectCarMake = document.getElementById('carMake');
var selectCarYear = document.getElementById('carYear');
var selectCarPrice = document.getElementById('carPrice');

var cars = [
   {condition: "New", type: "Sedan", make: "Ford", model: "Fusion", year: 2014, milage: 15254, price: 12990 },
   {condition: "New", type: "Coupe", make: "Chevy", model: "Spark", year: 2013, milage: 23875, price: 9850},
   {condition: "New", type: "SUV", make: "Toyota", model: "Highlander", year: 2014, milage: 9568, price: 18900},
   {condition: "Used", type: "Sedan", make: "Ford", model: "Taurus", year: 2010, milage: 63589, price: 6700},
   {condition: "Used", type: "Coupe", make: "Chevy", model: "Sonic", year: 2015, milage: 4259, price: 16850},
   {condition: "Used", type: "SUV", make: "Toyota", model: "4Runner", year: 2012, milage: 32580, price: 15630 }
];

var type = ["Coupe", "Sedan", "SUV"];
var make = ["Chevy", "Ford", "Toyota"];
var model = ["4Runner", "Fusion", "Highlander", "Spark", "Sonic", "Taurus"];
var year = ["2010", "2011", "2012", "2013", "2014", "2015"];
var price = ["< $5,000", "$5,000-$10,000", "$10,000-$15,000", "$15,000-$20,000"];

var i;
for (i = 0; i < type.length; i++) {
   var opt = type[i];
   var el = document.createElement('option');
   el.text = opt;
   el.value = opt;
   selectCarType.add(el);
};

for (i = 0; i < make.length; i++) {
   var opt = make[i];
   var el = document.createElement('option');
   el.text = opt;
   el.value = opt;
   selectCarMake.add(el);
};

for (i = 0; i < year.length; i++) {
   var opt = year[i];
   var el = document.createElement('option');
   el.text = opt;
   el.value = opt;
   selectCarYear.add(el);
};

for (i = 0; i < price.length; i++) {
   var opt = price[i];
   var el = document.createElement('option');
   el.text = opt;
   el.value = opt;
   selectCarPrice.add(el);
};


