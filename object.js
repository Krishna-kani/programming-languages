var car1 = {
    "name": "honda",
    "model": "focus",
    "color": "black",
    "wheels": 4
};
var car2 = {
    "name": "honda",
    "model": "direct",
    "color": "white",
    "wheels": 2
};
if (car1.hasOwnProperty("name") == car2.hasOwnProperty("name"))
{
    console.log("same");
} else {
console.log("different");
}
