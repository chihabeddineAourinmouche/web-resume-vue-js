<template>
  <background v-if="data" />
  <resume v-if="data" :data="data" />
  <modal @onSelfClose="modalSelfClose" ref="modalRef">
    <language-picker :languages="uiLanguages" @pick="setUiLanguage" ref="languagePickerRef" />
  </modal>
</template>

<script setup>
  // COMPONENTS
  import Modal from '@/components/Modal.vue'
  import LanguagePicker from '@/components/LanguagePicker.vue'
  import Background from '@/components/Background.vue'
  import Resume from '@/components/Resume.vue'

  // VUE
  import { ref, computed, onMounted, onBeforeMount, onUpdated } from 'vue'

  // UTILS
  import { setBodyStyle } from '@/utils/dom'

  // STORE
  import { useDataStore } from '@/store/data'
  import { setTitle } from '@/utils/dom'
  import { useThemeStore } from '@/store/theme'
  import { useUiLanguageStore } from '@/store/uiLanguage'

  // REF
  const modalRef = ref()
  const languagePickerRef = ref()

  // STORE OBJECTS
  const dataStore = useDataStore()
  const themeStore = useThemeStore()
  const uiLanguageStore = useUiLanguageStore()

  // COMPUTED PROPERTIES
  const uiLanguages = computed(uiLanguageStore.getUiLanguages)
  const uiLanguage = computed(uiLanguageStore.getUiLanguage)
  const data = computed(() => dataStore.getData(uiLanguage.value?.code))
  const theme = computed(dataStore.getTheme)

  // METHODS
  const setTheme = () => { themeStore.setTheme(theme.value) }
  const openModal = () => { modalRef.value && modalRef.value.open() }
  const closeModal = () => { modalRef.value && modalRef.value.close() }
  const modalSelfClose = () => { languagePickerRef.value && languagePickerRef.value.cancelPicking() }
  const setUiLanguage = (l = null) => {
    uiLanguageStore.setUiLanguage(l)
    closeModal()
  }
  const fetchData = async () => {
    await dataStore.fetchData()
    setTheme()
  }
  
  // LIFECYCLE HOOKS
  onBeforeMount(fetchData)
  onMounted(() => {
    !uiLanguage.value && openModal()
    if (data.value) {
      setTitle(`${data.value.firstName} ${data.value.lastName}`)
      setBodyStyle({ backgroundColor: theme.value.primaryColor })
    }
  })
  onUpdated(() => {
    setTitle(`${data.value.firstName} ${data.value.lastName}`)
    setBodyStyle({ backgroundColor: theme.value.primaryColor })
  })
</script>

<style scoped></style>
