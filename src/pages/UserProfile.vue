<template>
  <div class="md">
    <nav-tabs-card>
      <template slot="content">
        <span class="md-nav-tabs-title">Todo:</span>
        <md-tabs class="md-success" md-alignment="left">
          <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
            <nav-tabs-table></nav-tabs-table>
          </md-tab>
        </md-tabs>
      </template>
    </nav-tabs-card>
  </div>
</template>

<script>
import { NavTabsTable, NavTabsCard } from "@/components";

export default {
  components: {
    NavTabsTable,
    NavTabsCard
  }
};
</script>
