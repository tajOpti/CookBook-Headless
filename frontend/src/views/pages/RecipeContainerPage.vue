<!--
    A list of all the recipes that are children pages to this page.
-->

<template>
  <div class="RecipeContainerPage">
    <nav class="Page-container PageHeader NavBar">
      <BackButton :prevUrl="model.parentLink.url" />
      <LanguageSelector :existingLanguages="model.existingLanguages" :language="model.language" />
    </nav>

    <div class="Page-container">
      <div class="top gutter">
        <h1 v-epi-edit="'Name'">{{ model.name }}</h1>
      </div>
      <div class="list">
        <div v-for="(recipes, letter) in recipes" :key="letter">
          <h3>{{ letter }}</h3>
          <div v-for="(recipe, index) in recipes" :key="index">
            <CardItem :name="recipe.name" :url="recipe.contentLink.url" :image="recipe.recipePhoto" />
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="Page-container">
      <div class="top gutter">
        <h1 v-epi-edit="'Name'">{{ model.name }}</h1>
      </div>
      <div class="list">
        <div v-for="(value, key) in Recipes" :key="key">
          <h3>{{ key }}</h3>
          <CardItem :name="value.name" :url="value.url" :image="value.RecipePhoto" v-for="(value, key) in value"
            :key="key" />
        </div>
      </div>
    </div> -->

    <footer style="margin-top: 65vh">
      <div class="FooterBottom">
        <h6>&copy; Cook Book 2024!!</h6>
      </div>
    </footer>
  </div>
</template>

<script>
import _ from 'lodash';
import { mapState } from 'vuex';
import { ContentLoader } from '@episerver/content-delivery';
import BackButton from '@/components/widgets/BackButton.vue';
import CardItem from '@/components/widgets/CardItem.vue';
import LanguageSelector from '@/components/widgets/LanguageSelector.vue';

export default {
  props: ['model'],
  data() {
    return {
      recipes: {},
    };
  },
  computed: mapState({
    url: (state) => state.epiDataModel.model.url,
  }),
  created() {
    this.updateData();
  },
  watch: {
    model: 'updateData',
  },
  methods: {
    async updateData() {

      const contentLoader = new ContentLoader();
      contentLoader.getChildren(this.model.contentLink.guidValue, { branch: this.model.language.name }).then((children) => {
        // Sort response alphabetically

        const ordered = _.orderBy(children, [(recipe) => recipe.name.toLowerCase()], ['asc']);
        // Group them by first letter of recipe name and store in data.recipes object

        this.recipes = _.groupBy(ordered, (recipe) => recipe.name.substring(0, 1));
        console.log(this.recipes);
      });
    },
  },
  components: {
    BackButton,
    CardItem,
    LanguageSelector,
  },
};
</script>

<style scoped>
.top h1 {
  text-transform: none;
  margin: 0 40px 0 40px;
  padding: 0.3em 0;

  @media (min-width: 425px) {
    margin-right: 140px;
  }
}

h3 {
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  background: peachpuff;
  padding: 5px 0 7px;
  margin: 0;
}
</style>
