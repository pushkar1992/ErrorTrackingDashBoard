// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: 'http://localhost:8083/',
  unsecureApi: 'http://localhost:8083/',
  selfApi: 'http://localhost:8083/'
  // api: 'http://10.10.10.25:8085/FraudBoot/',
  // unsecureApi: 'http://10.10.10.25:8085/FraudBoot/',
  // selfApi: 'http://10.10.10.25:8085/Sherlock/#/'
  // api: 'http://10.10.10.137:8085/FraudBootInt/',
  // unsecureApi: 'http://10.10.10.137:8085/FraudBootInt/',
  // selfApi: 'http://10.10.10.137:8085/SherlockNew/#/'
  // api: 'http://10.10.10.155:8085/FraudBoot/',
  // unsecureApi: 'http://10.10.10.155:8085/FraudBoot/',
  // selfApi: 'http://10.10.10.155:8085/SherlockNew/#/'
  // api: 'http://10.10.10.27:8085/FraudBoot/',
  // unsecureApi: 'http://10.10.10.27:8085/FraudBoot/',
  // selfApi: 'http://10.10.10.27:8085/Sherlock/#/'
};
