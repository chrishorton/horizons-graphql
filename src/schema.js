const buildSchema = require("graphql");

// Access GraphQL strict types
const {  
    GraphQLObjectType,  
    GraphQLString,  
    GraphQLSchema,  
    GraphQLID,  
    GraphQLBoolean,  
    GraphQLFloat,  
    GraphQLNonNull,  
    GraphQLList
} = graphql;

var schema = buildSchema(`

    type Planet {
        id: Int,
        name: String,
        mean_radius: String,
        polar_radius: String,
        density: String,
        mass: String,
        flattening: String,
        volume: String,
        equatorial_radius: String,
        sidereal_rotation_period: String,
        sidereal_rotation_rate: String,
        sol: String,
        polar_gravity: String,
        core_radius: String,
        equatorial_gravity: String,
        geometric_albedo: String,
        GM: String,
        GM_1_sigma: String,
        mass_ratio: String,
        mass_of_atmosphere: String,
        mean_temperature: String,
        atmospheric_pressure: String,
        obliquity_to_orbit: String,
        max_angular_diameter: String,
        mean_sidereal_orbit_period_days: String,
        mean_sidereal_orbit_period_years: String,
        visual_mag: String,
        orbital_speed: String,
        escape_speed: String,
        a_roche
        hills_sphere_radius: String,
        
        perihelion_solar_constant: String,
        aphelion_solar_constant: String,
        mean_solar_constant: String,
        
        perihelion_max_planetary_IR: String,
        aphelion_max_planetary_IR: String,
        mean_max_planetary_IR: String,
        
        perihelion_min_planetary_IR: String,
        aphelion_min_planetary_IR: String,
        mean_min_planetary_IR: String
    }

    type Query {
        planet(id: Int!): Planet
    }

`)

// 
var root = {
    planet: ({ id }) => {
        return new Planet(id);
    },
}









// const getPlanets = () => {
//     return Promise.resolve
// }

// const PlanetType = new GraphQLObjectType({  
//     name: "Planet", fields: () => ({    
//       id: { type: GraphQLID },    
//       name: { type: GraphQLString }  
//     })
// });

// const RootQuery = new GraphQLObjectType({  
//     name: "RootQueryType",  
//     fields: {
//       planets: {
//         type: new GraphQLList(ItemType),-       resolve(parent, args) {-           return items;-       }+       args: { userId: { type: GraphQLID } },+       resolve(parent, args) {+           return items.filter(item => item.userId === args.userId);+       }...


//         type: new GraphQLList(PlanetType), resolve(parent, args) {        
//           return items;      
//         }    
//       }  
//     }}); 
  
//   module.exports = new GraphQLSchema({  
//     query: RootQuery});