import { state as availableTags } from './tags.js'
let tags = availableTags()

export const state = () => ({
    projects: [
        {
            name: 'tetrasoft-io',
            color: '#37505d',
            src: '/images/projects/chrysalis/chrysalis.svg',
            title: 'Tetrasoft.io',
            summary: 'The site you\'re looking at right now! A static blog and portfolio built with Vue.js, generated with Nuxt.js, and hosted on netlify.',
            links: {
                github: 'https://github.com/CPSibo/Chrysalis',
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
            color: '#37505d',
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
            color: '#37505d',
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