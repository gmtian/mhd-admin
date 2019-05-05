// common 整体上的仓库 reducer
const defaultState = {
  menus: [
    { id: 1, name: '图书管理', icon: 'book', href: '/book' },
    { id: 2, name: '用户管理', icon: 'user', href: '/user' }
  ],
  defaultMenus: ['1'], // 默认选择的菜单项目
  isLogin: false, // 是否登陆
}

export default (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {

    case "LOGIN":
      newState.isLogin = true;
      break;

    default:
      break;
  }

  return newState;
}
