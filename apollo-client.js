// ./apollo-client.js
// goal of this script is to set up the ApolloClient wrapper;
// all settings to communicate with mongoDB will be establihed here;
// then we'll export it to the App.js, wrap everything in apolloclient
// so anywhere in the app we can call data without a tremendous amount of ugly code

// using guides from:
// https://www.mongodb.com/docs/realm/web/graphql-apollo-react/#std-label-graphql-apollo-react
// the others don't get into the details of doing async etc. with mongo, so

// https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
// https://www.apollographql.com/docs/react/get-started/

// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//     uri: "https://countries.trevorblades.com", // this gets changed to the database obv.
//     cache: new InMemoryCache(),
// });

// export default client;

import * as Realm from "realm-web";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

// Add your Realm App ID
// this is found via... with your cluster/database selected, create App, use custom
// In the app, go to GraphQL tab. This has the endpoint here;
// the endpoint is effectively the URL to pull data from.
// one must still create the schema/mechanisms to retrieve data, specify
// what data are included in the objects being returned. mongo can auto-generate most of this
// const graphqlUri = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

// appID is located in tab "your app's name" and right at the top
const APP_ID = "patlasapi-vsqlk" // not sure if tilde or '
// as of 11 Dec 2022 the uri looks like this:
// i put in the app_id just cuz
// const graphqlUri = `https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

// NOW I JUST INSERTED IT, FUCK IT
const graphqlUri = `https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/patlasapi-vsqlk/graphql`;


// Local apps should use a local URI!
// const graphqlUri = `https://us-east-1.aws.stitch.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`
// const graphqlUri = `https://eu-west-1.aws.stitch.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`
// const graphqlUri = `https://ap-southeast-1.aws.stitch.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`

const app = new Realm.App(APP_ID)

// authentication required to for mongo... for this app we'll only really
// be using the anonymous login, for now

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
    // Guarantee that there's a logged in user with a valid access token
    if (!app.currentUser) {
      // If no user is logged in, log in an anonymous user. The logged in user will have a valid
      // access token.
      await app.logIn(Realm.Credentials.anonymous());
    } else {
      // An already logged in user's access token might be stale. Tokens must be refreshed after 
      // 30 minutes. To guarantee that the token is valid, we refresh the user's access token.
      await app.currentUser.refreshAccessToken();
    }
    return app.currentUser.accessToken;
}


// // VERY simple version, that mongo demonstrats before accounting for credentials:
// const client = new ApolloClient({
//   link: new HttpLink({  
//     uri: graphqlUri,
//   }),
//   cache: new InMemoryCache(),
// });

// version with async, the login authentication etc.
// Configure the ApolloClient to connect to your app's GraphQL endpoint
const client = new ApolloClient({
    link: new HttpLink({
      // uri: graphqlUri,
      uri: `https://us-east-1.aws.realm.mongodb.com/api/client/v2.0/app/patlasapi-vsqlk/graphql`,
      // We define a custom fetch handler for the Apollo client that lets us authenticate GraphQL requests.
      // The function intercepts every Apollo HTTP request and adds an Authorization header with a valid
      // access token before sending the request.
      fetch: async (uri, options) => {
        const accessToken = await getValidAccessToken(); // get token from fn above
        options.headers.Authorization = `Bearer ${accessToken}`;
        return fetch(uri, options);
      },
    }),
    cache: new InMemoryCache(),
  });

  // NOW FUSING CODE IN FROM 
  // https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
  // note this guide doesn't go to mongo, so it doesn't grab tokens or anything
  // client side rendering will be preferable, since we're running our server on a potato right now


export default client;
