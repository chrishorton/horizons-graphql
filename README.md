# Horizons GraphQL
Query the NASA/JPL Horizons database with GraphQL.

The Horizon's API from NASA and JPL relies on a REST API that doesn't serve proper JSON to parse and be easily readable. It requires the download of a lot of information that you may not need on the client side. 

GraphQL is a service that allows you to query for the data that you need and will use, without getting the front-end performing the parsing work that the server should be doing.

This server aims to simplify your Horizon's data access. 
