<template>
  <div>
    <v-list :style="{ borderColor: 'green' }">
      <v-list-item
        color="green"
        :to="{
          name: `${sidebarConfig ? sidebarConfig.routeName : ''}`,
          hash: `#${item.href}`,
        }"
        v-for="(item, i) in SideBar"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title
            class="green--text text-center caption font-weight-medium"
            v-text="item.title.toUpperCase()"
          ></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>


<script>
export default {
  props: {
    sidebarConfig: Object,
    SideBar: Array,
  },
  data() {
    return {
      selectedItem: 0,
    };
  },
};
</script>

<style >
.sidebar v-list-item {
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 24px;
  display: block;
}
</style>