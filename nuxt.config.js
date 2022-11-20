export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    server: {
        port: 3000, // default: 3000
        host: '192.168.15.6', // default: localhost,
        timing: false
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxtjs-auth',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i'},
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css'}
        ]
    },

    //<link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    //<link href="css/sb-admin-2.min.css" rel="stylesheet"></link>

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        //'~/assets/css/all.min.css',
        '~/assets/css/app.css',
        '~/assets/css/sb-admin-2.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

    //<script src=""></script>
    //<script src=""></script>
    //<script src=""></script>
    //<script src=""></script>
    plugins: [
        { src: '~plugins/vendor/jquery/jquery.min.js', mode: 'client' },
        { src: '~/plugins/vendor/bootstrap/js/bootstrap.bundle.min.js', mode: 'client' },
        { src: '~/plugins/vue-table-2', mode: 'client' },
        //{ src: '~/plugins/vendor/jquery-easing/jquery.easing.min.js', mode: 'client' },
        //{ src: '~/plugins/js/sb-admin-2.min.js', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'nuxt-izitoast'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://192.168.15.6:8000/api/v1/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    },

    router: {
        middleware: ['auth']
    },

    auth: {
        redirect: {
            login: '/auth/login',
            logout: '/',
            callback: '/auth/login',
            home: '/'
        },
        strategies: {
            local: {
                token: {
                    property: 'response.token',
                    global: true,
                    // required: true,
                    // type: 'Bearer'
                },
                user: {
                    property: 'user',
                    // autoFetch: true
                },
                endpoints: {
                    login: { url: 'auth/login', method: 'post' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: 'user', method: 'get' }
                }
            }
        }
    },

    izitoast: {
        position: 'topRight',
        transitionIn: 'bounceInLeft',
        transitionOut: 'fadeOutRight',
    }
}
