<template>
  <header class="bg-indigo-800">
    <nav class="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
      <div class="flex gap-6">
        <div class="flex gap-2 items-center">
          <div class="text-blue-400 text-lg font-bold">TMD</div>
          <div class="h-4 w-8 bg-blue-400 rounded-full text-blue-400"></div>
        </div>
        <div class="hidden sm:flex gap-3 text-white text-sm items-center">
          <div class="">Movies</div>
          <div class="">TV Shows</div>
          <div>People</div>
          <div>More</div>
        </div>
      </div>
      <div class="flex text-white items-center gap-6 text-sm">
        <div class="hidden sm:block font-bold text-xl">+</div>
        <div class="hidden sm:block">EN</div>
        <div>Login</div>
        <div class="cursor-pointer" @click="showSearch = !showSearch">
          {{ showSearch ? 'X' : 'Search' }}
        </div>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
  </header>
  <div v-if="!showSearch" class="text-center underline justify-center gap-6 py-2 flex">
    <div>Overview</div>
    <div>Media</div>
    <div>Fandon</div>
    <div>Share</div>
  </div>
  <div v-if="showSearch" class="">
    <input type="text" placeholder="Search here" class="w-full py-2 px-3" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showSearch = ref(false)
</script>
