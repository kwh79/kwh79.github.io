$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    //pull forecast.io icon and map to weather icons - current
    var tempiconcurrent = data.currently.icon;
      if (tempiconcurrent == "clear-day") {
        var currenticon = '<i class="wi wi-day-sunny"></i>';
      }
      else {
          if (tempiconcurrent == "clear-night") {
            var currenticon = '<i class="wi wi-night-clear"></i>';
      }
      else {
          if (tempiconcurrent == "rain") {
            var currenticon = '<i class="wi wi-rain"></i>';
      }
      else {
          if (tempiconcurrent == "snow") {
            var currenticon = '<i class="wi wi-snow"></i>';
      }
      else {
          if (tempiconcurrent == "sleet") {
            var currenticon = '<i class="wi wi-sleet"></i>';
      }
      else {
          if (tempiconcurrent == "wind") {
            var currenticon = '<i class="wi wi-strong-wing"></i>';
      }
      else {
          if (tempiconcurrent == "fog") {
            var currenticon = '<i class="wi wi-fog"></i>';
      }
      else {
          if (tempiconcurrent == "cloudy") {
            var currenticon = '<i class="wi wi-cloudy"></i>';
      }
      else {
            if (tempiconcurrent == "partly-cloudy-day") {
              var currenticon = '<i class="wi wi-day-cloudy"></i>';
      }
      else {
            if (tempiconcurrent == "partly-cloudy-night") {
              var currenticon = '<i class="wi wi-night-cloudy"></i>';
        }
        else {
              var currenticon = "";
        }
      }}}}}}}}}

    //pull forecast.io icon and map to weather icons - today
    var tempicontd = data.daily.data[0].icon;
      if (tempicontd == "clear-day") {
        var tdicon = '<i class="wi wi-day-sunny"></i>';
      }
      else {
          if (tempicontd == "clear-night") {
            var tdicon = '<i class="wi wi-night-clear"></i>';
      }
      else {
          if (tempicontd == "rain") {
            var tdicon = '<i class="wi wi-rain"></i>';
      }
      else {
          if (tempicontd == "snow") {
            var tdicon = '<i class="wi wi-snow"></i>';
      }
      else {
          if (tempicontd == "sleet") {
            var tdicon = '<i class="wi wi-sleet"></i>';
      }
      else {
          if (tempicontd == "wind") {
            var tdicon = '<i class="wi wi-strong-wing"></i>';
      }
      else {
          if (tempicontd == "fog") {
            var tdicon = '<i class="wi wi-fog"></i>';
      }
      else {
          if (tempicontd == "cloudy") {
            var tdicon = '<i class="wi wi-cloudy"></i>';
      }
      else {
            if (tempicontd == "partly-cloudy-day") {
              var tdicon = '<i class="wi wi-day-cloudy"></i>';
      }
      else {
            if (tempicontd == "partly-cloudy-night") {
              var tdicon = '<i class="wi wi-night-cloudy"></i>';
        }
        else {
              var tdicon = "";
        }
      }}}}}}}}}

    //pull forecast.io icon and map to weather icons - tomorrow
    var tempicontm = data.daily.data[1].icon;
      if (tempicontm == "clear-day") {
        var tmicon = '<i class="wi wi-day-sunny"></i>';
      }
      else {
          if (tempicontm == "clear-night") {
            var tmicon = '<i class="wi wi-night-clear"></i>';
      }
      else {
          if (tempicontm == "rain") {
            var tmicon = '<i class="wi wi-rain"></i>';
      }
      else {
          if (tempicontm == "snow") {
            var tmicon = '<i class="wi wi-snow"></i>';
      }
      else {
          if (tempicontm == "sleet") {
            var tmicon = '<i class="wi wi-sleet"></i>';
      }
      else {
          if (tempicontm == "wind") {
            var tmicon = '<i class="wi wi-strong-wing"></i>';
      }
      else {
          if (tempicontm == "fog") {
            var tmicon = '<i class="wi wi-fog"></i>';
      }
      else {
          if (tempicontm == "cloudy") {
            var tmicon = '<i class="wi wi-cloudy"></i>';
      }
      else {
          if (tempicontm == "partly-cloudy-day") {
            var tmicon = '<i class="wi wi-day-cloudy"></i>';
      }
      else {
          if (tempicontm == "partly-cloudy-night") {
            var tmicon = '<i class="wi wi-night-cloudy"></i>';
        }
        else {
            var tmicon = "";
        }
      }}}}}}}}}

    //pull forecast.io icon and map to weather icons - day after tomorrow
    var tempiconda = data.daily.data[2].icon;
      if (tempiconda == "clear-day") {
        var daicon = '<i class="wi wi-day-sunny"></i>';
      }
      else {
          if (tempiconda == "clear-night") {
            var daicon = '<i class="wi wi-night-clear"></i>';
      }
      else {
          if (tempiconda == "rain") {
            var daicon = '<i class="wi wi-rain"></i>';
      }
      else {
          if (tempiconda == "snow") {
            var daicon = '<i class="wi wi-snow"></i>';
      }
      else {
          if (tempiconda == "sleet") {
            var daicon = '<i class="wi wi-sleet"></i>';
      }
      else {
          if (tempiconda == "wind") {
            var daicon = '<i class="wi wi-strong-wing"></i>';
      }
      else {
          if (tempiconda == "fog") {
            var daicon = '<i class="wi wi-fog"></i>';
      }
      else {
          if (tempiconda == "cloudy") {
            var daicon = '<i class="wi wi-cloudy"></i>';
      }
      else {
          if (tempiconda == "partly-cloudy-day") {
            var daicon = '<i class="wi wi-day-cloudy"></i>';
      }
      else {
          if (tempiconda == "partly-cloudy-night") {
            var daicon = '<i class="wi wi-night-cloudy"></i>';
        }
        else {
            var daicon = "";
        }
      }}}}}}}}}

    //pull forecast.io icon and map to weather icons - 3 days from today
    var tempicond3 = data.daily.data[3].icon;
      if (tempicond3 == "clear-day") {
        var d3icon = '<i class="wi wi-day-sunny"></i>';
      }
      else {
          if (tempicond3 == "clear-night") {
            var d3icon = '<i class="wi wi-night-clear"></i>';
      }
      else {
          if (tempicond3 == "rain") {
            var d3icon = '<i class="wi wi-rain"></i>';
      }
      else {
          if (tempicond3 == "snow") {
            var d3icon = '<i class="wi wi-snow"></i>';
      }
      else {
          if (tempicond3 == "sleet") {
            var d3icon = '<i class="wi wi-sleet"></i>';
      }
      else {
          if (tempicond3 == "wind") {
            var d3icon = '<i class="wi wi-strong-wing"></i>';
      }
      else {
          if (tempicond3 == "fog") {
            var d3icon = '<i class="wi wi-fog"></i>';
      }
      else {
          if (tempicond3 == "cloudy") {
            var d3icon = '<i class="wi wi-cloudy"></i>';
      }
      else {
          if (tempicond3 == "partly-cloudy-day") {
            var d3icon = '<i class="wi wi-day-cloudy"></i>';
      }
      else {
          if (tempicond3 == "partly-cloudy-night") {
            var d3icon = '<i class="wi wi-night-cloudy"></i>';
        }
        else {
            var d3icon = "";
        }
      }}}}}}}}}

    //pull in the day of the week
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var td = weekday[d.getDay()];

    if (d == 6) {
      var tm = weekday[0];
      var tmnum = 0;
    }
    else {
      var tmnum = d.getDay()+1;
      var tm = weekday[tmnum];
    }

    if (tmnum == 6) {
      var da = weekday[0];
      var danum = 0;
    }
    else {
      var danum = tmnum +1;
      var da = weekday[danum];
    }

    if (danum == 6) {
      var d3 = weekday[0];
    }
    else {
      var d3 = weekday[danum+1];
    }

    //populate table with labels for day of the week
    $('.current').html("<b>Currently</b>");
    $('.td-date').html("<b>Today</b>");
    $('.tm-date').html("<b>" + tm + "</b>");
    $('.da-date').html("<b>" + da + "</b>");
    $('.d3-date').html("<b>" + d3 + "</b>");

    //populate weather icons for each day
    $('.weather-icon').html(currenticon);
    $('.td-icon').html(tdicon);
    $('.tm-icon').html(tmicon);
    $('.da-icon').html(daicon);
    $('.d3-icon').html(d3icon);

    //translate forecast.io icons to better text
    var iconmap = new Array(10);
    iconmap["clear-day"]="Clear";
    iconmap["clear-night"]="Clear";
    iconmap["rain"]="Rain";
    iconmap["snow"]="Snow";
    iconmap["sleet"]="Sleet";
    iconmap["wind"]="Wind";
    iconmap["fog"]="Fog";
    iconmap["cloudy"]="Cloudy";
    iconmap["partly-cloudy-day"]="Partly Cloudy";
    iconmap["partly-cloudy-night"]="Partly Cloudy";

    //write temperature and weather icon into table
    var markup = Math.round(data.currently.temperature) +
                "° | " + iconmap[tempiconcurrent];

    var tdweather = "High: " + Math.round(data.daily.data[0].temperatureMax) +
                "°, Low: " + Math.round(data.daily.data[0].temperatureMin) +
                "° | " + iconmap[tempicontd];

    var tmweather = "High: " + Math.round(data.daily.data[1].temperatureMax) +
                "°, Low: " + Math.round(data.daily.data[1].temperatureMin) +
                "° | " + iconmap[tempicontm];

    var daweather = "High: " + Math.round(data.daily.data[2].temperatureMax) +
                "°, Low: " + Math.round(data.daily.data[2].temperatureMin) +
                "° | " + iconmap[tempiconda];

    var d3weather = "High: " + Math.round(data.daily.data[3].temperatureMax) +
                "°, Low: " + Math.round(data.daily.data[3].temperatureMin) +
                "° | " + iconmap[tempicond3];

    $('.td-report').html(tdweather);
    $('.tm-report').html(tmweather);
    $('.da-report').html(daweather);
    $('.d3-report').html(d3weather);

    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
