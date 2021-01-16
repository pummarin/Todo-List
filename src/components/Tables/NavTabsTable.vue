<template>
  <div>
    <md-table>
      <md-table-row v-for="item in todos" v-bind:key="item.id">
        <md-table-cell>
          <!-- <md-checkbox
            v-model="item.completed"
            @click="completingtodo(item)"
          ></md-checkbox -->
          <input
            class="md-checkbox"
            v-model="item.completed"
            type="checkbox"
            @click="completingtodo(item)"
          />
        </md-table-cell>
        <md-table-cell>
          <div v-if="item.completed">
            <s>{{ item.title }}</s>
          </div>
          <div v-else>{{ item.title }}</div>
        </md-table-cell>
        <md-table-cell>
          <md-button class="md-just-icon md-simple md-primary">
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button class="md-just-icon md-simple md-danger"  @click="deleteTodo(item)">
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  title: "nav-tabs-table",
  data() {
    return {
      selected: [],
      todos: [
        {
          title:
            "กินข้าวกินข้าวกินข้าวกินข้าวกินข้าวกินข้าวกินข้าว",
          completed: false,
        },
        {
          title:
            "ตีแบด",
          completed: false,
        },
        {
          completed: true,
          title:
            "ทำเจค",
        },
      ],
    };
  },
  methods: {
    completingtodo(items) {
      console.log(`items:${items.title}`);
      this.selected = items;
    },
    deleteTodo(items){
      console.log(`deleteTodo:${items.title}`);
    }
  },
};
</script>
