<template>
    <section class="Hero">
        <h1 v-epi-edit="'Title'" v-html="title"></h1>
        <EpiProperty v-show="epiDisableEditing" property-name="Title" />
        <h5 v-epi-edit="'Subtitle'" v-html="subtitle"></h5>
        <EpiProperty v-show="epiDisableEditing" property-name="Subtitle" />
        <!-- <img class="Hero-image" :src="`${heroimage}`" alt=""> -->
        <EpiProperty v-show="epiDisableEditing" :style="{ 'background-image': 'url(' + heroimage + ')' }"
            property-name="HeroImage" class="Hero" />
        <!-- <div class="Hero-image" v-if="heroimage" :style="{ 'background-image': 'url(' + heroimage + ')' }">
        </div> -->
    </section>
</template>

<style>
.Hero {
    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 100px 0;
    /* Adjust as needed */
}

.Hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
    color: #fff;
    /* White text color */
}

.Hero h5 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
    /* White text color */
}
</style>
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
