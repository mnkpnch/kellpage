'use strict';

define("kell/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks, 'en-us'); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("kell/tests/integration/components/data-tables-view-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | data-tables-view', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DataTablesView />
      */
      {
        "id": "WhZn7EMY",
        "block": "[[[8,[39,0],null,null,null]],[],[\"data-tables-view\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/data-tables-view-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DataTablesView>
              template block text
            </DataTablesView>
          
      */
      {
        "id": "NSQXrgDR",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"data-tables-view\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/data-tables-view-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/data-view-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | data-view', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DataView />
      */
      {
        "id": "8/bZG8aF",
        "block": "[[[8,[39,0],null,null,null]],[],[\"data-view\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/data-view-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DataView>
              template block text
            </DataView>
          
      */
      {
        "id": "6bMk0UZ5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"data-view\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/data-view-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/debug-tools-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | debug-tools', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <DebugTools />
      */
      {
        "id": "bnUKgfGB",
        "block": "[[[8,[39,0],null,null,null]],[],[\"debug-tools\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/debug-tools-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <DebugTools>
              template block text
            </DebugTools>
          
      */
      {
        "id": "QKOFFtjQ",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"debug-tools\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/debug-tools-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/molstar-viewer-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | molstar-viewer', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MolstarViewer />
      */
      {
        "id": "z6xwR+LB",
        "block": "[[[8,[39,0],null,null,null]],[],[\"molstar-viewer\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/molstar-viewer-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <MolstarViewer>
              template block text
            </MolstarViewer>
          
      */
      {
        "id": "1vhS3MwK",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"molstar-viewer\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/molstar-viewer-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/mutation-input-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | mutation-input', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MutationInput />
      */
      {
        "id": "RvD+0S24",
        "block": "[[[8,[39,0],null,null,null]],[],[\"mutation-input\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/mutation-input-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <MutationInput>
              template block text
            </MutationInput>
          
      */
      {
        "id": "7QjJkgN9",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"mutation-input\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/mutation-input-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/mutation-selector-checkbox-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | mutation-selector-checkbox', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MutationSelectorCheckbox />
      */
      {
        "id": "ylR4Oy5D",
        "block": "[[[8,[39,0],null,null,null]],[],[\"mutation-selector-checkbox\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/mutation-selector-checkbox-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <MutationSelectorCheckbox>
              template block text
            </MutationSelectorCheckbox>
          
      */
      {
        "id": "wfVl87Ns",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"mutation-selector-checkbox\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/mutation-selector-checkbox-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/mutation-selector-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | mutation-selector', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <MutationSelector />
      */
      {
        "id": "GJEwpK73",
        "block": "[[[8,[39,0],null,null,null]],[],[\"mutation-selector\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/mutation-selector-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <MutationSelector>
              template block text
            </MutationSelector>
          
      */
      {
        "id": "U3UltbKk",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"mutation-selector\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/mutation-selector-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/pagination-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | pagination', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Pagination />
      */
      {
        "id": "QmjfbVxB",
        "block": "[[[8,[39,0],null,null,null]],[],[\"pagination\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/pagination-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Pagination>
              template block text
            </Pagination>
          
      */
      {
        "id": "5zSOe9q5",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"pagination\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/pagination-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/sequence-acid-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | sequence-acid', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SequenceAcid />
      */
      {
        "id": "VNdn7Aqd",
        "block": "[[[8,[39,0],null,null,null]],[],[\"sequence-acid\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/sequence-acid-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SequenceAcid>
              template block text
            </SequenceAcid>
          
      */
      {
        "id": "yzsgdWGs",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"sequence-acid\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/sequence-acid-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/sequence-view-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | sequence-view', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SequenceView />
      */
      {
        "id": "mH9+UXg8",
        "block": "[[[8,[39,0],null,null,null]],[],[\"sequence-view\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/sequence-view-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SequenceView>
              template block text
            </SequenceView>
          
      */
      {
        "id": "X355rA0R",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"sequence-view\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/sequence-view-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/sort-button-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | sort-button', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <SortButton />
      */
      {
        "id": "OBu04M4A",
        "block": "[[[8,[39,0],null,null,null]],[],[\"sort-button\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/sort-button-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <SortButton>
              template block text
            </SortButton>
          
      */
      {
        "id": "+f254+xS",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"sort-button\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/sort-button-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/star-rating-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | star-rating', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <StarRating />
      */
      {
        "id": "2XkRTc+a",
        "block": "[[[8,[39,0],null,null,null]],[],[\"star-rating\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/star-rating-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <StarRating>
              template block text
            </StarRating>
          
      */
      {
        "id": "ID7H50hh",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"star-rating\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/star-rating-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/theme-switch-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | theme-switch', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ThemeSwitch />
      */
      {
        "id": "V2ecOXfM",
        "block": "[[[8,[39,0],null,null,null]],[],[\"theme-switch\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/theme-switch-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ThemeSwitch>
              template block text
            </ThemeSwitch>
          
      */
      {
        "id": "pCOiuNw9",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"theme-switch\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/theme-switch-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/variant-info-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | variant-info', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <VariantInfo />
      */
      {
        "id": "KQyBAJxY",
        "block": "[[[8,[39,0],null,null,null]],[],[\"variant-info\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/variant-info-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <VariantInfo>
              template block text
            </VariantInfo>
          
      */
      {
        "id": "jnmI8U6p",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"variant-info\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/variant-info-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/components/variant-input-modal-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | variant-input-modal', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <VariantInputModal />
      */
      {
        "id": "HnUMG9uN",
        "block": "[[[8,[39,0],null,null,null]],[],[\"variant-input-modal\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/variant-input-modal-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <VariantInputModal>
              template block text
            </VariantInputModal>
          
      */
      {
        "id": "76HrSEDl",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],[\"variant-input-modal\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/components/variant-input-modal-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("kell/tests/integration/helpers/number-to-array-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Helper | NumberToArray', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{number-to-array this.inputValue}}
      */
      {
        "id": "q3PDvaFH",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],[\"number-to-array\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/helpers/number-to-array-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('1234');
    });
  });
});
define("kell/tests/integration/helpers/replace-pipe-test", ["qunit", "kell/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Helper | ReplacePipe', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        {{replace-pipe this.inputValue}}
      */
      {
        "id": "lO3fgjlB",
        "block": "[[[1,[28,[35,0],[[30,0,[\"inputValue\"]]],null]]],[],[\"replace-pipe\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/helpers/replace-pipe-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('1234');
    });
  });
});
define("kell/tests/integration/modifiers/is-first-column-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Modifier | is-first-column', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <div {{is-first-column}}></div>
      */
      {
        "id": "wd8j1T72",
        "block": "[[[11,0],[4,[38,1],null,null],[12],[13]],[],[\"div\",\"is-first-column\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/modifiers/is-first-column-test.js",
        "isStrictMode": false
      }));
      assert.ok(true);
    });
  });
});
define("kell/tests/integration/modifiers/on-outside-click-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Modifier | on-outside-click', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <div {{on-outside-click}}></div>
      */
      {
        "id": "wvhZWlH0",
        "block": "[[[11,0],[4,[38,1],null,null],[12],[13]],[],[\"div\",\"on-outside-click\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/modifiers/on-outside-click-test.js",
        "isStrictMode": false
      }));
      assert.ok(true);
    });
  });
});
define("kell/tests/integration/modifiers/set-disabled-test", ["qunit", "ember-qunit", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _emberQunit, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"ember-qunit",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Modifier | setDisabled', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <div {{set-disabled}}></div>
      */
      {
        "id": "2WRySmWi",
        "block": "[[[11,0],[4,[38,1],null,null],[12],[13]],[],[\"div\",\"set-disabled\"]]",
        "moduleName": "/home/monkeypunch/work/ember/kell/kell/tests/integration/modifiers/set-disabled-test.js",
        "isStrictMode": false
      }));
      assert.ok(true);
    });
  });
});
define("kell/tests/test-helper", ["kell/app", "kell/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit/test-loader", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _testLoader, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"kell/app",0,"kell/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit/test-loader",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.setupEmberOnerrorValidation)();
  (0, _testLoader.loadTests)();
  (0, _emberQunit.start)();
});
define("kell/tests/unit/routes/application-test", ["qunit", "kell/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | application', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:application');
      assert.ok(route);
    });
  });
});
define("kell/tests/unit/services/data-test", ["qunit", "kell/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | data', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:data');
      assert.ok(service);
    });
  });
});
define("kell/tests/unit/services/table-data-test", ["qunit", "kell/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | TableData', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:table-data');
      assert.ok(service);
    });
  });
});
define("kell/tests/unit/services/theme-test", ["qunit", "kell/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"kell/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | theme', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:theme');
      assert.ok(service);
    });
  });
});
define('kell/config/environment', [], function() {
  var prefix = 'kell';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('kell/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
