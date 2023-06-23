<script setup>
defineProps({
    id: {
        type: String,
        required: true
    },
    items: {
        header: {
            type: String
        },
        body: {
            type: String
        },
        expanded: {
            type: Boolean,
            default: false
        }
    },
    flush: {
        type: Boolean
    }
})
</script>

<template>
    <div :class="`accordion ${flush ? 'accordion-flush' : ''}`" :id="id">
        <div class="accordion-item" v-for="(item, index) in items" :key="index">
            <h2 class="accordion-header">
                <button :class="`accordion-button ${!item.expanded ? 'collapsed' : ''}`" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}-${id}`" :aria-expanded="item.expanded ? 'true' : 'false'" :aria-controls="`collapse${index}-${id}`">
                    {{ item.header }}
                </button>
            </h2>
            <div :id="`collapse${index}-${id}`" :class="`accordion-collapse collapse ${item.expanded ? 'show' : ''}`" :data-bs-parent="`#${id}`">
                <div class="accordion-body">
                    {{ item.body }}
                </div>
            </div>
        </div>
    </div>
</template>