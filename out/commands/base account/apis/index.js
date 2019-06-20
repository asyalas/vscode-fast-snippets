"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@/utils");
// interface URLOptions {
//   merchant_id: string;
//   acquirer_id: string;
// }
/**
 * 获取角色列表
 */
exports.useGetRoleList = () => {
    return utils_1.useFetch({
        url: '/api/permission/base account/role',
        method: 'GET',
        initialData: []
    });
};
/**
 * 获取列表
 */
exports.AccountList = () => {
    return utils_1.useFetch({
        url: '/api/permission/base account',
        method: 'GET'
    });
};
/**
 * 编辑账号
 */
exports.Account = () => {
    return utils_1.useFetch({
        url: (id) => `/api/permission/base account/${id}`,
        method: 'PUT'
    });
};
/**
 * 新增账号
 */
exports.Account = () => {
    return utils_1.useFetch({
        url: '/api/permission/base account',
        method: 'POST'
    });
};
/**
 * 删除账号
 */
exports.Account = () => {
    return utils_1.useFetch({
        url: (id) => `/api/permission/base account/${id}`,
        method: 'DELETE'
    });
};
/**
 * 停用账号
 */
exports.Account = () => {
    return utils_1.useFetch({
        url: (id) => `/api/permission/base account/${id}`,
        method: 'PUT'
    });
};
/**
 * 启用账号
 */
exports.Account = () => {
    return utils_1.useFetch({
        url: (id) => `/api/permission/base account/${id}`,
        method: 'PUT'
    });
};
