<!--
    Landing page for the site.
    When the app is int edit mode, the OPE overlays in
    the Hero are turned off through the `isEditable` data property.
-->

<template>
    <div class="LandingPage">
        <nav class="Page-container PageHeader NavBar">
            <LanguageSelector :existingLanguages="model.existingLanguages" :language="model.language" />
        </nav>

        <IntroductionBanner :title="model.title" :subtitle="model.subtitle" :heroimage="model.heroImage" />

        <EpiLink :class-name="'Button modal-default-button landing-page-button'" :url="model.recipeLink.expanded.url">
            {{ model.recipeLink.expanded.name }}
        </EpiLink>

        <main class="Page-container">
            <div v-epi-edit="'MainContentArea'">
                <ContentArea :model="model.mainContentArea" />
            </div>
        </main>

        <footer>
            <div v-epi-edit="'FooterContentArea'">
                <ContentArea :model="model.footerContentArea" />
            </div>
            <div class="FooterBottom">
                <h6>&copy; Cook Book 2024</h6>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ContentArea from '@/components/EpiContentArea.vue';
import EpiLink from '@/components/EpiLink.vue';
import LanguageSelector from '@/components/widgets/LanguageSelector.vue';
import { UPDATE_CONTEXT } from '@/store/modules/epiContext';
import IntroductionBanner from '@/components/widgets/IntroductionBanner.vue';

export default {
    components: {
        ContentArea,
        EpiLink,
        LanguageSelector,
        IntroductionBanner,
    },
    props: ['model'],
    methods: mapMutations({
        updateContext: UPDATE_CONTEXT,
    }),
    // computed: {
    //     // Extracting properties from model
    //     existingLanguages() {
    //         return this.model.existingLanguages;
    //     },
    //     language() {
    //         return this.model.language;
    //     },
    //     title() {
    //         return this.model.title;
    //     },
    //     subtitle() {
    //         return this.model.subtitle;
    //     },
    //     heroImage() {
    //         return this.model.heroImage;
    //     },
    //     recipeLink() {
    //         console.log(this.model.recipeLink);
    //         return this.model.recipeLink;
    //     },
    //     mainContentArea() {
    //         return this.model.mainContentArea;
    //     },
    //     footerContentArea() {
    //         return this.model.footerContentArea;
    //     }
    // },
};
</script>

<style lang="less">
//@import '../../assets/styles/common/variables.less';

main,
footer {
    overflow: hidden;
    width: 100%;
}

footer .ContentArea.Grid--gutterA {
    // Disable gutters because we want this content area to be full width.
    margin: 0;
}

.landing-page-button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1em;
}

.buy-ticket-button {
    margin-top: 11px;
}
</style>
