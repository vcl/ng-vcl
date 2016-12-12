export default {
  name: 'L10n',
  route: 'l10n',
  category: 'Other',
  tabs: {
    'README.md': require("!raw-loader!../../../src/l10n/README.md"),
  }
};
