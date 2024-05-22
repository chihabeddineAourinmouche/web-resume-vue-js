<template>
  <Main v-if="data && uiLanguage && theme">
    <background />
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
  <modal @onSelfClose="modalSelfClose" ref="modalRef">
    <language-picker :languages="uiLanguages" @pick="setUiLanguage" ref="languagePickerRef" />
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
  import { ref, computed, onMounted, onBeforeMount } from 'vue'

  // STORE
  import { useDataStore } from '@/store/data'
  import { setTitle } from '@/utils/dom'
  import { useThemeStore } from './store/theme'
  import { useUiLanguageStore } from './store/uiLanguage'

  // REF
  const modalRef = ref()
  const languagePickerRef = ref()

  // STORE OBJECTS
  const dataStore = useDataStore()
  const themeStore = useThemeStore()
  const uiLanguageStore = useUiLanguageStore()

  // COMPUTED PROPERTIES
  const uiLanguage = computed(uiLanguageStore.getUiLanguage)
  const data = computed(() => dataStore.getData(uiLanguage.value))
  const uiLanguages = computed(dataStore.getUiLanguages)
  const theme = computed(dataStore.getTheme)

  // METHODS
  const getUrl = (p) => new URL(`./${p}`, import.meta.url).href
  const setTheme = () => { themeStore.setTheme(theme.value) }
  const openModal = () => { modalRef.value && modalRef.value.open() }
  const closeModal = () => { modalRef.value && modalRef.value.close() }
  const modalSelfClose = () => { languagePickerRef.value && languagePickerRef.value.cancelPicking() }
  const setUiLanguage = (l) => {
    uiLanguageStore.setUiLanguage(l)
    closeModal()
    setTitle(`${data.value.firstName} ${data.value.lastName}`)
  }
  const fetchData = async () => {
    await dataStore.fetchData()
    setTheme()
  }
  
  // LIFECYCLE HOOKS
  onBeforeMount(fetchData)
  onMounted(() => {
    !uiLanguage.value && openModal()
    data.value && setTitle(`${data.value.firstName} ${data.value.lastName}`)
  })

  /*
  * TO USE A MODAL, CREATE A MODAL COMPONENT INSTANCE WITH A
  * REFERENCE (ref="modalRef") IN THE TEMPLATE,
  * THEN CREATE A REFERENCE VARIABLE const modalRef = ref(),
  * THEN CALL THE open() METHOD OF REFERENCE'S VALUE
  * modalRef.value && modalRef.value.open()
  */
</script>

<style scoped></style>
