<template>
  <div class="w-4/5 h-full mx-auto grid-cols-1 grid xl:grid-cols-12 gap-6 py-6">
    <div class="xl:col-span-3 relative"><slot name="left"></slot></div>
    <div class="xl:col-span-6 relative"><slot name="center"></slot></div>
    <div class="xl:col-span-3 relative"><slot name="right"></slot></div>
  </div>
</template>