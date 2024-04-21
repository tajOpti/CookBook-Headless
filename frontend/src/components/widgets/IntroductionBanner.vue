<template>
    <section class="Hero">
        <h1 v-epi-edit="'Title'" v-html="title"></h1>
        <h5 v-epi-edit="'Subtitle'" v-html="subtitle"></h5>
        <EpiProperty v-show="epiDisableEditing" property-name="Title" />
        <EpiProperty v-show="epiDisableEditing" property-name="Subtitle" />
        <EpiProperty v-show="epiDisableEditing" property-name="HeroImage" />
        <img class="Hero-image" :src="`${heroimage}`" alt="">

        <!-- <div class="Hero-image" v-if="heroimage" :style="{ 'background-image': 'url(' + heroimage + ')' }">
        </div> -->
    </section>
</template>


<script>
import { mapState } from 'vuex';
import EpiProperty from '@/components/EpiProperty.vue';

export default {
    props: ['title', 'subtitle', 'heroimage'],
    components: {
        EpiProperty,
    },
    computed: mapState({
        epiDisableEditing: (state) => state.epiContext.inEditMode,
    }),
};
</script>
