<!--
    Displays some information regarding an artist along with the dates and location of its performance.
-->
<!-- 
<template>
    <div class="RecipeDetailsPage">
        <nav class="Page-container PageHeader NavBar">
            <BackButton :prevUrl="model.parentLink.url" />
            <LanguageSelector :existingLanguages="model.existingLanguages" :language="model.language" />
        </nav>

        <div class="Page-container u-posRelative">
            <RecipeImage :name="model.name" :image-url="model.RecipePhoto" />

            <div class="top">
                <h1 v-epi-edit="'name'">{{ model.name }}</h1>
            </div>

            <div>
                <img class="recipeImage" src="https://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg" alt="">
            </div>
            <EpiProperty property-name="RecipePhoto" />
            <EpiProperty property-name="recipeType" />

            <div class="recipe-description">
                <p v-epi-edit="'recipeDescription'" v-html="model.recipeDescription"></p>
            </div>
        </div>

        <footer>
            <div class="FooterBottom">
                <h6>&copy; Cook Book 2024</h6>
            </div>
        </footer>
    </div>
</template> -->



<template>
    <div class="RecipeDetailsPage">
        <nav class="Page-container PageHeader NavBar">
            <BackButton :prevUrl="model.parentLink.url" />
            <LanguageSelector :existingLanguages="model.existingLanguages" :language="model.language" />
        </nav>

        <div class="Page-container">
            <div class="recipe-details">
                <div class="recipe-header">
                    <h1 class="recipe-name">{{ model.name }}</h1>
                    <EpiProperty property-name="name" />


                    <p class="recipe-type">{{ model.recipeType }}</p>
                    <EpiProperty property-name="recipeType" />

                    <RecipeImage :name="model.name" :image-url="model.recipePhoto" />
                    <EpiProperty property-name="recipePhoto" />

                    <div class="recipe-description">
                        <p v-html="model.recipeDescription"></p>

                        <EpiProperty property-name="recipeDescription" />
                    </div>
                </div>


            </div>
        </div>

        <footer>
            <div class="FooterBottom">
                <h6>&copy; Cook Book 2024</h6>
            </div>
        </footer>
    </div>
</template>

<script>
import RecipeImage from '@/components/widgets/RecipeImage.vue';
import BackButton from '@/components/widgets/BackButton.vue';
import LanguageSelector from '@/components/widgets/LanguageSelector.vue';
import EpiProperty from '@/components/EpiProperty.vue';

export default {
    props: ['model'],
    components: {
        RecipeImage,
        BackButton,
        LanguageSelector,
        EpiProperty,
    },
    computed() {
        const url = "https://unsplash.com/photos/woman-with-dslr-camera-e616t35Vbeg";
        return url;
    }
};
</script>

<style scoped>
@footerHeight: 46px;

.RecipeDetailsPage {
    position: relative;
    padding-bottom: 46px;
}

.recipeImage {
    width: 80%;
    height: 60%;
    margin-top: 40px;
    margin-bottom: 40px;
    display: block;
}


.top {
    text-align: center;
    position: absolute;
    width: 100%;

    h1 {
        position: relative;
        font-size: 1em;
        top: -2.5em;
    }
}

.recipe-information {
    p {
        margin: 0.55em 0;
        font: 12px 46px;
        text-transform: uppercase;
    }
}

.recipe-information,
.recipe-description {
    margin: 0 10px;

    @media (min-width:768px) {
        margin: 0;
    }
}

.FooterBottom {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
}

@media (min-width:768px) {
    .top {
        h1 {
            font-size: 2em;
            top: -2em;
        }
    }
}

@media (min-width: 1224px) {
    .top {
        h1 {
            font-size: 2.5em;
            top: -1.5em;
        }
    }
}
</style>
