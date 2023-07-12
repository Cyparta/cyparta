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
      career: {
        en: "careers",
        ar: "الوظائف",
      },
      blog: {
        en: "blogs",
        ar: "المقالات",
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
      number1: {
        en:"15",
        ar:""
      },
      number2: {
        en:"",
        ar:""
      },
      number3: {
        en:"",
        ar:""
      },
      number4: {
        en:"",
        ar:""
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
      phoneNumber: {
        en: "+20 0101 720 4584",
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
      summary: {
        en: "write your question here",
        ar:"اكتب سؤالك هنا"
      }
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
        en: "Web Development",
        ar: "تطوير الموقع",
      },
      link2: {
        en: "app development",
        ar: "تطوير التطبيقات",
      },
      link3: {
        en: "S.W Management system",
        ar: "نظام إدارة البرمجيات",
      },
      link4: {
        en: "Technical consulting",
        ar: "الاستشارات الفنية",
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

    // career page
    careerPage : {
      heading: {
        en:"Careers",
        ar:"الحياة المهنية"
      },
      text: {
        en:"thinking you make a better decision more than choosing us !!",
        ar:"التفكير بأنك تتخذ قراراً أفضل من اختيارك لنا !!"
      },
      btnSearch: {
        en:"search",
        ar:"بحث"
      },
      notice: {
        en:"I need to be noticed if there is an empty position",
        ar:"أحتاج إلى ملاحظة ما إذا كان هناك منصب شاغر"
      }
    },
    // Subscribe with us to stay up-to-date with the latest in the world of software.

    offerPageButton: {
      en:"Offer Price",
      ar:"سعر العرض"
    },

    topNavLang: {
      number1: {
        en:"+1 (312) 270-0815",
        ar:"+۱ (۳۱۲) ۲۷۰-۰۸۱٥"
      },
      number2: {
        en:"+1 (312) 270-0815",
        ar:"+۲۰ ۰۱۰۱ ۷۲۰ ٤٥۸٤ "
      },
    },

    offerPrice: {
      heading: {
        en:"Offer Price",
        ar:"سعر العرض"
      },
      leading: {
        en:"thinking you make a better decision more than choosing us !!",
        ar:"التفكير بأنك تتخذ قراراً أفضل من اختيارك لنا !!"
      },
      name:{
        en:"name",
        ar:"الاسم"
      },
      emailAddress:{
        en:"Email Address",
        ar:"البريد الالكتروني"
      },
      development:{
        en:"development",
        ar:"تطوير"
      },
      phone:{
        en:"Phone Number",
        ar:"رقم التليفون"
      },
      budget: {
        en:"The proposed budget",
        ar:"الميزانية المقترحة"
      },
      text: {
        en:"Write a brief about your services and products required on the site",
        ar:"اكتب نبذة مختصرة عن خدماتك ومنتجاتك المطلوبة على الموقع"
      },
      text2: {
        en:"What are the sites that you like and see fit for your idea of design and programming",
        ar:"ما هي المواقع التي تحبها وترى أنها مناسبة لفكرتك في التصميم والبرمجة"
      },
      text3: {
        en:"Other notes and additions",
        ar:"ملاحظات وإضافات أخرى"
      },
      send: {
        en:"send",
        ar:"يرسل"
      },
      loading: {
        en:"loading...",
        ar:"تحميل..."
      }
    },

    servicesPages: {
      web: {
        heading: {
          en:"Web development",
          ar:"تطوير الموقع"
        },
        text: {
          en:"Web development plays a vital role in your Business Website& Web Application success, Web Development is the core( back- end) coding of your application or your business website.",
          ar:"يلعب تطوير الويب دورًا حيويًا في نجاح موقع الويب الخاص بالعمل وتطبيقات الويب ، فإن تطوير الويب هو جوهر الترميز (الخلفي) لتطبيقك أو موقع الويب الخاص بشركتك."
        },
        text2: {
          en:"As a Web Development company CYPARTA provides Web Development services, to deliver complete professional Business Web Applications that you can rely on .",
          ar:"بصفتك شركة لتطوير الويب ، توفر CYPARTA خدمات تطوير الويب ، لتقديم تطبيقات ويب أعمال احترافية كاملة يمكنك الاعتماد عليها."
        },
        text3: {
          en:"CYPARTA successfully delivered many web applications on different scales ; please visit our Projects page for more information about our delivered projects and apps .",
          ar:"نجحت CYPARTA في تقديم العديد من تطبيقات الويب على مستويات مختلفة ؛ يرجى زيارة صفحة المشاريع الخاصة بنا للحصول على مزيد من المعلومات حول المشاريع والتطبيقات التي نقدمها."
        },
      },
      mobile: {
        heading: {
          en:"Mobile development",
          ar:"تطوير البرامج"
        },
        text: {
          en:"When it comes to Mobile Development services, CYPARTA is one of the top mobile app development companies, has far more in mind than simply providing you with a running mobile app in the store. To us, a mobile app can be a key to success and we would like to make that possible.",
          ar:"عندما يتعلق الأمر بخدمات تطوير الأجهزة المحمولة ، فإن CYPARTA هي واحدة من أفضل شركات تطوير تطبيقات الأجهزة المحمولة ، ولديها ما هو أكثر بكثير من مجرد تزويدك بتطبيق جوال قيد التشغيل في المتجر. بالنسبة لنا ، يمكن أن يكون تطبيق الهاتف المحمول مفتاحًا للنجاح ونود أن نجعل ذلك ممكنًا."
        },
        text2: {
          en:"CYPARTA's team consists of experienced mobile app developers working on different platforms( iOS, Android, and Windows Phone) to build Native platform- specific mobile apps for high performance, high availability and better user experience .",
          ar:"يتكون فريق CYPARTA من مطوري تطبيقات الأجهزة المحمولة ذوي الخبرة الذين يعملون على منصات مختلفة (iOS و Android و Windows Phone) لبناء تطبيقات جوال خاصة بالنظام الأساسي المحلي لتحقيق أداء عالٍ وتوافر عالٍ وتجربة مستخدم أفضل."
        },
        text3: {
          en:"CYPARTA successfully delivered many web applications on different scales ; please visit our Projects page for more information about our delivered projects and apps .",
          ar:"نجحت CYPARTA في تقديم العديد من تطبيقات الأجهزة المحمولة على منصات مختلفة ؛ يرجى زيارة صفحة مشاريعنا لمزيد من المعلومات حول تطبيقاتنا المنشورة."
        },
      },
      software: {
        heading: {
          en:"Software management system",
          ar:"نظام إدارة البرمجيات"
        },
        text: {
          en:"The utilization of software management tools is crucial for companies aiming to enhance their performance and streamline their operations. These tools can assist companies in optimizing and automating various business processes, leading to increased effectiveness, productivity, and profitability.",
          ar:"يعد استخدام أدوات إدارة البرامج أمرًا بالغ الأهمية للشركات التي تهدف إلى تحسين أدائها وتبسيط عملياتها. يمكن أن تساعد هذه الأدوات الشركات في تحسين وأتمتة العمليات التجارية المختلفة ، مما يؤدي إلى زيادة الفعالية والإنتاجية والربحية."
        },
        text2: {
          en:"Software management tools provide companies with real-time visibility into their operations, enabling them to make informed decisions and respond quickly to changing market conditions. These tools can help companies manage their resources, such as personnel, time, and funds, more effectively, reducing waste and maximizing their utilization.",
          ar:"توفر أدوات إدارة البرامج للشركات رؤية فورية لعملياتها ، مما يمكنها من اتخاذ قرارات مستنيرة والاستجابة بسرعة لظروف السوق المتغيرة. يمكن أن تساعد هذه الأدوات الشركات في إدارة مواردها ، مثل الموظفين والوقت والأموال ، بشكل أكثر فعالية ، والحد من النفايات وتعظيم الاستفادة منها."
        },
        text3: {
          en:"Moreover, software management tools can help companies improve collaboration and communication among employees, teams, and departments. They provide a centralized platform for sharing information, tracking progress, and managing tasks, which can enhance coordination, reduce errors, and save time.",
          ar:"علاوة على ذلك ، يمكن أن تساعد أدوات إدارة البرامج الشركات على تحسين التعاون والتواصل بين الموظفين والفرق والأقسام. أنها توفر منصة مركزية لمشاركة المعلومات ، وتتبع التقدم ، وإدارة المهام ، والتي يمكن أن تعزز التنسيق وتقليل الأخطاء وتوفير الوقت."
        },
        text4: {
          en:"Examples of software management tools include project management software, collaboration software, time tracking software, and task management software. These tools can be tailored to meet the specific needs of a company, and they can be integrated with other systems, such as CRM and ERP, for even greater efficiency and effectiveness. In conclusion, incorporating software management tools is essential for companies seeking to improve their performance and achieve their business objectives. These tools can help companies automate and optimize their operations, enhance collaboration and communication, and maximize their resources. Companies should invest in these tools to stay competitive in today's market and achieve long-term success.",
          ar:"تتضمن أمثلة أدوات إدارة البرامج برامج إدارة المشاريع وبرامج التعاون وبرامج تتبع الوقت وبرامج إدارة المهام. يمكن تصميم هذه الأدوات لتلبية الاحتياجات المحددة للشركة ، ويمكن دمجها مع أنظمة أخرى ، مثل CRM و ERP ، لتحقيق قدر أكبر من الكفاءة والفعالية. في الختام ، يعد دمج أدوات إدارة البرامج أمرًا ضروريًا للشركات التي تسعى إلى تحسين أدائها وتحقيق أهداف أعمالها. يمكن أن تساعد هذه الأدوات الشركات على أتمتة عملياتها وتحسينها ، وتعزيز التعاون والتواصل ، وتعظيم مواردها. يجب أن تستثمر الشركات في هذه الأدوات لتظل قادرة على المنافسة في سوق اليوم وتحقيق النجاح على المدى الطويل."
        }
      },
      techinecal: {
        heading: {
          en:"Technical consulting",
          ar:"الاستشارات الفنية"
        },
        text: {
          en:"One of the most crucial aspects of technical consultation is its role in safeguarding a company's data. With the increasing use of technology, cyber threats have become more sophisticated and frequent. Technical consultation can help companies identify potential vulnerabilities in their systems and provide solutions to mitigate these risks. By implementing the recommendations provided by technical consultants, companies can significantly reduce the risk of data breaches and cyber-attacks.",
          ar:"أحد أهم جوانب الاستشارة الفنية هو دورها في حماية بيانات الشركة. مع الاستخدام المتزايد للتكنولوجيا ، أصبحت التهديدات الإلكترونية أكثر تعقيدًا وتكرارًا. يمكن أن تساعد الاستشارات الفنية الشركات على تحديد نقاط الضعف المحتملة في أنظمتها وتقديم حلول للتخفيف من هذه المخاطر. من خلال تنفيذ التوصيات المقدمة من الاستشاريين التقنيين ، يمكن للشركات أن تقلل بشكل كبير من مخاطر اختراق البيانات والهجمات الإلكترونية."
        },
        text2: {
          en:"Another benefit of technical consultation is that it can help companies stay up-to-date with the latest trends and developments in technology. As technology continues to evolve rapidly, it can be challenging for companies to keep up with the latest advancements. Technical consultants can provide valuable insights into emerging technologies and help companies leverage these technologies to gain a competitive edge in the market.",
          ar:"فائدة أخرى للاستشارات الفنية هي أنها يمكن أن تساعد الشركات على مواكبة أحدث الاتجاهات والتطورات في التكنولوجيا. مع استمرار تطور التكنولوجيا بسرعة ، قد يكون من الصعب على الشركات مواكبة أحدث التطورات. يمكن للمستشارين التقنيين تقديم رؤى قيمة حول التقنيات الناشئة ومساعدة الشركات على الاستفادة من هذه التقنيات لاكتساب ميزة تنافسية في السوق."
        },
        text3: {
          en:"In addition to providing guidance on data security and technology trends, technical consultation can also help companies manage their software and applications more effectively. Technical consultants can identify areas where software and applications can be optimized to improve performance, reduce downtime, and enhance the user experience. In summary, technical consultation is an essential service that can help companies optimize their operations, safeguard their data, and stay up-to-date with the latest technology trends. By investing in technical consultation, companies can ensure that they are well-positioned to compete in today's digital landscape.",
          ar:"بالإضافة إلى تقديم إرشادات حول أمان البيانات واتجاهات التكنولوجيا ، يمكن أن تساعد الاستشارات الفنية الشركات أيضًا في إدارة برامجها وتطبيقاتها بشكل أكثر فعالية. يمكن للمستشارين الفنيين تحديد المجالات التي يمكن فيها تحسين البرامج والتطبيقات لتحسين الأداء وتقليل وقت التوقف عن العمل وتعزيز تجربة المستخدم. باختصار ، تعتبر الاستشارات الفنية خدمة أساسية يمكن أن تساعد الشركات على تحسين عملياتها وحماية بياناتها والبقاء على اطلاع بأحدث اتجاهات التكنولوجيا. من خلال الاستثمار في الاستشارات الفنية ، يمكن للشركات التأكد من أنها في وضع جيد للمنافسة في المشهد الرقمي اليوم."
        },
      },
      ui: {
        heading: {
          en:"UI & UX",
          ar:"واجهة المستخدم وتجربة المستخدم"
        },
        text: {
          en:"At our software development company, we place a great deal of importance on providing exceptional UI/UX design services to our clients. We understand that the success of a software application depends not only on its functionality but also on its user experience.",
          ar:"في شركة تطوير البرمجيات لدينا ، نولي أهمية كبيرة لتوفير خدمات تصميم UI / UX استثنائية لعملائنا. نحن ندرك أن نجاح أي تطبيق برمجي لا يعتمد فقط على وظائفه ولكن أيضًا على تجربة المستخدم الخاصة به."
        },
        text2: {
          en:"Our UI/UX design services are aimed at creating software applications that are intuitive, user-friendly, and visually appealing. We work closely with our clients to understand their business needs and target audience, and we use this information to create designs that are tailored to their specific requirements.",
          ar:"تهدف خدمات تصميم UI / UX الخاصة بنا إلى إنشاء تطبيقات برمجية بديهية وسهلة الاستخدام وجذابة بصريًا. نحن نعمل عن كثب مع عملائنا لفهم احتياجات أعمالهم والجمهور المستهدف ، ونستخدم هذه المعلومات لإنشاء تصميمات مخصصة لمتطلباتهم الخاصة."
        },
        text3: {
          en:"Our team of experienced designers uses the latest design tools and techniques to create engaging user interfaces that enhance the user experience. We focus on creating designs that are simple, clear, and easy to navigate, ensuring that users can quickly and easily find what they need.",
          ar:"يستخدم فريقنا من المصممين ذوي الخبرة أحدث أدوات وتقنيات التصميم لإنشاء واجهات مستخدم جذابة تعزز تجربة المستخدم. نحن نركز على إنشاء تصميمات بسيطة وواضحة وسهلة التنقل ، مما يضمن أن يتمكن المستخدمون من العثور على ما يحتاجون إليه بسرعة وسهولة."
        },
        text4: {
          en:"We also place a great deal of emphasis on the visual appeal of our designs, creating interfaces that are not only functional but also aesthetically pleasing. We believe that a well-designed interface can greatly enhance the user experience and contribute to the success of a software application. In conclusion, our UI/UX design services are an integral part of our software development process. We believe that a well-designed user interface is essential for creating software applications that are easy to use, engaging, and effective. Our team of experienced designers is dedicated to creating designs that meet the specific needs of our clients and enhance the user experience.",
          ar:"نحن نركز أيضًا بشكل كبير على المظهر المرئي لتصميماتنا ، وننشئ واجهات ليست وظيفية فحسب ، بل أيضًا جذابة من الناحية الجمالية. نعتقد أن الواجهة جيدة التصميم يمكنها تحسين تجربة المستخدم بشكل كبير والمساهمة في نجاح تطبيق البرنامج. في الختام ، تعد خدمات تصميم UI / UX الخاصة بنا جزءًا لا يتجزأ من عملية تطوير البرامج لدينا. نعتقد أن واجهة المستخدم جيدة التصميم ضرورية لإنشاء تطبيقات برمجية سهلة الاستخدام والتفاعل والفعالية. فريقنا من المصممين ذوي الخبرة مكرس لإنشاء تصميمات تلبي الاحتياجات المحددة لعملائنا وتعزز تجربة المستخدم."
        }
      },
      cypar: {
        heading: {
          en:"",
          ar:""
        },
        text:{
          en:"Information is the oil of this age, this saying reflects an important truth that cannot be ignored. In the time we live in, protecting your information is the top priority when it comes to the world of online commerce. With the increasing use of technology, cyber threats have become more advanced and widespread.",
          ar:"المعلومات هي نفط هذا العصر ،يعكس هذا القول حقيقة مهمة لا يمكن تجاهلها. في الوقت الذي نعيش فيه ، تكون حماية معلوماتك هي الأولوية القصوى عندما يتعلق الأمر بعالم التجارة عبر الإنترنت. مع الاستخدام المتزايد للتكنولوجيا ، أصبحت التهديدات الإلكترونية أكثر تقدمًا وانتشارًا."
        },
        text2:{
          en:"Therefore, it is essential for companies to take this matter seriously and protect their sensitive information to avoid financial losses and trade secrets theft. Cyber-attacks should not disrupt services and lead to a loss of productivity, and in some cases, companies are forced to pay ransom demands to regain access to their data and systems.",
          ar:"لذلك ، من الضروري أن تأخذ الشركات هذا الأمر على محمل الجد وأن تحمي معلوماتها الحساسة لتجنب الخسائر المالية وسرقة الأسرار التجارية. لا ينبغي للهجمات الإلكترونية أن تعطل الخدمات وتؤدي إلى فقدان الإنتاجية ، وفي بعض الحالات ، تضطر الشركات إلى دفع مطالب فدية لاستعادة الوصول إلى بياناتها وأنظمتها."
        },
        text3:{
          en:"Therefore, it is necessary for companies to take the necessary measures to protect their data and systems from cyber threats. This includes implementing firewalls, anti-virus and malware programs, maintaining the use of strong and secure passwords, and providing training to employees on cyber security practices.",
          ar:"لذلك ، من الضروري أن تتخذ الشركات الإجراءات اللازمة لحماية بياناتها وأنظمتها من التهديدات السيبرانية. يتضمن ذلك تنفيذ جدران الحماية وبرامج مكافحة الفيروسات والبرامج الضارة ، والحفاظ على استخدام كلمات مرور قوية وآمنة ، وتوفير التدريب للموظفين على ممارسات الأمن السيبراني."
        },
        text4:{
          en:"Through this, the company ensures the confidentiality and safety of its data and systems, which is crucial to maintaining its competitiveness in today's digital world.",
          ar:"من خلال هذا ، تضمن الشركة سرية وسلامة بياناتها وأنظمتها ، وهو أمر ضروري للحفاظ على قدرتها التنافسية في عالم اليوم الرقمي."
        }
      },
      hireUs: {
        en:"hire us",
        ar:"تواصل معنا"
      }
    },

   
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
