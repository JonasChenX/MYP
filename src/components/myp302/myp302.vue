<template>
    <!-- 參考資料: https://ithelp.ithome.com.tw/articles/10276455  -->
    <title-card :title="pathName" />
    <div class="col-4 m-auto mt-3 border border-3">
        <Menu  v-for="item in testMenu" :key="item.title" :item="item" />
    </div>
</template>

<script>
import titleCard from '@/common/componts/titleCard.vue'
import Menu from '@/components/myp302/componts/menu.vue';
import { reactive } from '@vue/reactivity';
import router from '@/router';
export default {
    components:{
        Menu,
        titleCard
    },
    setup(){
        const curRoute = reactive(router.currentRoute);
        const pathName = curRoute.value.meta.label;

        const testMenu = [
        {
          title: "K-POP",
          children: [
            {
              title: "BTS",
              children: [
                {
                  title: "BE",
                  children: [
                    {
                      title: "Life Goes On",
                    },
                    {
                      title: "Dynamite",
                    },
                    {
                      title: "Blue & Gray",
                    },
                  ],
                },
              ],
            },
            {
              title: "Blackpink",
              children: [
                {
                  title: "THE ALBUM",
                  children: [
                    {
                      title: "How You Like That",
                    },
                    {
                      title: "Lovesick Girls",
                    },
                    {
                      title: "Ice Cream (with Selena Gomez)",
                    },
                  ],
                },
              ],
            },
            {
              title: "IU",
              children: [
                {
                  title: "LILAC",
                  children: [
                    {
                      title: "LILAC",
                    },
                    {
                      title: "Coin",
                    },
                    {
                      title: "Celebrity",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "US-POP",
          children: [
            {
              title: "Billie Eilish",
              children: [
                {
                  title: "Happier Than Ever",
                  children: [
                    {
                      title: "Therefore I Am",
                    },
                    {
                      title: "my future",
                    },
                    {
                      title: "Happier Than Ever",
                    },
                  ],
                },
              ],
            },
            {
              title: "Dua Lipa",
              children: [
                {
                  title: "Future Nostalgia",
                  children: [
                    {
                      title: "Don't Start Now",
                    },
                    {
                      title: "Levitating",
                    },
                    {
                      title: "Break My Heart",
                    },
                  ],
                },
              ],
            },
            {
              title: "Ed Sheeran",
              children: [
                {
                  title: "Deluxe",
                  children: [
                    {
                      title: "Shape of You",
                    },
                    {
                      title: "Perfect",
                    },
                    {
                      title: "Happier",
                    },
                  ],
                },
              ],
            },
          ],
        },
        ]

        return{
            testMenu,
            pathName
        }
    }
}
</script>

<style>

</style>