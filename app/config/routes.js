/**
 * routes
 */

const NotFound = () => import('../pages/404');
const Index = () => import('../pages/index');
const BasicShapes = () => import('../pages/basic-shapes/index');
const Triangle1 = () => import('../pages/basic-shapes/triangle/1');
const Triangle2 = () => import('../pages/basic-shapes/triangle/2');

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
        path: '/basic-shapes/triangle/1',
        component: Triangle1,
    },{
        path: '/basic-shapes/triangle/2',
        component: Triangle2,
    },

    {
        path: '*',
        component: NotFound,
    },
];
