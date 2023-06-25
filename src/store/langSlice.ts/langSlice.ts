import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LangState {
  value: any;
}

const initialState: LangState = {
  value: {
    lang:
      typeof window !== "undefined" && localStorage.getItem("lang")
        ? localStorage.getItem("lang")
        : "en",

    pages: {
      home: {
        en: "home",
        ar: "الصفحة الرئيسية",
      },
      projects: {
        en: "projects",
        ar: "المشاريع",
      },
      team: {
        en: "team",
        ar: "الفريق",
      },
    },

    // home page
    services: {
      web: {
        heading: {
          en: "Web development",
          ar: "تطوير المواقع",
        },
        text: {
          en: "We specialize in building robust and secure websites from scratch",
          ar: "نحن متخصصون في بناء مواقع قوية وآمنة من البداية",
        },
      },
      app: {
        heading: {
          en: "app development",
          ar: "تطوير التطبيق",
        },
        text: {
          en: "new and exciting idea? We bring it to life",
          ar: "فكرة جديدة ومثيرة؟ نحن نعيدها إلى الحياة",
        },
      },
      management: {
        heading: {
          en: "S.W Management system",
          ar: "نظام إدارة البرمجيات",
        },
        text: {
          en: "We believe that specialization saves a lot of time and effort, so we design custom management software for all businesses",
          ar: "نعتقد أن التخصص يوفر الكثير من الوقت والجهد ، لذلك نصمم برامج إدارة مخصصة لجميع ",
        },
      },
      technical: {
        heading: {
          en: "Technical consulting",
          ar: "الاستشارات الفنية",
        },
        text: {
          en: "Software is a vast world, and we are one of its doors. Knock on it to get the information you need.",
          ar: "البرمجيات عالم شاسع ، ونحن أحد أبوابها. اطرق عليه لتحصل على المعلومات التي تحتاجها.",
        },
      },
      ui: {
        heading: {
          en: "Ui & Ux",
          ar: "تصميم واجهة المستخدم وتجربة المستخدم",
        },
        text: {
          en: "Attractiveness and ease of use are essential in the process of building our software",
          ar: "الجاذبية وسهولة الاستخدام أمران أساسيان في عملية بناء برامجنا",
        },
      },
      cypar: {
        heading: {
          en: "cybar security",
          ar: "الامن السيبراني",
        },
        text: {
          en: "This is Cyparta, your fortress.",
          ar: "هذه سيبرتا ، حصنك.",
        },
      },
    },

    aboutUs: {
      heading: {
        en: "About us",
        ar: "من نحن",
      },
      text: {
        en: "This is Cyparta, a software development company with a talented team dedicated to crafting innovative solutions. Despite our short journey, we have already achieved significant milestones, positioning ourselves as a formidable player in the digital market. We strive to continue delivering outstanding projects that keep us at the",
        ar: "هذه هي Cyparta ، شركة تطوير برمجيات مع فريق موهوب مكرس لصياغة حلول مبتكرة. على الرغم من رحلتنا القصيرة ، فقد حققنا بالفعل إنجازات مهمة ، ووضعنا أنفسنا كلاعب هائل في السوق الرقمية. نحن نسعى جاهدين لمواصلة تقديم المشاريع المتميزة التي تبقينا في",
      },
      download: {
        en: "Download PDF",
        ar: "تحميل PDF",
      },
    },

    presence: {
      heading: {
        en: "GLOBAL PRESENCE",
        ar: "حضور عالمي",
      },
      tab1: {
        en: "Applications",
        ar: "التطبيقات",
      },
      tab2: {
        en: "Website",
        ar: "موقع إلكتروني",
      },
      tab3: {
        en: "Dashboards",
        ar: "لوحات التحكم",
      },
    },

    projects: {
      heading: {
        en: "Latest Projects",
        ar: "أحدث المشاريع",
      },
      tab1: {
        en: "Applications",
        ar: "التطبيقات",
      },
      tab2: {
        en: "Website",
        ar: "موقع إلكتروني",
      },
      tab3: {
        en: "All",
        ar: "الكل",
      },
      viewAll: {
        en:"view All projects",
        ar:"عرض جميع المشاريع"
      }
    },

    ourClients: {
      card1: {
        en: "Employees",
        ar: "موظفين",
      },
      card2: {
        en: "Partners",
        ar: "شركاء",
      },
      card3: {
        en: "Projects",
        ar: "المشاريع",
      },
      card4: {
        en: "experience",
        ar: "خبرة",
      },
    },

    contactUs: {
      heading: {
        en: "Contact Us",
        ar: "اتصل بنا",
      },
      touch: {
        en: "Get In Touch With Us",
        ar: "ابق على تواصل معنا",
      },
      name: {
        en: "name",
        ar: "الاسم",
      },
      email: {
        en: "email address",
        ar: "عنوان البريد الإلكتروني",
      },
      phone: {
        en: "phone",
        ar: "هاتف",
      },
      message: {
        en: "write your question here",
        ar: "اكتب سؤالك هنا",
      },
      send: {
        en: "send",
        ar: "يرسل",
      },
      loading: {
        en: "loading...",
        ar: "تحميل...",
      },
    },

    contactInfo: {
      phone: {
        en: "Phone",
        ar: "هاتف",
      },
      time: {
        en: "Working time",
        ar: "وقت العمل",
      },
      email: {
        en: "E-mail",
        ar: "بريد إلكتروني",
      },
    },

    partner: {
      en: "Our Partners",
      ar: "شركاؤنا",
    },

    subscribe: {
      heading: {
        en: "SUBSCRIBE TO GET UPDATED",
        ar: "اشترك للحصول على التحديث",
      },
      text: {
        en: "Subscribe with us to stay up-to-date with the latest in the world of software.",
        ar: "اشترك معنا للبقاء على اطلاع دائم بأحدث البرامج في عالم البرامج.",
      },
      email: {
        en: "enter your email",
        ar: "أدخل بريدك الإلكتروني",
      },
      button: {
        en: "Subscribe Now",
        ar: "إشترك الآن",
      },
    },

    footer: {
      heading: {
        en: "Since our inception, we have been striving to create your own story in the world of digital marketing, by providing all the digital services and solutions you need to create and establis.",
        ar: "منذ بدايتنا ، نسعى جاهدين لإنشاء قصتك الخاصة في عالم التسويق الرقمي ، من خلال توفير جميع الخدمات والحلول الرقمية التي تحتاجها لإنشاء وتأسيس.",
      },

      home: {
        en: "home",
        ar: "الصفحة الرئيسية",
      },
      about: {
        en: "about us",
        ar: "من نحن",
      },
      contact: {
        en: "contact us",
        ar: "اتصل بنا",
      },
      ourTeam: {
        en: "Our Team",
        ar: "فريقنا",
      },

      linkMain: {
        en: "services",
        ar: "الخدمات",
      },
      link1: {
        en: "Design",
        ar: "تصميم",
      },
      link2: {
        en: "Development",
        ar: "تطوير",
      },
      link3: {
        en: "CRM systems",
        ar: "أنظمة إدارة علاقات العملاء",
      },
      link4: {
        en: "Social media mangment",
        ar: "إدارة وسائل التواصل الاجتماعي",
      },
    },

    // team page
    teamPage: {
      heading: {
        en: "Our Team",
        ar: "فريقنا",
      },
      text: {
        en: "Meet Our team and make sure that you making the right decision",
        ar: "قابل فريقنا وتأكد من أنك تتخذ القرار الصحيح",
      },
    },

    // projects Page
    projectsPage: {
      heading: {
        en: "Projects",
        ar: "المشاريع",
      },
      text: {
        en: "thinking you make a better decision more than choosing us !!",
        ar: "التفكير بأنك تتخذ قراراً أفضل من اختيارك لنا !!",
      },
      tabs: {
        tab1: {
          en:"all",
          ar:"الكل"
        },
        tab2: {
          en:"Applications",
          ar:"التطبيقات"
        },
        tab3: {
          en:"Websites",
          ar:"مواقع"
        },
      },
     sort : {
      sortBy: {
        en:"Sort by",
        ar:"ترتيب"
      },
      latest: {
        en:"latest",
        ar:"الاحداث"
      },
      oldest: {
        en:"oldest",
        ar:"الاقدم"
      }
     }
    },
    // Subscribe with us to stay up-to-date with the latest in the world of software.
  },
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    toggleLang: (state, action) => {
      if (action.payload) {
        state.value.lang = action.payload;
      } else {
        switch (state.value.lang) {
          case "en":
            state.value.lang = "en";
            break;
          case "ar":
            state.value.lang = "ar";
            break;
          default:
            state.value.lang = localStorage.getItem("lang") || "en";
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLang } = langSlice.actions;

export default langSlice.reducer;
