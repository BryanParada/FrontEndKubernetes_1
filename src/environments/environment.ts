// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config : {
      apiKey: "AIzaSyDFuJCLOaNphDjLidu8lPuISQ9oii2oJ74",
      authDomain: "mapboxapp-4ddac.firebaseapp.com",
      projectId: "mapboxapp-4ddac",
      storageBucket: "mapboxapp-4ddac.appspot.com",
      messagingSenderId: "53674440819",
      appId: "1:53674440819:web:3b426b7009b2a7deae9206",
      measurementId: "G-JX8WXMHHWY"
    }
  },
  url: 'http://localhost:5000/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
