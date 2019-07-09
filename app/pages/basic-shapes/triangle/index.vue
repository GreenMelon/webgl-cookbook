<template>
    <main>
        <canvas id="gl-canvas" width="400" height="400"></canvas>
    </main>
</template>

<script>
import { initProgramInfo } from './program.js';
import { initBuffers } from './buffers.js';
import { draw } from './draw.js';

export default {
    mounted() {
        const gl = document.querySelector('#gl-canvas').getContext('webgl');
        const programInfo = initProgramInfo(gl);
        const buffers = initBuffers(gl);
        draw(gl, programInfo, buffers);
    },
};
</script>
