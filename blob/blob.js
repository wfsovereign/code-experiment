var obj = [];
var twoL = "　",
	threeL = "　　",
	fourL = "　　　";

$(".TRS_PreAppend p").each(function(i, el) {
	var city = {};
	city.code = $(el).find("span").eq(0).html().substr(0, 6);
	city.name = $(el).find("span").eq(2).html();
	city.level = 3;
	if (city.name && city.name.indexOf(twoL) > -1) city.level = 1;
	if (city.name && city.name.indexOf(threeL) > -1) city.level = 2;
	if (city.name && city.name.indexOf(fourL) > -1) city.level = 3;
	city.name = ('' + city.name).trim();
	if (city.name != '县') obj.push(city);
});
var blob = new Blob([JSON.stringify(obj)], {
	type: "application/json"
});
var link = window.URL.createObjectURL(blob);
var atag = document.createElement("a");
atag.href = link;
atag.download = "city.json";
document.body.appendChild(atag);
atag.click();




