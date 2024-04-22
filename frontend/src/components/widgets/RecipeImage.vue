<!--
    Displays an Recipe image.
-->

<template>
    <div class="recipeImage">
        <div>
            <ConditionalImage :src="imageUrl" :alt="name" />
        </div>
    </div>
</template>

<script>
import ConditionalImage from '@/components/widgets/ConditionalImage.vue';

export default {
    props: ['name', 'imageUrl'],
    components: {
        ConditionalImage,
    },
};
</script>

<style>
.artistImage {
    padding-top: 80px;
}

img {
    width: 100%;
    height: auto;
    animation: fadein 2s;
}

@keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
