// const { sign } = require("crypto");
// const { SingleFieldSubscriptionsRule } = require("graphql");

// newData.forEach(function (line,index) {
//     var units = "";
//     if (line[0].includes("(")) {
//         line[0].
//     }
// });

const data = {
    "signature": {
        "source": "NASA/JPL Horizons API",
        "version": "1.1"
    },
    "result": "*******************************************************************************\n Revised: April 12, 2021               Jupiter                              599\n \n PHYSICAL DATA:\n  Mass x 10^22 (g)      = 189818722 +- 8817 Density (g/cm^3)  = 1.3262 +- .0003\n  Equat. radius (1 bar) = 71492+-4 km       Polar radius (km)     = 66854+-10\n  Vol. Mean Radius (km) = 69911+-6          Flattening            = 0.06487\n  Geometric Albedo      = 0.52              Rocky core mass (Mc/M)= 0.0261\n  Sid. rot. period (III)= 9h 55m 29.71 s    Sid. rot. rate (rad/s)= 0.00017585\n  Mean solar day, hrs   = ~9.9259         \n  GM (km^3/s^2)         = 126686531.900     GM 1-sigma (km^3/s^2) =  +- 1.2732\n  Equ. grav, ge (m/s^2) = 24.79             Pol. grav, gp (m/s^2) =  28.34\n  Vis. magnitude V(1,0) = -9.40\n  Vis. mag. (opposition)= -2.70             Obliquity to orbit    =  3.13 deg\n  Sidereal orbit period = 11.861982204 y    Sidereal orbit period = 4332.589 d\n  Mean daily motion     = 0.0831294 deg/d   Mean orbit speed, km/s= 13.0697\n  Atmos. temp. (1 bar)  = 165+-5 K          Escape speed, km/s    =  59.5           \n  A_roche(ice)/Rp       =  2.76             Hill's sphere rad. Rp = 740\n                                 Perihelion   Aphelion     Mean\n  Solar Constant (W/m^2)         56           46           51\n  Maximum Planetary IR (W/m^2)   13.7         13.4         13.6\n  Minimum Planetary IR (W/m^2)   13.7         13.4         13.6\n*******************************************************************************\n"
}

console.log(data["result"]);

// 1. Split at new lines to get individual lines

// data = data.split("\n");

// 2. split at equals signs

// data = data.map(x => x.split("="));

// 3. add 19 to equals sign

// data.forEach(function (line, index) {
//     data[1].substring(0,19); // First value
//     data[1].substring(19); // Second key
// })

// you now have 4 separate data points;
// 4. strip the 0, and 3 index of spaces (trailing and leading just remove, but within the word replace with underscores), 
// and move parenthesis units to data point on other side of equals sign for consistency
// 4a. can use trim method to remove lead/trailing spaces

// data = data.map(x => x.trim()) // should remove all extra spaces surrounding data points