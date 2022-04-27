export const environment = {
  production: true,
  api_url: 'http://127.0.0.1:3333'

};
export const rutas = {
  login:`${environment.api_url}/login`,
  register:`${environment.api_url}/users`,
  token_validacion:`${environment.api_url}/get/user`,
  usuarios:`${environment.api_url}/users`,
  logout:`${environment.api_url}/logout`
  
}