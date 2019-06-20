"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("@/i18n");
const materials_1 = require("@/ui/materials");
const utils_1 = require("@/utils");
const React = require("react");
const react_stores_hooks_1 = require("react-stores-hooks");
const base, Account = () => {
    const { state, pagination, onReload, onSearch } = utils_1.useTableState({ key: '' });
    // table列表
    const { response, loading, getbase, AccountListApi } = react_stores_hooks_1.useContext('base account.List');
    // 新增账号
    const { loading: addLoading, addbase, AccountApi } = react_stores_hooks_1.useContext('base account.Add');
    // 删除账号
    const { loading: deleteLoading, deletebase, AccountApi } = react_stores_hooks_1.useContext('base account.Delete');
    // 编辑账号
    const { loading: editLoading, editbase, AccountApi } = react_stores_hooks_1.useContext('base account.Edit');
    // 停用账号
    const { loading: stopLoading, stopbase, AccountApi } = react_stores_hooks_1.useContext('base account.Stop');
    // 启用账号
    const { loading: openLoading, openbase, AccountApi } = react_stores_hooks_1.useContext('base account.Open');
    // 获取角色列表
    const { getRoleListApi, response: roleList } = react_stores_hooks_1.useContext('base account.RoleList');
    utils_1.useDidMount(() => {
        getRoleListApi();
    });
    utils_1.useEffect(() => {
        getbase;
        AccountListApi(state);
    }, [state]);
    // 是否为启用状态
    const isOpen = utils_1.useStaticCallback((record) => {
        const openStatus = 1;
        return +record.status === openStatus;
    });
    // 搜索的input
    const [value, , bind] = utils_1.useInputState(undefined);
    return (<materials_1.SearchBarTable extraListProps={[
        {
            type: 'button',
            isModal: true,
            modal: <base AccountModal data={roleList} confirmLoading={addLoading} title={i18n_1.get('base account.addbase Account')}/>,
            modalProps: {
                onOk: (close, params) => {
                    addbase;
                    AccountApi(params).then(() => {
                        close();
                        onReload();
                    });
                },
            },
            props: {
                text: i18n_1.get('base account.addbase Account'),
            }
        }
    ]} searchListProps={[
        {
            type: 'input',
            props: Object.assign({ isSearch: true }, bind, { placeholder: i18n_1.get('base account.searchPlaceholder'), onSearch: () => onSearch({ key: value }), style: {
                    width: 260
                } })
        },
        {
            type: 'button',
            props: {
                text: i18n_1.get('base account.search'),
                onClick: () => onSearch({ key: value })
            }
        }
    ]} tableProps={{
        loading,
        rowKey: (a) => a.id,
        pagination: Object.assign({}, pagination, { total: response.total }),
        isShowFooter: !!response.total,
        footerTxt: `${i18n_1.get('base account.base accountNum')}:${response.total}`,
        dataSource: response.result,
        columns: [
            {
                title: i18n_1.get('base account.No'),
                key: 'No',
                render: (record, a, index) => index + 1
            },
            {
                title: i18n_1.get('base account.base accountName'),
                key: 'base accountName',
                dataIndex: 'base account_name'
            },
            {
                title: i18n_1.get('base account.name'),
                key: 'name',
                dataIndex: 'name'
            },
            {
                title: i18n_1.get('base account.department'),
                key: 'department',
                dataIndex: 'department'
            },
            {
                title: i18n_1.get('base account.role'),
                key: 'role',
                dataIndex: 'role'
            },
            {
                title: i18n_1.get('base account.status'),
                key: 'status',
                renderItem: (record) => ({
                    type: isOpen(record) ? 'blue' : 'red',
                    key: 'status',
                    render: isOpen(record) ?
                        i18n_1.get('base account.normal') :
                        i18n_1.get('base account.stop'),
                })
            },
            {
                key: 'operate',
                title: i18n_1.get('base account.op'),
                renderItem: (record) => ([
                    {
                        type: 'blue',
                        render: i18n_1.get('base account.edit'),
                        key: 'edit',
                        isModal: true,
                        modal: <base AccountModal data={roleList} base accountData={record} confirmLoading={editLoading} title={i18n_1.get('base account.editbase Account')}/>,
                        modalProps: {
                            onOk: (close, body) => {
                                editbase;
                                AccountApi({
                                    URLOptions: record.id,
                                    body
                                }).then(() => {
                                    close();
                                    onReload();
                                });
                            },
                        }
                    },
                    {
                        type: isOpen(record) ? 'red' : 'blue',
                        render: isOpen(record) ?
                            i18n_1.get('base account.stop') :
                            i18n_1.get('base account.open'),
                        isModal: true,
                        key: 'stopOrOpen',
                        modalProps: ({
                            confirmLoading: openLoading || stopLoading,
                            title: i18n_1.get('base account.prompt'),
                            onOk: (close) => {
                                const fn = isOpen(record) ? stopbase : , AccountApi, AccountApi;
                                fn({
                                    URLOptions: record.id,
                                    body: {
                                        // 1 -->启用 2--> 停用
                                        status: isOpen(record) ? 2 : 1
                                    }
                                }).then(() => {
                                    close();
                                    onReload();
                                });
                            },
                            content: isOpen(record) ?
                                i18n_1.get('base account.openModalTxt') :
                                i18n_1.get('base account.stopModalTxt')
                        })
                    },
                    {
                        type: 'red',
                        render: i18n_1.get('base account.delete'),
                        isModal: true,
                        key: 'delete',
                        modalProps: ({
                            title: i18n_1.get('base account.prompt'),
                            confirmLoading: deleteLoading,
                            content: i18n_1.get('base account.deleteModalTxt'),
                            onOk: (close) => {
                                deletebase;
                                AccountApi({
                                    URLOptions: record.id
                                }).then(() => {
                                    close();
                                    onReload();
                                });
                            },
                        })
                    },
                ])
            }
        ],
    }}/>);
};
exports.default = base;
Account;
