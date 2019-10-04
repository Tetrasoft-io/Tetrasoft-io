<template>
    <v-container
      class="pa-2"
      fluid
    >
        <v-col>
            <v-card
            color="#385F73"
            dark
            >
            <v-card-text class="white--text">
                <div class="display-2 mb-5">My Projects</div>

                <div class="title">Tags</div>

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
                        :value="tag"
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

        <v-col
            v-for="(item, i) in filteredItems"
            :key="i"
        >
            <v-card
                dark
            >
                <v-list-item three-line>
                    <v-list-item-avatar
                        size="125"
                        tile
                    >
                        <v-img :src="item.src"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content class="align-self-start">
                        <v-list-item-title
                            class="display-1 mb-2"
                            v-text="item.title"
                        ></v-list-item-title>

                        <v-list-item-subtitle class="title font-weight-regular" v-text="item.summary"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

                <v-card-text>
                    <v-tooltip 
                        bottom
                        v-for="(tag, i) in item.tags"
                        :key="i"
                        open-delay="300"
                    >
                        <template v-slot:activator="{ on }">
                            <v-chip
                                light
                                class="ma-1"
                                small
                                filter
                                :input-value="tagIsInFilter(tag)"
                                @click="addTagToFilter(tag)"
                                v-on="on"
                            >
                                <v-avatar left>
                                    <v-icon :color="tag.iconColor" small>{{ tag.icon }}</v-icon>
                                </v-avatar>
                                {{ tag.name }}
                            </v-chip>
                        </template>
                        <span>Click to filter tag</span>
                    </v-tooltip>
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
    </v-container>
</template>

<script>
export default {
    head() {
        return {
            title: "Blog"
        };
    },

    data: () => ({
    }),
}
</script>