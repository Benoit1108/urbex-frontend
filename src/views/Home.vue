<template>
  <Layout class="bg-gray mt-14">
    <template #left>
      <UserInfo class="hidden xl:block" />
    </template>
    <template #center>
      <Carousel />
      <Tab class="px-2 py-6 sm:px-0">
        <TabPanel>
          <Post />
        </TabPanel>
      </Tab>
    </template>
    <template #right>
      <Suggestion class="hidden xl:block" />
    </template>
  </Layout>
</template>

<script>
import Tab from "@/components/home/Tab.vue";
import { TabPanel } from "@headlessui/vue";
import Carousel from "@/components/home/Carousel.vue";
import Post from "@/components/home/post/Post.vue";
import Suggestion from "@/components/home/post/Suggestion.vue";
import UserInfo from "@/components/home/post/UserInfo.vue";
import Layout from "@/components/Layout.vue";

export default {
  name: "Home",
  components: {
    Tab,
    Carousel,
    Post,
    Suggestion,
    UserInfo,
    TabPanel,
    Layout,
  },
};
</script>
