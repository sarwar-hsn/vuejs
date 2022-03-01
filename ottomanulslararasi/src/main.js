import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import Vuex from 'vuex'
import VueYouTubeEmbed from 'vue-youtube-embed'
import i18n from './i18n'
Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube" })


Vue.config.productionTip = false
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        blogs: [
            {
                id: 1000,
                author:"",
                projectImages: [
                    require('@/assets/Blogs/waterwell.jpg'),
                ],
            },
            {
                id: 1001,
                author:"",
                projectImages: [
                    require('@/assets/Blogs/sadirvan.jpg'),
                ],

            },
            {
                id: 1002,
                author:"",
                projectImages: [
                    require('@/assets/Blogs/kuran.jpg'),
                ],

            },
            {
                id: 1003,
                author:"",
                projectImages: [
                    require('@/assets/Blogs/yetim.jpg'),
                ],
            },
            {
                id: 1004,
                author:"",
                projectImages: [
                    require('@/assets/Blogs/sosyal.jpg'),
                ],
            },
            {
                id: 1005,
                author:"",
                projectImages: [
                    require('@/assets/Blogs/insaat.jpg'),
                ],
            },
            {
                id: 1006,
                author:"",
                projectImages: [
                    require('@/assets/Blogs/kurban.jpg'),
                ],
            },
        ],
        projects: {
            
            ['su kuyusu']: [
                {
                    id: 100,
                    title: "december",
                    width: 250,
                    recentProject: true,
                    photoGallery: true,
                    projectImages: [
                        require('@/assets/projects/100_su/100_december_2021/100_1.jpg'),
                        require('@/assets/projects/100_su/100_december_2021/100_2.jpg'),
                        require('@/assets/projects/100_su/100_december_2021/100_3.jpg'),
                        require('@/assets/projects/100_su/100_december_2021/100_4.jpg'),
                        require('@/assets/projects/100_su/100_december_2021/100_5.jpg'),
                        require('@/assets/projects/100_su/100_december_2021/100_6.jpg'),
                        require('@/assets/projects/100_su/100_december_2021/100_7.jpg'),
                    ],
                }, 
                {
                    id: 101,
                    title: "october",
                    width: 250,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/100_su/101_october_2021/101_1.jpg'),
                        require('@/assets/projects/100_su/101_october_2021/101_2.jpg'),
                        require('@/assets/projects/100_su/101_october_2021/101_3.jpg'),
                        require('@/assets/projects/100_su/101_october_2021/101_4.jpg'),
                        require('@/assets/projects/100_su/101_october_2021/101_5.jpg'),
                    ],
                }, 
                {
                    id: 102,
                    title: "july",
                    width: 250,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/100_su/102_july_2021/102_1.jpg'),
                        require('@/assets/projects/100_su/102_july_2021/102_2.jpg'),
                        require('@/assets/projects/100_su/102_july_2021/102_3.jpg'),
                        require('@/assets/projects/100_su/102_july_2021/102_4.jpg'),
                        require('@/assets/projects/100_su/102_july_2021/102_5.jpg'),
                        require('@/assets/projects/100_su/102_july_2021/102_6.jpg'),
                        require('@/assets/projects/100_su/102_july_2021/102_7.jpg'),
                        require('@/assets/projects/100_su/102_july_2021/102_8.jpg'),
                        require('@/assets/projects/100_su/102_july_2021/102_9.jpg'),
                    ],
                }, 
            ],
            ['şadirvan']: [
                {
                    id: 200,
                    title: "4 cesmeli",
                    width: 250,
                    recentProject: true,
                    photoGallery: true,
                    projectImages: [
                        require('@/assets/projects/200_sadirvan/200_4sadirvan/200_1.jpg'),
                        require('@/assets/projects/200_sadirvan/200_4sadirvan/200_2.jpg'),
                        require('@/assets/projects/200_sadirvan/200_4sadirvan/200_3.jpg'),
                        require('@/assets/projects/200_sadirvan/200_4sadirvan/200_4.jpg'),
                        require('@/assets/projects/200_sadirvan/200_4sadirvan/200_5.jpg'),
                        require('@/assets/projects/200_sadirvan/200_4sadirvan/200_6.jpg'),
                    ],
                },
                {
                    id: 201,
                    title: "8 cesmeli",
                    width: 250,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/200_sadirvan/201_8sadirvan/201_1.jpg'),
                        require('@/assets/projects/200_sadirvan/201_8sadirvan/201_2.jpg'),
                        require('@/assets/projects/200_sadirvan/201_8sadirvan/201_3.jpg'),
                        require('@/assets/projects/200_sadirvan/201_8sadirvan/201_4.jpg'),
                        require('@/assets/projects/200_sadirvan/201_8sadirvan/201_5.jpg'),
                        require('@/assets/projects/200_sadirvan/201_8sadirvan/201_6.jpg'),
                    ],
                },
                {
                    id: 202,
                    title: "10 cesmeli",
                    width: 250,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/200_sadirvan/202_10sadirvan/202_1.jpg'),
                        require('@/assets/projects/200_sadirvan/202_10sadirvan/202_2.jpg'),
                        require('@/assets/projects/200_sadirvan/202_10sadirvan/202_3.jpg'),
                        require('@/assets/projects/200_sadirvan/202_10sadirvan/202_4.jpg'),
                        require('@/assets/projects/200_sadirvan/202_10sadirvan/202_5.jpg'),
                        require('@/assets/projects/200_sadirvan/202_10sadirvan/202_6.jpg'),
                    ],
                },
                {
                    id: 203,
                    title: "20 cesmeli",
                    width: 250,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/200_sadirvan/203_20sadirvan/203_1.jpg'),
                        require('@/assets/projects/200_sadirvan/203_20sadirvan/203_2.jpg'),
                        require('@/assets/projects/200_sadirvan/203_20sadirvan/203_3.jpg'),
                        require('@/assets/projects/200_sadirvan/203_20sadirvan/203_4.jpg'),
                        require('@/assets/projects/200_sadirvan/203_20sadirvan/203_5.jpg'),
                    ],
                }                   
            ],
            ['kurani kerim']: [
                {
                    id: 300,
                    title: "quran3",
                    width: 250,
                    recentProject: false,
                     photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/300_quran/300_quran3/1.jpg'),
                        require('@/assets/projects/300_quran/300_quran3/2.jpg'),
                        require('@/assets/projects/300_quran/300_quran3/3.jpg'),
                        require('@/assets/projects/300_quran/300_quran3/4.jpg'),
                        require('@/assets/projects/300_quran/300_quran3/5.jpg'),
                        require('@/assets/projects/300_quran/300_quran3/6.jpg'),
                        
                    ],
                },
                {
                    id: 301,
                    title: "quran 1",
                    width: 250,
                    recentProject: false,
                     photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/300_quran/301_quran/1.jpg'),
                        require('@/assets/projects/300_quran/301_quran/2.jpg'),
                        require('@/assets/projects/300_quran/301_quran/3.jpg'),
                        require('@/assets/projects/300_quran/301_quran/4.jpg'),
                        
                    ],
                },
                {
                    id: 302,
                    title: "quran 2",
                    width: 250,
                    recentProject: false,
                     photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/300_quran/302_quran2/1.jpg'),
                        require('@/assets/projects/300_quran/302_quran2/2.jpg'),
                        require('@/assets/projects/300_quran/302_quran2/3.jpg'),
                        require('@/assets/projects/300_quran/302_quran2/4.jpg'),
                        require('@/assets/projects/300_quran/302_quran2/5.jpg'),
                        require('@/assets/projects/300_quran/302_quran2/6.jpg'),
                        require('@/assets/projects/300_quran/302_quran2/7.jpg'),
                    ],
                },
            ],
            ['orphan']: [
                {
                    id: 400,
                    title: "december 2021",
                    width: 400,
                    recentProject: true,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/400_yetim/400_12_december_21/1.jpg'),
                        require('@/assets/projects/400_yetim/400_12_december_21/2.jpg'),
                        require('@/assets/projects/400_yetim/400_12_december_21/3.jpg'),
                        require('@/assets/projects/400_yetim/400_12_december_21/4.jpg'),
                        require('@/assets/projects/400_yetim/400_12_december_21/5.jpg'),
                    ],
                },
                {
                    id: 401,
                    title: "october 2021",
                    width: 400,
                    recentProject: false,
                     photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/400_yetim/401_october_21/1.jpg'),
                        require('@/assets/projects/400_yetim/401_october_21/2.jpg'),
                        require('@/assets/projects/400_yetim/401_october_21/3.jpg'),
                        require('@/assets/projects/400_yetim/401_october_21/4.jpg'),
                        require('@/assets/projects/400_yetim/401_october_21/5.jpg'),
                        require('@/assets/projects/400_yetim/401_october_21/6.jpg'),
                    ],
                },
            ],
            ['Sosyal Sorumluluk Projesi']: [
                {
                    id: 500,
                    title: "meyve_fidan_dikimi",
                    width: 250,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/500_social/500_meyve_fidan_dikimi/1.jpg'),
                        require('@/assets/projects/500_social/500_meyve_fidan_dikimi/2.jpg'),
                        require('@/assets/projects/500_social/500_meyve_fidan_dikimi/3.jpg'),
                        require('@/assets/projects/500_social/500_meyve_fidan_dikimi/4.jpg'),
                        require('@/assets/projects/500_social/500_meyve_fidan_dikimi/5.jpg'),
                            
                    ],
                },
                {
                    id: 501,
                    title: "ercaz dagitimi",
                    width: 250,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/500_social/501_erzak_dagitimi/1.jpg'),
                        require('@/assets/projects/500_social/501_erzak_dagitimi/2.jpg'),
                        require('@/assets/projects/500_social/501_erzak_dagitimi/3.jpg'),
                        require('@/assets/projects/500_social/501_erzak_dagitimi/4.jpg'),
           
                    ],
                },
                {
                    id: 503,
                    title: "Battaniye Yardİmİ",
                    width: 250,
                    recentProject: true,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/500_social/503_battaniye_yardimi/1.jpg'),
                        require('@/assets/projects/500_social/503_battaniye_yardimi/2.jpg'),
                        require('@/assets/projects/500_social/503_battaniye_yardimi/3.jpg'),
                        require('@/assets/projects/500_social/503_battaniye_yardimi/4.jpg'),
                        require('@/assets/projects/500_social/503_battaniye_yardimi/5.jpg'),
                        require('@/assets/projects/500_social/503_battaniye_yardimi/6.jpg'),
                        require('@/assets/projects/500_social/503_battaniye_yardimi/7.jpg'),                      
                    ],
                },
                
            ],
            ['social insaat']: [
                {
                    id: 600,
                    title: "cami mosque",
                    width: 250,
                    recentProject: true,
                    photoGallery: true,
                    projectImages: [
                        require('@/assets/projects/600_sosyal_insaat/600_cami_mosque/1.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/600_cami_mosque/2.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/600_cami_mosque/3.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/600_cami_mosque/4.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/600_cami_mosque/5.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/600_cami_mosque/6.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/600_cami_mosque/7.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/600_cami_mosque/8.jpg'),
                    ],
                },
                {
                    id: 601,
                    title: "konaklama",
                    width: 250,
                    recentProject: true,
                    photoGallery: true,
                    projectImages: [
                        require('@/assets/projects/600_sosyal_insaat/601_konaklama/1.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/601_konaklama/2.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/601_konaklama/3.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/601_konaklama/4.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/601_konaklama/5.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/601_konaklama/6.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/601_konaklama/7.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/601_konaklama/8.jpg'),
                    ]
                },
                {
                    id: 602,
                    title: "medrese",
                    width: 250,
                    recentProject: true,
                    photoGallery: true,
                    projectImages: [
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/1.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/2.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/3.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/4.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/5.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/6.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/7.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/8.jpg'),
                        require('@/assets/projects/600_sosyal_insaat/602_medrese/9.jpg'),
                    ]
                }
                
            ],
            ['Kurban Organizasyonu-Qurban Organization']: [
                {
                    id: 700,
                    title: "buyukbas",
                    width: 400,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/700_kurban_organization/700_buyukbas_sadaka_kurban/1.jpg'),
                        require('@/assets/projects/700_kurban_organization/700_buyukbas_sadaka_kurban/2.jpg'),
                        require('@/assets/projects/700_kurban_organization/700_buyukbas_sadaka_kurban/3.jpg'),
                        require('@/assets/projects/700_kurban_organization/700_buyukbas_sadaka_kurban/4.jpg'),
                        require('@/assets/projects/700_kurban_organization/700_buyukbas_sadaka_kurban/5.jpg'),
                        require('@/assets/projects/700_kurban_organization/700_buyukbas_sadaka_kurban/6.jpg'),
                        require('@/assets/projects/700_kurban_organization/700_buyukbas_sadaka_kurban/7.jpg'),
                       
                    ],
                },
                {
                    id: 701,
                    title: "kucukbas",
                    width: 400,
                    recentProject: false,
                    photoGallery: false,
                    projectImages: [
                        require('@/assets/projects/700_kurban_organization/701_kucukbas_adak_kurban/1.jpg'),
                        require('@/assets/projects/700_kurban_organization/701_kucukbas_adak_kurban/2.jpg'),
                        require('@/assets/projects/700_kurban_organization/701_kucukbas_adak_kurban/3.jpg'),
                        require('@/assets/projects/700_kurban_organization/701_kucukbas_adak_kurban/4.jpg'),
                        require('@/assets/projects/700_kurban_organization/701_kucukbas_adak_kurban/5.jpg'),
                        require('@/assets/projects/700_kurban_organization/701_kucukbas_adak_kurban/6.jpg'),

                    ],
                },
            ],
        },
        bankImages: [require('@/assets/bank/1.jpg'),require('@/assets/bank/2.jpg'),require('@/assets/bank/3.jpg'),require('@/assets/bank/4.jpg'),require('@/assets/bank/5.jpg'),],
    },

    getters: {
        bankImages: (state) => {
            return state.bankImages;
        },
        blogs: (state) => {
            var blogarray = [];
            let bkeys = Object.keys(state.blogs);
            bkeys.forEach(blogName => {
                let temppp = state.blogs[blogName];
                blogarray.push(temppp);
            });
            return blogarray;
        },
        getBlogsById:(state)=> (id) => {
            let tempObj = null;
            state.blogs.forEach((blog) => {
                if (blog.id.toString() === id.toString()) {
                    tempObj = { ...blog };
                }
            })
            return tempObj;
        },
        recentProjects: (state) => {
            var projectarray = [];
            let pkeys = Object.keys(state.projects);
            pkeys.forEach(projectName => {
                let temp = state.projects[projectName];
                temp.forEach((project) => {
                    if(project.recentProject === true)
                        projectarray.push(project);
                })
            });
            return projectarray;
        },
        allProjects: (state) => {
            var projectArray = [];
            let pkeys = Object.keys(state.projects);
            pkeys.forEach(projectName => {
                let temp = state.projects[projectName];
                projectArray.push(temp);
            });
            return projectArray;
        },
        projectNames: (state) => {
            return Object.keys(state.projects);
        },
        photoGallery: (state) => {
            var array = [];
            let keys = Object.keys(state.projects);
            keys.forEach(projectName => {
                let temp = state.projects[projectName];
                temp.forEach((project) => {
                    if (project.photoGallery === true) {
                        let obj = {
                            id: project.id,
                            title: project.title,
                            images: project.projectImages,
                            date: project.date,
                        }
                        array.push(obj);  
                    }    
                })
            });
            return array;
        },
        getProjectsById: (state) => (id) => {
            let projects = Object.keys(state.projects);
            let tempObj = null;
            projects.forEach((projectName) => {
                state.projects[projectName].forEach((project) => {
                    if (project.id.toString() === id.toString()){
                        tempObj={...project}
                    }
                })
            });
            return tempObj;
        },
        getAllBlogs: (state) => () => {
            let blogsArray = [];
            state.blogs.forEach((blog) => {
                blogsArray.push(blog);
            })
            return blogsArray;
        }
        
    }
})


new Vue({
    vuetify,
    router,
    store: store,
    i18n,
    render: h => h(App)
}).$mount('#app')