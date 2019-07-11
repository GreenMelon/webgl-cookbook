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
                            name: '1',
                            route: '/basic-shapes/triangle/1',
                        },{
                            name: '2',
                            route: '/basic-shapes/triangle/2',
                        },
                    ],
                },
            ],
        };
    },
};
</script>
