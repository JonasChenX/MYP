<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">JonasChen</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <template  v-if="$route.name !== 'login'">
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
                </template>
                <div class="text-end ms-auto d-flex">
                    <div class="align-self-center me-3">版本:{{version}}</div>
                    <div v-if="$route.name !== 'login'" class="btn btn-primary" @click="logout()">登出</div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { getMenu } from '@/core/menu/menu-service'
import { storageFun } from '@/common/functionMain'
import router from '@/router';
import { ref } from '@vue/reactivity';
export default {
    name: 'Navbar',
    setup(){
        //取得菜單
        const menus = getMenu();
        //跳轉路徑
        const pathHandler = path => {
            if (path === router.currentRoute.value.path) {
                router.go(0);
            }
            router.push(path);
        };

        const logout = () =>{
            storageFun.sessionStorageObj.remove('mypToken')
            router.push('/login')
        }

        //版本號說明 https://blog.csdn.net/qq_33816425/article/details/117415371
        const version = ref(process.env.PACKAGE_VERSION)
    
        return{
            menus,
            pathHandler,
            logout,
            version
        }
    }
}
</script>

<style>

</style>