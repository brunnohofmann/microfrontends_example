import { registerApplication, start } from 'single-spa';

export default () => {
  registerApplication({
    name: '@hofmann/users',
    app: () => System.import('@hofmann/users'),
    activeWhen: ['/users'],
  });

  start();
};
