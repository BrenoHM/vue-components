<script setup>
defineProps({
    items: {
        type: Array
    }
})

const checkKey = (obj, keyName) => {
    if (Object.keys(obj).indexOf(keyName) !== -1) {
        return true
    }
    return false
};
</script>

<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li
                v-for="item in items"
                :key="item.text"
                class="breadcrumb-item"
                :class="{ active: checkKey(item, 'active') && item.active }"
                :aria-current="checkKey(item, 'active') ? 'page' : null">
                <a v-if="checkKey(item, 'href')" :href="item.href" :target="item.target ? item.target : null">{{ item.text }}</a>
                <router-link v-else-if="checkKey(item, 'to')" :to="'/' + item.to.name">{{ item.text }}</router-link>
                <span v-else>{{ item.text }}</span>
            </li>
            <slot />
        </ol>
    </nav>
</template>