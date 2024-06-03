const getUiText = (ui) => ({
	skills: {
		sectiontitletext: { en: 'Skills', es: 'Habilidades', fr: 'Compétences' },
		filterhinttext: {
			en: "Filter by category",
			es: "Filtrar por categoría",
			fr: "Filtrer par catégorie"
		},
		infobubbletext: {
			en: "Press a skill to see how it's been used",
			es: "Pulsa una habilidad para ver cómo se ha utilizado",
			fr: "Appuyez sur une compétence pour voir comment elle a été utilisée"
		},
		skillLink: 'projects'
	},
	projects: {
		projects: { en: 'Projects', es: 'Proyectos', fr: 'Projets' },
		noprojectfallback: {
			en: "That skill you are searching for might have been used in a project that is not listed.",
			es: "Es posible que la habilidad que busca se haya utilizado en un proyecto que no se encuentra en la lista.",
			fr: "La compétence que vous recherchez a peut-être été utilisée dans un projet qui ne figure pas sur la liste."
		},
		infobubbletext: {
			en: "Clicking a skill within a project will reveal its applications in other listed projects.",
			es: "Al hacer clic en una habilidad dentro de un proyecto, se mostrarán sus aplicaciones en otros proyectos enumerados.",
			fr: "Cliquer sur une compétence au sein d'un projet dévoilera ses applications dans d'autres projets listés."
		},
	},
	app: {
		datalanguagepickermessage: {
		  en: "Pick a language you would like to view the UI in (Default is English)",
		  es: "Seleccione la versión del idioma de los datos del currículum",
		  fr: "Sélectionnez la version linguistique des données du CV"
		},
		uilanguagepickmessage: "Pick a language you would like to view the UI in (Default is English)",
	  },
	about: {
		about: { en: 'About', es: 'Acerca De', fr: 'A Propos' }
	},
	contactandlanguages: {
		contact: { en: 'Contact', es: 'Contacto', fr: 'Contact' },
		languages: { en: 'Languages', es: 'Idiomas', fr: 'Langues' },
	},
	education: {
		education: { en: 'Education', es: 'Educación', fr: 'Formation' }
	},
	experience: {
		experience: { en: 'Professional Experience', es: 'Experiencia Profesional', fr: 'Experience Professionnelle' }
	},
	languages: {
		0: { en: 'Beginner', es: 'Principiante', fr: 'Débutant' },
		1: { en: 'Intermediate', es: 'Intermedio', fr: 'Intermédiaire' },
		2: { en: 'Proficient', es: 'Avanzado', fr: 'Avancé' },
		3: { en: 'Bilingual', es: 'Bilingüe', fr: 'Bilingue' },
	},
}[ui])

export {
	getUiText
}
