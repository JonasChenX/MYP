<template>
    <nav aria-label="breadcrumb" class="m-0 p-2">
        <ol class="breadcrumb p-0 m-0">
            <li class="breadcrumb-item"
                v-for="(breadcrumb, index) in breadcrumbs"
                :key="index">
                <router-link v-if="breadcrumb.path" :to="breadcrumb.path" class="text-dark">
                    <font-awesome-icon v-if="breadcrumb.icon" :icon='breadcrumb.icon' class="me-1" />
                    <span>{{ breadcrumb.label }}</span>  
                    <code v-if="breadcrumb.functionId" >({{ breadcrumb.functionId }})</code>
                </router-link>
                <span v-else>
                    <font-awesome-icon v-if="breadcrumb.icon" :icon='breadcrumb.icon' class="me-1" />
                    <span>{{ breadcrumb.label }}</span>
                </span>
            </li>
        </ol>
    </nav>
</template>

<script>
import { retrieve } from '@/core/menu/menu-service'
import router from '@/router';
import { onMounted, reactive, watch } from '@vue/runtime-core';
export default {
    setup(){
    
        const breadcrumbs = reactive([]);

        const expandedMenus = [...retrieve()];

        onMounted(()=>{
            creatBreadcrumb(router.currentRoute.value)
        })

        watch(router.currentRoute, to => {
            creatBreadcrumb(to)
        });

        const creatBreadcrumb = (to) => {
            const id = expandedMenus.find(expandedMenu => expandedMenu.path === to.path)?.id;
            while (breadcrumbs.length > 0) {
                breadcrumbs.pop();
            }
            breadcrumbs.push({
                id: 0,
                parentId: null,
                label: 'JonasChen首頁',
                path: '/',
                icon: 'home',
            });
            if (id) {
                addBreadcrumb(id, breadcrumbs);
                breadcrumbs[breadcrumbs.length - 1].class = 'active';
            }
        }

        const addBreadcrumb = (id, breadcrumbsRef) => {
            const breadcrumb = expandedMenus.find(expandedMenu => expandedMenu.id === id);
            if (breadcrumb) {
                if (breadcrumb.parentId && breadcrumb.parentId !== 0) {
                addBreadcrumb(breadcrumb.parentId, breadcrumbsRef);
                }
                breadcrumbsRef.push(breadcrumb);
            }
        }

        return {
            breadcrumbs
        }
    }
}
</script>

<style>

</style>