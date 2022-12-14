<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">JonasChen</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown" v-for="(menu) in menus" :key="menu.id">
                        <a class="nav-link dropdown-toggle active" aria-current="page" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{menu.meta.label}}
                        </a>
                        <ul class="dropdown-menu m-0">
                            <li>
                                <a class="dropdown-item" v-for="(children) in menu.children" :key="children.id" @click="pathHandler(children.path)">
                                    {{children.meta.label}}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { getMenu } from '@/core/menu/menu-service'
import router from '@/router';
export default {
    name: 'Navbar',
    setup(){

        //取得菜單
        const menus = getMenu();
        //跳轉路徑
        const pathHandler = path => {
            if (path === router.currentRoute.path) {
                router.go(0);
            }
            router.push(path);
        };        
    
        return{
            menus,
            pathHandler,
        }
    }
}
</script>

<style>

</style>