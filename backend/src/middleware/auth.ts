import {auth} from "express-oauth2-jwt-bearer";

export const jwtCheck = auth({
    audience: 'mern-food-ordering-app-api',
    issuerBaseURL: 'https://dev-7x5dun02i4ifqkct.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});