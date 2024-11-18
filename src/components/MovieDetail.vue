<template>
  <div class="bg-indigo-600 p-6">
    <div class="grid grid-cols-12 sm:gap-10 mx-auto">
      <div class="col-span-12 sm:col-span-4 sm:block">
        <div class="flex sm:hidden items-center">
          <img :src="detail.Poster" alt="image" contain class="rounded-lg h-40 w-40 bg-red-400" />
          <img
            :src="detail.Poster"
            alt="image"
            contain
            class="rounded-lg bg-opacity-55 h-56 w-full bg-red-400"
          />
        </div>
        <img
          :src="detail.Poster"
          alt="image"
          contain
          class="rounded-lg hidden sm:block bg-red-400"
        />
      </div>
      <div class="col-span-12 bg-indigo-600 sm:col-span-8">
        <div>
          <div class="text-3xl mb-3 md:mb-0 cursor-pointer text-white hover:text-gray-400">
            <span class="font-semibold">
              {{ detail?.Title }}
            </span>
            <span class="ms-2 text-gray-400"> ({{ detail?.Year }}) </span>
          </div>
          <div
            class="sm:flex bg-black sm:bg-indigo-600 sm:mt-1 p-3 sm:p-0 grid grid-cols-12 text-white text-sm items-center gap-3"
          >
            <div class="border col-span-3 text-sm border-gray-400 rounded-sm text-gray-400 px-1">
              {{ detail?.Rated }}
            </div>
            <div class="col-span-5">
              {{ detail?.Released }}
              (US)
            </div>
            <div class="col-span-12">
              {{ detail?.Genre }}
            </div>
            <div class="col-span-12">
              {{ detail?.Runtime }}
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 sm:flex items-center mt-4 gap-3">
          <div class="col-span-6 sm:col-span-auto gap-3 items-center flex">
            <div
              class="h-16 border-4 pt-3 pl-2 border-green-500 rounded-full bg-black text-white font-bold text-xl w-16"
            >
              76%
            </div>
            <div class="text-white">
              <div>User</div>
              <div>Score</div>
            </div>
          </div>
          <div class="col-span-6 sm:col-span-auto flex items-center cursor-pointer">
            <div
              v-for="i in 2"
              :key="i"
              :class="{ '-ms-2': i == 2 }"
              class="h-10 border-2 hover:h-11 hover:w-11 border-black rounded-full w-10 bg-white"
            ></div>
          </div>
          <div
            class="bg-blue-900 col-span-6 sm:col-span-auto font-bold hover:px-4 cursor-pointer hover:py-3 text-sm flex gap-2 items-center px-3 py-2 text-white rounded-2xl"
          >
            What's your <span class="underline">vibe</span> ?
            <div class="bg-white text-black text-xs italic font-bold rounded-full h-3 w-3">
              <span class="mx-auto ps-1">i</span>
            </div>
          </div>
        </div>
        <div class="flex gap-3 mt-4 items-center">
          <div
            v-for="i in [
              { t: 'L', d: 'Custom List' },
              { t: 'S', d: 'Save' },
              { t: 'F', d: 'Favroite' },
            ]"
            :key="i.t"
            :title="i.d"
            class="h-10 w-10 rounded-full pt-2 pl-4 text-white bg-black"
          >
            {{ i.t }}
          </div>
          <div class="text-white hover:text-gray-400 cursor-pointer">Play trailer</div>
        </div>
        <div class="mt-4 text-gray-400 italic gap-3">Obviously.</div>
        <div class="mt-1 text-lg text-white">
          <div class="text-white">Overview</div>
          <div class="mt-1 text-sm">
            {{ detail?.Plot }}
          </div>
        </div>
        <div class="grid mt-6 gap-4 grid-cols-12">
          <div
            v-for="item in detail?.Writer?.split(',')"
            :key="item"
            class="col-span-4 text-sm text-white"
          >
            <div class="font-bold">
              {{ item }}
            </div>
            <div class="text-gray-400">Writer</div>
          </div>
          <div
            v-for="item in detail?.Actors?.split(',')"
            :key="item"
            class="col-span-4 text-sm text-white"
          >
            <div class="font-bold">
              {{ item }}
            </div>
            <div class="text-gray-400">Actor</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMovieDetail } from '@/stores/moviedetail'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
const { detail } = storeToRefs(useMovieDetail())
onMounted(() => {
  useMovieDetail().getMovieDetail()
})
</script>
