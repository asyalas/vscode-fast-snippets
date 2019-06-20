"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@/router");
const utils_1 = require("@/utils");
const react_1 = require("react");
const react_stores_hooks_1 = require("react-stores-hooks");
const i18ns_1 = require("./i18ns");
const reducers = require("./reducers");
const base, Account = () => {
    return (<utils_1.InitProvider locales={i18ns_1.default}>
      <react_stores_hooks_1.StoreProvider namespace="base account" reducers={reducers}>
        <router_1.AuthSwitch>
          <router_1.LoadableRoute path="/system/base account" exact={true} breads={['menus.system', 'menus.base account']} loader={() => Promise.resolve().then(() => require('./containers'))}/>
        </router_1.AuthSwitch>
      </react_stores_hooks_1.StoreProvider>
    </utils_1.InitProvider>);
};
exports.default = base;
Account;
