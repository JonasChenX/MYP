<template>
    <!-- 參考資料:https://ithelp.ithome.com.tw/articles/10271305  -->
    <title-card :title="pathName" />
    <keep-alive :include="keepAliveComponents">
      <component
        :is="`Step${currentStep}`"
        :inputData="inputData"
        @change-step="changeStep"
        @update-data="updateData"
      />
    </keep-alive>
    <div class="mt-5">
        <h3>資料緩存示範</h3>
        <router-view v-if="!$route.meta.keepAlive" />
        <router-view v-slot="{ Component }">
            <keep-alive>
            <component v-if="$route.meta.keepAlive" :is="Component" />
            </keep-alive>
        </router-view>
        <div class="mt-2">
            <button @click="$router.push('/myp301/a')">Go to A</button>
            <button @click="$router.push('/myp301/b')">Go to B</button>
        </div>
    </div>
</template>

<script>
import titleCard from '@/common/componts/titleCard.vue'
import Step1 from '@/components/myp301/componts/step1.vue';
import Step2 from '@/components/myp301/componts/step2.vue';
import Step3 from '@/components/myp301/componts/step3.vue';
import router from '@/router';
import { reactive } from '@vue/reactivity';

export default {
  components: {
    titleCard,
    Step1,
    Step2,
    Step3,
  },
  data() {
    return {
      currentStep: 1,
      inputData: {},
    };
  },
  computed: {
    keepAliveComponents() {
      let alive = [];
      for (let i = 0; i < this.currentStep; i++) {
        // Step 3 是確認頁面，不用緩存
        if (i === 2) return alive;
        alive.push(`Step${i + 1}`);
      }
      return alive;
    },
  },
  methods: {
    changeStep(n) {
      this.currentStep = n;
    },
    updateData(data) {
      this.inputData = { ...this.inputData, ...data };
    },
  },
  setup(){
    const curRoute = reactive(router.currentRoute);
    const pathName = curRoute.value.meta.label;

    return{
        pathName
    }
  }
};
</script>

<style>

</style>