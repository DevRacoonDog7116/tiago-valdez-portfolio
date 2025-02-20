<script setup lang="ts">
useHead({
    title: 'Rusulan Danyliuk',
    meta: [
        {
            name: 'description',
            content:
                "Rusulan Danyliuk, I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies."
        },
        {
            property: 'og:title',
            content: 'Rusulan Danyliuk'
        },
        {
            property: 'og:description',
            content:
                "Rusulan Danyliuk, I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies."
        },
        {
            property: 'twitter:card',
            content: 'summary'
        }
    ]
});

useSeoMeta({
    title: 'Rusulan Danyliuk',
    description:
        "Rusulan Danyliuk, I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies.",
    ogTitle: 'Rusulan Danyliuk',
    ogDescription:
        "Rusulan Danyliuk, I'm a passionate developer with a deep interest in technology and all things related to computing. Over the years, I've dedicated myself creating a variety of personal projects, driven by my passion for learning and exploring new technologies.",
    twitterCard: 'summary'
});
</script>

<template>
    <div>
        <NuxtPage />
    </div>
</template>
