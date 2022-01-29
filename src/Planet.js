// This class implements the Planet GraphQL type

class Planet {
    constructor(id) {
        this.id = id;
        this.data = getPlanetHTTP(id); // Need to set this property before we can set other properties.
        this.planet_name = this.data["planet_name"];
        this.mean_radius = this.data["mean_radius"];
        this.polar_radius = this.data["polar_radius"]
        this.density = this.data["density"];
        this.mass = this.data["mass"];
        this.flattening = this.data["flattening"];
        this.volume = this.data["volume"];
        this.equatorial_radius = this.data["equatorial_radius"];
        this.sidereal_rotation_period = this.data["sidereal_rotation_period"];
        this.sidereal_rotation_rate = this.data["sidereal_rotation_rate"];
        this.sol = this.data["sol"];
        this.polar_gravity = this.data["polar_gravity"];
        this.core_radius = this.data["core_radius"];
        this.equatorial_gravity = this.data["equatorial_gravity"];
        this.geometric_albedo = this.data["geometric_albedo"];
        this.GM = this.data["GM"];
        this.GM_1_sigma = this.data["GM_1_sigma"];
        this.mass_ratio = this.data["mass_ratio"];
        this.mass_of_atmosphere = this.data["mass_of_atmosphere"];
        this.mean_temperature = this.data["mean_temperature"];
        this.atmospheric_pressure = this.data["atmospheric_pressure"];
        this.obliquity_to_orbit = this.data["obliquity_to_orbit"];
        this.max_angular_diameter = this.data["max_angular_diameter"];
        this.mean_sidereal_orbit_period_days = this.data["mean_sidereal_orbit_period_days"];
        this.mean_sidereal_orbit_period_years = this.data["mean_sidereal_orbit_period_years"];
        this.visual_mag = this.data["visual_mag"];
        this.orbital_speed = this.data["orbital_speed"];
        this.escape_speed = this.data["escape_speed"];
        this.a_roche = this.data["a_roche"];
        this.hills_sphere_radius = this.data["hills_sphere_radius"];
        
        this.perihelion_solar_constant = this.data["perihelion_solar_constant"];
        this.aphelion_solar_constant = this.data["aphelion_solar_constant"];
        this.mean_solar_constant = this.data["mean_solar_constant"];
        
        this.perihelion_max_planetary_IR = this.data["perihelion_max_planetary_IR"];
        this.aphelion_max_planetary_IR = this.data["aphelion_max_planetary_IR"];
        this.mean_max_planetary_IR = this.data["mean_max_planetary_IR"];
        
        this.perihelion_min_planetary_IR = this.data["perihelion_min_planetary_IR"];
        this.aphelion_min_planetary_IR = this.data["aphelion_min_planetary_IR"];
        this.mean_min_planetary_IR = this.data["mean_min_planetary_IR"];
    }

};