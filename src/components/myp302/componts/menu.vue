<template>
  <div class="my-2">
    <div class="title-bar">
      <p class="m-0">
        {{ item.title }}
      </p>
      <a class="toggle-icon" href="#" @click.prevent="isOpen = !isOpen">
        <template v-if="item.children">
            {{ isOpen ? "-" : "+" }}
        </template>
      </a>
    </div>
    <template v-if="item.children">
      <Menu
        v-show="isOpen"
        v-for="item in item.children"
        :key="item.title"
        :item="item"
        class="sub-menu"
      />
    </template>
  </div>
</template>

<script>
export default {
  // 加入 name，template 才認得
  name: "Menu",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
.sub-menu {
  margin-left: 30px;
}

.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
}

.toggle-icon {
  color: grey;
  text-decoration: none;
}
</style>