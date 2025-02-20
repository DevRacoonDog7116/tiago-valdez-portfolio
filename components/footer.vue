<script setup lang="ts"></script>

<template>
    <div
        class="border-t border-stone-200 mt-8 py-4 text-center text-xs flex flex-col gap-2 items-center"
    >
        <div class="flex flex-row items-center justify-center gap-1.5">
            <p>
                {{ $t('madeBy') }}
                <a
                    href="https://github.com/Bug-Hunter7116/bug-hunter-portfolio"
                    class="hover:underline font-bold"
                    >Ruslan Danyliuk</a
                >
                {{ $t('with') }}
                <a href="https://nuxt.com/" class="hover:underline font-bold"
                    >Nuxt.js</a
                >
            </p>
        </div>
        <Settings />
    </div>
</template>
