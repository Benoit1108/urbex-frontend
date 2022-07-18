<template>
  <Layout class="bg-gray mt-14">
    <template #left>
      <UserInfo class="hidden xl:block" />
    </template>
    <template #center>
      <Post />
    </template>
  </Layout>
</template>

<script>
import Post from "@/components/home/post/Post.vue";
import Layout from "@/components/Layout.vue";
import UserInfo from "@/components/profil/userInfo.vue";

export default {
  components: {
    Post,
    Layout,
    UserInfo,
  },
};
</script>
