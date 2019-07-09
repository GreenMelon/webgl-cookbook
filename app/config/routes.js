/**
 * routes
 */

const NotFound = () => import('../pages/404');
const Index = () => import('../pages/index');

export default [
    {
        path: '/',
        redirect: '/index'
    },{
        path: '/index',
        component: Index
    },

    {
        path: '*',
        component: NotFound
    }

];
