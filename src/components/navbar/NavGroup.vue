<template>
  <div class="flex font-bold gap-8 text-gray-500">
    <nav-link
      v-for="item in items"
      :key="item.to"
      :icon="item.icon"
      :name="item.name"
      :to="item.to"
      :size="size"
    />
  </div>
</template>

<script>
import NavLink from "@/components/navbar/NavLink.vue";

export default {
  components: {
    NavLink,
  },
  props: {
    size: {
      type: Number,
      required: false,
      default: 24,
    },
  },
  data() {
    return {
      items: [
        { name: "Accueil", to: "/", icon: "home" },
        { name: "Carte", to: "/map", icon: "map" },
        { name: "Créer", to: "/create", icon: "plus-square" },
        { name: "Guide", to: "/guide", icon: "book" },
        { name: "Messages", to: "/chat", icon: "message-circle" },
      ],
    };
  },
};
</script>