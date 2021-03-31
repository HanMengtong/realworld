module.exports = {
    router: {
        // 自定义路由表规则
        extendRoutes(routes, resolve) {
            // 清除nuxt.js基于pages目录默认生成的路由表规则
            routes.splice(0)
            routes.push(...[
                {
                    path: '/',
                    component: resolve(__dirname, 'pages/layout/')
                    children: [
                        {
                            path: '',
                            name: 'Home',
                            component: resolve(__dirname, 'pages/home/')
                        }
                    ]
                }
            ])
        }
    }
}