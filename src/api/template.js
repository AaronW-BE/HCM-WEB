const M = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

export const Login = {
    method: M.POST,
    path: '/auth/login'
};

export const LoginInfo = {
    method: M.POST,
    path: '/auth/login-info'
};

// ********************************************************** //
// 客户api
/**
 * 客户列表查询
 * @type {{path: string, method: string}}
 */
export const CustomerList = {
    method: M.GET,
    path: '/customer/query'
};
export const AddCustomer = {
    method: M.POST,
    path: '/customer/create'
}

// ********************************************************** //
// 后台用户api
export const UserList = {
    method: M.GET,
    path: '/user/query'
};

export const BlockUser = {
    method: M.POST,
    path: '/user/:id/block'
};

export const UnblockUser = {
    method: M.POST,
    path: '/user/:id/unblock'
};
<<<<<<< HEAD
=======

// ********************************************************** //
export const OrderList = {
    method: M.GET,
    path: '/order/query'
};
>>>>>>> 052b8e665ac93022e03667c919dd8b4743559263
