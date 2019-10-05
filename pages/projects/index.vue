<template>
    <v-container
      class="pa-2"
      fluid
    >
        <v-row>
            <v-col cols="12">
                <v-card
                    color="grey darken-2"
                    dark
                >
                    <v-card-title class="display-1">Filter by tags</v-card-title>

                    <v-card-text>
                        <v-chip-group
                            multiple
                            column
                            active-class="primary--text"
                            v-model="tagFilters"
                            light
                        >
                            <v-chip 
                                v-for="tag in tags" 
                                :key="tag.name"
                                :value="tag.name"
                                filter
                                light
                            >
                                <v-avatar left>
                                    <v-icon :color="tag.iconColor">{{ tag.icon }}</v-icon>
                                </v-avatar>
                                {{ tag.name }}
                            </v-chip>
                        </v-chip-group>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-scale-y-transition
            group
            tag="div"
            class="row"
            name="projects"
        >
            <v-col
                v-for="item in filteredItems"
                :key="item.name"
                cols="12"
            >
                <v-card
                    dark
                    class="pa-3"
                >
                    <v-row>
                        <v-col class="shrink">
                            <v-img width="125" :src="item.src"></v-img>
                        </v-col>

                        <v-col>
                            <div
                                class="display-1 mb-2"
                                v-text="item.title"
                            />

                            <div 
                                class="title font-weight-regular" 
                                v-text="item.summary" 
                            />
                        </v-col>
                    </v-row>

                    <v-card-text
                        class="pl-2"
                    >
                        <v-chip
                            light
                            class="ma-1 project-tag"
                            small
                            filter
                            :input-value="tagIsInFilter(tag.name)"
                            @click="addTagToFilter(tag.name)"
                            v-for="tag in item.tags"
                            :key="tag.name"
                        >
                            <v-avatar left>
                                <v-icon :color="tag.iconColor" small>{{ tag.icon }}</v-icon>
                            </v-avatar>
                            {{ tag.name }}
                        </v-chip>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn class="primary" :to="'/projects/' + item.name" nuxt>
                            Project Details
                        </v-btn>

                        <v-spacer />

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn 
                                    class="info ml-2"
                                    v-if="item.links.github" 
                                    :href="item.links.github" 
                                    target="_blank"
                                    rel="noopener"
                                    v-on="on"
                                >
                                    <v-icon>fab fa-github</v-icon>
                                </v-btn>
                            </template>
                            <span>Github</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn 
                                    class="info ml-2"
                                    v-if="item.links.bitbucket" 
                                    :href="item.links.bitbucket" 
                                    target="_blank"
                                    rel="noopener"
                                    v-on="on"
                                >
                                    <v-icon>fab fa-bitbucket</v-icon>
                                </v-btn>
                            </template>
                            <span>Bitbucket</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn 
                                    class="info ml-2"
                                    v-if="item.links.docker" 
                                    :href="item.links.docker" 
                                    target="_blank"
                                    rel="noopener"
                                    v-on="on"
                                >
                                    <v-icon>fab fa-docker</v-icon>
                                </v-btn>
                            </template>
                            <span>Docker</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn 
                                    class="info ml-2"
                                    v-if="item.links.docs" 
                                    :href="item.links.docs" 
                                    target="_blank"
                                    rel="noopener"
                                    v-on="on"
                                >
                                    <v-icon>fas fa-book</v-icon>
                                </v-btn>
                            </template>
                            <span>Documentation</span>
                        </v-tooltip>

                        <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                                <v-btn 
                                    class="info ml-2"
                                    v-if="item.links.site" 
                                    :href="item.links.site" 
                                    target="_blank"
                                    rel="noopener"
                                    v-on="on"
                                >
                                    <v-icon>fas fa-link</v-icon>
                                </v-btn>
                            </template>
                            <span>Site</span>
                        </v-tooltip>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-scale-y-transition>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    head() {
        return {
            title: "Projects"
        };
    },

    data: () => ({
        tagFilters: [],
    }),

    computed: {
        tags() {
            return this.$store.state.tags
        },

        projects() {
            return this.$store.state.projects.projects
        },

        filteredItems() {
            return this.projects.filter(item => this.checkIfItemHasTag(item.tags.map(tag => tag.name)))
        },
    },

    methods: {
        checkIfItemHasTag(itemTags){
            return this.tagFilters.every(tag => itemTags.includes(tag))
        },

        tagIsInFilter(tag) {
            return this.tagFilters.includes(tag)
        },

        addTagToFilter(tag){
            if(this.tagIsInFilter(tag)){
                this.tagFilters = this.tagFilters.filter(t => t !== tag)
            }
            else{
                this.tagFilters = [
                    ...this.tagFilters,
                    tag
                ]
            }
        },
    },
}
</script>

<style lang="sass">
    .scale-y-transition
        &-enter-active, &-leave-active
            transition: all 0.4s ease-in-out
            overflow: hidden

        &-enter-to, &-leave
            max-height: 300px
            padding-top: 12px
            padding-bottom: 12px
            opacity: 1

        &-enter, &-leave-to
            max-height: 0
            padding-top: 0px
            padding-bottom: 0px
            opacity: 0

    *
        will-change: max-height padding-top padding-bottom
        transform: translateZ(0)
        backface-visibility: hidden
        perspective: 1000px

    .project-tag
        &:first-child
            margin-left: 0 !important
</style>