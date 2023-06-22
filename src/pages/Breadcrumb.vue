<script setup>
import { onMounted, ref } from "vue"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem.vue"

const items1 = ref([
    {
        text: 'Home',
        active: true
    }
])

const items2 = ref([
    {
        text: 'Home',
        href: '#',
        target: '_blank'
    },
    {
        text: 'Library',
        active: true
    }
])

const items3 = ref([
    {
        text: 'Admin',
        href: '#'
    },
    {
        text: 'Alerts',
        to: { name: 'alert' }
    },
    {
        text: 'Manage',
        href: '#'
    },
    {
        text: 'Library',
        active: true
    }
])

onMounted(() => {
    Prism.highlightAll();
})

</script>
<template>
    <h2>Componente Breadcrumb</h2>

    <div class="card mb-4">

        <div class="card-header">
            <Breadcrumb :items="items1" />
        </div>

    <div class="card-body">
    <pre>
    <code class="language-javascript line-numbers" data-prismjs-copy="Copiar">
    const items1 = ref([
        {
            text: 'Home',
            active: true
        }
    ])
    
    &lt;Breadcrumb :items="items1" /&gt;
    </code>
    </pre>
    </div>

    </div>

    <div class="card mb-4">
        <div class="card-header">
            <Breadcrumb :items="items2" />
        </div>
    <div class="card-body">
    <pre>
    <code class="language-javascript line-numbers" data-prismjs-copy="Copiar">
    const items2 = ref([
        {
            text: 'Home',
            href: '#',
            target: '_blank'
        },
        {
            text: 'Library',
            active: true
        }
    ])

    &lt;Breadcrumb :items=&quot;items2&quot; /&gt;
    </code>
    </pre>
    </div>
    </div>


    <Breadcrumb :items="items3" />

    <Breadcrumb>
        <BreadcrumbItem href="https://www.google.com" target="_blank">Foo</BreadcrumbItem>
        <BreadcrumbItem :to="{name: 'alert'}" target="_blank">Example using router link</BreadcrumbItem>
        <BreadcrumbItem active>Bar</BreadcrumbItem>
    </Breadcrumb>
</template>