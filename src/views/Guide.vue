<template>
  <Layout class="bg-gray mt-14">
    <template #left>
      <UserInfo class="hidden xl:block" />
    </template>
    <template #center>
      <TabGuide class="px-2 py-6 sm:px-0">
        <TabPanel>
          <CardGuide />
        </TabPanel>
      </TabGuide>
    </template>
  </Layout>
</template>

<script>
import TabGuide from "@/components/guide/TabGuide.vue";
import { TabPanel } from "@headlessui/vue";
import UserInfo from "@/components/home/post/UserInfo.vue";
import Layout from "@/components/Layout.vue";
import CardGuide from "@/components/guide/CardGuide.vue";

export default {
  name: "Home",
  components: {
    TabGuide,
    UserInfo,
    TabPanel,
    Layout,
    CardGuide,
  },
};
</script>
