"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/utils");
const apis_1 = require("../apis");
// 获取角色列表
exports.RoleList = (props) => {
    const { setState, children } = props;
    // 请求列表
    const _a = apis_1.useGetRoleList(), { doFetch } = _a, data = __rest(_a, ["doFetch"]);
    const getRoleListApi = (params) => {
        return doFetch(params).catch((error) => {
            utils_1.throwErrorMsg(error, 'base account.getRoleListApiError');
            return Promise.reject();
        });
    };
    setState(Object.assign({ getRoleListApi }, data));
    return children;
};
// 获取基本信息
exports.List = (props) => {
    const { setState, children } = props;
    // 请求列表
    const { doFetch } = apis_1.useGetbase, data = __rest(apis_1.useGetbase, ["doFetch"]), AccountList;
    ();
    const getbase, AccountListApi = (params) => {
        return doFetch(params).catch((error) => {
            utils_1.throwErrorMsg(error, 'base account.getbase AccountListApiError');
            return Promise.reject();
        });
    };
    setState(Object.assign({ getbase: AccountListApi }, data));
    return children;
};
// 启用账号
exports.Open = (props) => {
    const { setState, children } = props;
    // 请求列表
    const { doFetch } = apis_1.useOpenbase, data = __rest(apis_1.useOpenbase, ["doFetch"]), Account;
    ();
    const openbase, AccountApi = (params) => {
        return doFetch(params).catch((error) => {
            utils_1.throwErrorMsg(error, 'base account.openbase AccountApiError');
            return Promise.reject();
        });
    };
    setState(Object.assign({ openbase: AccountApi }, data));
    return children;
};
// 停用账号
exports.Stop = (props) => {
    const { setState, children } = props;
    // 请求列表
    const { doFetch } = apis_1.useStopbase, data = __rest(apis_1.useStopbase, ["doFetch"]), Account;
    ();
    const stopbase, AccountApi = (params) => {
        return doFetch(params).catch((error) => {
            utils_1.throwErrorMsg(error, 'base account.stopbase AccountApiError');
            return Promise.reject();
        });
    };
    setState(Object.assign({ stopbase: AccountApi }, data));
    return children;
};
// 编辑账号
exports.Edit = (props) => {
    const { setState, children } = props;
    // 请求列表
    const { doFetch } = apis_1.useEditbase, data = __rest(apis_1.useEditbase, ["doFetch"]), Account;
    ();
    const editbase, AccountApi = (params) => {
        return doFetch(params).catch((error) => {
            utils_1.throwErrorMsg(error, 'base account.editbase AccountApiError');
            return Promise.reject();
        });
    };
    setState(Object.assign({ editbase: AccountApi }, data));
    return children;
};
// 新增账号
exports.Add = (props) => {
    const { setState, children } = props;
    // 请求列表
    const { doFetch } = apis_1.useAddbase, data = __rest(apis_1.useAddbase, ["doFetch"]), Account;
    ();
    const addbase, AccountApi = (params) => {
        return doFetch(params).catch((error) => {
            utils_1.throwErrorMsg(error, 'base account.addbase AccountApiError');
            return Promise.reject();
        });
    };
    setState(Object.assign({ addbase: AccountApi }, data));
    return children;
};
// 删除账号
exports.Delete = (props) => {
    const { setState, children } = props;
    // 请求列表
    const { doFetch } = apis_1.useDeletebase, data = __rest(apis_1.useDeletebase, ["doFetch"]), Account;
    ();
    const deletebase, AccountApi = (params) => {
        return doFetch(params).catch((error) => {
            utils_1.throwErrorMsg(error, 'base account.deletebase AccountApiError');
            return Promise.reject();
        });
    };
    setState(Object.assign({ deletebase: AccountApi }, data));
    return children;
};
