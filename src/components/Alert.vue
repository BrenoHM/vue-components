<script setup>
import { onMounted, ref } from "vue"

const props = defineProps({
    variant: {
        type: String,
        default: "primary"
    },
    close: {
        type: Boolean,
        default: false
    }
})

const classes = ref(['alert', 'alert-' + props.variant]);

onMounted(() => {
  if( props.close ) {
    classes.value.push('alert-dismissible')
  }
})

</script>

<template>
    <div :class="classes" role="alert">
        <slot />
        <button v-if="close" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>  
</template>

<style scoped>

</style>
