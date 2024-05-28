const HARDCODED_RESPONSE = {
	"data": {
		"record": {
			"resume": {
				"id": 1,
				"educationUnits": [
					{
						"id": 1,
						"endYear": 2023,
						"school": "University of the Future",
						"major": "Master in Artificial Intelligence",
						"description": {
							"en": "I delved into the fascinating world of Artificial Intelligence, exploring its applications in various fields and developing my problem-solving and analytical skills.",
							"es": "Me sumergí en el fascinante mundo de la Inteligencia Artificial, explorando sus aplicaciones en diversos campos y desarrollando mis habilidades de resolución de problemas y análisis.",
							"fr": "Je me suis plongé dans le monde fascinant de l'intelligence artificielle, explorant ses applications dans divers domaines et développant mes compétences en résolution de problèmes et en analyse."
						}
					},
					{
						"id": 2,
						"endYear": 2020,
						"school": "University of Innovation",
						"major": "Bachelor in Software Engineering",
						"description": {
							"en": "I mastered the art of software development, learning how to design, build, and test robust and efficient software applications.",
							"es": "Dominé el arte del desarrollo de software, aprendiendo a diseñar, construir y probar aplicaciones de software robustas y eficientes.",
							"fr": "J'ai maîtrisé l'art du développement logiciel, en apprenant à concevoir, construire et tester des applications logicielles robustes et efficaces."
						}
					},
					{
						"id": 3,
						"endYear": 2016,
						"school": "Institute of Biotechnology",
						"major": "Bachelor in Biotechnology",
						"description": {
							"en": "I combined my passion for biology and technology, gaining a comprehensive understanding of biotechnology and its potential to revolutionize various industries.",
							"es": "Combiné mi pasión por la biología y la tecnología, obteniendo una comprensión integral de la biotecnología y su potencial para revolucionar diversas industrias.",
							"fr": "J'ai combiné ma passion pour la biologie et la technologie, acquérant une compréhension globale de la biotechnologie et de son potentiel pour révolutionner diverses industries."
						}
					},
					{
						"id": 4,
						"endYear": 2013,
						"school": "High School of Excellence",
						"major": "Science",
						"description": {
							"en": "I laid the foundation for my future STEM studies, excelling in science courses and developing a strong interest in problem-solving and scientific inquiry.",
							"es": "Senté las bases para mis futuros estudios de STEM, sobresaliendo en cursos de ciencias y desarrollando un fuerte interés en la resolución de problemas y la investigación científica.",
							"fr": "J'ai posé les bases de mes futures études STEM, excellant dans les cours de sciences et développant un vif intérêt pour la résolution de problèmes et la recherche scientifique."
						}
					}
				]
				,
				"experienceUnits": [
					{
						"id": 1,
						"startYear": 2023,
						"endYear": 2024,
						"company": "MegaCorp",
						"jobTitle": {
							"en": "Senior Software Engineer",
							"es": "Ingeniero de Software Sénior",
							"fr": "Ingénieur logiciel sénior"
						},
						"description": {
							"en": "I delved into the development of cutting-edge software solutions, working on projects that revolutionize various industries.",
							"es": "Me sumergí en el desarrollo de soluciones de software de vanguardia, trabajando en proyectos que revolucionan diversas industrias.",
							"fr": "Je me suis plongé dans le développement de solutions logicielles de pointe, travaillant sur des projets qui révolutionnent diverses industries."
						}
					},
					{
						"id": 2,
						"startYear": 2022,
						"endYear": 2023,
						"company": "Innovate Inc.",
						"jobTitle": {
							"en": "Software Architect",
							"es": "Arquitecto de Software",
							"fr": "Architecte logiciel"
						},
						"description": {
							"en": "I played a pivotal role in designing and implementing complex software architectures, ensuring scalability, performance, and security.",
							"es": "Jugué un papel fundamental en el diseño e implementación de arquitecturas de software complejas, asegurando escalabilidad, rendimiento y seguridad.",
							"fr": "J'ai joué un rôle crucial dans la conception et la mise en œuvre d'architectures logicielles complexes, garantissant l'évolutivité, les performances et la sécurité."
						}
					},
					{
						"id": 3,
						"startYear": 2021,
						"endYear": 2022,
						"company": "Tech Solutions Enterprise",
						"jobTitle": {
							"en": "Full-Stack Developer",
							"es": "Desarrollador Full-Stack",
							"fr": "Développeur Full-Stack"
						},
						"description": {
							"en": "I mastered both front-end and back-end development, building robust and user-friendly web applications.",
							"es": "Dominé el desarrollo tanto front-end como back-end, creando aplicaciones web robustas y fáciles de usar.",
							"fr": "J'ai maîtrisé le développement front-end et back-end, créant des applications Web robustes et conviviales."
						}
					},
					{
						"id": 4,
						"startYear": 2021,
						"endYear": 2021,
						"company": "StartUpX",
						"jobTitle": {
							"en": "Software Development Intern",
							"es": "Pasante de Desarrollo de Software",
							"fr": "Stagiaire en développement logiciel"
						},
						"description": {
							"en": "Gained valuable hands-on experience in software development, contributing to real-world projects under the guidance of experienced mentors.",
							"es": "Obtuve una valiosa experiencia práctica en desarrollo de software, contribuyendo a proyectos del mundo real bajo la guía de mentores experimentados.",
							"fr": "J'ai acquis une précieuse expérience pratique en développement logiciel, en contribuant à des projets concrets sous la supervision de mentors expérimentés."
						}
					},
					{
						"id": 5,
						"startYear": 2020,
						"endYear": 2020,
						"company": "Research Lab",
						"jobTitle": {
							"en": "Research Intern",
							"es": "Pasante de Investigación",
							"fr": "Stagiaire en recherche"
						},
						"description": {
							"en": "Engaged in cutting-edge research projects, applying my knowledge and skills to explore new technological frontiers.",
							"es": "Participé en proyectos de investigación de vanguardia, aplicando mis conocimientos y habilidades para explorar nuevas fronteras tecnológicas.",
							"fr": "J'ai participé à des projets de recherche de pointe, en appliquant mes connaissances et mes compétences pour explorer de nouvelles frontières technologiques."
						}
					}
				],
				"languages": [
					{
						"id": 1,
						"name": {
							"en": "Arabic",
							"es": "Árabe",
							"fr": "Arabe"
						},
						"level": 3,
					},
					{
						"id": 2,
						"name": {
							"en": "English",
							"es": "Inglés",
							"fr": "Anglais"
						},
						"level": 3,
					},
					{
						"id": 3,
						"name": {
							"en": "French",
							"es": "Francés",
							"fr": "Français"
						},
						"level": 3,
					},
					{
						"id": 4,
						"name": {
							"en": "Spanish",
							"es": "Español",
							"fr": "Espagnol"
						},
						"level": 0,
					}
				],
				"projects": [
					{
						"id": 1,
						"name": "Interactive Resume Builder",
						"description": {
							"en": "Developed an interactive web application that allows users to create dynamic and personalized resumes with multimedia elements. This tool aims to enhance user engagement and make resumes more visually appealing.",
							"es": "Desarrollé una aplicación web interactiva que permite a los usuarios crear currículums vitae dinámicos y personalizados con elementos multimedia. Esta herramienta tiene como objetivo mejorar la participación del usuario y hacer que los currículums vitae sean más atractivos visualmente.",
							"fr": "J'ai développé une application Web interactive qui permet aux utilisateurs de créer des CV dynamiques et personnalisés avec des éléments multimédias. Cet outil vise à accroître l'engagement des utilisateurs et à rendre les CV plus attrayants visuellement."
						},
						"skills": [
							"React",
							"Next.js",
							"Tailwind CSS",
							"JavaScript",
							"Git",
							"Cloudinary"
						]
					},
					{
						"id": 2,
						"name": "3D Game Development Challenge",
						"description": {
							"en": "Collaborated with a team of 2 students to participate in a video game development contest using Babylon.JS, a 3D rendering technology. Our team created an immersive and engaging game that showcased our technical skills and creativity.",
							"es": "Colaboré con un equipo de 2 estudiantes para participar en un concurso de desarrollo de videojuegos utilizando Babylon.JS, una tecnología de renderizado 3D. Nuestro equipo creó un juego inmersivo y atractivo que mostró nuestras habilidades técnicas y creatividad.",
							"fr": "J'ai collaboré avec une équipe de 2 étudiants pour participer à un concours de développement de jeux vidéo utilisant Babylon.JS, une technologie de rendu 3D. Notre équipe a créé un jeu immersif et captivant qui mettait en valeur nos compétences techniques et notre créativité."
						},
						"skills": [
							"JavaScript",
							"Babylon.JS",
							"Blender",
							"Git",
							"3D Modeling"
						]
					},
					{
						"id": 3,
						"name": "Pixel Art Game Creation",
						"description": {
							"en": "As part of a 3-student team, we participated in a video game contest using the Pico8 platform. Our game, inspired by retro pixel art style, won the prize for best graphics, demonstrating our artistic vision and technical proficiency.",
							"es": "Como parte de un equipo de 3 estudiantes, participamos en un concurso de videojuegos utilizando la plataforma Pico8. Nuestro juego, inspirado en el estilo retro de pixel art, ganó el premio a los mejores gráficos, demostrando nuestra visión artística y destreza técnica.",
							"fr": "En tant que membre d'une équipe de 3 étudiants, nous avons participé à un concours de jeux vidéo en utilisant la plateforme Pico8. Notre jeu, inspiré du style rétro pixel art, a remporté le prix des meilleurs graphismes, démontrant notre vision artistique et notre maîtrise technique."
						},
						"skills": [
							"Pico8",
							"Lua",
							"Pixel Art",
							"Git"
						]
					},
					{
						"id": 4,
						"name": "Line Following Robot",
						"description": {
							"en": "Designed and constructed a line-following robot using Arduino, demonstrating my ability to apply electronics and programming principles to solve real-world problems.",
							"es": "Diseñé y construí un robot seguidor de líneas utilizando Arduino, demostrando mi capacidad para aplicar principios de electrónica y programación para resolver problemas del mundo real.",
							"fr": "J'ai conçu et construit un robot suiveur de ligne en utilisant Arduino, démontrant ma capacité à appliquer des principes d'électronique et de programmation pour résoudre des problèmes du monde réel."
						},
						"skills": [
							"Arduino",
							"C++",
							"Electronics",
							"Sensors"
						]
					}
				],
				"skills": [
					{
						"id": 1,
						"name": "JavaScript",
						"category": {
							"en": "Programming Language",
							"es": "Lenguaje de programación",
							"fr": "Langage de programmation"
						},
						"level": 4
					},
					{
						"id": 2,
						"name": "TypeScript",
						"category": {
							"en": "Programming Language",
							"es": "Lenguaje de programación",
							"fr": "Langage de programmation"
						},
						"level": 4
					},
					{
						"id": 3,
						"name": "Java",
						"category": {
							"en": "Programming Language",
							"es": "Lenguaje de programación",
							"fr": "Langage de programmation"
						},
						"level": 4
					},
					{
						"id": 4,
						"name": "Lua",
						"category": {
							"en": "Programming Language",
							"es": "Lenguaje de programación",
							"fr": "Langage de programmation"
						},
						"level": 4
					},
					{
						"id": 5,
						"name": "C++",
						"category": {
							"en": "Programming Language",
							"es": "Lenguaje de programación",
							"fr": "Langage de programmation"
						},
						"level": 4
					},
					{
						"id": 6,
						"name": "React",
						"category": {
							"en": "Web Development",
							"es": "Desarrollo web",
							"fr": "Développement web"
						},
						"level": 3
					},
					{
						"id": 7,
						"name": "Next.js",
						"category": {
							"en": "Web Development",
							"es": "Desarrollo web",
							"fr": "Développement web"
						},
						"level": 4
					},
					{
						"id": 8,
						"name": "Tailwind CSS",
						"category": {
							"en": "Web Development",
							"es": "Desarrollo web",
							"fr": "Développement web"
						},
						"level": 4.5
					},
					{
						"id": 9,
						"name": "Git",
						"category": {
							"en": "Version Control",
							"es": "Control de versiones",
							"fr": "Contrôle de version"
						},
						"level": 3.5
					},
					{
						"id": 10,
						"name": "Babylon.JS",
						"category": {
							"en": "Game Development",
							"es": "Desarrollo de juegos",
							"fr": "Développement de jeux"
						},
						"level": 3.5
					},
					{
						"id": 11,
						"name": "Pico8",
						"category": {
							"en": "Game Development",
							"es": "Desarrollo de videojuegos",
							"fr": "Développement de jeux"
						},
						"level": 2.5
					},
					{
						"id": 12,
						"name": "Blender",
						"category": {
							"en": "3D Modeling",
							"es": "Modelado 3D",
							"fr": "Modélisation 3D"
						},
						"level": 2.5
					},
					{
						"id": 13,
						"name": "Pixel Art",
						"category": {
							"en": "Art",
							"es": "Arte pixelado",
							"fr": "Art pixelisé"
						},
						"level": 4
					},
					{
						"id": 14,
						"name": "Arduino",
						"category": {
							"en": "Electronics",
							"es": "Electrónica",
							"fr": "Électronique"
						},
						"level": 3
					},
					{
						"id": 15,
						"name": "Sensors",
						"category": {
							"en": "Electronics",
							"es": "Sensores",
							"fr": "Capteurs"
						},
						"level": 3.5
					},
					{
						"id": 16,
						"name": "Cloudinary",
						"category": {
							"en": "Cloud Services",
							"es": "Servicios en la nube",
							"fr": "Services cloud"
						},
						"level": 4.5
					}
				],
				"title": {
					"en": "Software Engineer @ MegaTech Solutions",
					"fr": "Ingénieur Logiciel @ MegaTech Solutions",
					"es": "Ingeniero de Software @ MegaTech Solutions"
				},
				"about": {
					"en": "I'm a passionate software engineer with a knack for problem-solving and a deep interest in AI-powered applications. I'm always seeking challenges that allow me to push the boundaries of technology and create innovative solutions.",
					"fr": "Je suis un ingénieur logiciel passionné par la résolution de problèmes et doté d'un vif intérêt pour les applications basées sur l'IA. Je suis toujours à la recherche de défis qui me permettent de repousser les limites de la technologie et de créer des solutions innovantes.",
					"es": "Soy un ingeniero de software apasionado por la resolución de problemas y con un profundo interés en las aplicaciones impulsadas por IA. Siempre estoy buscando desafíos que me permitan superar los límites de la tecnología y crear soluciones innovadoras."
				},
				"address": {
					"id": 1,
					"street": "123 Main Street",
					"city": "Tech City",
					"state": "California",
					"country": "United States",
					"postal_code": "94043"
				},
				"userName": "jodon_",
				"firstName": "Johan",
				"lastName": "DOENSON",
				"emailAddress": "johandoenson@email.com",
				"image": "https://raw.githubusercontent.com/chihabeddineAourinmouche/web-resume-vue-js.github.io/main/src/assets/images/profile_picture.jpg"
			},
			"theme": {
				"primaryColor": "" || "#efefef",
				"secondaryColor": "" || "#b35949",
				"tertiaryColor": "" || "#d6c6c3",
				"backgroundIcons": [
					"fa-solid fa-cloud",
					"fa-solid fa-terminal",
					"fa-solid fa-code",
					"fa-solid fa-code-compare",
					"fa-solid fa-code-branch",
					"fa-solid fa-language",
					"fa-solid fa-sitemap",
					"fa-solid fa-gamepad",
					"fa-solid fa-database",
					"fa-brands fa-java",
					"fa-brands fa-js",
					"fa-brands fa-golang",
					"fa-brands fa-python",
					"fa-brands fa-html5",
					"fa-brands fa-css3-alt",
					"fa-brands fa-android",
					"fa-brands fa-docker",
					"fa-brands fa-firefox-browser"
				]
			},
			"dataLanguages": [
				{ "code": "en", "name": "English" },
				{ "code": "es", "name": "Spanish" },
				{ "code": "fr", "name": "French" }
			]
		}
	}
}// TODO - REMOVE, THIS IS ONLY FOR DEV PURPOSES

