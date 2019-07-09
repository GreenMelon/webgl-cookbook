<template>
    <main>
        <categories :categories="categories"></categories>
    </main>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    name: '三角形',
                    instances: [
                        {
                            name: 'triangle',
                            route: '/basic-shapes/triangle',
                        },
                    ],
                },
            ],
        };
    },
};
</script>
