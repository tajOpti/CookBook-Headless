<!--
    This should be used for links instead of regular anchor elements. It will
    detect if the view is in an Episerver CMS UI editing context, and then
    disable Vue router. That's needed to get context changes to work, such as
    updating the page navigation tree.
-->
<style>
.navURL {
  position: absolute;
  top: 30px;
  right: 106px;
  color: black;
  font-size: large;
  background-color: lightblue;
}
</style>
<template>
  <router-link v-if="userRouterLink" class="EPiLink" :to="clientUrl" :class="className">
    <slot></slot>
  </router-link>
  <a v-else class="EPiLink" :href="clientUrl" :class="className">
    <slot></slot>
  </a>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: [
    'url',
    'className',
  ],
  computed: mapState({
    userRouterLink(state) {
      // Never use 'router-link' in edit mode to update the Optimizely UI
      if (state.epiContext.inEditMode) {
        return false;
      }

      try {
        const url = new URL(this.url);
        return url.host === document.location.host;
      } catch {
        return true;
      }
    },
    clientUrl() {
      try {
        // Make URL relative if host is matching, so client-side routing works.
        const url = new URL(this.url);
        return (url.host === document.location.host)
          ? url.pathname + url.search + url.hash
          : url;
      } catch {
        return this.url;
      }
    },
  }),
};
</script>
