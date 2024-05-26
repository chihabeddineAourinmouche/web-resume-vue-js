<template>
  <div id="resume-container">
    <Header @onDataLanguageButtonClick="$emit('onDataLanguageButtonClick')">
      <profile-picture :profilePicture="data.image" draggable="false" />
      <name-and-title :name="`${data.firstName} ${data.lastName}`" :title="data.title" />
    </Header>
    
    <about :about="data.about" />
    
    <skills :skills="data.skills" @onUpdateProjectSearchString="updateProjectSearchString" />
    
    <contact-and-languages :languages="data.languages">
      <contact :address="data.address" :emailAddress="data.emailAddress" />
      <languages :languages="data.languages" />
    </contact-and-languages>
    
    <education :educationUnits="data.educationUnits" />
    
    <experience :experienceUnits="data.experienceUnits" />
    
    <projects v-if="data.projects.length" :projects="data.projects" ref="projectsRef" />
  </div>
</template>

<script setup>
  // COMPONENTS
  import Header from '@/components/Header.vue'
  import ProfilePicture from '@/components/ProfilePicture.vue'
  import NameAndTitle from '@/components/NameAndTitle.vue'
  import About from '@/components/About.vue'
  import Skills from '@/components/Skills.vue'
  import ContactAndLanguages from '@/components/ContactAndLanguages.vue'
  import Languages from '@/components/Languages.vue'
  import Contact from '@/components/Contact.vue'
  import Education from '@/components/Education.vue'
  import Experience from '@/components/Experience.vue'
  import Projects from '@/components/Projects.vue'

  // VUE
  import { ref } from 'vue'

  // REF
  const projectsRef = ref('')

  // EMITS
  defineEmits(['onDataLanguageButtonClick'])

  // PROPS
  defineProps({
    data: { type: Object }
  })

  // METHODS
  const updateProjectSearchString = (s) => {
    projectsRef.value && projectsRef.value.setSearchString(s)
  }
</script>

<style scoped>
  #resume-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;
    max-width: 700px;
    min-width: 350px;
    min-height: 100vh;
    padding: 0px 20px 20px 20px;
  }
</style>
