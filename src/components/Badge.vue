<script setup>
defineProps({
    variant: {
        type: String,
        default: "primary"
    },
    pill: {
        type: Boolean,
        default: false
    },
    href: {
        type: String,
    }
})
</script>

<template>
    <span :class="`badge text-bg-${variant} ${pill ? 'rounded-pill' : ''}`">
        <a v-if="href" :href="href" :class="'text-decoration-none text-bg-'+variant"><slot /></a>
        <slot v-else />
    </span>
</template>