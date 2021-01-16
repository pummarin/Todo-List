<template>
  <div class="md-layout-item md-small-size-100 md-size-100">
    <nav-tabs-card>
      <template slot="content">
        <!-- <span class="md-nav-tabs-title">Todo:</span> -->
        <md-tabs class="md-success" md-alignment="left">
          <md-tab id="tab-home" md-label="Todo" >
            <div class="md-layout-item md-small-size-100 md-size-100">
              <md-field>
                <label>Add new todos: </label>
                <md-input v-model="title" type="text" @keydown.enter="addTodo()"></md-input>
              </md-field>
            </div>
            <nav-tabs-table></nav-tabs-table>
          </md-tab>
        </md-tabs>
      </template>
    </nav-tabs-card>
  </div>
</template>

<script>
import { NavTabsTable, NavTabsCard } from "@/components";
import { db , namesRef } from "../firebase";

export default {
  components: {
    NavTabsTable,
    NavTabsCard,
  },
  data (){
    return{
      title: "",
    }
  },
  methods:{
    addTodo(){
      let x = {
        title: this.title,
        completed: false
      }
      namesRef.
      console.log(`title = ${this.title}`);
    }
  }
};
</script>
<style >
.md-tabs-navigation{
  padding-left: 15px !important;
}
</style>
