import { state as availableTags } from './tags.js'
let tags = availableTags()

export const state = () => ({
    projects: [
        {
            name: 'tetrasoft-io',
            url: '/blog/building-a-static-portfolio-blog',
            src: '/images/projects/tetrasoft/logo.svg',
            title: 'Tetrasoft.io',
            summary: 'The site you\'re looking at right now! A static blog and portfolio built with Vue and Vuetify, \
                generated with Nuxt, and hosted on netlify.<br><br>Click "Project Details" to read about how I built it.',
            links: {
                github: 'https://github.com/Tetrasoft-io/Tetrasoft-io',
                site: 'https://tetrasoft.io'
            },
            tags: [
                tags.programming,
                tags.vue,
                tags.vuetify,
                tags.nuxt,
            ],
        },
        {
            name: 'chrysalis',
            src: '/images/projects/chrysalis/chrysalis.svg',
            title: 'Chrysalis',
            summary: 'youtube-dl manager to handle subscriptions with complex renaming, foldering, and integrations with tools such as TheTVDB and Plex',
            links: {
                github: 'https://github.com/CPSibo/Chrysalis',
                docker: 'https://hub.docker.com/r/cpsibo/chrysalis',
            },
            tags: [
                tags.programming,
                tags.python,
                tags.media,
            ],
        },
        {
            name: 'sc-api',
            src: '/images/projects/scapi/scapi.png',
            title: 'Star Citizen API',
            summary: 'Unofficial API for querying the Star Citizen community site. Uses a differential item history to allow point-in-time-querying of any entity.',
            links: {
                bitbucket: 'https://bitbucket.org/sc-api/star-citizen-api',
                docs: 'https://bitbucket.org/sc-api/star-citizen-api/wiki/Home',
                site: 'http://sc-api.com'
            },
            tags: [
                tags.programming,
                tags.php,
                tags.mysql,
                tags.game,
            ],
        },
    ]
})