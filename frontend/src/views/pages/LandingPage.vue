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

        <EpiLink :class-name="'navURL'" :url="model.recipeLink.expanded.url">
            {{ model.recipeLink.expanded.name }}
        </EpiLink>

        <!-- <main class="Page-container">
            <div v-epi-edit="'MainContentArea'">
                <ContentArea :model="model.mainContentArea" />
            </div>
        </main> -->
        <main class="Page-container">
            <div v-epi-edit="'MainContentArea'">
                <div class="Grid">
                    <div class="Grid-cell">
                        <ContentArea :model="model.mainContentArea" />
                    </div>
                </div>
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

<style>
/* main,
footer {
    overflow: hidden;
    width: 100%;
}

footer .ContentArea.Grid--gutterA {
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
} */
/* Style for the body */
body {
    background-color: #ffe6cc;
    /* Light apricot color */
}

/* Style for the Hero section */
.Hero {
    background-image: url('http://localhost:8081/globalassets/istockphoto-895096318-1024x1024.jpg');
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

/* Style for the main content */
.ContentArea {
    margin-top: 50px;
}

.ContentBlock {
    text-align: center;
}

.ContentBlock h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

/* Style for the footer */
footer {
    background-color: #f2f2f2;
    padding: 20px 0;
    text-align: center;
}

.FooterBottom {
    background-color: #333;
    color: white;
    padding: 10px 0;
}

.FooterBottom h6 {
    font-size: 14px;
    margin: 0;
}

/* Style for the Grid */
.Grid {
    display: flex;
}

/* Style for the Grid-cells */
.Grid-cell {
    flex: 1;
}

/* Style for the image */
.ConditionalImage {

    height: auto;
    display: block;
    margin-right: 11px;
    margin-left: 85px;
    width: 425px;
}

/* Style for the text */
.Page-container.ContentBlock {
    flex: 1;
}

.Page-container.ContentBlock h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.Page-container.ContentBlock p {
    margin-bottom: 10px;
}
</style>
