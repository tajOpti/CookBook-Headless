<!--
    Used to navigate to the previous page. It does not use the HTML History API
    mainly because in OPE it could navigate out of the CMS UI and out to the
    view mode of the page if that's where the user was last.
-->

<template>
    <div v-if="prevUrl" class="backButton">
        <EpiLink :url="prevUrl">
            <img src="@/assets/images/back.svg" width="64" height="64" alt="" />
        </EpiLink>
    </div>
</template>

<script>
import EpiLink from '@/components/EpiLink.vue';

export default {
    components: {
        EpiLink,
    },
    props: [
        'prevUrl',
    ],
};
</script>

<style>
.backButton {
    z-index: 10;
    height: 50px;
    width: 50px;
    margin-top: 7px;
}

@media (min-width:768px) {
    .backButton {
        height: 64px;
        width: 64px;
        margin-top: 0;
    }
}
</style>
