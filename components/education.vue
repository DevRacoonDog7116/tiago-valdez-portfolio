<script setup lang="ts">
import { IconLink } from '@tabler/icons-vue';
</script>

<template>
    <section class="flex flex-col gap-y-3">
        <a href="#education">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-xl font-bold hover:cursor-pointer">
                    Education
                </h2>
            </div>
        </a>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div class="flex flex-row items-center justify-between w-full">
                    <div class="flex flex-col items-start">
                        <div class="flex flex-row items-center gap-2">
                            <a
                                class="text-base sm:text-lg font-bold hover:underline"
                                href="https://english.pku.edu.cn/"
                                > Singapore Institute of Technology</a>
                            <p class="sm:hidden block text-sm">• 2016 - 2020</p>
                        </div>
                        <p class="text-xs sm:text-sm">{{ $t('but') }}</p>
                    </div>
                    <p class="hidden sm:block text-sm">2016 - 2020</p>
                </div>
            </div>
        </div>
    </section>
</template>
