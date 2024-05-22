<template>
  <Main v-if="data && uiLanguage">
    <background />
    <!-- TODO - REMOVE THE FOLLOWING LINE -->
    {{ uiLanguage }}
    <resume>
      <Header>
        <profile-picture :profilePicture="getUrl(`assets/${data.image}`)" draggable="false" />
        <name-and-title :name="`${data.firstName} ${data.lastName}`" :title="data.title" />
      </Header>
      <section-title  title="About" />
      <about :about="data.about" />
      <section-title title="Skills" />
      <skills :skills="data.skills" />
      <section-title title="Contact & Languages" />
      <contact-and-languages>
        <contact :address="data.address" :emailAddress="data.emailAddress" />
        <languages :languages="data.languages" />
      </contact-and-languages>
      <section-title title="Education" />
      <education :educationUnits="data.educationUnits" />
      <section-title title="Experience" />
      <experience :experienceUnits="data.experienceUnits" />
      <section-title v-if="data.projects.length" title="Projects" />
      <projects v-if="data.projects.length" :projects="data.projects" />
    </resume>
  </Main>
  <!--
    TO ADD A MODAL CONTAINER INSTANCE
    <modal :theme="data.theme" ref="modalRef">CONTENT OF MODAL</modal>
  -->
  <modal ref="modalRef">
    <language-picker :languages="uiLanguages" @pick="setUiLanguage" />
  </modal>
</template>

<script setup>
  // COMPONENTS
  import Modal from '@/components/Modal.vue'
  import LanguagePicker from '@/components/LanguagePicker.vue'
  import Main from '@/components/Main.vue'
  import Background from '@/components/Background.vue'
  import Resume from '@/components/Resume.vue'
  import Header from '@/components/Header.vue'
  import ProfilePicture from '@/components/ProfilePicture.vue'
  import NameAndTitle from '@/components/NameAndTitle.vue'
  import SectionTitle from '@/components/SectionTitle.vue'
  import About from '@/components/About.vue'
  import Skills from '@/components/Skills.vue'
  import ContactAndLanguages from '@/components/ContactAndLanguages.vue'
  import Languages from '@/components/Languages.vue'
  import Contact from '@/components/Contact.vue'
  import Education from '@/components/Education.vue'
  import Experience from '@/components/Experience.vue'
  import Projects from '@/components/Projects.vue'

  // VUE
  import { ref, computed, onMounted } from 'vue'

  // STORE
  import { useDataStore } from '@/store/data'
  import { setTitle } from '@/utils/dom'
  import { useThemeStore } from './store/theme'
  import { useUiLanguageStore } from './store/uiLanguage'

  // REF
  const data = ref(null)
  const modalRef = ref()
  const uiLanguages = ref(['en'])

  // STORE OBJECTS
  const dataStore = useDataStore()
  const themeStore = useThemeStore()
  const uiLanguageStore = useUiLanguageStore()

  // COMPUTED PROPERTIES
  const uiLanguage = computed(() => uiLanguageStore.getUiLanguage())

  // METHODS
  const setUiLanguages = (ls) => { uiLanguages.value = ls }
  const openModal = () => { modalRef.value && modalRef.value.open() }
  const closeModal = () => { modalRef.value && modalRef.value.close() }
  const setUiLanguage = (l) => {
    uiLanguageStore.setUiLanguage(l)
    closeModal()
  }
  const fetchData = async () => {
    data.value = await dataStore.getData()
    setTitle(`${data.value.firstName} ${data.value.lastName}`)
    themeStore.setTheme(data.value.theme)
    setUiLanguages(data.value.uiLanguages)
  }
  const getUrl = (p) => new URL(`./${p}`, import.meta.url).href
  
  // LIFECYCLE HOOKS
  onMounted(() => {
    uiLanguage.value ?? openModal()
  })

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
