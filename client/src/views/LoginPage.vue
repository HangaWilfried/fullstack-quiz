<template>
  <div class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50 mx-4">
    <div class="absolute mx-auto w-auto max-w-2xl">
      <div class="bg-yellow-50 rounded-lg rounded shadow-2xl flex flex-col items-center place-content-center">
        <form action="" class="text-gray-800 flex flex-col items-center">
          <div>
            <label for="">full name</label>
            <input type="text" v-model="registration.fullName">
          </div>
          <div>
            <label for="">username</label>
            <input type="text" v-model="registration.username">
          </div>
          <div>
            <label for="">select difficulty level</label>
            <select v-model="registration.level">
              <option></option>
            </select>
          </div>
          <div>
            <button></button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="absolute inset-0 z-40 opacity-25 bg-blue-300"></div>
</template>

<script lang="ts" setup>
  import { reactive } from "vue";

  const registration = reactive({
    fullName: "",
    username: "",
    level: ""
  });
</script>
