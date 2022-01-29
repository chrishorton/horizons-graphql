import Planet from 'Planet.js'


const renaming_table = {
    
    "planet_name": "planet_name",
    "Vol. Mean Radius (km)": "mean_radius",
    "Vol. Mean Radius: km": "mean_radius",
    "Polar radius (km)": "polar_radius",
    "Density (g/cm^3)": "density",
    "Mass x 10^22 (g)": "mass",
    "Flattening": "flattening",
    "Volume: km^": "volume",
    "Equat. radius (1 bar)": "equatorial_radius",
    "Sid. rot. period (III)": "sidereal_rotation_period",
    "Sid. rot. rate (rad/s)": "sidereal_rotation_rate",
    "SOL":"sol",
    "Polar Gravity": "polar_gravity",
    "Core Radius (km)": "core_radius",
    "Equatorial Gravity": "equatorial_gravity",
    "Geometric Albedo": "geometric_albedo",
    "GM (km^3/s^2)": "GM",
    "GM 1-sigma (km^3/s^2)": "GM_1_sigma",
    "Mass Ratio": "mass_ratio",
    "Atmospheric Mass": "mass_of_atmosphere",
    "Mean Temperature": "mean_temperature",
    "Atm. pressure": "atmospheric_pressure",
    "Obliquity to orbit": "obliquity_to_orbit",
    "Max Angular Diameter": "max_angular_diameter",
    "Sidereal orbit period": "mean_sidereal_orbit_period_years",
    "Vis. magnitude V(1,0)": "visual_mag",
    "Mean orbit speed: km/s": "orbital_speed",
    "Escape speed: km/s": "escape_speed",
    "A_roche(ice)/Rp": "a_roche",
    "Hill's sphere rad. Rp": "hills_sphere_radius",
    "Rocky core mass (Mc/M)": "rocky_core_radius",

    "perihelion_solar_constant": "perihelion_solar_constant",
    "aphelion_solar_constant":"aphelion_solar_constant",
    "mean_solar_constant":"mean_solar_constant",

    "perihelion_max_planetary_IR":"perihelion_max_planetary_IR",
    "aphelion_max_planetary_IR":"aphelion_max_planetary_IR",
    "mean_max_planetary_IR":"mean_max_planetary_IR",

    "perihelion_min_planetary_IR":"perihelion_min_planetary_IR",
    "aphelion_min_planetary_IR":"aphelion_min_planetary_IR",
    "mean_min_planetary_IR":"mean_min_planetary_IR",

}

const parsePlanetData = (planetData) => {
    /*
    Params:
        planetData,Array[String] - Data recieved from the API
    
    Returns:
        rawData,Dictionary{String:String} - keys and values to be matched up to GraphQL schema items
    */
    var rawData = {}
    // Create an array for each line of data
    planetData = planetData.split("\n");

    // Take the first line of data, trim it and push it into the data dictionary
    var id_info = planetData[1].trim().split(/(\s+)/);
    revision_data = id_info.slice(2,7).join("")
    planet_name = id_info[8]
    planet_id = id_info[10]
    rawData["revision_date"] = revision_data;
    rawData["planet_name"] = planet_name;
    rawData["planet_id"] = planet_id;
    
    for (i=4; i<planetData.length-3; i++) {
        if (planetData[i].split("=")-1 > 1) {
            // This tests to see if there is more than one equals sign. If so, we continue and make the 2 equals signs our split points for the dictionary. REFACTOR THIS. There must be a better way. But perfect string manipulation/data extraction isn't the point of this project. Deal with it.
            var first = planetData[i].substr(0,44).split("=")
            var second = planetData[i].substr(44).split("=")
    
            first = first.map(x => x.trim());
            second = second.map(x => x.trim());
    
            rawData[first[0]] = first[1];
            rawData[second[0]] = first[1];
        }
    }

    return rawData;
}

const swap = (data, renaming_table) => {
    // TODO: We can move this into the actual fetching function so that no swap is required.
    // Adjust data dictionary to proper variable naming convention to be used repeatedly
        // data is the raw data taken from NASA. It will have odd keys not suitable for property naming conventions. We need to replace the keys with the keys from the renaming_table below
        // Algorithm taken from here: https://stackoverflow.com/questions/4647817/javascript-object-rename-key

        Object.keys(renaming_table).forEach(function(key) {
            
            delete Object.assign(data, {[key]: data[renaming_table[key]] })[renaming_table[key]];
        
        });
    
        return data;
    
    }

const getPlanetHTTP = (id) => {
    /*
    Params:
        id,Int - The id of the planet

    Returns:
        planetData,Dictionary{String:String} - keys and values to be matched up to GraphQL schema items

    */
    
    // build URL and make REST API call here
    const url = "https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND=" + "'" + id + "'" + "&OBJ_DATA='YES'"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        try {
            var planetData = data['result'];
            planetData = parsePlanetData(planetData);
            // Swap NASA given data names with property names
            planetData = swap(planetData, renaming_table);
        } catch (error) {
            console.error("Error,", error);
        };
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    return planetData;
};

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}




// May need to swap this. For easier access in the above function...
