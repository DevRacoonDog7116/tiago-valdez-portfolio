<script setup lang="ts">
import { IconLink, IconMapPinFilled } from '@tabler/icons-vue';
</script>

<template>
    <div class="flex items-start sm:items-center justify-between">
        <div class="flex flex-col gap-2 w-2/3">
            <a href="#me">
                <div class="flex flex-row gap-1 items-center group relative">
                    <IconLink
                        class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                    />
                    <h2 class="text-2xl font-bold hover:cursor-pointer">
                        Tiago Valdez
                    </h2>
                </div>
            </a>
            <div class="my-1">
                <p
                    class="max-w-md text-sm text-neutral-600 dark:text-neutral-400"
                >
                    {{ $t('role') }}
                </p>
                <p
                    class="max-w-md items-center text-xs gap-1.5 inline-flex text-neutral-600 dark:text-neutral-400"
                >
                    <IconMapPinFilled class="w-4 h-4" />
                    Melink, Czeck Republic
                </p>
            </div>
        </div>
    </div>
</template>
