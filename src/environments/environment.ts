// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endPointUsuario: 'http://localhost:8080/exemplo-cadastro/webapi/usuario/',
  endPointItems: 'http://localhost:8080/exemplo-cadastro/webapi/items/',
  endPointPagamento: 'http://localhost:8080/exemplo-cadastro/webapi/pagamento/',
  endPointVenda: 'http://localhost:8080/exemplo-cadastro/webapi/venda/',
  endPointRelatorio: 'http://localhost:8080/exemplo-cadastro/webapi/relatorio/relatorio1',
  endPointRelatorio2: 'http://localhost:8080/exemplo-cadastro/webapi/relatorio/relatorio2',


};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
