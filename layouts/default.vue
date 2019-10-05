<template>
  <v-app dark>


    <v-app-bar
      :clipped-left="clipped"
      app
      fixed
    >
      <v-app-bar-nav-icon 
        @click.stop="drawer = !drawer" 
        v-show="$vuetify.breakpoint.smAndDown"
        aria-label="Show nav drawer"
      />
      <v-toolbar-title v-text="title" />

      <v-toolbar-items 
        class="ml-10 md-only"
        v-show="$vuetify.breakpoint.mdAndUp"
      >
        <v-btn 
          text 
          nuxt 
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          :exact="item.exact" 
        >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      
      <v-spacer />
    </v-app-bar>


    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
      hide-overlay
      disable-resize-watcher
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          :exact="item.exact" 
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>



    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>



    <v-footer app inset>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
    
  head() {
      return {
          title: "Home"
      };
  },

  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,

      title: 'TETRASOFT.IO',

      items: [
        {
          icon: 'far fa-home',
          title: 'Home',
          to: '/',
          exact: true,
        },
        {
          icon: 'far fa-hammer',
          title: 'Projects',
          to: '/projects',
          exact: false,
        },
        {
          icon: 'far fa-newspaper',
          title: 'Blog',
          to: '/blog',
          exact: false,
        },
      ],
    }
  }
}
</script>
