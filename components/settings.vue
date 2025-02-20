<script setup lang="ts">
// const { locale, setLocale } = useI18n();

// function localeToSet() {
//     return locale.value === 'en' ? 'cn' : 'en';
// }

const colorMode = useColorMode();
const isDark = computed({
    get() {
        return colorMode.value === 'light';
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
    }
});

</script>

<template>
    <div class="flex flex-row gap-2 items-center">
        <!-- <UButton icon="i-circle-flags-en" class="hidden" />
        <UButton icon="i-circle-flags-cn" class="hidden" />
        <UButton
            @click="setLocale(localeToSet())"
            variant="ghost"
            :icon="`i-circle-flags-${localeToSet()}`"
            aria-label="Change language"
            aria-current-value="true"
        >
        </UButton> -->
        <UButton
            @click="isDark = !isDark"
            variant="ghost"
            :icon="isDark ? 'i-tabler-moon' : 'i-tabler-sun'"
            aria-label="Dark mode"
            aria-current-value="true"
        />
    </div>
</template>
