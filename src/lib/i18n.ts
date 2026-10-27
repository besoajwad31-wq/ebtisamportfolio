/**
 * Lightweight bilingual layer for the portfolio.
 * English is the default; the selected language is saved locally.
 */
export type PortfolioLanguage = "en" | "ar";

const enToAr: Record<string, string> = {
  "Home":"الرئيسية","About":"نبذة عني","Projects":"المشاريع","Contact":"تواصل",
  "Main":"القائمة الرئيسية","Mobile":"قائمة الهاتف","Open menu":"فتح القائمة","Close menu":"إغلاق القائمة",
  "View Resume":"عرض السيرة الذاتية","Resume coming soon":"السيرة الذاتية قريبًا","Copied":"تم النسخ","Copy email":"نسخ البريد الإلكتروني",
  "Skip to content":"تخطي إلى المحتوى","Sheet not found":"الصفحة غير موجودة","This page doesn’t exist or has been moved.":"هذه الصفحة غير موجودة أو تم نقلها.",
  "Back to home":"العودة للرئيسية","This page didn’t load":"تعذّر تحميل الصفحة","Something went wrong. You can try again or head back home.":"حدث خطأ. يمكنك المحاولة مرة أخرى أو العودة للرئيسية.",
  "Try again":"حاول مرة أخرى","Go home":"العودة للرئيسية",
  "Engineering Portfolio":"معرض الأعمال الهندسية","Selected Work":"أعمال مختارة","Projects that turn ":"مشاريع تحوّل ",
  "questions":"الأسئلة"," into structured solutions.":" إلى حلول منظّمة.","All projects":"كل المشاريع","Toolkit":"الأدوات",
  "Tools for ":"أدوات لـ","analyzing,":"التحليل،"," improving and making sense of systems.":" وتحسين الأنظمة وفهمها.",
  "The software and methods I use across my coursework and projects.":"البرامج والأساليب التي أستخدمها في دراستي ومشاريعي.",
  "Full skills on About":"كل المهارات في نبذة عني","Education":"التعليم","Currently in third year":"طالبة في السنة الثالثة",
  "Cumulative GPA":"المعدل التراكمي","out of 5.0":"من 5.0","Activities":"الأنشطة","Sports Hackathon":"هاكاثون رياضي","Participant":"مشاركة",
  "Collaborated with a team to develop ideas and solve challenges under time constraints.":"تعاونت مع فريق لتطوير الأفكار وحل التحديات ضمن وقت محدد.",
  "Read more":"اقرأ المزيد","Languages":"اللغات","Strengths":"نقاط القوة",
  "Organization & time management":"التنظيم وإدارة الوقت","Teamwork":"العمل الجماعي","Problem-solving & analytical thinking":"حل المشكلات والتفكير التحليلي",
  "Attention to detail":"الاهتمام بالتفاصيل","Fast learner & adaptable":"سريعة التعلّم والتكيّف",
  "Engineering design, analytical problem-solving and an interest in management consulting.":"التصميم الهندسي وحل المشكلات تحليليًا والاهتمام بالاستشارات الإدارية.",
  "Industrial & Systems Engineering":"الهندسة الصناعية والنظم","Industrial & Systems Eng.":"الهندسة الصناعية والنظم",
  "student focused on problem-solving, engineering design and improving systems.":"طالبة مهتمة بحل المشكلات والتصميم الهندسي وتحسين الأنظمة.",
  "Studying at the ":"أدرس في ",". Explore selected coursework and team projects below.":"، ويمكنك استكشاف نماذج من المقررات والمشاريع الجماعية أدناه.",
  "Explore projects":"استكشف المشاريع","Major":"التخصص","Focus":"مجال التركيز","GPA":"المعدل",
  "Systems & problem-solving":"الأنظمة وحل المشكلات","Scroll":"مرّر للأسفل","Scroll to selected work":"انتقل إلى الأعمال المختارة",
  "Fig. 01 — Front grille":"الشكل 01 — الشبكة الأمامية","Reverse engineering of a handheld cooling fan":"الهندسة العكسية لمروحة تبريد محمولة",
  "Modeled in Autodesk Inventor":"تم النمذجة باستخدام Autodesk Inventor","View study →":"عرض الدراسة ←",
  "Systems thinking, ":"التفكير المنظومي، ","with care":"مع الاهتمام"," for the details.":" بالتفاصيل.",
  "Profile":"الملف الشخصي","Name":"الاسم","Level":"المستوى الدراسي","Location":"الموقع",
  "Biography":"نبذة شخصية","I’m Ebtisam, a third-year ":"أنا ابتسام، طالبة في السنة الثالثة في تخصص ",
  " student at the ":" في "," in":" في","Saudi Arabia.":"المملكة العربية السعودية.",
  "I’m an Industrial & Systems Engineering student at the University of Jeddah, passionate about problem-solving, engineering design, and data analysis. I enjoy turning ideas into practical solutions and continuously developing my technical and analytical skills through projects and collaboration.":"أنا طالبة هندسة صناعية ونظم بجامعة جدة، أهتم بحل المشكلات والتصميم الهندسي وتحليل البيانات. أستمتع بتحويل الأفكار إلى حلول عملية وتطوير مهاراتي التقنية والتحليلية باستمرار من خلال المشاريع والعمل الجماعي.",
  "See my projects":"استعرض مشاريعي","Academic journey":"المسيرة الأكاديمية","Currently · 3rd year":"حاليًا · السنة الثالثة",
  "Coursework has included Introduction to Engineering (EISE 101) and Introduction to Industrial & Systems Engineering, where I completed the team projects shown in my portfolio.":"شملت مقرراتي مقدمة في الهندسة (EISE 101) ومقدمة في الهندسة الصناعية والنظم، ومن خلالها أنجزت المشاريع الجماعية المعروضة في معرض أعمالي.",
  "Skills":"المهارات","Technical skills":"المهارات التقنية","Methods practised in projects":"أساليب استخدمتها في المشاريع","Personal strengths":"نقاط القوة الشخصية",
  "Engineering Design & CAD":"التصميم الهندسي والرسم بمساعدة الحاسوب","Data Analysis & Statistics":"تحليل البيانات والإحصاء",
  "Business & Documentation":"الأعمال والتوثيق","Technical drawings":"رسومات هندسية","Orthographic & isometric views":"مساقط متعامدة ومنظورية",
  "Basic design & posters":"تصميم أساسي وملصقات","Statistical analysis, hypothesis testing, probability distributions, data visualization":"التحليل الإحصائي واختبار الفرضيات والتوزيعات الاحتمالية وتصوير البيانات",
  "Formulas, pivot tables, charts":"المعادلات والجداول المحورية والمخططات","Technical reports and presentation development":"إعداد التقارير التقنية والعروض التقديمية",
  "Clear documentation and basic reporting":"التوثيق الواضح وإعداد التقارير الأساسية","Reverse engineering":"الهندسة العكسية",
  "Engineering design process":"عملية التصميم الهندسي","KT decision analysis":"تحليل القرارات بطريقة KT","Affinity diagrams":"مخططات التقارب",
  "Gantt chart planning":"التخطيط بمخطط جانت","Quality control tools":"أدوات ضبط الجودة",
  "Let’s start a ":"لنبدأ ","conversation.":"حوارًا.",
  "I’m always happy to connect about engineering, university projects or learning opportunities. The best way to reach me is by email or LinkedIn.":"يسعدني التواصل بشأن الهندسة أو المشاريع الجامعية أو فرص التعلّم. أفضل طريقة للتواصل معي هي البريد الإلكتروني أو LinkedIn.",
  "Email":"البريد الإلكتروني","LinkedIn":"لينكدإن","Based in":"مقرّي في","Send an email":"إرسال بريد إلكتروني",
  "Analytical problem-solving, engineering design and a careful eye for detail.":"حل المشكلات بطريقة تحليلية، والتصميم الهندسي، والاهتمام بالتفاصيل.",
  "Index":"الفهرس","Jeddah · Saudi Arabia":"جدة · المملكة العربية السعودية",
  "Work from the ":"أعمال من ","drafting table.":"طاولة الرسم الهندسي.","University projects in reverse engineering, CAD modeling, engineering design and quality — each with a full case study.":"مشاريع جامعية في الهندسة العكسية والنمذجة بمساعدة الحاسوب والتصميم الهندسي والجودة، مع دراسة حالة لكل مشروع.",
  "Index of works":"فهرس الأعمال"," entries":" مشاريع",
  "Project not found":"المشروع غير موجود","This project isn’t here.":"هذا المشروع غير متاح.","Overview":"نظرة عامة","Section":"القسم",
  "Project files":"ملفات المشروع","Gallery":"معرض الصور","Tap an image to enlarge":"اضغطي على الصورة لتكبيرها","Skills applied":"المهارات المستخدمة",
  "Previous":"السابق","Next":"التالي","View case study":"عرض دراسة الحالة","Note":"ملاحظة","Step ":"الخطوة ",
  "Reverse Engineering · CAD":"الهندسة العكسية · التصميم بمساعدة الحاسوب",
  "Taking apart an everyday handheld fan to understand its mechanical constraints, then rebuilding its parts from scratch in Autodesk Inventor.":"تفكيك مروحة محمولة لفهم قيودها الميكانيكية، ثم إعادة بناء أجزائها من الصفر باستخدام Autodesk Inventor.",
  "University of Jeddah · Course project":"جامعة جدة · مشروع مقرر","Institution":"الجهة التعليمية","Type":"النوع","Software":"البرنامج","Deliverables":"المخرجات",
  "3D models & drawing sheets":"نماذج ثلاثية الأبعاد ولوحات رسم هندسي","This project started with a simple consumer product: a handheld cooling fan. The goal was to understand how it is put together by disassembling it, studying each part, and analysing the mechanical system constraints that shape its design.":"بدأ المشروع بمنتج استهلاكي بسيط: مروحة تبريد محمولة. كان الهدف فهم طريقة تركيبها عبر تفكيكها ودراسة أجزائها وتحليل القيود الميكانيكية التي تؤثر في تصميمها.",
  "After the analysis, I modeled the physical components from scratch in Autodesk Inventor and documented them as dimensioned technical drawing sheets.":"بعد التحليل، أنشأت نماذج رقمية للأجزاء باستخدام Autodesk Inventor ووثّقتها في لوحات رسم هندسي بأبعاد محددة.",
  "Process":"الخطوات","Disassemble":"التفكيك","Analyse":"التحليل","Model":"النمذجة","Document":"التوثيق",
  "Took the fan apart to separate and examine its individual components, including the front grille and the main body.":"فككت المروحة لفصل مكوناتها وفحصها، بما في ذلك الشبكة الأمامية والهيكل الرئيسي.",
  "Studied how the parts fit and work together to understand the mechanical system constraints of the product.":"درست كيفية تركيب الأجزاء وعملها معًا لفهم القيود الميكانيكية للمنتج.",
  "Rebuilt the physical components from scratch in Autodesk Inventor using Revolve, Extrude, Shell and Circular Pattern features.":"أعدت بناء الأجزاء باستخدام Autodesk Inventor وميزات Revolve وExtrude وShell وCircular Pattern.",
  "Produced technical drawing sheets with orthographic and isometric views, dimensioned in millimetres.":"أنشأت لوحات رسم هندسي تتضمن المساقط المتعامدة والمنظورية والأبعاد بالملليمتر.",
  "Modeling features used":"ميزات النمذجة المستخدمة","Solar-Powered Phone Case Project":"مشروع غطاء هاتف يعمل بالطاقة الشمسية",
  "Engineering Design · Team Project":"التصميم الهندسي · مشروع جماعي",
  "A team design project for “Solar Sleeve” — a protective phone case concept that harvests sunlight and charges the phone wirelessly.":"مشروع تصميم جماعي لفكرة «Solar Sleeve»؛ غطاء واقٍ للهاتف يستفيد من ضوء الشمس لشحن الهاتف لاسلكيًا.",
  "Design Process":"عملية التصميم","Survey Analysis":"تحليل الاستبيان","Course":"المقرر","Team":"الفريق","Report":"التقرير","Tools":"الأدوات",
  "Phones often run out of battery in places without electricity — deserts, camping areas and remote locations — and power banks still depend on cables and a power source. Our team set out to design a practical, eco-friendly alternative.":"تنفد بطارية الهواتف في أماكن لا تتوفر فيها الكهرباء مثل الصحاري ومواقع التخييم والمناطق النائية، كما تعتمد الشواحن المتنقلة على الكابلات ومصدر طاقة. لذلك عمل الفريق على تصميم بديل عملي وصديق للبيئة.",
  "The concept, called Solar Sleeve, integrates a flexible solar panel, a lithium-polymer battery, a power management circuit and a wireless charging coil into a single protective phone case.":"تدمج فكرة Solar Sleeve لوحًا شمسيًا مرنًا وبطارية ليثيوم بوليمر ودائرة لإدارة الطاقة وملفًا للشحن اللاسلكي داخل غطاء حماية واحد.",
  "I collaborated with the team on idea development, design planning and evaluating the practical functionality of the design, applying analytical thinking and teamwork throughout the project.":"تعاونت مع الفريق في تطوير الفكرة وتخطيط التصميم وتقييم جدواه العملية، مع تطبيق التفكير التحليلي والعمل الجماعي طوال المشروع.",
  "Define the problem":"تحديد المشكلة","Generate & select ideas":"توليد الأفكار واختيارها","Plan":"التخطيط","Implement":"التنفيذ","Test & evaluate":"الاختبار والتقييم",
  "Limitations & recommendations":"القيود والتوصيات","Components & materials":"المكونات والمواد","Testing results":"نتائج الاختبار",
  "Sports Hackathon Participation":"المشاركة في هاكاثون رياضي","Hackathon · Teamwork":"هاكاثون · عمل جماعي",
  "Working with a team to develop ideas and solve challenges under time constraints.":"العمل مع فريق لتطوير الأفكار وحل التحديات ضمن وقت محدد.",
  "I participated in a sports hackathon, collaborating with a team to develop ideas and solve challenges under time constraints.":"شاركت في هاكاثون رياضي وتعاونت مع فريق لتطوير الأفكار وحل التحديات ضمن وقت محدد.",
  "The experience strengthened my teamwork, communication and problem-solving skills — working quickly, sharing ideas openly, and turning a challenge into a structured solution with others.":"عززت التجربة مهاراتي في العمل الجماعي والتواصل وحل المشكلات، من خلال العمل بسرعة وتبادل الأفكار وتحويل التحديات إلى حلول منظمة.",
  "What I practised":"ما تدربت عليه","Collaborating with a team on a shared challenge":"التعاون مع فريق لحل تحدٍ مشترك","Developing ideas quickly under time pressure":"تطوير الأفكار بسرعة تحت ضغط الوقت","Communicating clearly within the team":"التواصل بوضوح داخل الفريق","Structured problem-solving":"حل المشكلات بطريقة منظمة",
  "Quality Control at Toyota Motor Corporation":"ضبط الجودة في شركة تويوتا","Research Report · Quality":"تقرير بحثي · الجودة",
  "A group research report on the role of quality control in the field, told through Toyota’s recall crisis and recovery.":"تقرير بحثي جماعي عن دور ضبط الجودة، من خلال أزمة استدعاء المركبات لدى تويوتا والتعافي منها.",
  "This group report explores quality control as a core specialty within Industrial & Systems Engineering — from its evolution beyond final inspection to the statistical tools engineers use to prevent defects at the source.":"يستعرض التقرير ضبط الجودة بوصفه مجالًا أساسيًا في الهندسة الصناعية والنظم، من تطوره إلى ما يتجاوز الفحص النهائي إلى الأدوات الإحصائية المستخدمة لمنع العيوب من مصدرها.",
  "As a case study, we examined how Toyota responded to the recall of nearly 9 million vehicles in the late 2000s and early 2010s, and how its production system and quality methods supported its recovery.":"درسنا استجابة تويوتا لاستدعاء نحو 9 ملايين مركبة في أواخر العقد الأول وبداية العقد الثاني من الألفية، وكيف ساعدها نظام الإنتاج وأساليب الجودة على التعافي.",
  "Topics covered":"الموضوعات التي تناولها التقرير","Corrective measures studied":"الإجراءات التصحيحية المدروسة","Key takeaway":"الخلاصة",
  "Communication & transparency":"التواصل والشفافية","Continuous improvement":"التحسين المستمر","Supply chain management":"إدارة سلسلة الإمداد","Safety redesign":"إعادة تصميم السلامة",
  "Faster reporting of safety issues and clear, truthful communication with customers.":"الإبلاغ السريع عن مشكلات السلامة والتواصل الواضح والصادق مع العملاء.",
  "Ongoing evaluation and learning from failures to protect product quality.":"التقييم المستمر والتعلم من الإخفاقات لحماية جودة المنتج.",
  "Tighter supplier monitoring and joint quality improvement programmes.":"مراقبة الموردين بصورة أدق وبرامج مشتركة لتحسين الجودة.",
  "Redesigning the accelerator pedal mechanism and adding brake-override systems.":"إعادة تصميم آلية دواسة التسارع وإضافة أنظمة تجاوز الفرامل.",
  "Technical tools alone are not enough: quality depends on a culture of communication, accountability and continuous improvement — a perspective at the heart of Industrial & Systems Engineering.":"لا تكفي الأدوات التقنية وحدها؛ فالجودة تعتمد على ثقافة التواصل والمساءلة والتحسين المستمر، وهي مبادئ جوهرية في الهندسة الصناعية والنظم.",
  "Photos and further details from the hackathon will be added here.":"ستُضاف الصور والتفاصيل الإضافية عن الهاكاثون هنا.",
};

