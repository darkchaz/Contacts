export class App {
  configureRouter(config, router) {
    config.title = '';
    config.map([
      { route: ['', 'contacts'], name: 'contacts', moduleId: 'pages/contacts/index', title: 'Contacts' }
    ]);

    this.router = router;
  }
}
