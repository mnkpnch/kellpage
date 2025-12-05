'use strict';



;define("kell/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "kell/config/environment", "@embroider/macros/es-compat2"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment, _esCompat) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"kell/config/environment",0,"@embroider/macros",0,"./deprecation-workflow"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  {
    (0, _esCompat.default)(require("kell/deprecation-workflow"));
  }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("kell/components/data-view", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/template", "@ember/template-factory"], function (_exports, _component, _component2, _service, _tracking, _object, _template, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/template",0,"@glimmer/tracking",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes class="data-view my-3">
  	<div class="d-flex justify-content-between">
  		<div class="d-inline-flex page-size-select">
  			<select aria-controls="myTable" class="form-select form-select-sm" id="entry-count" {{on "change" this.pageSizeChanged}}>
  				<option value="10">10</option>
  				<option value="25">25</option>
  				<option value="50">50</option>
  				<option value="100">100</option>
  			</select>
  			<label for="entry-count"> entries per page</label>
  		</div>
  		<div class="row g-3 align-items-center">
  		  <div class="col-auto">
  		    <label for="table-search" class="col-form-label">Filter:</label>
  		  </div>
  		  <div class="col-auto">
  		    <input type="input" id="table-search" class="form-control form-control-sm" aria-describedby="passwordHelpInline" {{on "input" this.filterChanged}}>
  		  </div>
  		</div>
  	</div>
  	<div class="table-responsive">
  		<table class="table table-sm table-striped table-responsive table-hover">
  		  <thead>
  		    <tr>
  		    	{{#each this.columns as |column|}}
  		    		<th scope="col">
  		    			<div class="d-flex justify-content-between align-items-end">
  		    				<span>{{get this.columnNames column}}</span>
  		    				<SortButton @sortColumn={{this.tableData.sortColumn}} @column={{column}} @sortDescending={{this.tableData.sortDescending}} {{on "click" (fn this.handleSortClick column)}}/>
  		    			</div>
  		    		</th>
  		    	{{/each}}
  		    </tr>
  		  </thead>
  		  <tbody>
  		  	{{#if (eq this.tableData.variantsData.length 0)}}
  			  	<tr>
  			  		<td class="text-center" colspan="6">No variants selected.</td>
  			  	</tr>
  		  	{{else if (eq this.tableData.filteredVariantsData.length 0)}}
  			  	<tr>
  			  		<td class="text-center" colspan="6">No matching variants found.</td>
  			  	</tr>
  		  	{{else}}
  			  	{{#each this.tableData.paginatedVariantsData as |row|}}
  				    <tr class={{if (eq row.variant this.data.selectedVariant) "table-active"}} {{on "click" (fn this.rowClicked row.variant)}} {{on "mouseenter" (fn this.rowEntered row.variant)}} {{on "mouseleave" (fn this.rowLeft row.variant)}}>
  				    	<td class="font-monospace">{{row.variant}}</td>
  				    	<td>{{get this.data.data.varTypes row.varType}}</td>
  				    	<td>{{this.formatMaf row.maf}}</td>
  				    	<td>{{this.formatSa row.solventAccessibility}}</td>
  				    	<td><StarRating @ratingIcon={{this.ratingIcon}} @ratingIconGap={{this.ratingIconGap}} @score={{row.destabScore}} @fixed={{row.fixed}}/></td>
  				    	<td><StarRating @ratingIcon={{this.ratingIcon}} @ratingIconGap={{this.ratingIconGap}} @score={{row.agScore}} @fixed={{row.fixed}}/></td>
  				    </tr>
  			    {{/each}}
  			  {{/if}}
  		  </tbody>
  		</table>
  	</div>
  	<div class="d-flex justify-content-between align-items-center">
  		<div>
  			<p>Entries {{this.firstRowIndex}} to {{this.lastRowIndex}} of {{this.tableData.filteredVariantsData.length}}{{#if (not-eq this.tableData.filteredVariantsData.length this.tableData.variantsData.length)}} (filtered from {{this.tableData.variantsData.length}}){{/if}}</p>
  		</div>
  		<Pagination @pageIndex={{this.tableData.pageIndex}} @pageCount={{this.tableData.pageCount}} @setPageIndex={{this.tableData.setPageIndex}}/>
  	</div>
  </div>
  {{!--
  <div class="d-flex justify-content-start align-items-center column-gap-3">
  	<select class="form-select form-select-sm w-auto" aria-label="Rating icon select" {{on "change" this.ratingIconChanged}}>
  	  <option value="circle">Circle</option>
  	  <option value="record">Record</option>
  	  <option value="star">Star</option>
  	  <option value="bulb">Bulb</option>
  	  <option value="sun">Sun</option>
  	  <option value="square">Square</option>
  	</select>
  	<div class="form-check flex-shrink-0">
  	  <input class="form-check-input" type="checkbox" checked id="icon-cap-toggle" {{on "change" this.ratingIconGapChanged}}>
  	  <label class="form-check-label" for="icon-gap-toggle">
  	    gap
  	  </label>
  	</div>
  </div>
  --}}
  
  */
  {
    "id": "96UAzfKQ",
    "block": "[[[11,0],[17,1],[24,0,\"data-view my-3\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"d-flex justify-content-between\"],[12],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"d-inline-flex page-size-select\"],[12],[1,\"\\n\\t\\t\\t\"],[11,\"select\"],[24,\"aria-controls\",\"myTable\"],[24,0,\"form-select form-select-sm\"],[24,1,\"entry-count\"],[4,[38,2],[\"change\",[30,0,[\"pageSizeChanged\"]]],null],[12],[1,\"\\n\\t\\t\\t\\t\"],[10,\"option\"],[14,2,\"10\"],[12],[1,\"10\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,\"option\"],[14,2,\"25\"],[12],[1,\"25\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,\"option\"],[14,2,\"50\"],[12],[1,\"50\"],[13],[1,\"\\n\\t\\t\\t\\t\"],[10,\"option\"],[14,2,\"100\"],[12],[1,\"100\"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\\t\"],[10,\"label\"],[14,\"for\",\"entry-count\"],[12],[1,\" entries per page\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"row g-3 align-items-center\"],[12],[1,\"\\n\\t\\t  \"],[10,0],[14,0,\"col-auto\"],[12],[1,\"\\n\\t\\t    \"],[10,\"label\"],[14,\"for\",\"table-search\"],[14,0,\"col-form-label\"],[12],[1,\"Filter:\"],[13],[1,\"\\n\\t\\t  \"],[13],[1,\"\\n\\t\\t  \"],[10,0],[14,0,\"col-auto\"],[12],[1,\"\\n\\t\\t    \"],[11,\"input\"],[24,1,\"table-search\"],[24,0,\"form-control form-control-sm\"],[24,\"aria-describedby\",\"passwordHelpInline\"],[24,4,\"input\"],[4,[38,2],[\"input\",[30,0,[\"filterChanged\"]]],null],[12],[13],[1,\"\\n\\t\\t  \"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"table-responsive\"],[12],[1,\"\\n\\t\\t\"],[10,\"table\"],[14,0,\"table table-sm table-striped table-responsive table-hover\"],[12],[1,\"\\n\\t\\t  \"],[10,\"thead\"],[12],[1,\"\\n\\t\\t    \"],[10,\"tr\"],[12],[1,\"\\n\"],[42,[28,[37,10],[[28,[37,10],[[30,0,[\"columns\"]]],null]],null],null,[[[1,\"\\t\\t    \\t\\t\"],[10,\"th\"],[14,\"scope\",\"col\"],[12],[1,\"\\n\\t\\t    \\t\\t\\t\"],[10,0],[14,0,\"d-flex justify-content-between align-items-end\"],[12],[1,\"\\n\\t\\t    \\t\\t\\t\\t\"],[10,1],[12],[1,[28,[35,13],[[30,0,[\"columnNames\"]],[30,2]],null]],[13],[1,\"\\n\\t\\t    \\t\\t\\t\\t\"],[8,[39,14],[[4,[38,2],[\"click\",[28,[37,15],[[30,0,[\"handleSortClick\"]],[30,2]],null]],null]],[[\"@sortColumn\",\"@column\",\"@sortDescending\"],[[30,0,[\"tableData\",\"sortColumn\"]],[30,2],[30,0,[\"tableData\",\"sortDescending\"]]]],null],[1,\"\\n\\t\\t    \\t\\t\\t\"],[13],[1,\"\\n\\t\\t    \\t\\t\"],[13],[1,\"\\n\"]],[2]],null],[1,\"\\t\\t    \"],[13],[1,\"\\n\\t\\t  \"],[13],[1,\"\\n\\t\\t  \"],[10,\"tbody\"],[12],[1,\"\\n\"],[41,[28,[37,18],[[30,0,[\"tableData\",\"variantsData\",\"length\"]],0],null],[[[1,\"\\t\\t\\t  \\t\"],[10,\"tr\"],[12],[1,\"\\n\\t\\t\\t  \\t\\t\"],[10,\"td\"],[14,0,\"text-center\"],[14,\"colspan\",\"6\"],[12],[1,\"No variants selected.\"],[13],[1,\"\\n\\t\\t\\t  \\t\"],[13],[1,\"\\n\"]],[]],[[[41,[28,[37,18],[[30,0,[\"tableData\",\"filteredVariantsData\",\"length\"]],0],null],[[[1,\"\\t\\t\\t  \\t\"],[10,\"tr\"],[12],[1,\"\\n\\t\\t\\t  \\t\\t\"],[10,\"td\"],[14,0,\"text-center\"],[14,\"colspan\",\"6\"],[12],[1,\"No matching variants found.\"],[13],[1,\"\\n\\t\\t\\t  \\t\"],[13],[1,\"\\n\"]],[]],[[[42,[28,[37,10],[[28,[37,10],[[30,0,[\"tableData\",\"paginatedVariantsData\"]]],null]],null],null,[[[1,\"\\t\\t\\t\\t    \"],[11,\"tr\"],[16,0,[52,[28,[37,18],[[30,3,[\"variant\"]],[30,0,[\"data\",\"selectedVariant\"]]],null],\"table-active\"]],[4,[38,2],[\"click\",[28,[37,15],[[30,0,[\"rowClicked\"]],[30,3,[\"variant\"]]],null]],null],[4,[38,2],[\"mouseenter\",[28,[37,15],[[30,0,[\"rowEntered\"]],[30,3,[\"variant\"]]],null]],null],[4,[38,2],[\"mouseleave\",[28,[37,15],[[30,0,[\"rowLeft\"]],[30,3,[\"variant\"]]],null]],null],[12],[1,\"\\n\\t\\t\\t\\t    \\t\"],[10,\"td\"],[14,0,\"font-monospace\"],[12],[1,[30,3,[\"variant\"]]],[13],[1,\"\\n\\t\\t\\t\\t    \\t\"],[10,\"td\"],[12],[1,[28,[35,13],[[30,0,[\"data\",\"data\",\"varTypes\"]],[30,3,[\"varType\"]]],null]],[13],[1,\"\\n\\t\\t\\t\\t    \\t\"],[10,\"td\"],[12],[1,[28,[30,0,[\"formatMaf\"]],[[30,3,[\"maf\"]]],null]],[13],[1,\"\\n\\t\\t\\t\\t    \\t\"],[10,\"td\"],[12],[1,[28,[30,0,[\"formatSa\"]],[[30,3,[\"solventAccessibility\"]]],null]],[13],[1,\"\\n\\t\\t\\t\\t    \\t\"],[10,\"td\"],[12],[8,[39,20],null,[[\"@ratingIcon\",\"@ratingIconGap\",\"@score\",\"@fixed\"],[[30,0,[\"ratingIcon\"]],[30,0,[\"ratingIconGap\"]],[30,3,[\"destabScore\"]],[30,3,[\"fixed\"]]]],null],[13],[1,\"\\n\\t\\t\\t\\t    \\t\"],[10,\"td\"],[12],[8,[39,20],null,[[\"@ratingIcon\",\"@ratingIconGap\",\"@score\",\"@fixed\"],[[30,0,[\"ratingIcon\"]],[30,0,[\"ratingIconGap\"]],[30,3,[\"agScore\"]],[30,3,[\"fixed\"]]]],null],[13],[1,\"\\n\\t\\t\\t\\t    \"],[13],[1,\"\\n\"]],[3]],null],[1,\"\\t\\t\\t  \"]],[]]]],[]]],[1,\"\\t\\t  \"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"d-flex justify-content-between align-items-center\"],[12],[1,\"\\n\\t\\t\"],[10,0],[12],[1,\"\\n\\t\\t\\t\"],[10,2],[12],[1,\"Entries \"],[1,[30,0,[\"firstRowIndex\"]]],[1,\" to \"],[1,[30,0,[\"lastRowIndex\"]]],[1,\" of \"],[1,[30,0,[\"tableData\",\"filteredVariantsData\",\"length\"]]],[41,[28,[37,22],[[30,0,[\"tableData\",\"filteredVariantsData\",\"length\"]],[30,0,[\"tableData\",\"variantsData\",\"length\"]]],null],[[[1,\" (filtered from \"],[1,[30,0,[\"tableData\",\"variantsData\",\"length\"]]],[1,\")\"]],[]],null],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[8,[39,23],null,[[\"@pageIndex\",\"@pageCount\",\"@setPageIndex\"],[[30,0,[\"tableData\",\"pageIndex\"]],[30,0,[\"tableData\",\"pageCount\"]],[30,0,[\"tableData\",\"setPageIndex\"]]]],null],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13],[1,\"\\n\"]],[\"&attrs\",\"column\",\"row\"],[\"div\",\"select\",\"on\",\"option\",\"label\",\"input\",\"table\",\"thead\",\"tr\",\"each\",\"-track-array\",\"th\",\"span\",\"get\",\"sort-button\",\"fn\",\"tbody\",\"if\",\"eq\",\"td\",\"star-rating\",\"p\",\"not-eq\",\"pagination\"]]",
    "moduleName": "kell/components/data-view.hbs",
    "isStrictMode": false
  });
  let DataView = _exports.default = (_class = class DataView extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "ratingIcon", _descriptor, this);
      _initializerDefineProperty(this, "ratingIconGap", _descriptor2, this);
      _initializerDefineProperty(this, "data", _descriptor3, this);
      _initializerDefineProperty(this, "tableData", _descriptor4, this);
      _initializerDefineProperty(this, "columns", _descriptor5, this);
      _initializerDefineProperty(this, "columnNames", _descriptor6, this);
    }
    pageSizeChanged(event) {
      const newPageSize = parseInt(event.target.value);
      this.tableData.setPageSize(newPageSize);
    }
    filterChanged(event) {
      //console.log(event.target.value);
      const searchTerm = event.target.value.trim();
      this.tableData.setFilter(searchTerm);
    }
    handleSortClick(column) {
      if (column == this.tableData.sortColumn) {
        this.tableData.setSortColumn(column, !this.tableData.sortDescending);
      } else {
        this.tableData.setSortColumn(column);
      }
    }

    //format helpers	
    formatSa(sa) {
      if (sa == null) {
        return "n/a";
      } else {
        return sa;
      }
    }
    formatMaf(maf) {
      if (maf == null) {
        return "n/a";
      } else {
        if (maf == 0) {
          return maf;
        } else {
          const [coefficient, exponent] = maf.toExponential().split('e');
          return (0, _template.htmlSafe)(coefficient + ' x 10<span class="exponent">' + exponent + "</span>");
        }
      }
    }
    rowClicked(variant) {
      console.log(variant);
      this.data.selectedVariant = variant;
    }
    get firstRowIndex() {
      return this.tableData.filteredVariantsData.length > 0 ? this.tableData.pageIndex * this.tableData.pageSize + 1 : 0;
    }
    get lastRowIndex() {
      const l = this.tableData.filteredVariantsData.length;
      if (this.firstRowIndex - 1 + this.tableData.pageSize <= l) {
        return this.firstRowIndex - 1 + this.tableData.pageSize;
      } else {
        return this.tableData.filteredVariantsData.length;
      }
    }
    ratingIconChanged(event) {
      const icon = event.target.value;
      console.log(icon);
      this.ratingIcon = icon;
    }
    ratingIconGapChanged(event) {
      const gap = event.target.checked;
      console.log(gap);
      this.ratingIconGap = gap;
    }
    rowEntered(variant) {
      const pos = parseInt(variant.slice(1, -1));
      this.data.setHoveredResidue(pos);
    }
    rowLeft(variant) {
      this.data.clearHoveredResidue();
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "ratingIcon", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "square";
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "ratingIconGap", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return true;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "tableData", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "columns", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return ["variant", "varType", "maf", "solventAccessibility", "destabScore", "agScore"];
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "columnNames", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {
        variant: "Variant",
        varType: "Variant Type",
        solventAccessibility: "Solvent Accessibility",
        maf: "MAF Europe",
        destabScore: "Destabilizing",
        agScore: "Antigenicity"
      };
    }
  }), _applyDecoratedDescriptor(_class.prototype, "pageSizeChanged", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "pageSizeChanged"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "filterChanged", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "filterChanged"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "handleSortClick", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleSortClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "rowClicked", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "rowClicked"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "ratingIconChanged", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "ratingIconChanged"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "ratingIconGapChanged", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "ratingIconGapChanged"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "rowEntered", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "rowEntered"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "rowLeft", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "rowLeft"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, DataView);
});
;define("kell/components/debug-tools", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _service, _tracking, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    	<button type="button" class="btn btn-primary btn-sm" {{on "click" this.data.clearMutations}}>Clear table</button>
  	<button type="button" class="btn btn-primary btn-sm" {{on "click" this.data.copyAllMutationsToClipboard}}>Copy all variants to clipboard</button>
  */
  {
    "id": "Z1YtUDat",
    "block": "[[[1,\"\\t\"],[11,\"button\"],[24,0,\"btn btn-primary btn-sm\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"data\",\"clearMutations\"]]],null],[12],[1,\"Clear table\"],[13],[1,\"\\n\\t\"],[11,\"button\"],[24,0,\"btn btn-primary btn-sm\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"data\",\"copyAllMutationsToClipboard\"]]],null],[12],[1,\"Copy all variants to clipboard\"],[13]],[],[\"button\",\"on\"]]",
    "moduleName": "kell/components/debug-tools.hbs",
    "isStrictMode": false
  });
  let DebugTools = _exports.default = (_class = class DebugTools extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "data", _descriptor, this);
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, DebugTools);
});
;define("kell/components/molstar-viewer", ["exports", "@ember/component", "@glimmer/component", "@ember/object", "@glimmer/tracking", "@ember/string", "@ember/service", "molstar/lib/mol-plugin-ui/spec", "molstar/lib/mol-plugin-ui", "molstar/lib/mol-plugin-ui/react18", "molstar/lib/mol-plugin/config", "molstar/lib/mol-model/structure", "molstar/lib/mol-script/language/builder", "molstar/lib/mol-script/language/expression", "molstar/lib/mol-plugin-state/helpers/structure-selection-query", "molstar/lib/mol-script/script", "molstar/lib/mol-model/structure/query", "molstar/lib/mol-plugin-state/helpers/structure-overpaint", "molstar/lib/mol-util/color", "molstar/lib/mol-model/loci", "molstar/lib/mol-model/structure/structure/element/schema", "molstar/lib/mol-util/color/names", "molstar/lib/mol-plugin/commands", "molstar/lib/mol-plugin/behavior/dynamic/selection/structure-focus-representation", "@ember/template-factory"], function (_exports, _component, _component2, _object, _tracking, _string, _service, _spec, _molPluginUi, _react, _config, _structure, _builder, _expression, _structureSelectionQuery, _script, _query, _structureOverpaint, _color, _loci, _schema, _names, _commands, _structureFocusRepresentation, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/object",0,"@glimmer/tracking",0,"@ember/string",0,"@ember/service",0,"molstar/lib/mol-plugin-ui/spec",0,"molstar/lib/mol-plugin-ui",0,"molstar/lib/mol-plugin-ui/react18",0,"molstar/lib/mol-plugin/config",0,"molstar/lib/mol-model/structure",0,"molstar/lib/mol-script/language/builder",0,"molstar/lib/mol-script/language/expression",0,"molstar/lib/mol-plugin-state/helpers/structure-selection-query",0,"molstar/lib/mol-script/script",0,"molstar/lib/mol-model/structure/query",0,"molstar/lib/mol-model/structure",0,"molstar/lib/mol-plugin-state/helpers/structure-overpaint",0,"molstar/lib/mol-util/color",0,"molstar/lib/mol-model/loci",0,"molstar/lib/mol-model/structure/structure/element/schema",0,"molstar/lib/mol-util/color/names",0,"molstar/lib/mol-plugin/commands",0,"molstar/lib/mol-plugin/behavior/dynamic/selection/structure-focus-representation",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes id="molstar-parent" class="molstar-viewer position-relative w-100" {{this.setup}} {{on-resize this.handleResize}} {{this.setHover this.data.hoveredResidue}} {{this.setSelection this.data.selectedResidue}}>
  </div>
  {{this.hoverSurroundings}}
  */
  {
    "id": "+M+FgS94",
    "block": "[[[11,0],[17,1],[24,1,\"molstar-parent\"],[24,0,\"molstar-viewer position-relative w-100\"],[4,[30,0,[\"setup\"]],null,null],[4,[38,1],[[30,0,[\"handleResize\"]]],null],[4,[30,0,[\"setHover\"]],[[30,0,[\"data\",\"hoveredResidue\"]]],null],[4,[30,0,[\"setSelection\"]],[[30,0,[\"data\",\"selectedResidue\"]]],null],[12],[1,\"\\n\"],[13],[1,\"\\n\"],[1,[30,0,[\"hoverSurroundings\"]]]],[\"&attrs\"],[\"div\",\"on-resize\"]]",
    "moduleName": "kell/components/molstar-viewer.hbs",
    "isStrictMode": false
  });
  let MolstarViewer = _exports.default = (_class = class MolstarViewer extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "data", _descriptor, this);
      _defineProperty(this, "domains", [{
        name: "membrane-proximal",
        ranges: [[68, 137], [420, 491], [529, 732]]
      }, {
        name: "membrane-distal",
        ranges: [[138, 419], [492, 528]]
      }, {
        name: "transmembrane",
        ranges: [[44, 67]]
      }, {
        name: "intracellular",
        ranges: [[1, 43]]
      }]);
      _defineProperty(this, "domainColors", {
        membraneProximal: 0xFFFFFF,
        //white
        membraneDistal: 0x888888,
        //grey
        transmembrane: 0xF0E68C,
        //lightyellow  
        intracellular: 0x66CDAA //palegreen  
      });
      // molstar colors
      _defineProperty(this, "backgroundColor", _names.ColorNames.black);
      _defineProperty(this, "highlightColor", _names.ColorNames.green);
      _defineProperty(this, "selectColor", _names.ColorNames.red);
      _defineProperty(this, "focusExpandRadius", 7);
      _initializerDefineProperty(this, "mstar", _descriptor2, this);
      _defineProperty(this, "setupCalled", false);
      _defineProperty(this, "MySpec", {
        ...(0, _spec.DefaultPluginUISpec)(),
        config: [[_config.PluginConfig.VolumeStreaming.Enabled, false]],
        layout: {
          initial: {
            isExpanded: false,
            showControls: false
          }
        }
      });
    }
    get structure() {
      return this.mstar?.managers.structure.hierarchy.current.structures[0].cell.obj.data;
    }
    get components() {
      return this.mstar?.managers.structure.hierarchy.current.structures[0].components;
    }
    handleResize({
      contentRect: {
        width,
        height
      },
      target
    }) {
      const ar = 16.0 / 9.0;
      const h = Math.round(width / ar);
      if (height != h) {
        target.style.height = h + "px";
      }
    }
    async setup() {
      if (this.setupCalled) {
        return;
      }
      this.setupCalled = true;
      console.log('setup');
      /*
      viewer.addSphere({ center: {x:0, y:0, z:0}, radius: 10.0, color: 'green' });
      viewer.zoomTo();
      viewer.render();
      viewer.zoom(0.8, 2000);*/
      console.log(this.MySpec);
      const plugin = await this.createPlugin(document.getElementById('molstar-parent')); // app is a <div> element with position: relative

      plugin.behaviors.interaction.hover.subscribe(event => {
        //console.log('hover', event);
        //console.log('loc', StructureProperties.residue.label_seq_id(event.current.loci));
        const loci = _loci.Loci.normalize(event.current.loci, plugin.managers.interactivity.props.granularity);
        if (loci.kind == "element-loci") {
          _structure.Structure.eachAtomicHierarchyElement(_structure.StructureElement.Loci.toStructure(loci), {
            residue: loc => {
              const position = _structure.StructureProperties.residue.label_seq_id(loc);
              const chain = _structure.StructureProperties.chain.label_asym_id(loc);
              //console.log('set1', chain, position)
              if (position && chain) {
                // && (this.data.hoveredResidue?.position != position || this.data.hoveredResidue?.chain != chain)) {
                //console.log('set2', chain, position)
                this.data.setHoveredResidue(position, chain);
              }
            }
          });
        } else {
          if (this.data.hoveredResidue) {
            //console.log('clear')
            this.data.clearHoveredResidue();
          }
        }
      });
      plugin.behaviors.interaction.click.subscribe(event => {
        console.log('click', event);
        const focus = plugin.managers.structure.focus.current;
        if (focus) {
          console.log(focus.loci);
          _structure.Structure.eachAtomicHierarchyElement(_structure.StructureElement.Loci.toStructure(focus.loci), {
            residue: loc => {
              const position = _structure.StructureProperties.residue.label_seq_id(loc);
              const chain = _structure.StructureProperties.chain.label_asym_id(loc);
              if (position && chain) {
                this.data.manuallySelectedResidue = {
                  position: position,
                  chain: chain
                };
                const surroundings = this.getSurroundings(position, chain);
                console.log(surroundings);
                this.data.surroundings = surroundings;
              }
            }
          });
        } else {
          this.data.manuallySelectedResidue = null;
          this.data.surroundings = [];
        }
        return;
        //console.log('loc', StructureProperties.residue.label_seq_id(event.current.loci));
        const loci = _loci.Loci.normalize(event.current.loci, plugin.managers.interactivity.props.granularity);
        if (loci.kind == "element-loci") {
          _structure.Structure.eachAtomicHierarchyElement(_structure.StructureElement.Loci.toStructure(loci), {
            residue: loc => {
              const position = _structure.StructureProperties.residue.label_seq_id(loc);
              if (position) {
                this.data.manuallySelectedPosition = position;
              }
            }
          });
        } else {}
        const selections = Array.from(plugin.managers.structure.selection.entries.values());
        console.log(plugin.managers.structure.focus.current);
        console.log('selections', selections);

        // This bit can be customized to record any piece information you want
        const localSelected = [];
        for (const {
          structure
        } of selections) {
          console.log("structure", structure);
          if (!structure) continue;
          _structure.Structure.eachAtomicHierarchyElement(structure, {
            residue: loc => {
              const position = _structure.StructureProperties.residue.label_seq_id(loc);
              localSelected.push({
                position
              });
            }
          });
        }
        console.log(localSelected);
      });
      plugin.state.updateBehavior(_structureFocusRepresentation.StructureFocusRepresentation, old => {
        console.log(_structureFocusRepresentation.StructureFocusRepresentation);
        old.expandRadius = this.focusExpandRadius;
      });
      this.mstar = plugin;
      //this.select_multiple();
      this.applyColors();
      /*
      const loci = this.getLociFromPosition(1);
      const surr = this.boo(loci);
      console.log(surr);
      var sel = Script.getStructureSelection((MS) => surr, this.structure);
      let loci2 = StructureSelection.toLociWithSourceUnits(sel);
      //const loci2 = Loci.fromExpression(this.structure, surr);
      console.log(loci2);
      const poss = []
      Structure.eachAtomicHierarchyElement(Loci.toStructure(loci2), 
        {
        residue: (loc) => {
          console.log(loc)
          const position = StructureProperties.residue.label_seq_id(loc);
          poss.push(position);
        }}
      );
      console.log(poss)
      this.focus(634);*/
    }
    async createPlugin(parent) {
      const plugin = await (0, _molPluginUi.createPluginUI)({
        target: parent,
        spec: this.MySpec,
        render: _react.renderReact18
      });
      console.log("props", plugin.canvas3d.props);
      const rendererOptions = plugin.canvas3d.props.renderer;
      const newRendererOptions = {
        ...rendererOptions,
        backgroundColor: this.backgroundColor,
        highlightColor: this.highlightColor,
        selectColor: this.selectColor
      };
      const markingOptions = plugin.canvas3d.props.marking;
      const newMarkingOptions = {
        ...markingOptions,
        highlightEdgeColor: this.highlightColor,
        selectEdgeColor: this.selectColor
      };
      _commands.PluginCommands.Canvas3D.SetSettings(plugin, {
        settings: {
          renderer: newRendererOptions,
          marking: newMarkingOptions
        }
      });
      const format = 'pdb';
      const data = await plugin.builders.data.download({
        url: 'assets/Kell_Zn_AF3.rot.z.180.pdb'
      }, {
        state: {
          isGhost: true
        }
      });
      const trajectory = await plugin.builders.structure.parseTrajectory(data, format);
      await plugin.builders.structure.hierarchy.applyPreset(trajectory, 'default');
      return plugin;
    }
    async applyColors() {
      for (let {
        name,
        ranges
      } of this.domains) {
        const exp = this.getSelectionExpression(ranges, 'A');
        const loci = _structure.StructureElement.Loci.fromExpression(this.structure, exp);
        const color = (0, _color.Color)(this.domainColors[(0, _string.camelize)(name)]);
        //console.log(loci);
        await (0, _structureOverpaint.setStructureOverpaint)(this.mstar, this.components, color, () => loci);
      }
    }
    async paintSurroundings(loci) {
      await (0, _structureOverpaint.setStructureOverpaint)(this.mstar, this.components, 0xff00ff, () => loci);
    }
    setSelection(element, residue) {
      if (!this.mstar) {
        return;
      }
      if (residue) {
        //const loci = this.getLociFromPosition(residue.position, residue.chain);
        //this.mstar.managers.interactivity.lociSelects.select({ loci }); // loci: Loci
        this.selectPosition(residue.position, residue.chain);
      } else {
        this.mstar.managers.interactivity.lociSelects.deselectAll();
      }
      //console.log('hover', position);
    }
    setHover(element, residue) {
      if (!this.mstar) {
        return;
      }
      if (residue) {
        const loci = this.getLociFromPosition(residue.position, residue.chain);
        this.mstar.managers.interactivity.lociHighlights.highlightOnly({
          loci
        });
      } else {
        this.mstar.managers.interactivity.lociHighlights.clearHighlights();
      }
    }
    get hoverSurroundings() {
      if (this.data.hoverPosition) {
        //this.focus(this.data.hoverPosition)
      }
      return "";
    }
    getSurroundings(pos, chain = 'A') {
      console.log("focus");
      const core = _builder.MolScriptBuilder.struct.generator.atomGroups({
        'chain-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.auth_asym_id(), chain]),
        'residue-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.label_seq_id(), pos])
      });
      let surroundings = _builder.MolScriptBuilder.struct.modifier.includeSurroundings({
        0: core,
        radius: this.focusExpandRadius,
        'as-whole-residues': true
      });
      surroundings = _builder.MolScriptBuilder.struct.modifier.exceptBy({
        0: surroundings,
        by: core
      });
      console.log(surroundings);
      const loci2 = _structure.StructureElement.Loci.fromExpression(this.structure, surroundings);
      //this.paintSurroundings(loci2);
      console.log(loci2);
      const chainAPositions = [];
      _structure.Structure.eachAtomicHierarchyElement(_structure.StructureElement.Loci.toStructure(loci2), {
        residue: loc => {
          const position = _structure.StructureProperties.residue.label_seq_id(loc);
          const chain = _structure.StructureProperties.chain.label_asym_id(loc);
          if (chain == 'A') {
            chainAPositions.push(position);
          }
        }
      });
      return chainAPositions;
    }
    focus(pos, chain = 'A') {
      console.log("focus");
      const core = _builder.MolScriptBuilder.struct.generator.atomGroups({
        'chain-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.auth_asym_id(), chain]),
        'residue-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.label_seq_id(), pos])
      });
      const surroundings = _builder.MolScriptBuilder.struct.modifier.includeSurroundings({
        0: core,
        radius: 5,
        'as-whole-residues': true
      });
      console.log(surroundings);
      const loci2 = _structure.StructureElement.Loci.fromExpression(this.structure, surroundings);
      console.log(loci2);
      const poss = [];
      _structure.Structure.eachAtomicHierarchyElement(_loci.Loci.toStructure(loci2), {
        chain: chain => {
          console.log("chain", chain);
        },
        residue: loc => {
          console.log("residue", loc);
          const position = _structure.StructureProperties.residue.label_seq_id(loc);
          poss.push(position);
        },
        atom: atom => {
          console.log("residue", atom);
        }
      });
      console.log(poss);
    }
    boo(sourceLoci) {
      const expandRadius = 5;
      const excludeTarget = false;
      const parent = this.mstar.helpers.substructureParent.get(sourceLoci.structure);
      if (!parent || !parent.obj) return;
      const loci = _structure.StructureElement.Loci.remap(sourceLoci, parent.obj.data);
      const residueLoci = _structure.StructureElement.Loci.extendToWholeResidues(loci);
      const residueBundle = _structure.StructureElement.Bundle.fromLoci(residueLoci);
      const target = _structure.StructureElement.Bundle.toExpression(residueBundle);
      let surroundings = _builder.MolScriptBuilder.struct.modifier.includeSurroundings({
        0: target,
        radius: expandRadius,
        'as-whole-residues': true
      });
      if (excludeTarget) {
        surroundings = _builder.MolScriptBuilder.struct.modifier.exceptBy({
          0: surroundings,
          by: target
        });
      }
      console.log(surroundings);
      return surroundings;
    }
    getLociFromPosition(position, chain = 'A') {
      const exp = _builder.MolScriptBuilder.struct.generator.atomGroups({
        'chain-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.auth_asym_id(), chain]),
        'residue-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.label_seq_id(), position])
      });
      const loci = _structure.StructureElement.Loci.fromExpression(this.structure, exp);
      return loci;
    }
    getSelectionExpression(ranges, chain = 'A') {
      const groups = [];
      for (let range of ranges) {
        groups.push(_builder.MolScriptBuilder.struct.generator.atomGroups({
          'chain-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.auth_asym_id(), chain]),
          'residue-test': _builder.MolScriptBuilder.core.rel.inRange([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.label_seq_id(), range[0], range[1]])
        }));
      }
      let exp = _builder.MolScriptBuilder.struct.combinator.merge(groups.map(e => _builder.MolScriptBuilder.struct.modifier.union([e]))); //union
      return exp;
    }
    selectVariant(variant) {
      this.selectPosition(parseInt(variant.slice(1, -1)));
    }
    selectPosition(pos, chain = 'A') {
      const exp = _builder.MolScriptBuilder.struct.generator.atomGroups({
        'chain-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.auth_asym_id(), chain]),
        'residue-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.label_seq_id(), pos])
      });
      var sq = (0, _structureSelectionQuery.StructureSelectionQuery)("pos-" + pos, exp);
      this.mstar.managers.structure.selection.fromSelectionQuery('set', sq);
    }
    async select_multiple() {
      const args = [['A', 0, 30], ['A', 100, 150]];
      const groups = [];
      for (var chain of args) {
        groups.push(_builder.MolScriptBuilder.struct.generator.atomGroups({
          'chain-test': _builder.MolScriptBuilder.core.rel.eq([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.auth_asym_id(), chain[0]]),
          'residue-test': _builder.MolScriptBuilder.core.rel.inRange([_builder.MolScriptBuilder.struct.atomProperty.macromolecular.label_seq_id(), chain[1], chain[2]])
        }));
      }
      let exp = _builder.MolScriptBuilder.struct.combinator.merge(groups.map(e => _builder.MolScriptBuilder.struct.modifier.union([e]))); //union
      var sq = (0, _structureSelectionQuery.StructureSelectionQuery)('someresidues', _builder.MolScriptBuilder.struct.combinator.merge(groups));
      console.log('sq', sq);
      this.mstar.managers.structure.selection.fromSelectionQuery('set', sq);
      //var sel = Script.getStructureSelection(sq, objdata)
      //console.log(sel)
      //let loci = StructureSelection.toLociWithSourceUnits(sel);
      //console.log(loci)
      /*var sel = Script.getStructureSelection(MS => MS.struct.generator.atomGroups({
        'chain-test': MS.core.rel.eq([MS.struct.atomProperty.macromolecular.auth_asym_id(), 'A']),
        'residue-test': MS.core.rel.inRange([MS.struct.atomProperty.macromolecular.label_seq_id(), 124, 150]),
      }), this.structure)
      let loci = Loci.fromExpression(this.structure, exp);
      await setStructureOverpaint(this.mstar, this.components, Color(0xFF0000), () => loci);*/
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "mstar", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "handleResize", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleResize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setup", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setup"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setSelection", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setSelection"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setHover", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setHover"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, MolstarViewer);
});
;define("kell/components/pagination", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _service, _tracking, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <nav ...attributes class="pagination" aria-label="Page navigation example">
    <ul class="pagination pagination-sm">
      <li class="page-item {{if this.isFirstPage "disabled"}}" {{on "click" (fn @setPageIndex (sub @pageIndex 1))}}>
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&lsaquo;</span>
        </a>
      </li>
      {{#each this.indices as |idx|}}
      	{{#if (eq idx.idx "ellipsis")}}
  	    	<li class="page-item">
  	    	  <a class="page-link" aria-label="ellipsis">
  	    	    <span aria-hidden="true">&hellip;</span>
  	    	  </a>
  	    	</li>
      	{{else}}
      		<li class="page-item {{if idx.active "active"}}" {{on "click" (fn @setPageIndex idx.idx)}}><a class="page-link" href="#">{{sum idx.idx 1}}</a></li>
      	{{/if}}
      {{/each}}
      <li class="page-item {{if this.isLastPage "disabled"}}" {{on "click" (fn @setPageIndex (sum @pageIndex 1))}}>
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&rsaquo;</span>
        </a>
      </li>
    </ul>
  </nav>
  */
  {
    "id": "l0RkYvUN",
    "block": "[[[11,\"nav\"],[17,1],[24,0,\"pagination\"],[24,\"aria-label\",\"Page navigation example\"],[12],[1,\"\\n  \"],[10,\"ul\"],[14,0,\"pagination pagination-sm\"],[12],[1,\"\\n    \"],[11,\"li\"],[16,0,[29,[\"page-item \",[52,[30,0,[\"isFirstPage\"]],\"disabled\"]]]],[4,[38,4],[\"click\",[28,[37,5],[[30,2],[28,[37,6],[[30,3],1],null]],null]],null],[12],[1,\"\\n      \"],[10,3],[14,0,\"page-link\"],[14,6,\"#\"],[14,\"aria-label\",\"Previous\"],[12],[1,\"\\n        \"],[10,1],[14,\"aria-hidden\",\"true\"],[12],[1,\"‹\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n\"],[42,[28,[37,10],[[28,[37,10],[[30,0,[\"indices\"]]],null]],null],null,[[[41,[28,[37,11],[[30,4,[\"idx\"]],\"ellipsis\"],null],[[[1,\"\\t    \\t\"],[10,\"li\"],[14,0,\"page-item\"],[12],[1,\"\\n\\t    \\t  \"],[10,3],[14,0,\"page-link\"],[14,\"aria-label\",\"ellipsis\"],[12],[1,\"\\n\\t    \\t    \"],[10,1],[14,\"aria-hidden\",\"true\"],[12],[1,\"…\"],[13],[1,\"\\n\\t    \\t  \"],[13],[1,\"\\n\\t    \\t\"],[13],[1,\"\\n\"]],[]],[[[1,\"    \\t\\t\"],[11,\"li\"],[16,0,[29,[\"page-item \",[52,[30,4,[\"active\"]],\"active\"]]]],[4,[38,4],[\"click\",[28,[37,5],[[30,2],[30,4,[\"idx\"]]],null]],null],[12],[10,3],[14,0,\"page-link\"],[14,6,\"#\"],[12],[1,[28,[35,12],[[30,4,[\"idx\"]],1],null]],[13],[13],[1,\"\\n\"]],[]]]],[4]],null],[1,\"    \"],[11,\"li\"],[16,0,[29,[\"page-item \",[52,[30,0,[\"isLastPage\"]],\"disabled\"]]]],[4,[38,4],[\"click\",[28,[37,5],[[30,2],[28,[37,12],[[30,3],1],null]],null]],null],[12],[1,\"\\n      \"],[10,3],[14,0,\"page-link\"],[14,6,\"#\"],[14,\"aria-label\",\"Next\"],[12],[1,\"\\n        \"],[10,1],[14,\"aria-hidden\",\"true\"],[12],[1,\"›\"],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"&attrs\",\"@setPageIndex\",\"@pageIndex\",\"idx\"],[\"nav\",\"ul\",\"li\",\"if\",\"on\",\"fn\",\"sub\",\"a\",\"span\",\"each\",\"-track-array\",\"eq\",\"sum\"]]",
    "moduleName": "kell/components/pagination.hbs",
    "isStrictMode": false
  });
  class Pagination extends _component2.default {
    get isFirstPage() {
      return this.args.pageIndex == 0 || this.args.pageCount == 0;
    }
    get isLastPage() {
      return this.args.pageIndex == this.args.pageCount - 1 || this.args.pageCount == 0;
    }
    get indices() {
      let indices;
      if (this.args.pageCount == 0) {
        indices = [];
      } else if (this.args.pageCount <= 7) {
        indices = Array(this.args.pageCount).fill().map((_, idx) => idx);
      } else {
        const first = 0;
        const last = this.args.pageCount - 1;
        if (this.args.pageIndex < 4) {
          indices = Array(5).fill().map((_, idx) => idx);
          indices.push("ellipsis");
          indices.push(last);
        } else if (last - this.args.pageIndex < 4) {
          indices = Array(5).fill().map((_, idx) => last + idx - 4);
          indices.unshift("ellipsis");
          indices.unshift(first);
        } else {
          indices = Array(3).fill().map((_, idx) => this.args.pageIndex - 1 + idx);
          indices.unshift("ellipsis");
          indices.unshift(first);
          indices.push("ellipsis");
          indices.push(last);
        }
      }
      return indices.map(idx => {
        return {
          idx: idx,
          active: idx == this.args.pageIndex
        };
      });
    }
  }
  _exports.default = Pagination;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Pagination);
});
;define("kell/components/sequence-acid", ["exports", "@ember/component", "@glimmer/component", "bootstrap", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _bootstrap, _service, _tracking, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"bootstrap",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes class="sequence-acid acid-element {{if (this.data.anyMutationActive @idx) "act"}}" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={{sum @idx 1}} {{this.initTooltip}}>
  	<button type="button" class="btn btn-sm sequence-acid-button font-monospace {{if this.showSelector "active"}} {{if (this.data.anyMutationActive @idx) "color-primary"}} {{if this.hovered "hovered"}} {{if this.selected "selected"}} {{if this.isSurrounding "surrounding"}}" data-bs-toggle="button" {{on "click" this.acidClicked}} {{on "mouseenter" this.mouseEnter}} {{on "mouseleave" this.mouseLeave}}>{{@aminoAcid}}</button>
  	{{#if this.showSelector}}<VariantSelector @mutationActive={{this.data.anyMutationActive @idx}} @pos={{this.pos}} @ref={{@aminoAcid}} {{on-outside-click this.acidClicked}} />{{/if}}
  	{{#each (this.data.getColorsAtSeqIdx @idx) as |color index|}}
  		<div class="color-badge idx-{{index}} {{color}}">
  		  <span class="visually-hidden"></span>
  		</div>
  	{{/each}}
  </div>
  */
  {
    "id": "9CE5ozGF",
    "block": "[[[11,0],[17,1],[16,0,[29,[\"sequence-acid acid-element \",[52,[28,[30,0,[\"data\",\"anyMutationActive\"]],[[30,2]],null],\"act\"]]]],[24,\"data-bs-toggle\",\"tooltip\"],[24,\"data-bs-placement\",\"top\"],[16,\"data-bs-title\",[28,[37,2],[[30,2],1],null]],[4,[30,0,[\"initTooltip\"]],null,null],[12],[1,\"\\n\\t\"],[11,\"button\"],[16,0,[29,[\"btn btn-sm sequence-acid-button font-monospace \",[52,[30,0,[\"showSelector\"]],\"active\"],\" \",[52,[28,[30,0,[\"data\",\"anyMutationActive\"]],[[30,2]],null],\"color-primary\"],\" \",[52,[30,0,[\"hovered\"]],\"hovered\"],\" \",[52,[30,0,[\"selected\"]],\"selected\"],\" \",[52,[30,0,[\"isSurrounding\"]],\"surrounding\"]]]],[24,\"data-bs-toggle\",\"button\"],[24,4,\"button\"],[4,[38,4],[\"click\",[30,0,[\"acidClicked\"]]],null],[4,[38,4],[\"mouseenter\",[30,0,[\"mouseEnter\"]]],null],[4,[38,4],[\"mouseleave\",[30,0,[\"mouseLeave\"]]],null],[12],[1,[30,3]],[13],[1,\"\\n\\t\"],[41,[30,0,[\"showSelector\"]],[[[8,[39,5],[[4,[38,6],[[30,0,[\"acidClicked\"]]],null]],[[\"@mutationActive\",\"@pos\",\"@ref\"],[[28,[30,0,[\"data\",\"anyMutationActive\"]],[[30,2]],null],[30,0,[\"pos\"]],[30,3]]],null]],[]],null],[1,\"\\n\"],[42,[28,[37,8],[[28,[37,8],[[28,[30,0,[\"data\",\"getColorsAtSeqIdx\"]],[[30,2]],null]],null]],null],null,[[[1,\"\\t\\t\"],[10,0],[15,0,[29,[\"color-badge idx-\",[30,5],\" \",[30,4]]]],[12],[1,\"\\n\\t\\t  \"],[10,1],[14,0,\"visually-hidden\"],[12],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\"]],[4,5]],null],[13]],[\"&attrs\",\"@idx\",\"@aminoAcid\",\"color\",\"index\"],[\"div\",\"if\",\"sum\",\"button\",\"on\",\"variant-selector\",\"on-outside-click\",\"each\",\"-track-array\",\"span\"]]",
    "moduleName": "kell/components/sequence-acid.hbs",
    "isStrictMode": false
  });
  let SequenceAcid = _exports.default = (_class = class SequenceAcid extends _component2.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "tooltip", null);
      _initializerDefineProperty(this, "data", _descriptor, this);
    }
    initTooltip(element) {
      /*
      console.log(arguments)
      if (!this.tooltip) {
      	//this.tooltip = new bootstrap.Tooltip(element);
      }
      console.log(this.tooltip)
      */
    }
    get showSelector() {
      return this.args.currentIndex == this.args.idx;
    }
    get pos() {
      return this.args.idx + 1;
    }
    get hovered() {
      return this.data.hoveredResidue && this.data.hoveredResidue.chain == 'A' && this.data.hoveredResidue.position == this.pos;
    }
    get selected() {
      return this.data.selectedResidue && this.data.selectedResidue.chain == 'A' && this.data.selectedResidue.position == this.pos;
    }
    get isSurrounding() {
      return this.data.surroundings.indexOf(this.pos) > -1;
    }
    mouseEnter(event) {
      this.data.setHoveredResidue(this.pos);
    }
    mouseLeave(event) {
      this.data.clearHoveredResidue();
    }
    acidClicked(event) {
      event.stopPropagation();
      console.log(this.args.idx + " clicked " + this.args.aminoAcid);
      if (this.showSelector) {
        this.args.setCurrentIndex(-1);
      } else {
        this.args.setCurrentIndex(this.args.idx);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "initTooltip", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "initTooltip"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mouseEnter", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "mouseEnter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mouseLeave", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "mouseLeave"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "acidClicked", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "acidClicked"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, SequenceAcid);
});
;define("kell/components/sequence-view", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ember-math-helpers/helpers/sum", "ember-math-helpers/helpers/mult", "@ember/service", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _sum, _mult, _service, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ember-math-helpers/helpers/sum",0,"ember-math-helpers/helpers/mult",0,"@ember/service",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes class="sequence-view my-3">
  	<div class="px-4">
  		<div class="sequence-container noselect">
  			{{#each this.data.chunkedSequence as |chunk chunkIdx|}}
  				<div class="chunk-block" {{is-first-column}}>
  					{{#each chunk as |acid acidIdx|}}
  						{{#let (sum (mult chunkIdx this.data.sequenceChunkSize) acidIdx) as |idx|}}
  							<SequenceAcid @currentIndex={{this.currentIndex}} @setCurrentIndex={{this.setCurrentIndex}} @aminoAcid={{acid}} @idx={{idx}} />
  						{{/let}}
  					{{/each}}
  					{{#if (eq chunk.length this.data.sequenceChunkSize)}}
  						<div class="chunk-label right">
  							<p><small>{{mult (sum chunkIdx 1) this.data.sequenceChunkSize}}</small></p>
  						</div>
  					{{/if}}
  					<div class="chunk-label left">
  						<p><small>{{mult chunkIdx this.data.sequenceChunkSize}}</small></p>
  					</div>
  					{{#if (lt chunk.length this.data.sequenceChunkSize)}}
  						{{#each (number-to-array (sub this.data.sequenceChunkSize chunk.length))}}
  							<div class="dummy"></div>
  						{{/each}}
  					{{/if}}
  				</div>
  			{{/each}}
  		</div>
  	</div>
  </div>
  */
  {
    "id": "rfusvFoR",
    "block": "[[[11,0],[17,1],[24,0,\"sequence-view my-3\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"px-4\"],[12],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"sequence-container noselect\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"data\",\"chunkedSequence\"]]],null]],null],null,[[[1,\"\\t\\t\\t\\t\"],[11,0],[24,0,\"chunk-block\"],[4,[38,3],null,null],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,2]],null]],null],null,[[[44,[[28,[37,5],[[28,[37,6],[[30,3],[30,0,[\"data\",\"sequenceChunkSize\"]]],null],[30,5]],null]],[[[1,\"\\t\\t\\t\\t\\t\\t\\t\"],[8,[39,7],null,[[\"@currentIndex\",\"@setCurrentIndex\",\"@aminoAcid\",\"@idx\"],[[30,0,[\"currentIndex\"]],[30,0,[\"setCurrentIndex\"]],[30,4],[30,6]]],null],[1,\"\\n\"]],[6]]]],[4,5]],null],[41,[28,[37,9],[[30,2,[\"length\"]],[30,0,[\"data\",\"sequenceChunkSize\"]]],null],[[[1,\"\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"chunk-label right\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[10,\"small\"],[12],[1,[28,[35,6],[[28,[37,5],[[30,3],1],null],[30,0,[\"data\",\"sequenceChunkSize\"]]],null]],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[]],null],[1,\"\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"chunk-label left\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\"],[10,2],[12],[10,\"small\"],[12],[1,[28,[35,6],[[30,3],[30,0,[\"data\",\"sequenceChunkSize\"]]],null]],[13],[13],[1,\"\\n\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"],[41,[28,[37,12],[[30,2,[\"length\"]],[30,0,[\"data\",\"sequenceChunkSize\"]]],null],[[[42,[28,[37,2],[[28,[37,2],[[28,[37,13],[[28,[37,14],[[30,0,[\"data\",\"sequenceChunkSize\"]],[30,2,[\"length\"]]],null]],null]],null]],null],null,[[[1,\"\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"dummy\"],[12],[13],[1,\"\\n\"]],[]],null]],[]],null],[1,\"\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[2,3]],null],[1,\"\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13]],[\"&attrs\",\"chunk\",\"chunkIdx\",\"acid\",\"acidIdx\",\"idx\"],[\"div\",\"each\",\"-track-array\",\"is-first-column\",\"let\",\"sum\",\"mult\",\"sequence-acid\",\"if\",\"eq\",\"p\",\"small\",\"lt\",\"number-to-array\",\"sub\"]]",
    "moduleName": "kell/components/sequence-view.hbs",
    "isStrictMode": false
  });
  let SequenceView = _exports.default = (_class = class SequenceView extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "data", _descriptor, this);
      _initializerDefineProperty(this, "currentIndex", _descriptor2, this);
    }
    setCurrentIndex(idx) {
      this.currentIndex = idx;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "currentIndex", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return -1;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setCurrentIndex", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setCurrentIndex"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, SequenceView);
});
;define("kell/components/sort-button", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _service, _tracking, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <span ...attributes class="sort-button {{unless this.activeColumn "text-body-tertiary"}}">
  	{{#if (and @sortDescending this.activeColumn)}}
  		<i class="bi bi-sort-down"></i>
  	{{else}}
  		<i class="bi bi-sort-up"></i>
  	{{/if}}
  </span>
  */
  {
    "id": "q13gNqcX",
    "block": "[[[11,1],[17,1],[16,0,[29,[\"sort-button \",[52,[51,[30,0,[\"activeColumn\"]]],\"text-body-tertiary\"]]]],[12],[1,\"\\n\"],[41,[28,[37,3],[[30,2],[30,0,[\"activeColumn\"]]],null],[[[1,\"\\t\\t\"],[10,\"i\"],[14,0,\"bi bi-sort-down\"],[12],[13],[1,\"\\n\"]],[]],[[[1,\"\\t\\t\"],[10,\"i\"],[14,0,\"bi bi-sort-up\"],[12],[13],[1,\"\\n\"]],[]]],[13]],[\"&attrs\",\"@sortDescending\"],[\"span\",\"unless\",\"if\",\"and\",\"i\"]]",
    "moduleName": "kell/components/sort-button.hbs",
    "isStrictMode": false
  });
  class SortButton extends _component2.default {
    get activeColumn() {
      return this.args.sortColumn == this.args.column;
    }
  }
  _exports.default = SortButton;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, SortButton);
});
;define("kell/components/star-rating", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _service, _tracking, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes class="star-rating {{this.color}}">
  	<p>
  		<span class="d-flex {{if @ratingIconGap "gap"}} align-items-end">
  			{{#each (this.numberToArray this.filledStarCount) as |x|}}
  				<i class="bi {{this.ratingIcon.filled}}"></i>
  			{{/each}}
  			{{#each (this.numberToArray this.blankStarCount) as |x|}}
  				<i class="bi {{this.ratingIcon.blank}}"></i>
  			{{/each}}
  		</span>
  	</p>
  </div>
  */
  {
    "id": "Rtaflebm",
    "block": "[[[11,0],[17,1],[16,0,[29,[\"star-rating \",[30,0,[\"color\"]]]]],[12],[1,\"\\n\\t\"],[10,2],[12],[1,\"\\n\\t\\t\"],[10,1],[15,0,[29,[\"d-flex \",[52,[30,2],\"gap\"],\" align-items-end\"]]],[12],[1,\"\\n\"],[42,[28,[37,5],[[28,[37,5],[[28,[30,0,[\"numberToArray\"]],[[30,0,[\"filledStarCount\"]]],null]],null]],null],null,[[[1,\"\\t\\t\\t\\t\"],[10,\"i\"],[15,0,[29,[\"bi \",[30,0,[\"ratingIcon\",\"filled\"]]]]],[12],[13],[1,\"\\n\"]],[3]],null],[42,[28,[37,5],[[28,[37,5],[[28,[30,0,[\"numberToArray\"]],[[30,0,[\"blankStarCount\"]]],null]],null]],null],null,[[[1,\"\\t\\t\\t\\t\"],[10,\"i\"],[15,0,[29,[\"bi \",[30,0,[\"ratingIcon\",\"blank\"]]]]],[12],[13],[1,\"\\n\"]],[4]],null],[1,\"\\t\\t\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13]],[\"&attrs\",\"@ratingIconGap\",\"x\",\"x\"],[\"div\",\"p\",\"span\",\"if\",\"each\",\"-track-array\",\"i\"]]",
    "moduleName": "kell/components/star-rating.hbs",
    "isStrictMode": false
  });
  class StarRating extends _component2.default {
    get filledStarCount() {
      const filled = this.args.score;
      return filled;
    }
    get blankStarCount() {
      return 5 - this.filledStarCount;
    }
    get color() {
      return this.args.fixed ? "green" : "red";
    }
    numberToArray(size) {
      return new Array(size);
    }
    get ratingIcon() {
      //console.log(this.args.ratingIcon);
      switch (this.args.ratingIcon) {
        case "square":
          return {
            blank: "bi-square",
            filled: "bi-square-fill"
          };
        case "sun":
          return {
            blank: "bi-sun",
            filled: "bi-sun-fill"
          };
        case "bulb":
          return {
            blank: "bi-lightbulb",
            filled: "bi-lightbulb-fill"
          };
        case "star":
          return {
            blank: "bi-star",
            filled: "bi-star-fill"
          };
        case "record":
          return {
            blank: "bi-circle",
            filled: "bi-record-circle"
          };
        case "circle":
        default:
          return {
            blank: "bi-circle",
            filled: "bi-circle-fill"
          };
      }
    }
  }
  _exports.default = StarRating;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, StarRating);
});
;define("kell/components/theme-switch", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object", "@ember/template-factory"], function (_exports, _component, _component2, _service, _tracking, _object, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes class="theme-switch">
  	<input type="checkbox" class="checkbox" id="chk" {{this.setChecked (eq this.theme.currentTheme "dark")}} {{on "change" this.toggleTheme}}/>
  	<label class="label" for="chk">
  		<i class="bi bi-moon-fill"></i>
  		<i class="bi bi-sun-fill"></i>
  		<div class="ball"></div>
  	</label>
  	{{!--
  	<div class="form-check form-switch">
  	  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  	  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
  	</div>
  	--}}
  </div>
  */
  {
    "id": "UaqGRUqN",
    "block": "[[[11,0],[17,1],[24,0,\"theme-switch\"],[12],[1,\"\\n\\t\"],[11,\"input\"],[24,0,\"checkbox\"],[24,1,\"chk\"],[24,4,\"checkbox\"],[4,[30,0,[\"setChecked\"]],[[28,[37,2],[[30,0,[\"theme\",\"currentTheme\"]],\"dark\"],null]],null],[4,[38,3],[\"change\",[30,0,[\"toggleTheme\"]]],null],[12],[13],[1,\"\\n\\t\"],[10,\"label\"],[14,0,\"label\"],[14,\"for\",\"chk\"],[12],[1,\"\\n\\t\\t\"],[10,\"i\"],[14,0,\"bi bi-moon-fill\"],[12],[13],[1,\"\\n\\t\\t\"],[10,\"i\"],[14,0,\"bi bi-sun-fill\"],[12],[13],[1,\"\\n\\t\\t\"],[10,0],[14,0,\"ball\"],[12],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13]],[\"&attrs\"],[\"div\",\"input\",\"eq\",\"on\",\"label\",\"i\"]]",
    "moduleName": "kell/components/theme-switch.hbs",
    "isStrictMode": false
  });
  let ThemeSwitch = _exports.default = (_class = class ThemeSwitch extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "theme", _descriptor, this);
    }
    toggleTheme(event) {
      let checked = event.target.checked;
      if (checked) {
        this.theme.setDarkTheme();
      } else {
        this.theme.setLightTheme();
      }
    }
    setChecked(element, isChecked) {
      if (isChecked) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "theme", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "toggleTheme", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleTheme"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setChecked", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setChecked"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ThemeSwitch);
});
;define("kell/components/variant-info", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "@ember/runloop", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _runloop, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"@ember/runloop",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="variant-info my-3" {{this.checkSelectedVariant this.tableData.selectedVariantInTable}}>
  	{{#if this.data.variantTexts}}
  		<div class="card">
  		  <div class="card-header text-center position-relative">
  		    {{this.data.variantTexts.variant}}
  		    	<button class="btn btn-{{this.theme.currentTheme}} card-header-button left" type="button" {{set-disabled (not this.previousVariant)}} {{on "click" this.gotoPreviousVariant}}>&lsaquo;</button>
  		    	<button class="btn btn-{{this.theme.currentTheme}} card-header-button right" type="button" {{set-disabled (not this.nextVariant)}} {{on "click" this.gotoNextVariant}}>&rsaquo;</button>
  		  </div>
  		  <div class="d-flex">
  			  <div class="card-body flex-basis-100">
  			    <h5 class="card-title">Destabilizing</h5>
  			    <p class="card-text">{{replace-pipe this.data.variantTexts.destabMessage}}</p>
  			  </div>
  			  <div class="card-body flex-basis-100">
  			    <h5 class="card-title">Antigenicity</h5>
  			    <p class="card-text">{{replace-pipe this.data.variantTexts.agMessage}}</p>
  			  </div>
  			</div>
  		</div>
  	{{/if}}
  </div>
  */
  {
    "id": "rZ+lN9u6",
    "block": "[[[11,0],[24,0,\"variant-info my-3\"],[4,[30,0,[\"checkSelectedVariant\"]],[[30,0,[\"tableData\",\"selectedVariantInTable\"]]],null],[12],[1,\"\\n\"],[41,[30,0,[\"data\",\"variantTexts\"]],[[[1,\"\\t\\t\"],[10,0],[14,0,\"card\"],[12],[1,\"\\n\\t\\t  \"],[10,0],[14,0,\"card-header text-center position-relative\"],[12],[1,\"\\n\\t\\t    \"],[1,[30,0,[\"data\",\"variantTexts\",\"variant\"]]],[1,\"\\n\\t\\t    \\t\"],[11,\"button\"],[16,0,[29,[\"btn btn-\",[30,0,[\"theme\",\"currentTheme\"]],\" card-header-button left\"]]],[24,4,\"button\"],[4,[38,3],[[28,[37,4],[[30,0,[\"previousVariant\"]]],null]],null],[4,[38,5],[\"click\",[30,0,[\"gotoPreviousVariant\"]]],null],[12],[1,\"‹\"],[13],[1,\"\\n\\t\\t    \\t\"],[11,\"button\"],[16,0,[29,[\"btn btn-\",[30,0,[\"theme\",\"currentTheme\"]],\" card-header-button right\"]]],[24,4,\"button\"],[4,[38,3],[[28,[37,4],[[30,0,[\"nextVariant\"]]],null]],null],[4,[38,5],[\"click\",[30,0,[\"gotoNextVariant\"]]],null],[12],[1,\"›\"],[13],[1,\"\\n\\t\\t  \"],[13],[1,\"\\n\\t\\t  \"],[10,0],[14,0,\"d-flex\"],[12],[1,\"\\n\\t\\t\\t  \"],[10,0],[14,0,\"card-body flex-basis-100\"],[12],[1,\"\\n\\t\\t\\t    \"],[10,\"h5\"],[14,0,\"card-title\"],[12],[1,\"Destabilizing\"],[13],[1,\"\\n\\t\\t\\t    \"],[10,2],[14,0,\"card-text\"],[12],[1,[28,[35,8],[[30,0,[\"data\",\"variantTexts\",\"destabMessage\"]]],null]],[13],[1,\"\\n\\t\\t\\t  \"],[13],[1,\"\\n\\t\\t\\t  \"],[10,0],[14,0,\"card-body flex-basis-100\"],[12],[1,\"\\n\\t\\t\\t    \"],[10,\"h5\"],[14,0,\"card-title\"],[12],[1,\"Antigenicity\"],[13],[1,\"\\n\\t\\t\\t    \"],[10,2],[14,0,\"card-text\"],[12],[1,[28,[35,8],[[30,0,[\"data\",\"variantTexts\",\"agMessage\"]]],null]],[13],[1,\"\\n\\t\\t\\t  \"],[13],[1,\"\\n\\t\\t\\t\"],[13],[1,\"\\n\\t\\t\"],[13],[1,\"\\n\"]],[]],null],[13]],[],[\"div\",\"if\",\"button\",\"set-disabled\",\"not\",\"on\",\"h5\",\"p\",\"replace-pipe\"]]",
    "moduleName": "kell/components/variant-info.hbs",
    "isStrictMode": false
  });
  let VariantInfo = _exports.default = (_class = class VariantInfo extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "data", _descriptor, this);
      _initializerDefineProperty(this, "tableData", _descriptor2, this);
      _initializerDefineProperty(this, "theme", _descriptor3, this);
    }
    get nextVariant() {
      return this.tableData.getNextVariant(this.data.selectedVariant);
    }
    get previousVariant() {
      return this.tableData.getPreviousVariant(this.data.selectedVariant);
    }
    gotoNextVariant() {
      if (this.nextVariant) {
        this.tableData.setSelectedVariant(this.nextVariant);
      }
    }
    gotoPreviousVariant() {
      if (this.previousVariant) {
        this.tableData.setSelectedVariant(this.previousVariant);
      }
    }
    checkSelectedVariant(element, variantInTable) {
      console.log(variantInTable);
      if (!variantInTable && this.data.selectedVariant) {
        (0, _runloop.next)(this, () => this.data.selectedVariant = null);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "tableData", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "theme", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "gotoNextVariant", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "gotoNextVariant"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "gotoPreviousVariant", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "gotoPreviousVariant"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkSelectedVariant", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "checkSelectedVariant"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, VariantInfo);
});
;define("kell/components/variant-input-modal", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "ember-truth-helpers", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _emberTruthHelpers, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"ember-truth-helpers",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div  ...attributes class="modal modal-lg fade" id="parseResults" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="parseResultsLabel" aria-hidden="true" {{on "show.bs.modal" this.uncheckClear}}>
    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="parseResultsLabel">Parse Result</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" {{on "click" @onCancel}}></button>
        </div>
        <div class="modal-body">
        	{{#if (gt this.validVariantCount 0)}}
            <div class="bd-callout bd-callout-success">
        		  <h5>{{this.validVariantCount}} valid variant{{if (gt this.validVariantCount 1) "s"}} found:</h5>
              <p>
                {{this.joinVariants @checkResults.validVariants}}
              </p>
            </div>
          {{else}}
            <div class="bd-callout bd-callout-danger">
              <h5>No valid variants were found.</h5>
            </div>
        	{{/if}}
          {{#if (gt this.invalidVariantCount 0)}}
            <div class="bd-callout bd-callout-warning">
              <h5>{{this.invalidVariantCount}} variant{{if (gt this.invalidVariantCount 1) "s were" " was"}} rejected:</h5>
              {{#if (gt @checkResults.outOfBounds.length 0)}}
                <p>
                  <strong>Out of bounds: </strong><br>
                  {{this.joinVariants @checkResults.outOfBounds}}
                </p>
              {{/if}}
              {{#if (gt @checkResults.referenceMismatch.length 0)}}
                <p>
                  <strong>Reference mismatch: </strong><br>
                  {{this.joinVariants @checkResults.referenceMismatch}}
                </p>
              {{/if}}
              {{#if (gt @checkResults.wildType.length 0)}}
                <p>
                  <strong>Alternative equals reference: </strong><br>
                  {{this.joinVariants @checkResults.wildType}}
                </p>
              {{/if}}
            </div>
          {{/if}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal" {{on "click" @onCancel}}>Cancel</button>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="clearCheck" {{this.setDisabled (eq this.validVariantCount 0)}} {{on "change" this.clearCheckChanged}}>
            <label class="form-check-label" for="clearCheck">
              Clear table beforehand
            </label>
          </div>
          <button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="modal" {{this.setDisabled (eq this.validVariantCount 0)}}
           {{on "click" (fn @onOk this.clearChecked)}}>Add {{if (gt this.validVariantCount 0) (concat this.validVariantCount " ")}}variant{{if (not-eq this.validVariantCount 1) "s"}}</button>
        </div>
      </div>
    </div>
  </div>
  */
  {
    "id": "ABZz7HjT",
    "block": "[[[11,0],[17,1],[24,0,\"modal modal-lg fade\"],[24,1,\"parseResults\"],[24,\"data-bs-backdrop\",\"static\"],[24,\"data-bs-keyboard\",\"false\"],[24,\"tabindex\",\"-1\"],[24,\"aria-labelledby\",\"parseResultsLabel\"],[24,\"aria-hidden\",\"true\"],[4,[38,1],[\"show.bs.modal\",[30,0,[\"uncheckClear\"]]],null],[12],[1,\"\\n  \"],[10,0],[14,0,\"modal-dialog modal-dialog-scrollable modal-dialog-centered\"],[12],[1,\"\\n    \"],[10,0],[14,0,\"modal-content\"],[12],[1,\"\\n      \"],[10,0],[14,0,\"modal-header\"],[12],[1,\"\\n        \"],[10,\"h1\"],[14,0,\"modal-title fs-5\"],[14,1,\"parseResultsLabel\"],[12],[1,\"Parse Result\"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn-close\"],[24,\"data-bs-dismiss\",\"modal\"],[24,\"aria-label\",\"Close\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,2]],null],[12],[13],[1,\"\\n      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-body\"],[12],[1,\"\\n\"],[41,[28,[37,5],[[30,0,[\"validVariantCount\"]],0],null],[[[1,\"          \"],[10,0],[14,0,\"bd-callout bd-callout-success\"],[12],[1,\"\\n      \\t\\t  \"],[10,\"h5\"],[12],[1,[30,0,[\"validVariantCount\"]]],[1,\" valid variant\"],[1,[52,[28,[37,5],[[30,0,[\"validVariantCount\"]],1],null],\"s\"]],[1,\" found:\"],[13],[1,\"\\n            \"],[10,2],[12],[1,\"\\n              \"],[1,[28,[30,0,[\"joinVariants\"]],[[30,3,[\"validVariants\"]]],null]],[1,\"\\n            \"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]],[[[1,\"          \"],[10,0],[14,0,\"bd-callout bd-callout-danger\"],[12],[1,\"\\n            \"],[10,\"h5\"],[12],[1,\"No valid variants were found.\"],[13],[1,\"\\n          \"],[13],[1,\"\\n\"]],[]]],[41,[28,[37,5],[[30,0,[\"invalidVariantCount\"]],0],null],[[[1,\"          \"],[10,0],[14,0,\"bd-callout bd-callout-warning\"],[12],[1,\"\\n            \"],[10,\"h5\"],[12],[1,[30,0,[\"invalidVariantCount\"]]],[1,\" variant\"],[1,[52,[28,[37,5],[[30,0,[\"invalidVariantCount\"]],1],null],\"s were\",\" was\"]],[1,\" rejected:\"],[13],[1,\"\\n\"],[41,[28,[37,5],[[30,3,[\"outOfBounds\",\"length\"]],0],null],[[[1,\"              \"],[10,2],[12],[1,\"\\n                \"],[10,\"strong\"],[12],[1,\"Out of bounds: \"],[13],[10,\"br\"],[12],[13],[1,\"\\n                \"],[1,[28,[30,0,[\"joinVariants\"]],[[30,3,[\"outOfBounds\"]]],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null],[41,[28,[37,5],[[30,3,[\"referenceMismatch\",\"length\"]],0],null],[[[1,\"              \"],[10,2],[12],[1,\"\\n                \"],[10,\"strong\"],[12],[1,\"Reference mismatch: \"],[13],[10,\"br\"],[12],[13],[1,\"\\n                \"],[1,[28,[30,0,[\"joinVariants\"]],[[30,3,[\"referenceMismatch\"]]],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null],[41,[28,[37,5],[[30,3,[\"wildType\",\"length\"]],0],null],[[[1,\"              \"],[10,2],[12],[1,\"\\n                \"],[10,\"strong\"],[12],[1,\"Alternative equals reference: \"],[13],[10,\"br\"],[12],[13],[1,\"\\n                \"],[1,[28,[30,0,[\"joinVariants\"]],[[30,3,[\"wildType\"]]],null]],[1,\"\\n              \"],[13],[1,\"\\n\"]],[]],null],[1,\"          \"],[13],[1,\"\\n\"]],[]],null],[1,\"      \"],[13],[1,\"\\n      \"],[10,0],[14,0,\"modal-footer\"],[12],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-secondary btn-sm\"],[24,\"data-bs-dismiss\",\"modal\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,2]],null],[12],[1,\"Cancel\"],[13],[1,\"\\n        \"],[10,0],[14,0,\"form-check\"],[12],[1,\"\\n          \"],[11,\"input\"],[24,0,\"form-check-input\"],[24,2,\"\"],[24,1,\"clearCheck\"],[24,4,\"checkbox\"],[4,[30,0,[\"setDisabled\"]],[[28,[37,11],[[30,0,[\"validVariantCount\"]],0],null]],null],[4,[38,1],[\"change\",[30,0,[\"clearCheckChanged\"]]],null],[12],[13],[1,\"\\n          \"],[10,\"label\"],[14,0,\"form-check-label\"],[14,\"for\",\"clearCheck\"],[12],[1,\"\\n            Clear table beforehand\\n          \"],[13],[1,\"\\n        \"],[13],[1,\"\\n        \"],[11,\"button\"],[24,0,\"btn btn-primary btn-sm\"],[24,\"data-bs-dismiss\",\"modal\"],[24,4,\"button\"],[4,[30,0,[\"setDisabled\"]],[[28,[37,11],[[30,0,[\"validVariantCount\"]],0],null]],null],[4,[38,1],[\"click\",[28,[37,13],[[30,4],[30,0,[\"clearChecked\"]]],null]],null],[12],[1,\"Add \"],[1,[52,[28,[37,5],[[30,0,[\"validVariantCount\"]],0],null],[28,[37,14],[[30,0,[\"validVariantCount\"]],\" \"],null]]],[1,\"variant\"],[1,[52,[28,[37,15],[[30,0,[\"validVariantCount\"]],1],null],\"s\"]],[13],[1,\"\\n      \"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n\"],[13]],[\"&attrs\",\"@onCancel\",\"@checkResults\",\"@onOk\"],[\"div\",\"on\",\"h1\",\"button\",\"if\",\"gt\",\"h5\",\"p\",\"strong\",\"br\",\"input\",\"eq\",\"label\",\"fn\",\"concat\",\"not-eq\"]]",
    "moduleName": "kell/components/variant-input-modal.hbs",
    "isStrictMode": false
  });
  let VariantInputModal = _exports.default = (_class = class VariantInputModal extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "clearChecked", _descriptor, this);
    }
    joinVariants(variants) {
      return variants.join(", ");
    }
    get validVariantCount() {
      return this.args.checkResults.validVariants.length;
    }
    get invalidVariantCount() {
      return this.args.checkResults.outOfBounds.length + this.args.checkResults.referenceMismatch.length + this.args.checkResults.wildType.length;
    }
    setDisabled(element, isDisabled) {
      if (isDisabled) {
        element.setAttribute("disabled", "");
      } else {
        element.removeAttribute("disabled");
      }
    }
    uncheckClear(event) {
      const checkbox = document.querySelector("#clearCheck");
      checkbox.checked = false;
    }
    clearCheckChanged(element) {
      this.clearChecked = element.target.checked;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "clearChecked", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "clearCheckChanged", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearCheckChanged"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, VariantInputModal);
});
;define("kell/components/variant-input", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "@ember/service", "bootstrap", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _service, _bootstrap, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"@ember/service",0,"bootstrap",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes class="variant-input my-3">
  	<div class="mb-1">
  	  <label for="floatingTextarea">Enter variants</label>
  	  <textarea class="form-control" placeholder="G415D, S726C, etc." id="floatingTextarea" {{on "input" this.inputChanged}}></textarea>
  	</div>
  	<div class="text-end">
  		<button type="button" class="btn btn-secondary btn-sm" {{on "click" this.clearInput}} {{set-disabled this.textEmpty}}>Clear</button>
  		<button type="button" class="btn btn-primary btn-sm" {{on "click" this.parseInput}} {{set-disabled this.textEmpty}}>Parse</button>
  	</div>
  	<VariantInputModal @checkResults={{this.checkResults}} @onCancel={{this.dialogCanceled}} @onOk={{this.addVariants}}/>
  </div>
  
  
  */
  {
    "id": "3QvEAP1k",
    "block": "[[[11,0],[17,1],[24,0,\"variant-input my-3\"],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"mb-1\"],[12],[1,\"\\n\\t  \"],[10,\"label\"],[14,\"for\",\"floatingTextarea\"],[12],[1,\"Enter variants\"],[13],[1,\"\\n\\t  \"],[11,\"textarea\"],[24,0,\"form-control\"],[24,\"placeholder\",\"G415D, S726C, etc.\"],[24,1,\"floatingTextarea\"],[4,[38,3],[\"input\",[30,0,[\"inputChanged\"]]],null],[12],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"text-end\"],[12],[1,\"\\n\\t\\t\"],[11,\"button\"],[24,0,\"btn btn-secondary btn-sm\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"clearInput\"]]],null],[4,[38,5],[[30,0,[\"textEmpty\"]]],null],[12],[1,\"Clear\"],[13],[1,\"\\n\\t\\t\"],[11,\"button\"],[24,0,\"btn btn-primary btn-sm\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"parseInput\"]]],null],[4,[38,5],[[30,0,[\"textEmpty\"]]],null],[12],[1,\"Parse\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\\t\"],[8,[39,6],null,[[\"@checkResults\",\"@onCancel\",\"@onOk\"],[[30,0,[\"checkResults\"]],[30,0,[\"dialogCanceled\"]],[30,0,[\"addVariants\"]]]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\"]],[\"&attrs\"],[\"div\",\"label\",\"textarea\",\"on\",\"button\",\"set-disabled\",\"variant-input-modal\"]]",
    "moduleName": "kell/components/variant-input.hbs",
    "isStrictMode": false
  });
  let VariantInput = _exports.default = (_class = class VariantInput extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "text", _descriptor, this);
      _initializerDefineProperty(this, "checkResults", _descriptor2, this);
      _initializerDefineProperty(this, "data", _descriptor3, this);
      this.clearCheckResults();
    }
    clearInput() {
      const textArea = document.querySelector(".variant-input textarea");
      textArea.value = "";
      let evt = new InputEvent("input");
      textArea.dispatchEvent(evt);
    }
    parseInput() {
      this.clearCheckResults();
      //console.log(text);
      const matches = this.text.toUpperCase().match(this.data.mutationRegEx);
      if (matches) {
        this.checkResults = this.data.checkMutations(matches);
      } else {
        this.clearCheckResults();
      }
      this.openModal();
    }
    clearCheckResults() {
      this.checkResults = {
        validVariants: [],
        outOfBounds: [],
        referenceMismatch: [],
        wildType: []
      };
    }
    openModal() {
      const modal = _bootstrap.default.Modal.getOrCreateInstance(document.getElementById('parseResults'));
      modal.show();
    }
    dialogCanceled() {
      //this.clearCheckResults()
    }
    addVariants(clearChecked) {
      if (clearChecked) {
        this.data.clearMutations();
      }
      this.data.addMutations(this.checkResults.validVariants);
      this.clearInput();
      //this.clearCheckResults();
    }
    inputChanged(event) {
      const textArea = event.target;
      this.text = textArea.value;
    }
    get textEmpty() {
      return !this.text || this.text.length == 0;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "text", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "";
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "checkResults", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "clearInput", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "parseInput", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "parseInput"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearCheckResults", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearCheckResults"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "openModal", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "openModal"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "dialogCanceled", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "dialogCanceled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addVariants", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addVariants"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "inputChanged", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "inputChanged"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, VariantInput);
});
;define("kell/components/variant-selector", ["exports", "@ember/component", "@glimmer/component", "@ember/service", "@ember/object", "ember-math-helpers/helpers/sub", "ember-math-helpers/helpers/mult", "ember-math-helpers/helpers/sum", "@ember/template-factory"], function (_exports, _component, _component2, _service, _object, _sub, _mult, _sum, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@ember/service",0,"@ember/object",0,"ember-math-helpers/helpers/sub",0,"ember-math-helpers/helpers/mult",0,"ember-math-helpers/helpers/sum",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div ...attributes class="variant-selector card noselect arrow-box" {{on "click" this.stopPropagation}}>
  	<div class="card-header text-center">Select variants at {{@pos}}</div>
  	<div class="card-body">
  	 	{{#each this.data.chunkedAcids as |chunk idx|}}
  			<div class="chunk-block">
  				{{#each chunk as |a ai|}}
  					{{#let (concat @ref @pos a) as |variant|}}
  						{{#let (this.data.isHypotheticalVariant variant) (this.data.getColor variant) as |hypo color|}}
  							<div class="acid-checkbox">
  								<input type="checkbox" class="btn-check" id={{concat "btn-check-" a}} autocomplete="off" {{this.setDisabled (eq a @ref)}} {{this.setChecked (this.data.mutationActive @pos a true)}} {{on "change" (fn this.checkChanged a)}}>
  								<label class="btn btn-sm font-monospace mutation-acid {{color}} {{if (eq a @ref) "ref"}}" for={{concat "btn-check-" a}}>{{a}}</label>
  							</div>
  						{{/let}}
  					{{/let}}
  				{{/each}}
  			</div>
  		{{/each}}
  	</div>
  	<div class="card-footer text-end d-flex justify-content-between">
  		<button type="button" class="btn btn-primary btn-sm" {{on "click" this.togglePositionMarking}}>{{if this.marked "Unmark" "Mark"}} locus</button>
  	  <button type="button" class="btn btn-primary btn-sm" {{this.setDisabled (not @mutationActive)}} {{on "click" (fn this.data.clearLocus @pos true)}}>Clear locus variants</button>
  	</div>
  </div>
  */
  {
    "id": "XgFgLJlS",
    "block": "[[[11,0],[17,1],[24,0,\"variant-selector card noselect arrow-box\"],[4,[38,1],[\"click\",[30,0,[\"stopPropagation\"]]],null],[12],[1,\"\\n\\t\"],[10,0],[14,0,\"card-header text-center\"],[12],[1,\"Select variants at \"],[1,[30,2]],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"card-body\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,0,[\"data\",\"chunkedAcids\"]]],null]],null],null,[[[1,\"\\t\\t\\t\"],[10,0],[14,0,\"chunk-block\"],[12],[1,\"\\n\"],[42,[28,[37,3],[[28,[37,3],[[30,3]],null]],null],null,[[[44,[[28,[37,5],[[30,7],[30,2],[30,5]],null]],[[[44,[[28,[30,0,[\"data\",\"isHypotheticalVariant\"]],[[30,8]],null],[28,[30,0,[\"data\",\"getColor\"]],[[30,8]],null]],[[[1,\"\\t\\t\\t\\t\\t\\t\\t\"],[10,0],[14,0,\"acid-checkbox\"],[12],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[11,\"input\"],[24,0,\"btn-check\"],[16,1,[28,[37,5],[\"btn-check-\",[30,5]],null]],[24,\"autocomplete\",\"off\"],[24,4,\"checkbox\"],[4,[30,0,[\"setDisabled\"]],[[28,[37,7],[[30,5],[30,7]],null]],null],[4,[30,0,[\"setChecked\"]],[[28,[30,0,[\"data\",\"mutationActive\"]],[[30,2],[30,5],true],null]],null],[4,[38,1],[\"change\",[28,[37,8],[[30,0,[\"checkChanged\"]],[30,5]],null]],null],[12],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\"],[10,\"label\"],[15,0,[29,[\"btn btn-sm font-monospace mutation-acid \",[30,10],\" \",[52,[28,[37,7],[[30,5],[30,7]],null],\"ref\"]]]],[15,\"for\",[28,[37,5],[\"btn-check-\",[30,5]],null]],[12],[1,[30,5]],[13],[1,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[13],[1,\"\\n\"]],[9,10]]]],[8]]]],[5,6]],null],[1,\"\\t\\t\\t\"],[13],[1,\"\\n\"]],[3,4]],null],[1,\"\\t\"],[13],[1,\"\\n\\t\"],[10,0],[14,0,\"card-footer text-end d-flex justify-content-between\"],[12],[1,\"\\n\\t\\t\"],[11,\"button\"],[24,0,\"btn btn-primary btn-sm\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"togglePositionMarking\"]]],null],[12],[1,[52,[30,0,[\"marked\"]],\"Unmark\",\"Mark\"]],[1,\" locus\"],[13],[1,\"\\n\\t  \"],[11,\"button\"],[24,0,\"btn btn-primary btn-sm\"],[24,4,\"button\"],[4,[30,0,[\"setDisabled\"]],[[28,[37,12],[[30,11]],null]],null],[4,[38,1],[\"click\",[28,[37,8],[[30,0,[\"data\",\"clearLocus\"]],[30,2],true],null]],null],[12],[1,\"Clear locus variants\"],[13],[1,\"\\n\\t\"],[13],[1,\"\\n\"],[13]],[\"&attrs\",\"@pos\",\"chunk\",\"idx\",\"a\",\"ai\",\"@ref\",\"variant\",\"hypo\",\"color\",\"@mutationActive\"],[\"div\",\"on\",\"each\",\"-track-array\",\"let\",\"concat\",\"input\",\"eq\",\"fn\",\"label\",\"if\",\"button\",\"not\"]]",
    "moduleName": "kell/components/variant-selector.hbs",
    "isStrictMode": false
  });
  let VariantSelector = _exports.default = (_class = class VariantSelector extends _component2.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "data", _descriptor, this);
    }
    stopPropagation(event) {
      event.stopPropagation();
      return false;
    }
    get marked() {
      return this.data.manuallySelectedResidue?.chain == 'A' && this.data.manuallySelectedResidue?.position == this.args.pos;
    }
    mutClicked(a) {
      if (this.args.ref == a) {
        return;
      }
      //console.log(this.args.ref + this.args.pos + a);
      this.data.toggleMutation(this.args.pos, a, true);
    }
    checkChanged(a, event) {
      const checked = event.target.checked;
      if (checked) {
        this.data.addMutation(this.args.pos, a, true);
      } else {
        this.data.removeMutation(this.args.pos, a, true);
      }
    }
    togglePositionMarking() {
      if (this.marked) {
        this.data.clearManuallySelectedResidue();
      } else {
        this.data.setManuallySelectedResidue(this.args.pos);
      }
    }
    setChecked(element, isActive) {
      if (isActive) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    }
    setDisabled(element, isDisabled) {
      if (isDisabled) {
        element.setAttribute("disabled", "");
      } else {
        element.removeAttribute("disabled");
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "mutClicked", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "mutClicked"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkChanged", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "checkChanged"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "togglePositionMarking", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "togglePositionMarking"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setChecked", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setChecked"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setDisabled", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setDisabled"), _class.prototype), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, VariantSelector);
});
;define("kell/data-adapter", ["exports", "@ember-data/debug/data-adapter"], function (_exports, _dataAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dataAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/data-adapter"eaimeta@70e063a35619d71f
});
;define("kell/deprecation-workflow", ["ember-cli-deprecation-workflow"], function (_emberCliDeprecationWorkflow) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"ember-cli-deprecation-workflow"eaimeta@70e063a35619d71f
  /**
   * Docs: https://github.com/ember-cli/ember-cli-deprecation-workflow
   */
  (0, _emberCliDeprecationWorkflow.default)({
    /**
      false by default, but if a developer / team wants to be more aggressive about being proactive with
      handling their deprecations, this should be set to "true"
    */
    throwOnUnhandled: false,
    workflow: [
      /* ... handlers ... */
      /* to generate this list, run your app for a while (or run the test suite),
       * and then run in the browser console:
       *
       *    deprecationWorkflow.flushDeprecations()
       *
       * And copy the handlers here
       */
      /* example: */
      /* { handler: 'silence', matchId: 'template-action' }, */
    ]
  });
});
;define("kell/helpers/abs", ["exports", "ember-math-helpers/helpers/abs"], function (_exports, _abs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _abs.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/abs"eaimeta@70e063a35619d71f
});
;define("kell/helpers/acos", ["exports", "ember-math-helpers/helpers/acos"], function (_exports, _acos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acos.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/acos"eaimeta@70e063a35619d71f
});
;define("kell/helpers/acosh", ["exports", "ember-math-helpers/helpers/acosh"], function (_exports, _acosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _acosh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/acosh"eaimeta@70e063a35619d71f
});
;define("kell/helpers/add", ["exports", "ember-math-helpers/helpers/add"], function (_exports, _add) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _add.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/add"eaimeta@70e063a35619d71f
});
;define("kell/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/and"eaimeta@70e063a35619d71f
});
;define("kell/helpers/app-version", ["exports", "@ember/component/helper", "kell/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"kell/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("kell/helpers/asin", ["exports", "ember-math-helpers/helpers/asin"], function (_exports, _asin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asin.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/asin"eaimeta@70e063a35619d71f
});
;define("kell/helpers/asinh", ["exports", "ember-math-helpers/helpers/asinh"], function (_exports, _asinh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _asinh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/asinh"eaimeta@70e063a35619d71f
});
;define("kell/helpers/atan", ["exports", "ember-math-helpers/helpers/atan"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atan"eaimeta@70e063a35619d71f
});
;define("kell/helpers/atan2", ["exports", "ember-math-helpers/helpers/atan2"], function (_exports, _atan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atan2"eaimeta@70e063a35619d71f
});
;define("kell/helpers/atanh", ["exports", "ember-math-helpers/helpers/atanh"], function (_exports, _atanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _atanh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/atanh"eaimeta@70e063a35619d71f
});
;define("kell/helpers/cbrt", ["exports", "ember-math-helpers/helpers/cbrt"], function (_exports, _cbrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cbrt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cbrt"eaimeta@70e063a35619d71f
});
;define("kell/helpers/ceil", ["exports", "ember-math-helpers/helpers/ceil"], function (_exports, _ceil) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ceil.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/ceil"eaimeta@70e063a35619d71f
});
;define("kell/helpers/clz32", ["exports", "ember-math-helpers/helpers/clz32"], function (_exports, _clz) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _clz.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/clz32"eaimeta@70e063a35619d71f
});
;define("kell/helpers/cos", ["exports", "ember-math-helpers/helpers/cos"], function (_exports, _cos) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cos.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cos"eaimeta@70e063a35619d71f
});
;define("kell/helpers/cosh", ["exports", "ember-math-helpers/helpers/cosh"], function (_exports, _cosh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cosh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/cosh"eaimeta@70e063a35619d71f
});
;define("kell/helpers/div", ["exports", "ember-math-helpers/helpers/div"], function (_exports, _div) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _div.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/div"eaimeta@70e063a35619d71f
});
;define("kell/helpers/eq", ["exports", "ember-truth-helpers/helpers/eq"], function (_exports, _eq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _eq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/eq"eaimeta@70e063a35619d71f
});
;define("kell/helpers/exp", ["exports", "ember-math-helpers/helpers/exp"], function (_exports, _exp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _exp.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/exp"eaimeta@70e063a35619d71f
});
;define("kell/helpers/expm1", ["exports", "ember-math-helpers/helpers/expm1"], function (_exports, _expm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _expm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/expm1"eaimeta@70e063a35619d71f
});
;define("kell/helpers/floor", ["exports", "ember-math-helpers/helpers/floor"], function (_exports, _floor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _floor.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/floor"eaimeta@70e063a35619d71f
});
;define("kell/helpers/fround", ["exports", "ember-math-helpers/helpers/fround"], function (_exports, _fround) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _fround.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/fround"eaimeta@70e063a35619d71f
});
;define("kell/helpers/gcd", ["exports", "ember-math-helpers/helpers/gcd"], function (_exports, _gcd) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gcd.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/gcd"eaimeta@70e063a35619d71f
});
;define("kell/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gt"eaimeta@70e063a35619d71f
});
;define("kell/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/gte"eaimeta@70e063a35619d71f
});
;define("kell/helpers/hypot", ["exports", "ember-math-helpers/helpers/hypot"], function (_exports, _hypot) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hypot.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/hypot"eaimeta@70e063a35619d71f
});
;define("kell/helpers/imul", ["exports", "ember-math-helpers/helpers/imul"], function (_exports, _imul) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _imul.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/imul"eaimeta@70e063a35619d71f
});
;define("kell/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-array"eaimeta@70e063a35619d71f
});
;define("kell/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-empty"eaimeta@70e063a35619d71f
});
;define("kell/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/is-equal"eaimeta@70e063a35619d71f
});
;define("kell/helpers/lcm", ["exports", "ember-math-helpers/helpers/lcm"], function (_exports, _lcm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lcm.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/lcm"eaimeta@70e063a35619d71f
});
;define("kell/helpers/log-e", ["exports", "ember-math-helpers/helpers/log-e"], function (_exports, _logE) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _logE.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log-e"eaimeta@70e063a35619d71f
});
;define("kell/helpers/log10", ["exports", "ember-math-helpers/helpers/log10"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log10"eaimeta@70e063a35619d71f
});
;define("kell/helpers/log1p", ["exports", "ember-math-helpers/helpers/log1p"], function (_exports, _log1p) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log1p.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log1p"eaimeta@70e063a35619d71f
});
;define("kell/helpers/log2", ["exports", "ember-math-helpers/helpers/log2"], function (_exports, _log) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _log.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/log2"eaimeta@70e063a35619d71f
});
;define("kell/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lt"eaimeta@70e063a35619d71f
});
;define("kell/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/lte"eaimeta@70e063a35619d71f
});
;define("kell/helpers/max", ["exports", "ember-math-helpers/helpers/max"], function (_exports, _max) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _max.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/max"eaimeta@70e063a35619d71f
});
;define("kell/helpers/min", ["exports", "ember-math-helpers/helpers/min"], function (_exports, _min) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _min.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/min"eaimeta@70e063a35619d71f
});
;define("kell/helpers/mod", ["exports", "ember-math-helpers/helpers/mod"], function (_exports, _mod) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mod.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/mod"eaimeta@70e063a35619d71f
});
;define("kell/helpers/mult", ["exports", "ember-math-helpers/helpers/mult"], function (_exports, _mult) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _mult.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/mult"eaimeta@70e063a35619d71f
});
;define("kell/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-eq"], function (_exports, _notEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEq.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not-eq"eaimeta@70e063a35619d71f
});
;define("kell/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/not"eaimeta@70e063a35619d71f
});
;define("kell/helpers/number-to-array", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = numberToArray;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  function numberToArray(size /*, positionalB, named*/) {
    return new Array(size);
  }
});
;define("kell/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/or"eaimeta@70e063a35619d71f
});
;define("kell/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("kell/helpers/pow", ["exports", "ember-math-helpers/helpers/pow"], function (_exports, _pow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pow.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/pow"eaimeta@70e063a35619d71f
});
;define("kell/helpers/random", ["exports", "ember-math-helpers/helpers/random"], function (_exports, _random) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _random.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/random"eaimeta@70e063a35619d71f
});
;define("kell/helpers/replace-pipe", ["exports", "@ember/component/helper", "@ember/template"], function (_exports, _helper, _template) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"@ember/template"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _helper.helper)(function replacePipe([text, ...rest] /*, positionalB, named*/) {
    //console.log(text)
    return (0, _template.htmlSafe)(text.split('|').map(t => t.trim()).filter(t => t.length > 0).join("<br>"));
  });
});
;define("kell/helpers/round", ["exports", "ember-math-helpers/helpers/round"], function (_exports, _round) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _round.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/round"eaimeta@70e063a35619d71f
});
;define("kell/helpers/sign", ["exports", "ember-math-helpers/helpers/sign"], function (_exports, _sign) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sign.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sign"eaimeta@70e063a35619d71f
});
;define("kell/helpers/sin", ["exports", "ember-math-helpers/helpers/sin"], function (_exports, _sin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sin.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sin"eaimeta@70e063a35619d71f
});
;define("kell/helpers/sqrt", ["exports", "ember-math-helpers/helpers/sqrt"], function (_exports, _sqrt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sqrt.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sqrt"eaimeta@70e063a35619d71f
});
;define("kell/helpers/sub", ["exports", "ember-math-helpers/helpers/sub"], function (_exports, _sub) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sub.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sub"eaimeta@70e063a35619d71f
});
;define("kell/helpers/sum", ["exports", "ember-math-helpers/helpers/sum"], function (_exports, _sum) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _sum.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/sum"eaimeta@70e063a35619d71f
});
;define("kell/helpers/tan", ["exports", "ember-math-helpers/helpers/tan"], function (_exports, _tan) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tan.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/tan"eaimeta@70e063a35619d71f
});
;define("kell/helpers/tanh", ["exports", "ember-math-helpers/helpers/tanh"], function (_exports, _tanh) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _tanh.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/tanh"eaimeta@70e063a35619d71f
});
;define("kell/helpers/trunc", ["exports", "ember-math-helpers/helpers/trunc"], function (_exports, _trunc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _trunc.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-math-helpers/helpers/trunc"eaimeta@70e063a35619d71f
});
;define("kell/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-truth-helpers/helpers/xor"eaimeta@70e063a35619d71f
});
;define("kell/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "kell/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"kell/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("kell/initializers/ember-data", ["exports", "@ember-data/request-utils/deprecation-support"], function (_exports, _deprecationSupport) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember-data/request-utils/deprecation-support"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("kell/initializers/install-function-modifier-manager", ["exports", "ember-functions-as-modifiers-polyfill/initializers/install-function-modifier-manager"], function (_exports, _installFunctionModifierManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _installFunctionModifierManager.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _installFunctionModifierManager.initialize;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-functions-as-modifiers-polyfill/initializers/install-function-modifier-manager"eaimeta@70e063a35619d71f
});
;define("kell/modifiers/is-first-column", ["exports", "ember-modifier"], function (_exports, _emberModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function isFirstColumn(element /*, positional, named*/) {
    function handleResize() {
      const isInFirstColumn = element.offsetLeft == 0;
      const classIsSet = element.classList.contains("first-column");
      if (isInFirstColumn && !classIsSet) {
        element.classList.add("first-column");
      }
      if (!isInFirstColumn && classIsSet) {
        element.classList.remove("first-column");
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
});
;define("kell/modifiers/on-outside-click", ["exports", "ember-modifier"], function (_exports, _emberModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function onOutsideClick(element, [callback] /*, positional, named*/) {
    function handleClick(event) {
      if (!element.contains(event.target)) {
        callback(event, element);
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
});
;define("kell/modifiers/on-resize", ["exports", "ember-on-resize-modifier/modifiers/on-resize"], function (_exports, _onResize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onResize.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-on-resize-modifier/modifiers/on-resize"eaimeta@70e063a35619d71f
});
;define("kell/modifiers/set-disabled", ["exports", "ember-modifier"], function (_exports, _emberModifier) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-modifier"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _emberModifier.modifier)(function setDisabled(element, [disabled] /*, positional, named*/) {
    if (disabled) {
      element.setAttribute("disabled", "");
    } else {
      element.removeAttribute("disabled");
    }
    return () => {};
  });
});
;define("kell/router", ["exports", "@ember/routing/router", "kell/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"kell/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("kell/routes/application", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ApplicationRoute = _exports.default = (_class = class ApplicationRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "data", _descriptor, this);
      _initializerDefineProperty(this, "theme", _descriptor2, this);
    }
    async beforeModel(transition) {
      this.theme.initTheme();
      return this.loadData();
    }
    async loadData() {
      try {
        await this.data.loadData();
      } catch (err) {
        console.log(err);
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "theme", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _class);
});
;define("kell/services/data", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object", "tracked-built-ins"], function (_exports, _service, _tracking, _object, _trackedBuiltIns) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor0, _descriptor1, _descriptor10;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"tracked-built-ins",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let DataService = _exports.default = (_class = class DataService extends _service.default {
    setManuallySelectedResidue(position, chain = 'A') {
      this.manuallySelectedResidue = {
        position: position,
        chain: chain
      };
    }
    clearManuallySelectedResidue() {
      this.manuallySelectedResidue = null;
    }
    get selectedPosition() {
      if (this.manuallySelectedPosition) {
        return this.manuallySelectedPosition;
      }
      if (this.selectedVariant) {
        return parseInt(this.selectedVariant.slice(1, -1));
      }
    }
    get selectedResidue() {
      if (this.manuallySelectedResidue) {
        return this.manuallySelectedResidue;
      }
      if (this.selectedVariant) {
        return {
          position: parseInt(this.selectedVariant.slice(1, -1)),
          chain: 'A'
        };
      }
    }
    setHoveredResidue(position, chain = 'A') {
      this.hoveredResidue = {
        position: position,
        chain: chain
      };
    }
    clearHoveredResidue() {
      this.hoveredResidue = null;
    }
    constructor() {
      super();
      _initializerDefineProperty(this, "sequenceChunkSize", _descriptor, this);
      _initializerDefineProperty(this, "sequenceString", _descriptor2, this);
      _initializerDefineProperty(this, "acidsChunkSize", _descriptor3, this);
      _initializerDefineProperty(this, "aminoAcids", _descriptor4, this);
      _initializerDefineProperty(this, "mutations", _descriptor5, this);
      _initializerDefineProperty(this, "data", _descriptor6, this);
      _initializerDefineProperty(this, "dataReady", _descriptor7, this);
      _initializerDefineProperty(this, "selectedVariant", _descriptor8, this);
      _initializerDefineProperty(this, "manuallySelectedPosition", _descriptor9, this);
      _initializerDefineProperty(this, "manuallySelectedResidue", _descriptor0, this);
      _initializerDefineProperty(this, "hoveredResidue", _descriptor1, this);
      _initializerDefineProperty(this, "surroundings", _descriptor10, this);
      this.clearMutations();
    }
    get variantTexts() {
      let res = null;
      if (this.selectedVariant && this.data.records[this.selectedVariant]) {
        const record = this.data.records[this.selectedVariant];
        const agMessage = this.data.agMessages[record.agMessage];
        const destabMessage = this.data.destabMessages[record.destabMessage];
        res = {
          variant: this.selectedVariant,
          agMessage: agMessage,
          destabMessage: destabMessage
        };
      }
      //console.log(res);
      return res;
    }
    get mutationsArray() {
      return this.mutations.map((a, ai) => a.map((m, mi) => m ? this.sequenceString[ai] + (ai + 1) + this.aminoAcids[mi] : m).filter(m => m)).filter(a => a.length > 0).flat();
    }
    get sequence() {
      return this.sequenceString.split("");
    }
    get chunkedSequence() {
      let cs = this.sequenceChunkSize;
      return this.sequence.reduce((ac, v, i, ar) => {
        if (i % cs == 0) {
          ac.push(ar.slice(i, i + cs));
        }
        return ac;
      }, []);
    }
    get chunkedAcids() {
      let cs = this.acidsChunkSize;
      return this.aminoAcids.reduce((ac, v, i, ar) => {
        if (i % cs == 0) {
          ac.push(ar.slice(i, i + cs));
        }
        return ac;
      }, []);
    }
    get acidsString() {
      return this.aminoAcids.join();
    }
    get mutationRegEx() {
      return new RegExp(`[${this.acidsString}][0-9]+[${this.acidsString}]`, 'g');
    }
    get allMutations() {
      const res = [];
      this.sequence.forEach((ref, idx) => {
        this.aminoAcids.forEach(alt => {
          if (ref != alt) {
            res.push(ref + (idx + 1) + alt);
          }
        });
      });
      return res;
    }
    get allMutationsString() {
      if (!this.allMutations) {
        return "";
      }
      return this.allMutations.join(", ");
    }
    get mutationsData() {
      const muts = this.mutationsArray.map(mut => {
        return {
          ...this.data.records[mut],
          variant: mut
        };
      });
      return muts;
    }
    clearMutations() {
      this.mutations = new _trackedBuiltIns.TrackedArray([...new Array(this.sequenceString.length)].map(a => new _trackedBuiltIns.TrackedArray([...new Array(this.aminoAcids.length)].map(b => false))));
    }
    copyAllMutationsToClipboard() {
      navigator.clipboard.writeText(this.allMutationsString);
    }
    addMutation(index, acid, indexIsPos = false) {
      //console.log(arguments)
      const seqIdx = index - (indexIsPos ? 1 : 0);
      const acidIdx = this.aminoAcids.indexOf(acid);
      if (seqIdx < 0 || seqIdx >= this.mutations.length) {
        console.log("index out of bounds");
        return;
      }
      if (acidIdx == -1) {
        console.log("unknown amino acid");
        return;
      }
      this.mutations[seqIdx][acidIdx] = true;
    }
    removeMutation(index, acid, indexIsPos = false) {
      const seqIdx = index - (indexIsPos ? 1 : 0);
      const acidIdx = this.aminoAcids.indexOf(acid);
      if (seqIdx < 0 || seqIdx >= this.mutations.length) {
        console.log("index out of bounds");
        return;
      }
      if (acidIdx == -1) {
        console.log("unknown amino acid");
        return;
      }
      this.mutations[seqIdx][acidIdx] = false;
    }
    clearLocus(index, indexIsPos = false) {
      console.log(arguments);
      const seqIdx = index - (indexIsPos ? 1 : 0);
      if (seqIdx < 0 || seqIdx >= this.mutations.length) {
        console.log("index out of bounds");
        return;
      }
      this.mutations[seqIdx].fill(false);
    }
    toggleMutation(index, acid, indexIsPos = false) {
      const seqIdx = index - (indexIsPos ? 1 : 0);
      const acidIdx = this.aminoAcids.indexOf(acid);
      if (seqIdx < 0 || seqIdx >= this.mutations.length) {
        console.log("index out of bounds");
        return;
      }
      if (acidIdx == -1) {
        console.log("unknown amino acid");
        return;
      }
      this.mutations[seqIdx][acidIdx] = !this.mutations[seqIdx][acidIdx];
      console.log(this.mutationsArray);
    }
    anyMutationActive(index, indexIsPos = false) {
      if (index == undefined) {
        console.log('idx undefined :o');
        return false;
      }
      const seqIdx = index - (indexIsPos ? 1 : 0);
      if (seqIdx < 0 || seqIdx >= this.mutations.length) {
        console.log("index out of bounds");
        return false;
      }
      //console.log(this.mutations[seqIdx].some(x => x == true))
      return this.mutations[seqIdx].some(x => x);
    }
    mutationActive(index, acid, indexIsPos = false) {
      if (index == undefined) {
        console.log('idx undefined :o');
        return false;
      }
      const seqIdx = index - (indexIsPos ? 1 : 0);
      const acidIdx = this.aminoAcids.indexOf(acid);
      if (seqIdx < 0 || seqIdx >= this.mutations.length) {
        console.log("index out of bounds");
        return false;
      }
      if (acidIdx == -1) {
        console.log("unknown amino acid");
        return false;
      }
      return this.mutations[seqIdx][acidIdx];
    }
    splitMutation(mut) {
      return [parseInt(mut.slice(1, -1)), mut[0], mut[mut.length - 1]];
    }
    /*
    	candidates: [[pos, ref, alt], ...]
     */
    checkMutations(candidates) {
      const good = new Set();
      const oob = new Set();
      const refmismatch = new Set();
      const wildtype = new Set();
      candidates.forEach(mut => {
        const [pos, ref, alt] = this.splitMutation(mut);
        const idx = pos - 1;
        //console.log(ref, alt, pos);
        if (idx < 0 || idx >= this.sequenceString.length) {
          oob.add(mut);
        } else if (ref != this.sequenceString[idx]) {
          refmismatch.add(mut);
        } else if (alt == this.sequenceString[idx]) {
          wildtype.add(mut);
        } else {
          good.add(mut);
        }
      });
      console.log('out of bounds', oob);
      console.log('reference mismatch', refmismatch);
      console.log('ref = alt', wildtype);
      console.log(good);
      return {
        validVariants: [...good],
        outOfBounds: [...oob],
        referenceMismatch: [...refmismatch],
        wildType: [...wildtype]
      };
    }
    addMutations(mutations) {
      mutations.forEach(mut => {
        const [pos, ref, alt] = this.splitMutation(mut);
        this.addMutation(pos, alt, true);
      });
    }
    isHypotheticalVariant(variant) {
      //console.log(variant);
      if (this.data["records"][variant]) {
        return this.data["records"][variant]["varType"] == 0;
      } else {
        return false;
      }
    }
    getColor(variant) {
      //console.log(variant);
      if (this.data["records"][variant]) {
        return this.data.colors[this.data.records[variant].color];
      } else {
        return "";
      }
    }
    getColorsAtSeqIdx(idx) {
      const ref = this.sequence[idx];
      const alts = this.aminoAcids.filter(a => a != ref);
      const variants = alts.map(a => ref + (idx + 1) + a);
      const colors = variants.map(v => this.getColor(v));
      const s = new Set(colors);
      const ca = [...s].filter(c => c != "black");
      return ca;
    }
    async loadData() {
      await fetch('/assets/kelldata.json').then(response => {
        return response.json();
      }).then(data => {
        this.set('data', data);
        this.set('dataReady', true);
      });
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "sequenceChunkSize", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 10;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "sequenceString", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "MEGGDQSEEEPRERSQAGGMGTLWSQESTPEERLPVEGSRPWAVARRVLTAILILGLLLCFSVLLFYNFQNCGPRPCETSVCLDLRDHYLASGNTSVAPCTDFFSFACGRAKETNNSFQELATKNKNRLRRILEVQNSWHPGSGEEKAFQFYNSCMDTLAIEAAGTGPLRQVIEELGGWRISGKWTSLNFNRTLRLLMSQYGHFPFFRAYLGPHPASPHTPVIQIDQPEFDVPLKQDQEQKIYAQIFREYLTYLNQLGTLLGGDPSKVQEHSSLSISITSRLFQFLRPLEQRRAQGKLFQMVTIDQLKEMAPAIDWLSCLQATFTPMSLSPSQSLVVHDVEYLKNMSQLVEEMLLKQRDFLQSHMILGLVVTLSPALDSQFQEARRKLSQKLRELTEQPPMPARPRWMKCVEETGTFFEPTLAALFVREAFGPSTRSAAMKLFTAIRDALITRLRNLPWMNEETQNMAQDKVAQLQVEMGASEWALKPELARQEYNDIQLGSSFLQSVLSCVRSLRARIVQSFLQPHPQHRWKVSPWDVNAYYSVSDHVVVFPAGLLQPPFFHPGYPRAVNFGAAGSIMAHELLHIFYQLLLPGGCLACDNHALQEAHLCLKRHYAAFPLPSRTSFNDSLTFLENAADVGGLAIALQAYSKRLLRHHGETVLPSLDLSPQQIFFRSYAQVMCRKPSPQDSHDTHSPPHLRVHGPLSSTPAFARYFRCARGALLNPSSRCQLW";
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "acidsChunkSize", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 10;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "aminoAcids", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return ["A", "R", "N", "D", "C", "Q", "E", "G", "H", "I", "L", "K", "M", "F", "P", "S", "T", "W", "Y", "V"];
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "mutations", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "data", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "dataReady", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "selectedVariant", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "manuallySelectedPosition", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor0 = _applyDecoratedDescriptor(_class.prototype, "manuallySelectedResidue", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setManuallySelectedResidue", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setManuallySelectedResidue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearManuallySelectedResidue", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearManuallySelectedResidue"), _class.prototype), _descriptor1 = _applyDecoratedDescriptor(_class.prototype, "hoveredResidue", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "setHoveredResidue", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setHoveredResidue"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearHoveredResidue", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearHoveredResidue"), _class.prototype), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "surroundings", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "mutationsArray", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "mutationsArray"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sequence", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "sequence"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "chunkedSequence", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "chunkedSequence"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "chunkedAcids", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "chunkedAcids"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "acidsString", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "acidsString"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mutationRegEx", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "mutationRegEx"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearMutations", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearMutations"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "copyAllMutationsToClipboard", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "copyAllMutationsToClipboard"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "clearLocus", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clearLocus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleMutation", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleMutation"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "anyMutationActive", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "anyMutationActive"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mutationActive", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "mutationActive"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkMutations", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "checkMutations"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "addMutations", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "addMutations"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isHypotheticalVariant", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "isHypotheticalVariant"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getColor", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getColor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getColorsAtSeqIdx", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getColorsAtSeqIdx"), _class.prototype), _class);
});
;define("kell/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("kell/services/resize-observer", ["exports", "ember-resize-observer-service/services/resize-observer"], function (_exports, _resizeObserver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _resizeObserver.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-resize-observer-service/services/resize-observer"eaimeta@70e063a35619d71f
});
;define("kell/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("kell/services/table-data", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object", "tracked-built-ins"], function (_exports, _service, _tracking, _object, _trackedBuiltIns) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object",0,"tracked-built-ins",0,"@glimmer/tracking",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let TableDataService = _exports.default = (_class = class TableDataService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "data", _descriptor, this);
      _initializerDefineProperty(this, "pageSize", _descriptor2, this);
      _initializerDefineProperty(this, "pageIndex", _descriptor3, this);
      _initializerDefineProperty(this, "searchTerm", _descriptor4, this);
      _initializerDefineProperty(this, "sortColumn", _descriptor5, this);
      _initializerDefineProperty(this, "sortDescending", _descriptor6, this);
    }
    //false = descending, true = ascending 

    get variantsData() {
      return this.data.mutationsArray.map(variant => {
        return {
          variant: variant,
          ...this.data.data.records[variant]
        };
      });
    }
    get filteredVariantsData() {
      if (!this.searchTerm || this.searchTerm.length == 0) {
        return this.variantsData;
      }
      const filteredVarTypeIndices = this.data.data.varTypes.filter(v => v.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1).map(v => this.data.data.varTypes.indexOf(v));
      //const filteredLabelIndices = this.data.data.labels.filter(v => v.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1).map(v => this.data.data.labels.indexOf(v));
      return this.variantsData.filter(v => v.variant.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 || filteredVarTypeIndices.indexOf(v.varType) > -1
      //|| filteredLabelIndices.indexOf(v.label) > -1
      );
    }
    get sortedVariantsData() {
      switch (this.sortColumn) {
        case "destabScore":
          return this.filteredVariantsData.sort((a, b) => this.sortByScore("destabScore", a, b));
        case "agScore":
          return this.filteredVariantsData.sort((a, b) => this.sortByScore("agScore", a, b));
        case "solventAccessibility":
          return this.filteredVariantsData.sort((a, b) => this.sortByNumber("solventAccessibility", a, b, true, true));
        case "maf":
          return this.filteredVariantsData.sort((a, b) => this.sortByNumber("maf", a, b));
        case "label":
          return this.filteredVariantsData.sort((a, b) => this.sortByCat("label", a, b));
        case "varType":
          return this.filteredVariantsData.sort((a, b) => this.sortByCat("varType", a, b));
        case "variant":
        default:
          return this.filteredVariantsData.sort(this.sortByVariant);
      }
    }
    get paginatedVariantsData() {
      const start = this.pageIndex * this.pageSize;
      const end = start + this.pageSize;
      return this.sortedVariantsData.slice(start, end);
    }
    get pageCount() {
      if (this.filteredVariantsData.length == 0) {
        return 0;
      } else {
        return Math.ceil(this.filteredVariantsData.length / this.pageSize);
      }
    }

    // sort functions
    sortByScore(key, a, b) {
      const fixedA = a["fixed"];
      const fixedB = b["fixed"];
      if (a.fixed == b.fixed) {
        return this.sortByNumber(key, a, b);
      } else if (a.fixed) {
        const res = a[key] == 0 ? -1 : 1;
        return res * (this.sortDescending ? -1 : 1);
      } else {
        //b.fixed == true
        const res = b[key] == 0 ? 1 : -1;
        return res * (this.sortDescending ? -1 : 1);
      }
    }
    sortByNumber(key, a, b, nullAlwaaysBubbles = false, nullAtEnd = false) {
      const aVal = a[key];
      const bVal = b[key];
      if (aVal == bVal) {
        return this.sortByVariant(a, b, true);
      } else {
        let res;
        let nullVal = false;
        if (aVal == null) {
          res = nullAtEnd ? 1 : -1;
          nullVal = true;
        } else if (bVal == null) {
          res = nullAtEnd ? -1 : 1;
          nullVal = true;
        } else {
          res = aVal - bVal;
        }
        return res * (this.sortDescending && !(nullVal && nullAlwaaysBubbles) ? -1 : 1);
      }
    }
    sortByCat(catKey, a, b) {
      const aCat = this.data.data[catKey + "s"][a[catKey]];
      const bCat = this.data.data[catKey + "s"][b[catKey]];
      const res = aCat.localeCompare(bCat, "en");
      if (res == 0) {
        return this.sortByVariant(a, b, true);
      } else {
        return res * (this.sortDescending ? -1 : 1);
      }
    }
    sortByVariant(a, b, forceSortAscending = false) {
      const [aPos, aRef, aAlt] = this.data.splitMutation(a.variant);
      const [bPos, bRef, bAlt] = this.data.splitMutation(b.variant);
      if (aPos != bPos) {
        return (aPos - bPos) * (this.sortDescending && !forceSortAscending ? -1 : 1);
      } else {
        const aAltIdx = this.data.aminoAcids.indexOf(aAlt);
        const bAltIdx = this.data.aminoAcids.indexOf(bAlt);
        return (aAltIdx - bAltIdx) * (this.sortDescending && !forceSortAscending ? -1 : 1);
      }
    }
    setPageSize(newPageSize) {
      const oldPageIndex = this.pageIndex;
      const oldPageSize = this.pageSize;
      const itmIdx = oldPageSize * oldPageIndex + 1;
      const newPageIndex = Math.floor(itmIdx / newPageSize);
      this.pageSize = newPageSize;
      this.pageIndex = newPageIndex;
    }
    setFilter(newSearchTerm) {
      if (this.searchTerm != newSearchTerm) {
        this.searchTerm = newSearchTerm;
        this.pageIndex = 0;
      }
    }
    setPageIndex(idx, event) {
      if (event) {
        event.preventDefault();
        //event.stopPropagation();
      }
      //console.log(arguments)
      if (idx >= 0 && idx < this.pageCount) {
        this.pageIndex = idx;
      }
    }
    setSortColumn(column, descending = false) {
      this.sortColumn = column;
      this.sortDescending = descending;
    }
    get selectedVariantInTable() {
      return this.variantInTable(this.data.selectedVariant);
    }
    variantInTable(variant) {
      return this.filteredVariantsData.length > 0 && variant && this.filteredVariantsData.findIndex(d => d.variant == variant) > -1;
    }
    getNextVariant(variant) {
      if (this.filteredVariantsData.length == 0) {
        return null;
      }
      const idx = this.sortedVariantsData.findIndex(d => d.variant == variant);
      if (idx > -1 && idx + 1 < this.sortedVariantsData.length) {
        return this.sortedVariantsData[idx + 1].variant;
      } else {
        return null;
      }
    }
    getPreviousVariant(variant) {
      if (this.filteredVariantsData.length == 0) {
        return null;
      }
      const idx = this.sortedVariantsData.findIndex(d => d.variant == variant);
      if (idx > -1 && idx - 1 >= 0) {
        return this.sortedVariantsData[idx - 1].variant;
      } else {
        return null;
      }
    }
    setSelectedVariant(variant) {
      const idx = this.sortedVariantsData.findIndex(d => d.variant == variant);
      if (idx == -1) {
        return;
      }
      const variantPageIndex = Math.floor(idx / this.pageSize);
      this.data.selectedVariant = variant;
      if (this.pageIndex != variantPageIndex) {
        this.pageIndex = variantPageIndex;
      }
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "data", [_service.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "pageSize", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 10;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "pageIndex", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "searchTerm", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "";
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "sortColumn", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "variant";
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "sortDescending", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "variantsData", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "variantsData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "filteredVariantsData", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "filteredVariantsData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sortedVariantsData", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "sortedVariantsData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "paginatedVariantsData", [_tracking.cached], Object.getOwnPropertyDescriptor(_class.prototype, "paginatedVariantsData"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sortByScore", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sortByScore"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sortByNumber", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sortByNumber"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sortByCat", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sortByCat"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sortByVariant", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "sortByVariant"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPageSize", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setPageSize"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFilter", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setFilter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPageIndex", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setPageIndex"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setSortColumn", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setSortColumn"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "variantInTable", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "variantInTable"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getNextVariant", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getNextVariant"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getPreviousVariant", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "getPreviousVariant"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setSelectedVariant", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "setSelectedVariant"), _class.prototype), _class);
});
;define("kell/services/theme", ["exports", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _service, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
  function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
  let ThemeService = _exports.default = (_class = class ThemeService extends _service.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "currentTheme", _descriptor, this);
      _defineProperty(this, "themes", ["light", "dark"]);
    }
    setDarkTheme() {
      this.currentTheme = "dark";
      this.updateTheme();
    }
    setLightTheme() {
      this.currentTheme = "light";
      this.updateTheme();
    }
    initTheme() {
      let savedTheme = localStorage.getItem("theme");
      if (this.themes.indexOf(savedTheme) > -1) {
        this.currentTheme = savedTheme;
      }
      this.updateTheme();
    }
    updateTheme() {
      localStorage.setItem("theme", this.currentTheme);
      document.documentElement.dataset.bsTheme = this.currentTheme;
    }
  }, _descriptor = _applyDecoratedDescriptor(_class.prototype, "currentTheme", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return "light";
    }
  }), _class);
});
;define("kell/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "Kell"}}
  <div class="container position-relative">
  	<ThemeSwitch/>
  	<h2 class="text-center my-3">Kell</h2>
  	<VariantInput/>
  	<SequenceView/>
  	<MolstarViewer/>
  	<VariantInfo/>
  	<DataView/>
  	<DebugTools/>
  </div>
  
  */
  {
    "id": "N7wT/Nmv",
    "block": "[[[1,[28,[35,0],[\"Kell\"],null]],[1,\"\\n\"],[10,0],[14,0,\"container position-relative\"],[12],[1,\"\\n\\t\"],[8,[39,2],null,null,null],[1,\"\\n\\t\"],[10,\"h2\"],[14,0,\"text-center my-3\"],[12],[1,\"Kell\"],[13],[1,\"\\n\\t\"],[8,[39,4],null,null,null],[1,\"\\n\\t\"],[8,[39,5],null,null,null],[1,\"\\n\\t\"],[8,[39,6],null,null,null],[1,\"\\n\\t\"],[8,[39,7],null,null,null],[1,\"\\n\\t\"],[8,[39,8],null,null,null],[1,\"\\n\\t\"],[8,[39,9],null,null,null],[1,\"\\n\"],[13],[1,\"\\n\"]],[],[\"page-title\",\"div\",\"theme-switch\",\"h2\",\"variant-input\",\"sequence-view\",\"molstar-viewer\",\"variant-info\",\"data-view\",\"debug-tools\"]]",
    "moduleName": "kell/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("kell/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("kell/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("kell/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;define("kell/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/transform"], function (_exports, _debug, _transform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _transform.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/transform"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '4.13'
    }
  }));
});
;

;define('kell/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("kell/app")["default"].create({"name":"kell","version":"0.0.0+1234cfbd"});
          }
        
//# sourceMappingURL=kell.map
