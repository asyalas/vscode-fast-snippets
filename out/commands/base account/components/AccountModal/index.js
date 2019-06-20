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
const ui_1 = require("@/ui");
const utils_1 = require("@/utils");
const modal_1 = require("antd/lib/modal");
require("./index.scss");
const { Option } = ui_1.Select;
// 默认密码
const defaultPassword = '******';
AccountModalProps;
modal_1.ModalProps;
{
    data: [];
    onOk ?  : (params) => void ;
    exports.base;
    exports.accountData ?  : any;
}
exports.AccountModal = (props, AccountModalProps) => {
    const { data, onOk, base, accountData, visible } = props, modalProps = __rest(props, ["data", "onOk", "base", "accountData", "visible"]);
    // 是否是编辑模式
    const isEdit = !!base, accountData;
    const { store, error, getFieldErrorFirstMessage, getFieldDecorator, resetFields, setFields, setFieldsValue } = utils_1.useForm();
    utils_1.useEffect(() => {
        // 如果是编辑，更新数据
        if (visible && isEdit && !!base)
            accountData;
    });
    {
        setFieldsValue({
            base: account, base: accountData.base, account_name,
            password: defaultPassword,
            surePassword: defaultPassword,
            name: base, accountData: .name,
            department: base, accountData: .department,
            role: (data.filter((v) => v.name === base, accountData.role)[0] || { id: undefined }).id
        });
    }
};
// 关闭模态框的时候清空数据
const afterClose = utils_1.useStaticCallback(() => {
    resetFields();
});
// onok事件
const onOkHandle = utils_1.useStaticCallback(() => {
    if (onOk) {
        const opts = {
            base: account_name, store: .base, account,
            password: store.password,
            name: store.name,
            department: store.department,
            role_id: store.role,
            role_name: (data.filter((v) => v.id === store.role)[0] || { name: '' }).name
        };
        if (isEdit) {
            // 编辑时传入的参数,账号名称不能修改
            delete opts.base;
            account_name;
            if (opts.password === defaultPassword) {
                delete opts.password;
            }
        }
        onOk(opts);
    }
}, [store, data]);
return (<ui_1.Modal {...modalProps} afterClose={afterClose} visible={exports.visible} wrapClassName={'system-base account-modal'} okButtonProps={{
    // 禁用规则：全部填完且没有错误
    disabled: Object.values(error).some(Boolean) ||
        utils_1.isEmptyObject(store) ||
        !Object.values(store).every(Boolean) ||
        Object.values(store).length < 6
}} onOk={onOkHandle}>
      <ui_1.Line label={i18n_1.get('base account.base account')} isError={!!getFieldErrorFirstMessage('base account')} error={getFieldErrorFirstMessage('base account')}>
        {getFieldDecorator('base account', {
    rules: [
        { required: true, message: i18n_1.get('base account.base accountRequired') },
    ]
})(<ui_1.Input maxLength={10} placeholder={i18n_1.get('base account.base accountTxt')} disabled={isEdit}/>)}

      </ui_1.Line>
      <ui_1.Line label={i18n_1.get('base account.password')} isError={!!getFieldErrorFirstMessage('password')} error={getFieldErrorFirstMessage('password')}>
        {getFieldDecorator('password', {
    rules: [
        { required: true, message: i18n_1.get('base account.passwordRequired') },
        (rule, value) => {
            const surePassword = store.surePassword;
            const isEqual = value === surePassword;
            if (!isEqual) {
                setFields({
                    surePassword: {
                        value: store.surePassword,
                        error: [{
                                message: i18n_1.get('base account.passwordUnequal'),
                                field: 'surePassword'
                            }]
                    },
                    password: {
                        value,
                        error: []
                    }
                });
            }
            return [];
        }
    ]
})(<ui_1.Input maxLength={6} type="password" placeholder={i18n_1.get('base account.passwordTxt')}/>)}
      </ui_1.Line>
      <ui_1.Line label={i18n_1.get('base account.surePassword')} isError={!!getFieldErrorFirstMessage('surePassword')} error={getFieldErrorFirstMessage('surePassword')}>
        {getFieldDecorator('surePassword', {
    rules: [
        { required: true, message: i18n_1.get('base account.surePasswordRequired') },
        (rule, value) => {
            const password = store.password;
            const isEqual = value === password;
            const errors = [];
            if (!isEqual) {
                errors.push(i18n_1.get('base account.passwordUnequal'));
            }
            return errors;
        }
    ]
})(<ui_1.Input placeholder={i18n_1.get('base account.surePasswordTxt')} maxLength={6} type="password"/>)}
      </ui_1.Line>
      <ui_1.Line label={i18n_1.get('base account.name')}>
        {getFieldDecorator('name')(<ui_1.Input maxLength={50} placeholder={i18n_1.get('base account.nameTxt')}/>)}
      </ui_1.Line>
      <ui_1.Line label={i18n_1.get('base account.department')}>
        {getFieldDecorator('department')(<ui_1.Input maxLength={50} placeholder={i18n_1.get('base account.departmentTxt')}/>)}
      </ui_1.Line>
      <ui_1.Line label={i18n_1.get('base account.role')}>
        {getFieldDecorator('role', {
    onChange: v => v
})(<ui_1.Select placeholder={i18n_1.get('base account.roleTxt')} style={{ width: '100%' }}>
              {data.map((v) => (<Option key={v.id} value={v.id}>{v.name}</Option>))}
            </ui_1.Select>)}
      </ui_1.Line>
    </ui_1.Modal>);
;
