<script setup>
import { onMounted } from 'vue';
import Badge from '@/components/Badge.vue'

onMounted(() => {
    Prism.highlightAll();
})
</script>

<template>
    <h3>Componente Badge</h3>
    <hr>

    <h1>Example heading <Badge>New</Badge></h1>
    <h2>Example heading <Badge>New</Badge></h2>
    <h3>Example heading <Badge>New</Badge></h3>
    <h4>Example heading <Badge>New</Badge></h4>
    <h5>Example heading <Badge>New</Badge></h5>
    <h6>Example heading <Badge>New</Badge></h6>

    <pre>
    <code class="language-html line-numbers" data-prismjs-copy="Copiar">
    &lt;h1&gt;Example heading &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h1&gt;
    &lt;h2&gt;Example heading &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h2&gt;
    &lt;h3&gt;Example heading &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h3&gt;
    &lt;h4&gt;Example heading &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h4&gt;
    &lt;h5&gt;Example heading &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h5&gt;
    &lt;h6&gt;Example heading &lt;Badge&gt;New&lt;/Badge&gt;&lt;/h6&gt;
    </code>
    </pre>

    <div class="mt-5">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="light">Light</Badge>
        <Badge variant="dark">Dark</Badge>
    </div>

    <pre>
    <code class="language-html line-numbers" data-prismjs-copy="Copiar">
    &lt;Badge variant=&quot;primary&quot;&gt;Primary&lt;/Badge&gt;
    &lt;Badge variant=&quot;secondary&quot;&gt;Secondary&lt;/Badge&gt;
    &lt;Badge variant=&quot;success&quot;&gt;Success&lt;/Badge&gt;
    &lt;Badge variant=&quot;danger&quot;&gt;Danger&lt;/Badge&gt;
    &lt;Badge variant=&quot;warning&quot;&gt;Warning&lt;/Badge&gt;
    &lt;Badge variant=&quot;info&quot;&gt;Info&lt;/Badge&gt;
    &lt;Badge variant=&quot;light&quot;&gt;Light&lt;/Badge&gt;
    &lt;Badge variant=&quot;dark&quot;&gt;Dark&lt;/Badge&gt;
    </code>
    </pre>

    <h4 class="mt-5">Pill</h4>
    <hr>

    <div>
        <Badge pill variant="primary">Primary</Badge>
        <Badge pill variant="secondary">Secondary</Badge>
        <Badge pill variant="success">Success</Badge>
        <Badge pill variant="danger">Danger</Badge>
        <Badge pill variant="warning">Warning</Badge>
        <Badge pill variant="info">Info</Badge>
        <Badge pill variant="light">Light</Badge>
        <Badge pill variant="dark">Dark</Badge>
    </div>

    <pre>
    <code class="language-html line-numbers" data-prismjs-copy="Copiar">
    &lt;Badge pill variant=&quot;primary&quot;&gt;Primary&lt;/Badge&gt;
    &lt;Badge pill variant=&quot;secondary&quot;&gt;Secondary&lt;/Badge&gt;
    &lt;Badge pill variant=&quot;success&quot;&gt;Success&lt;/Badge&gt;
    &lt;Badge pill variant=&quot;danger&quot;&gt;Danger&lt;/Badge&gt;
    &lt;Badge pill variant=&quot;warning&quot;&gt;Warning&lt;/Badge&gt;
    &lt;Badge pill variant=&quot;info&quot;&gt;Info&lt;/Badge&gt;
    &lt;Badge pill variant=&quot;light&quot;&gt;Light&lt;/Badge&gt;
    &lt;Badge pill variant=&quot;dark&quot;&gt;Dark&lt;/Badge&gt;
    </code>
    </pre>

    <h4 class="mt-5">Action</h4>
    <hr>

    <div>
        <Badge href="#" variant="primary">Primary</Badge>
        <Badge href="#" variant="secondary">Secondary</Badge>
        <Badge href="#" variant="success">Success</Badge>
        <Badge href="#" variant="danger">Danger</Badge>
        <Badge href="#" variant="warning">Warning</Badge>
        <Badge href="#" variant="info">Info</Badge>
        <Badge href="#" variant="light">Light</Badge>
        <Badge href="#" variant="dark">Dark</Badge>
    </div>

    <pre>
    <code class="language-html line-numbers" data-prismjs-copy="Copiar">
    &lt;Badge href=&quot;#&quot; variant=&quot;primary&quot;&gt;Primary&lt;/Badge&gt;
    &lt;Badge href=&quot;#&quot; variant=&quot;secondary&quot;&gt;Secondary&lt;/Badge&gt;
    &lt;Badge href=&quot;#&quot; variant=&quot;success&quot;&gt;Success&lt;/Badge&gt;
    &lt;Badge href=&quot;#&quot; variant=&quot;danger&quot;&gt;Danger&lt;/Badge&gt;
    &lt;Badge href=&quot;#&quot; variant=&quot;warning&quot;&gt;Warning&lt;/Badge&gt;
    &lt;Badge href=&quot;#&quot; variant=&quot;info&quot;&gt;Info&lt;/Badge&gt;
    &lt;Badge href=&quot;#&quot; variant=&quot;light&quot;&gt;Light&lt;/Badge&gt;
    &lt;Badge href=&quot;#&quot; variant=&quot;dark&quot;&gt;Dark&lt;/Badge&gt;
    </code>
    </pre>

</template>

<style scoped>

</style>
