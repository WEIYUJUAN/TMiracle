<template>
  <n-config-provider
    wh-full

    :theme-overrides="naiveThemeOverrides"
  >

    <slot />
  </n-config-provider>
</template>

<script setup>
import { naiveThemeOverrides } from "../../../settings/theme.json";
</script>
