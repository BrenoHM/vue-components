<script setup>
import { onMounted, ref } from 'vue';
import Accordion from '@/components/Accordion.vue';

const items = ref([
    {
        header: "Accordion Item #1",
        body: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
        expanded: true
    },
    {
        header: "Accordion Item #2",
        body: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    },
    {
        header: "Accordion Item #3",
        body: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
    }
])

onMounted(() => {
    Prism.highlightAll();
})
</script>

<template>
    <h3>Componente Accordion</h3>
    <hr>

    <Accordion id="accordion1" :items="items" />

    <pre>
    <code class="language-javascript line-numbers" data-prismjs-copy="Copiar">
    const items = ref([
        {
            header: "Accordion Item #1",
            body: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
            expanded: true
        },
        {
            header: "Accordion Item #2",
            body: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        },
        {
            header: "Accordion Item #3",
            body: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        }
    ])
    
    &lt;Accordion id=&quot;accordion1&quot; :items=&quot;items&quot; /&gt;
    </code>
    </pre>

    <h4 class="mt-5">Flush (sem borda)</h4>
    <hr>

    <div class="bg-body-secondary p-3">
        <Accordion id="accordion2" :items="items" flush />
    </div>

    <pre>
    <code class="language-javascript line-numbers" data-prismjs-copy="Copiar">
    const items = ref([
        {
            header: "Accordion Item #1",
            body: "<strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.",
            expanded: true
        },
        {
            header: "Accordion Item #2",
            body: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        },
        {
            header: "Accordion Item #3",
            body: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.",
        }
    ])
    
    &lt;Accordion id=&quot;accordion2&quot; :items=&quot;items&quot; flush /&gt;
    </code>
    </pre>
</template>