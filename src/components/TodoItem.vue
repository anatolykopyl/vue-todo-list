<template>
  <div class="todo-item" v-bind:class='{"is-complete":todo.completed}' v-on:click="$emit('toggle-complete', todo.id)">
    <p>
      {{ todo.name }}
      <button @click="$emit('del-todo', todo.id)" class="delete">&#10060;</button>
      <br>
    </p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TodoItem",
  props: ["todo"]
}
</script>

<style scoped>
.todo-item {
  margin: auto;
  text-align: left;
  width: 400px;
  cursor: pointer;
  font-weight: Regular;
}

.is-complete {
  text-decoration: line-through;
}

.delete {
  float: right;
  border: none;
  background-color: Transparent;
  cursor: pointer;
}
</style>
