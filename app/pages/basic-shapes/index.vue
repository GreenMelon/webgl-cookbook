<template>
    <main>
        <categories
            :base-route="baseRoute"
            :categories="categories"
        />
    </main>
</template>

<script>
export default {
    data() {
        return {
            baseRoute: '/basic-shapes',
            categories: [
                {
                    name: 'triangle',
                    alias: '三角形',
                    children: [
                        {
                            route: '1',
                        }, {
                            route: '2',
                        },
                    ],
                },
            ],
        };
    },
};
</script>
