var cities = {'NYC': 'nyc.jpg', 'SF': 'sf.jpg', 'LA':'la.jpg', 'SYD':'sydney.jpg', 'ATX':'austin.jpg'};

window.onload = function () {
    var dropDown = document.getElementById("city-type");
    var size = Object.keys(cities).length;
    for(var i = 0; i < size; i++) {
      var option = document.createElement('option');
      option.text = option.value = Object.keys(cities)[i];
      dropDown.append(option);
    }
    dropDown.onchange = function() {
    var selected = document.getElementById("city-type").value;
    document.body.style.backgroundImage = "url('images/" + cities[selected] + "')";
 }
};
