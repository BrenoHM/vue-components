<script setup>
import { onMounted } from 'vue';
import Alert from '@/components/Alert.vue'

onMounted(() => {
    Prism.highlightAll();
})
</script>

<template>
    <h3>Componente Alert</h3>
    <hr>
    
    <Alert variant="primary">A simple primary alert—check it out!</Alert>
    <Alert variant="secondary">A simple secondary alert—check it out!</Alert>
    <Alert variant="success">A simple success alert—check it out!</Alert>
    <Alert variant="danger">A simple danger alert—check it out!</Alert>
    <Alert variant="warning">A simple warning alert—check it out!</Alert>
    <Alert variant="info">A simple info alert—check it out!</Alert>
    <Alert variant="light">A simple light alert—check it out!</Alert>
    <Alert variant="dark" close>A simple dark alert—check it out!</Alert>

    <pre>
    <code class="language-html line-numbers" data-prismjs-copy="Copiar">
    &lt;Alert variant=&quot;primary&quot;&gt;A simple primary alert&mdash;check it out!&lt;/Alert&gt;
    &lt;Alert variant=&quot;secondary&quot;&gt;A simple secondary alert&mdash;check it out!&lt;/Alert&gt;
    &lt;Alert variant=&quot;success&quot;&gt;A simple success alert&mdash;check it out!&lt;/Alert&gt;
    &lt;Alert variant=&quot;danger&quot;&gt;A simple danger alert&mdash;check it out!&lt;/Alert&gt;
    &lt;Alert variant=&quot;warning&quot;&gt;A simple warning alert&mdash;check it out!&lt;/Alert&gt;
    &lt;Alert variant=&quot;info&quot;&gt;A simple info alert&mdash;check it out!&lt;/Alert&gt;
    &lt;Alert variant=&quot;light&quot;&gt;A simple light alert&mdash;check it out!&lt;/Alert&gt;
    &lt;Alert variant=&quot;dark&quot; close&gt;A simple dark alert&mdash;check it out!&lt;/Alert&gt;
    </code>
    </pre>
</template>

<style scoped>

</style>
