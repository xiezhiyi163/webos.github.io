<template>
  <div>

    <div class="menu_btn pf z7" @click="menu = true">
      <img data-src="static/img/menu/nav.png" alt="">
    </div>
    <div class="menu_mask pf w100 h100" @click="menu = false" v-if="menu"></div>
    <div class="menu pf h100" :class="{menu_show : menu}" @click="menu = false">
      <div class="menu_inner">
        <router-link v-for="menu in menus" :to="menu" :key="menu" tag="div"/>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        menu: false,
        menus: ['/about', '/feature', '/product', '/market', '/show', '/feedback']
      };
    }
  };
</script>
