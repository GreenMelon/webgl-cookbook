/**
 * routes
 */

const NotFound = () => import('../pages/404');
const Index = () => import('../pages/index');
const BasicShapes = () => import('../pages/basic-shapes/index');
const Triangle = () => import('../pages/basic-shapes/triangle');

export default [
    {
        path: '/',
        redirect: '/index',
    },{
        path: '/index',
        component: Index,
    },

    {
        path: '/basic-shapes',
        component: BasicShapes,
    },{
        path: '/basic-shapes/triangle',
        component: Triangle,
    },

    {
        path: '*',
        component: NotFound,
    },
];