const arToEn = Object.fromEntries(Object.entries(enToAr).map(([en, ar]) => [ar, en])) as Record<string, string>;

export function getSavedLanguage(): PortfolioLanguage {
  try {
    return localStorage.getItem("portfolio-language") === "ar" ? "ar" : "en";
  } catch {
    return "en";
  }
}

export function applyPortfolioLanguage(language: PortfolioLanguage) {
  try { localStorage.setItem("portfolio-language", language); } catch {}
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.documentElement.dataset.language = language;
  document.body?.classList.toggle("language-ar", language === "ar");
  translatePage(language);
}

export function translatePage(language: PortfolioLanguage, root: ParentNode = document.body) {
  if (!root) return;
  const map = language === "ar" ? enToAr : arToEn;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const original = node.nodeValue ?? "";
    const trimmed = original.trim();
    if (!trimmed) continue;
    const replacement = map[trimmed];
    if (replacement && replacement !== trimmed) {
      node.nodeValue = original.replace(trimmed, replacement);
    }
  }
  const attrs = ["aria-label", "title", "placeholder"];
  root.querySelectorAll?.("*").forEach((element) => {
    for (const attr of attrs) {
      const value = element.getAttribute(attr);
      if (!value) continue;
      const replacement = map[value.trim()];
      if (replacement && replacement !== value) element.setAttribute(attr, value.replace(value.trim(), replacement));
    }
  });
}
