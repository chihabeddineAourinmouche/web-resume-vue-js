<template>
  <!-- TODO - REMOVE @click EVENT AS IT IS ONLY USED FOR DEV PURPOSES -->
  <background v-if="data" />
  <resume v-if="data && uiLanguage" :data="data" @onDataLanguageButtonClick="openDataLanguagePicker" />
  <modal icon="fa-solid fa-language" @onSelfClose="modalSelfClose" ref="modalRef">
    <language-picker
      v-if="displayUiLanguagePicker === true"
      :message="uiLanguagePickerMessage"
      :languages="uiLanguages"
      @pick="setUiLanguage"
      ref="uiLanguagePickerRef"
    />
    <language-picker
      v-if="displayDataLanguagePicker === true"
      :message="dataLanguagePickerMessage"
      :languages="dataLanguages"
      @pick="setDataLanguage"
      ref="dataLanguagePickerRef"
    />
  </modal>
</template>

<script setup>
  // COMPONENTS
  import Modal from '@/components/Modal.vue'
  import LanguagePicker from '@/components/LanguagePicker.vue'
  import Background from '@/components/Background.vue'
  import Resume from '@/components/Resume.vue'

  // VUE
  import { ref, computed, onBeforeMount } from 'vue'

  // UTILS
  import { setBodyStyle } from '@/utils/dom'

  // STORE
  import { useDataStore } from '@/store/data'
  import { setTitle } from '@/utils/dom'
  import { useThemeStore } from '@/store/theme'
  import { useUiLanguageStore } from '@/store/uiLanguage'

  // REF
  const modalRef = ref()
  const isUiLanguagePickerOn = ref()
  const isDataLanguagePickerOn = ref()
  const uiLanguagePickerRef = ref()
  const dataLanguagePickerRef = ref()

  // STORE OBJECTS
  const dataStore = useDataStore()
  const themeStore = useThemeStore()
  const uiLanguageStore = useUiLanguageStore()

  // LOCALE
  const locale = {
    dataLanguagePickerMessage: {
      en: "Pick a language you would like to view the UI in (Default is English)",
      es: "Seleccione la versión del idioma de los datos del currículum",
      fr: "Sélectionnez la version linguistique des données du CV"
    }
  }

  // COMPUTED PROPERTIES
  const displayDataLanguagePicker = computed(() => isDataLanguagePickerOn.value)
  const displayUiLanguagePicker = computed(() => isUiLanguagePickerOn.value)
  const uiLanguages = computed(uiLanguageStore.getUiLanguages)
  const uiLanguage = computed(uiLanguageStore.getUiLanguage)
  const data = computed(() => dataStore.getData())
  const dataLanguages = computed(dataStore.getDataLanguages)
  const dataLanguage = computed(dataStore.getDataLanguage)
  const theme = computed(dataStore.getTheme)
  const dataLanguagePickerMessage = computed(() => getLocaleFor('dataLanguagePickerMessage'))
  const uiLanguagePickerMessage = computed(() => "Pick a language you would like to view the UI in (Default is English)")

  // METHODS
  const openDataLanguagePicker = () => {
    isDataLanguagePickerOn.value = true
    openModal()
  }
  const openUiLanguagePicker = () => {
    isUiLanguagePickerOn.value = true
    openModal()
  }
  const setTheme = () => { themeStore.setTheme(theme.value) }
  const openModal = () => { modalRef.value && modalRef.value.open() }
  const closeModal = () => {
    modalRef.value && modalRef.value.close()
    isDataLanguagePickerOn.value = false
    isUiLanguagePickerOn.value = false
  }
  const modalSelfClose = () => {
    uiLanguagePickerRef.value && uiLanguagePickerRef.value.cancelPicking()
    dataLanguagePickerRef.value && dataLanguagePickerRef.value.cancelPicking()
    isDataLanguagePickerOn.value = false
    isUiLanguagePickerOn.value = false
    !uiLanguage.value && uiLanguageStore.setUiLanguage()
  }
  const setUiLanguage = (l = null) => {
    uiLanguageStore.setUiLanguage(l)
    closeModal()
  }
  const setDataLanguage = (l = null) => {
    dataStore.setDataLanguage(l)
    closeModal()
  }
  const fetchData = async () => { await dataStore.fetchData() }
  const getLocaleFor = (text) => locale[text][uiLanguage.value.code]
  
  // LIFECYCLE HOOKS
  onBeforeMount(async () => {
    await fetchData()
    setTheme()
    setTitle(`${data.value.firstName} ${data.value.lastName}`)
    setBodyStyle({ backgroundColor: theme.value.primaryColor })
    !uiLanguage.value && openUiLanguagePicker()//openModal()
  })
</script>

<style scoped></style>
