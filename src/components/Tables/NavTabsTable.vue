<template>
  <div>
    <md-table>
      <md-table-row v-for="item in todos" v-bind:key="item.id">
        <md-table-cell class="leo-left">
          <input
            class="md-checkbox"
            v-model="item.completed"
            type="checkbox"
            @click="completingtodo(item)"
          />
        </md-table-cell>
        <md-table-cell class="leo-center">
          <div v-if="editIndex === item.id">
            <md-field>
              <label>Edit todos: </label>
              <md-input
                v-model="originaltitle"
                type="text"
                @keydown.enter="updateTodo(item)"
              ></md-input>
            </md-field>
          </div>
          <div v-else>
            <div v-if="item.completed">
              <s>{{ item.title }}</s>
            </div>
            <div v-else>{{ item.title }}</div>
          </div>
        </md-table-cell>
        <md-table-cell class="leo-right">
          <md-button
            class="md-just-icon md-simple md-primary"
            @click="editTodo(item)"
          >
            <md-icon>edit</md-icon>
            <md-tooltip md-direction="top">Edit</md-tooltip>
          </md-button>
          <md-button
            class="md-just-icon md-simple md-danger"
            @click="deleteTodo(item)"
          >
            <md-icon>close</md-icon>
            <md-tooltip md-direction="top">Close</md-tooltip>
          </md-button>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { db, todosRef } from "../../firebase";
export default {
  title: "nav-tabs-table",
  data() {
    return {
      editIndex: null,
      originaltitle: "",
      selected: [],
      todos: [
        {
          title: "กินข้าวกินข้าวกินข้าวกินข้าวกินข้าวกินข้าวกินข้าว",
          completed: false,
        },
        {
          title: "ตีแบด",
          completed: false,
        },
        {
          completed: true,
          title: "ทำเจค",
        },
      ],
    };
  },
  methods: {
    completingtodo(item) {
      let x = {
        completed: !item.completed,
      };
      todosRef.doc(item.id).update(x);
    },
    deleteTodo(item) {
      todosRef.doc(item.id).delete();
      // console.log(`deleteTodo:${items.title}`);
    },
    editTodo(item) {
      if (this.editIndex === item.id) {
        this.editIndex = null;
      } else {
        this.editIndex = item.id;
        this.originaltitle = item.title;
      }
    },
    updateTodo(item) {
      let x = {
        title: this.originaltitle,
      };
      todosRef.doc(item.id).update(x);
      this.editIndex = null;
    },
  },
  mounted() {
    this.todos = [];
    todosRef.onSnapshot((snap) => {
      this.todos = [];
      snap.forEach((item) => {
        // console.log(item.data());
        let x = {
          id: item.id,
          title: item.data().title,
          completed: item.data().completed,
        };
        this.todos.push(x);
      });
    });
  },
};
</script>
<style >
.leo-left {
  min-width: 10%;
  max-width: 10%;
}
.leo-center {
  min-width: 70%;
  max-width: 70%;
  width: 100%;
}
.leo-right {
  min-width: 20%;
  max-width: 20%;
}

</style>