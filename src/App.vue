<template>
  <Main v-if="data" :theme="data.theme">
    <background :theme="data.theme" />
    <resume :theme="data.theme">
      <Header>
        <profile-picture :theme="data.theme" :data="{ profilePicture: `src/assets/${data.image}` }" draggable="false" />
        <name-and-title :theme="data.theme" :data="{ name: `${data.firstName} ${data.lastName}`, title: data.title }" />
      </Header>
      <section-title :theme="data.theme"  title="About" />
      <about :theme="data.theme" :data="{ about: data.about }" />
      <section-title :theme="data.theme" title="Skills" />
      <skills :theme="data.theme" :data="{ skills: data.skills }" />
      <section-title :theme="data.theme" title="Contact & Languages" />
      <contact-and-languages>
        <contact :theme="data.theme" :data="{ address: data.address, emailAddress: data.emailAddress }" />
        <languages :theme="data.theme" :data="{ languages: data.languages }" />
      </contact-and-languages>
      <section-title :theme="data.theme" title="Education" />
      <education :theme="data.theme" :data="{ educationUnits: data.educationUnits }" />
      <section-title :theme="data.theme" title="Experience" />
      <experience :theme="data.theme" :data="{ experienceUnits: data.experienceUnits }" />
      <section-title :theme="data.theme" title="Projects" />
      <projects :theme="data.theme" :projects="data.projects" />
    </resume>
  </Main>
  <!--
    TO ADD A MODAL CONTAINER INSTANCE
    <modal :theme="data.theme" ref="modalRef">CONTENT OF MODAL</modal>
  -->
</template>

<script setup>
  /*
  * import Modal from './components/Modal.vue'
  */
  import Main from './components/Main.vue'
  import Background from './components/Background.vue'
  import Resume from './components/Resume.vue'
  import Header from './components/Header.vue'
  import ProfilePicture from './components/ProfilePicture.vue'
  import NameAndTitle from './components/NameAndTitle.vue'
  import SectionTitle from './components/SectionTitle.vue'
  import About from './components/About.vue'
  import Skills from './components/Skills.vue'
  import ContactAndLanguages from './components/ContactAndLanguages.vue'
  import Languages from './components/Languages.vue'
  import Contact from './components/Contact.vue'
  import Education from './components/Education.vue'
  import Experience from './components/Experience.vue'
  import Projects from './components/Projects.vue'

  import { ref } from 'vue'

  import { useDataStore } from './store/data'
  const dataStore = useDataStore()

  import { useDomStore } from './store/dom'
	const domStore = useDomStore()
  
  const data = ref(null)

  const fetchData = async () => {
    data.value = await dataStore.getData()
    domStore.setTitle(`${data.value.firstName} ${data.value.lastName}`)
  }

  fetchData()

  /*
  * TO USE A MODAL, CREATE A MODAL COMPONENT INSTANCE WITH A
  * REFERENCE (ref="modalRef") IN THE TEMPLATE,
  * THEN CREATE A REFERENCE VARIABLE const modalRef = ref(),
  * THEN CALL THE open() METHOD OF REFERENCE'S VALUE
  * modalRef.value && modalRef.value.open()
  */
</script>

<style scoped></style>
