<script setup lang="ts">
import { IconLink } from '@tabler/icons-vue';
</script>

<template>
    <section class="flex flex-col gap-3">
        <a href="#experience">
            <div class="flex flex-row gap-1 items-center group relative">
                <IconLink
                    class="absolute transform -translate-x-5 transition duration-200 opacity-0 w-4 h-4 group-hover:opacity-100"
                />
                <h2 class="text-xl font-bold hover:cursor-pointer">
                    {{ $t('experience') }}
                </h2>
            </div>
        </a>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div class="flex flex-row items-center justify-between w-full">
                    <div class="flex flex-col gap-1 items-start">
                        <div
                            class="flex justify-start flex-col sm:flex-row gap-1 sm:gap-2 items-start"
                        >
                            <a
                                class="text-lg font-bold hover:underline"
                                href="https://www.magneto.com"
                                >Magnet Forensics</a
                            >
                            <p class="block sm:hidden text-sm">
                                Apr 2024 - Current ({{ $t('apprenticeship') }})
                            </p>
                        </div>
                        <p>{{ $t('fullStack') }}</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="hidden sm:block text-sm">Apr 2024 - Current</p>
                        <p class="hidden sm:block text-sm">
                            ({{ $t('apprenticeship') }})
                        </p>
                    </div>
                </div>
            </div>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('magneto.1') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('magneto.2') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('magneto.3') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('magneto.4') }}
            </p>
            <p class="text-xs-[40] text-neutral-600 dark:text-neutral-400">
                *** Technologies***
            </p>
            <div class="justify-between flex">
                <div
                class="ml-4 list-disc list-inside text-neutral-600 dark:text-neutral-400"
                >
                    <Techno techno="React" size="little" />
                    <Techno techno="Vue.js" size="little" />
                    <Techno techno="Next.js" size="little" />
                    <Techno techno="JavaScript" size="little" />
                    <Techno techno="TypeScript" size="little" />
                    <Techno techno="Tailwind CSS" size="little" />
                    <Techno techno="Node.js" size="little" />
                    <Techno techno="Laravel" size="little" />
                    <Techno techno="Python" size="little" />
                </div>
                <div>
                    <img class="rounded-lg h-48 w-80" src="/work/magento.webp" alt="">
                </div>
            </div>

        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div
                    class="flex flex-row gap-1 items-center justify-between w-full"
                >
                    <div class="flex flex-col gap-1 items-start">
                        <div
                            class="flex justify-start flex-col sm:flex-row gap-1 sm:gap-2 items-start"
                        >
                            <a
                                class="text-lg font-bold hover:underline"
                                href="https://echoglobal.tech/"
                                >Talentica Software </a
                            >
                            <p class="sm:hidden block text-sm">
                                Aug 2022 - Dec 2024 ({{ $t('front') }})
                            </p>
                        </div>
                        <p>{{ $t('frontend') }}</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="hidden sm:block text-sm">
                            Aug 2022 - Dec 2024
                        </p>
                        <p class="hidden sm:block text-sm">
                            ({{ $t('front') }})
                        </p>
                    </div>
                </div>
            </div>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('echoglobal.1') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('echoglobal.2') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('echoglobal.3') }}
            </p>
            <p class="text-xs-[40] text-neutral-600 dark:text-neutral-400">
                ***Technologies***
            </p>
            <div class="flex justify-between">
                <div
                    class="ml-4 list-disc list-inside text-xs text-neutral-600 dark:text-neutral-400"
                >
                    <Techno techno="React" size="little" />
                    <Techno techno="React Native" size="little" />
                    <Techno techno="Flutter" size="little" />
                    <Techno techno="Vue.js" size="little" />
                    <Techno techno="Next.js" size="little" />
                    <Techno techno="JavaScript" size="little" />
                    <Techno techno="TypeScript" size="little" />
                    <Techno techno="Tailwind CSS" size="little" />
                    <Techno techno="Node.js" size="little" />
                </div>
                <div>
                    <img class="rounded-lg h-48 w-72" src="/work/echo.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div class="flex flex-col">
                <div
                    class="flex flex-row gap-1 items-center justify-between w-full"
                >
                    <div class="flex flex-col gap-1 items-start">
                        <div
                            class="flex justify-start flex-col sm:flex-row gap-1 sm:gap-2 items-start"
                        >
                            <a
                                class="text-lg font-bold hover:underline"
                                href="https://www.a3logics.com/"
                                >Raona</a
                            >
                            <p class="sm:hidden block text-sm">
                                Sep 2020 - Jul 2022 (Junior Software Developer)
                            </p>
                        </div>
                        <p>Junior SoftWare Developer</p>
                    </div>

                    <div class="flex flex-col items-end gap-0.5">
                        <p class="hidden sm:block text-sm">
                            Sep 2020 - Jul 2022
                        </p>
                        <p class="hidden sm:block text-sm">
                            ({{ $t('internship') }})
                        </p>
                    </div>
                </div>
            </div>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('kanvid.1') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('kanvid.2') }}
            </p>
            <p class="text-xs text-neutral-600 dark:text-neutral-400">
                - {{ $t('kanvid.2') }}
            </p>
            <p class="text-xs-[40] text-neutral-600 dark:text-neutral-400">
                ***Technologies***
            </p>
            <div class="flex justify-between">
                <div
                    class="ml-4 list-disc list-inside text-xs text-neutral-600 dark:text-neutral-400"
                >
                    <Techno techno="HTML" size="little" />
                    <Techno techno="JavaScript" size="little" />
                    <Techno techno="CSS" size="little" />
                    <Techno techno="PHP" size="little" />
                    <Techno techno="React" size="little" />
                    <Techno techno="Node.js" size="little" />
                    <Techno techno="MySQL" size="little" />
                    <Techno techno="MongoDB" size="little" />
                </div>
                <div>
                    <img class="rounded-lg h-48 w-72" src="/work/kanvid.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
</template>