import axios from 'axios'
import { defineStore } from 'pinia'

const JSON_BIN_API_URL = import.meta.env.VITE_JSON_BIN_API_URL
const X_MASTER_KEY = import.meta.env.VITE_JSON_BIN_X_MASTER_KEY

export const useDataStore = defineStore('data', () => {
	return {
		data: null,
		dataLanguage: null,

		// GETTERS
		getTheme() { return this.data.theme },
		getDataLanguages() { return this.data.dataLanguages },
		getDataLanguage() { return this.dataLanguage },
		getData() {
			if (this.data) {
				const language = this.getDataLanguage().code
				const resume = JSON.parse(JSON.stringify(this.data.resume))// AVOID MODIFYING THE ORIGINAL DATA
				resume.title = resume.title[language]
				resume.about = resume.about[language]
				resume.skills = resume.skills.map(i => {
					i.category = i.category[language]
					return i
				})
				resume.languages = resume.languages.map(i => {
					i.name = i.name[language]
					return i
				})
				resume.educationUnits = resume.educationUnits.map(i => {
					i.description = i.description[language]
					return i
				})
				resume.experienceUnits = resume.experienceUnits.map(i => {
					i.jobTitle = i.jobTitle[language]
					i.description = i.description[language]
					return i
				})
				resume.projects = resume.projects.map(i => {
					i.description = i.description[language]
					return i
				})
				return resume
			}
			return null
		},

		// ACTIONS
		setDataLanguage(language = null) { this.dataLanguage = language ?? this.getDataLanguages()[0] },
		async fetchData() {
			try {
				/*
				const response = await axios.get(JSON_BIN_API_URL, { headers: { 'x-master-key': X_MASTER_KEY } })
				this.data = response.data.record
				*/
				this.data = HARDCODED_RESPONSE.data.record// TODO - REMOVE, THIS IS ONLY FOR DEV PURPOSES
				this.setDataLanguage()
			} catch (error) { throw error }
		}
	}
})
