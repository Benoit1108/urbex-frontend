<template>
  <Layout class="bg-gray mt-14">
    <template #center>
      <div
        class="
          rounded-lg
          shadow-md
          bg-white
          w-full
          flex flex-col
          px-4
          mt-4
          mb-8
        "
      >
        <h2 class="font-semibold text-xl flex justify-center my-4">
          Créer un nouveau post
        </h2>
        <TabStep v-model="currentIndex">
          <FirstStep @nextStep="nextStep" />
          <SecondStep @nextStep="nextStep" />
          <ThirdStep @nextStep="submit" />
        </TabStep>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import Layout from "@/components/Layout.vue";
import TabStep from "@/components/home/post/TabStep.vue";
import FirstStep from "../components/home/post/FirstStep.vue";
import SecondStep from "../components/home/post/SecondStep.vue";
import ThirdStep from "../components/home/post/ThirdStep.vue";
import { ref } from "vue";
import { newPost } from "@/services/posts.api.js";
let currentIndex = ref(0);

function nextStep() {
  currentIndex.value++;
}
function submit() {
  newPost("Encore un nouveau post mais depuis le frontend", 1)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
}
</script>
