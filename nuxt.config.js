export default {
    ssr: false,
    target: 'static',

    server: {
        port: 3000, // default: 3000
        host: '192.168.15.3', // default: localhost,
        timing: false
    },

    head: {
        title: 'BeeUSchool',
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
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css' }
        ]
    },

    css: [
        '~/assets/css/app.css',
        '~/assets/css/sb-admin-2.css'
    ],

    plugins: [
        { src: '~plugins/vendor/jquery/jquery.min.js', mode: 'client' },
        { src: '~/plugins/vendor/bootstrap/js/bootstrap.bundle.min.js', mode: 'client' },
        { src: '~/plugins/vue-table-2', mode: 'client' },
        { src: '~/plugins/vue-the-mask.js', mode: 'client' },
        { src: '~/plugins/app.js', mode: 'client' },
    ],

    components: true,

    buildModules: [
    ],

    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'nuxt-izitoast'
    ],

    axios: {
        baseURL: 'https://api.beeu.devg.com.br/api/v1/',
        //baseURL: 'http://192.168.15.3:8000/api/v1/'
    },

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
                },
                user: {
                    property: 'user',
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
