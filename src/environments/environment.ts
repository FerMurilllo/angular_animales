// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // api_url: 'http://127.0.0.1:3333'
  api_url: 'http://192.168.1.11:3333'

};
export const rutas = {
  login:`${environment.api_url}/login`,
  register:`${environment.api_url}/users`,
  token_validacion:`${environment.api_url}/get/user`,
  usuarios:`${environment.api_url}/users`,
  logout:`${environment.api_url}/logout`,
  entrar:`${environment.api_url}/entrar`,
  primero:`${environment.api_url}/primero`,
  iniciar:`${environment.api_url}/iniciar`,
  comprobar:`${environment.api_url}/comprobar`,
  estado:`${environment.api_url}/get/estado`

}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
