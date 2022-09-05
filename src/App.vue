<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/dragdrop">dragdrop</router-link> -->

    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Drag & Drop' }">Drag & Drop</router-link>
  </div>
  <router-view />
</template>
