<template>
  <div id="resume-container">
    <slot />
  </div>
</template>

<script setup />

<style scoped>
  #resume-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 700px;
    min-width: 350px;
    min-height: 100vh;
    padding: 20px;
  }
</style>
