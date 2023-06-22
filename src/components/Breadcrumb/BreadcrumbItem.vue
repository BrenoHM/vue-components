<script setup>
defineProps({
    href: {
        type: String
    },
    target: {
        type: String
    },
    to: {
        type: Object
    },
    active: {
        type: Boolean
    }
})
</script>

<template>
    <li
        class="breadcrumb-item"
        :class="{ active: active }"
        :aria-current="active ? 'page' : null"
    >
        <a
            v-if="href"
            :href="href"
            :target="target ? target : null"
        >
            <slot />
        </a>
        <router-link v-else-if="to" :to="'/' + to.name"><slot /></router-link>
        <span v-else><slot /></span>
    </li>
</template>