// Third Eye Testing Guide - JavaScript (Fixed Version)

// Test cases data
const testCasesData = {
  navigation: {
    title: "وضع الملاحة",
    icon: "fas fa-route",
    cases: [
      {
        id: "NAV-001",
        title: "الملاحة الداخلية - الحركة الأساسية",
        priority: "عالي",
        type: "وظيفي",
        description: "اختبار قدرة النظام على توجيه المستخدم في الأماكن المغلقة بدقة",
        steps: ["تفعيل وضع الملاحة", "اختيار الوجهة", "متابعة التوجيهات الصوتية", "التحقق من الوصول للهدف"],
        expectedResult: "وصول المستخدم للوجهة المحددة بأمان ودقة"
      },
      {
        id: "NAV-002", 
        title: "الملاحة الخارجية - تكامل GPS",
        priority: "عالي",
        type: "تكامل", 
        description: "التحقق من الملاحة الخارجية باستخدام إحداثيات GPS",
        steps: ["تفعيل GPS", "اختبار دقة تحديد الموقع", "اختبار التوجيه للوجهة", "مراقبة استهلاك البطارية"],
        expectedResult: "ملاحة دقيقة مع استهلاك معقول للطاقة"
      },
      {
        id: "NAV-003",
        title: "التبديل بين الأوضاع الفرعية",
        priority: "متوسط",
        type: "وظيفي",
        description: "اختبار التبديل بين الأوضاع الأربعة للملاحة",
        steps: ["تفعيل وضع ملاحة", "التبديل للوضع الثاني", "التحقق من استمرارية الخدمة", "اختبار جميع الأوضاع"],
        expectedResult: "تبديل سلس بدون انقطاع الخدمة"
      },
      {
        id: "NAV-004",
        title: "الملاحة في البيئات المزدحمة",
        priority: "عالي",
        type: "أداء",
        description: "اختبار أداء النظام في الأماكن المزدحمة بالأشخاص والعقبات",
        steps: ["اختبار في مكان مزدحم", "مراقبة دقة التوجيه", "اختبار تجنب العقبات", "قياس زمن الاستجابة"],
        expectedResult: "محافظة على الدقة رغم الازدحام"
      }
    ]
  },
  objectDetection: {
    title: "التعرف على الأجسام ووصف المشهد",
    icon: "fas fa-search",
    cases: [
      {
        id: "OBJ-001",
        title: "التعرف الأساسي على الأجسام",
        priority: "عالي", 
        type: "وظيفي",
        description: "اختبار التعرف على الأشياء اليومية الشائعة",
        steps: ["توجيه الكاميرا للجسم", "تفعيل وضع التعرف", "الاستماع للوصف الصوتي", "التحقق من دقة التعرف"],
        expectedResult: "تعرف دقيق على 90% من الأجسام الشائعة"
      },
      {
        id: "OBJ-002",
        title: "وصف المشهد الكامل",
        priority: "عالي",
        type: "وظيفي", 
        description: "اختبار قدرة النظام على وصف المشهد بالكامل",
        steps: ["تفعيل وضع وصف المشهد", "توجيه الكاميرا للمشهد", "الاستماع للوصف", "التحقق من شمولية الوصف"],
        expectedResult: "وصف شامل ومفهوم للمشهد"
      },
      {
        id: "OBJ-003",
        title: "البحث عن أشياء محددة",
        priority: "متوسط",
        type: "وظيفي",
        description: "اختبار قدرة البحث عن جسم معين بناءً على طلب المستخدم",
        steps: ["طلب البحث عن جسم معين", "مسح المحيط بالكاميرا", "تلقي التنبيه عند العثور", "التحقق من دقة الموقع"],
        expectedResult: "العثور على الجسم المطلوب وتحديد موقعه"
      },
      {
        id: "OBJ-004",
        title: "التعرف في الإضاءة المنخفضة",
        priority: "عالي",
        type: "أداء",
        description: "اختبار أداء التعرف في ظروف الإضاءة الضعيفة",
        steps: ["تقليل الإضاءة تدريجياً", "اختبار التعرف في كل مستوى", "مقارنة الدقة", "اختبار الحد الأدنى للإضاءة"],
        expectedResult: "أداء مقبول حتى في الإضاءة المنخفضة"
      }
    ]
  },
  faceRecognition: {
    title: "التعرف على الوجوه", 
    icon: "fas fa-user-friends",
    cases: [
      {
        id: "FACE-001",
        title: "التعرف على الوجوه المعروفة",
        priority: "عالي",
        type: "وظيفي",
        description: "اختبار التعرف على الوجوه المسجلة مسبقاً",
        steps: ["إضافة وجوه للقاعدة", "اختبار التعرف", "التحقق من دقة التسمية", "اختبار زوايا مختلفة"],
        expectedResult: "تعرف دقيق على الوجوه المسجلة"
      },
      {
        id: "FACE-002", 
        title: "إضافة وجوه جديدة",
        priority: "عالي",
        type: "وظيفي",
        description: "اختبار عملية إضافة وجوه جديدة عبر GUI",
        steps: ["فتح واجهة الإضافة", "التقاط صور للوجه", "إدخال البيانات", "حفظ في القاعدة", "اختبار التعرف"],
        expectedResult: "إضافة ناجحة وتعرف فوري"
      },
      {
        id: "FACE-003",
        title: "التعرف في الجماعات",
        priority: "متوسط", 
        type: "أداء",
        description: "اختبار التعرف على عدة وجوه في مشهد واحد",
        steps: ["وضع عدة أشخاص في المشهد", "تفعيل التعرف", "التحقق من تحديد كل وجه", "اختبار السرعة"],
        expectedResult: "تحديد جميع الوجوه المعروفة في المشهد"
      },
      {
        id: "FACE-004",
        title: "حماية خصوصية البيانات",
        priority: "حرج",
        type: "أمان",
        description: "اختبار تأمين قاعدة بيانات الوجوه",
        steps: ["محاولة الوصول للبيانات", "اختبار التشفير", "فحص أذونات الملفات", "اختبار النسخ الاحتياطي"],
        expectedResult: "حماية كاملة لبيانات الوجوه"
      }
    ]
  },
  ocrTranslation: {
    title: "قراءة النصوص والترجمة",
    icon: "fas fa-file-alt", 
    cases: [
      {
        id: "OCR-001",
        title: "التعرف على النص العربي",
        priority: "عالي",
        type: "وظيفي",
        description: "اختبار دقة OCR للنصوص العربية المكتوبة والمطبوعة",
        steps: ["توجيه الكاميرا للنص العربي", "تفعيل OCR", "الاستماع للقراءة", "مقارنة النتيجة بالأصل"],
        expectedResult: "قراءة دقيقة للنص العربي بنسبة 95%+"
      },
      {
        id: "OCR-002",
        title: "التعرف على النص الإنجليزي", 
        priority: "عالي",
        type: "وظيفي",
        description: "اختبار دقة OCR للنصوص الإنجليزية",
        steps: ["توجيه للنص الإنجليزي", "تفعيل OCR", "الاستماع للقراءة", "التحقق من الدقة"],
        expectedResult: "قراءة دقيقة للنص الإنجليزي"
      },
      {
        id: "OCR-003",
        title: "ترجمة عربي-إنجليزي",
        priority: "متوسط",
        type: "وظيفي", 
        description: "اختبار ترجمة النصوص من العربية للإنجليزية",
        steps: ["قراءة نص عربي", "طلب الترجمة", "الاستماع للترجمة", "التحقق من دقة الترجمة"],
        expectedResult: "ترجمة مفهومة ودقيقة"
      },
      {
        id: "OCR-004",
        title: "التعامل مع الخطوط المختلفة",
        priority: "متوسط",
        type: "قابلية الاستخدام",
        description: "اختبار OCR مع أنواع خطوط مختلفة",
        steps: ["اختبار خطوط مطبوعة", "اختبار خطوط يدوية", "اختبار أحجام مختلفة", "مقارنة الدقة"],
        expectedResult: "أداء مقبول مع معظم أنواع الخطوط"
      }
    ]
  },
  sosMode: {
    title: "وضع الطوارئ SOS",
    icon: "fas fa-exclamation-triangle", 
    cases: [
      {
        id: "SOS-001",
        title: "تفعيل زر الطوارئ",
        priority: "حرج",
        type: "سلامة",
        description: "اختبار تفعيل SOS عبر الزر الفيزيائي",
        steps: ["الضغط على زر SOS", "التحقق من الاستجابة الفورية", "مراقبة إرسال التنبيهات", "التحقق من وصول الرسائل"],
        expectedResult: "تفعيل فوري وإرسال تنبيهات لجميع القنوات"
      },
      {
        id: "SOS-002",
        title: "إرسال الرسائل النصية",
        priority: "حرج", 
        type: "تكامل",
        description: "اختبار إرسال SMS لجهات الاتصال المحددة",
        steps: ["تفعيل SOS", "التحقق من إرسال SMS", "التحقق من محتوى الرسالة", "اختبار أرقام متعددة"],
        expectedResult: "إرسال فوري لجميع الأرقام المسجلة"
      },
      {
        id: "SOS-003",
        title: "المكالمات التلقائية", 
        priority: "حرج",
        type: "تكامل",
        description: "اختبار بدء مكالمات تلقائية لجهات الاتصال",
        steps: ["تفعيل SOS", "مراقبة بدء المكالمة", "اختبار عدة أرقام", "التحقق من الترتيب"],
        expectedResult: "بدء مكالمات متتالية حسب الأولوية"
      },
      {
        id: "SOS-004",
        title: "إرسال البريد الإلكتروني",
        priority: "عالي",
        type: "تكامل", 
        description: "اختبار إرسال إيميل طوارئ مع الموقع",
        steps: ["تفعيل SOS", "التحقق من إرسال الإيميل", "فحص محتوى الرسالة", "التحقق من إرفاق الموقع"],
        expectedResult: "إرسال إيميل يتضمن الموقع الحالي"
      },
      {
        id: "SOS-005",
        title: "العمل في حالة ضعف الشبكة",
        priority: "عالي", 
        type: "أداء",
        description: "اختبار أداء SOS مع إشارة ضعيفة",
        steps: ["تقليل قوة الشبكة", "تفعيل SOS", "مراقبة المحاولات", "اختبار إعادة الإرسال"],
        expectedResult: "المثابرة على الإرسال حتى النجاح"
      }
    ]
  },
  integration: {
    title: "اختبار تكامل النظام", 
    icon: "fas fa-puzzle-piece",
    cases: [
      {
        id: "INT-001",
        title: "تكامل تبديل الأوضاع",
        priority: "عالي",
        type: "تكامل", 
        description: "اختبار التبديل السلس بين جميع أوضاع التشغيل",
        steps: ["بدء وضع الملاحة", "التبديل لوضع الأجسام", "التبديل للوجوه", "التبديل لـ OCR", "التبديل لـ SOS"],
        expectedResult: "تبديل سلس بدون فقدان البيانات"
      },
      {
        id: "INT-002",
        title: "تكامل Hardware-Software",
        priority: "حرج",
        type: "تكامل",
        description: "اختبار تفاعل الجهاز مع البرنامج",
        steps: ["اختبار الأزرار الفيزيائية", "اختبار الكاميرا", "اختبار السماعات", "اختبار الميكروفون"],
        expectedResult: "تفاعل سليم لجميع المكونات"
      },
      {
        id: "INT-003", 
        title: "تكامل قاعدة البيانات",
        priority: "عالي",
        type: "تكامل",
        description: "اختبار حفظ واسترجاع البيانات بين الأوضاع",
        steps: ["حفظ وجه في قاعدة البيانات", "التبديل للأوضاع الأخرى", "العودة لوضع الوجوه", "التحقق من وجود البيانات"],
        expectedResult: "حفظ دائم للبيانات"
      },
      {
        id: "INT-004",
        title: "تكامل النظام الصوتي", 
        priority: "عالي",
        type: "تكامل",
        description: "اختبار استمرارية التغذية الصوتية",
        steps: ["بدء وضع مع صوت", "التبديل لوضع آخر", "التحقق من استمرار الصوت", "اختبار مستوى الصوت"],
        expectedResult: "صوت واضح ومستمر في جميع الأوضاع"
      }
    ]
  }
};

// Glossary data
const glossaryTerms = [
  {
    term: "OCR - التعرف الضوئي على الأحرف",
    definition: "تقنية تحويل الصور التي تحتوي على نصوص (مكتوبة أو مطبوعة) إلى نص رقمي قابل للتحرير والبحث."
  },
  {
    term: "Computer Vision - الرؤية الحاسوبية", 
    definition: "علم يهدف إلى جعل الحاسوب قادراً على رؤية وفهم المحتوى البصري مثل الصور والفيديو."
  },
  {
    term: "Face Recognition - التعرف على الوجوه",
    definition: "تقنية تحديد أو التحقق من هوية شخص من خلال وجهه في صورة أو فيديو."
  },
  {
    term: "GPS - نظام تحديد المواقع",
    definition: "نظام ملاحة عبر الأقمار الصناعية يوفر معلومات الموقع والوقت في أي مكان على الأرض."
  },
  {
    term: "API - واجهة برمجة التطبيقات",
    definition: "مجموعة من القواعد والبروتوكولات لبناء التطبيقات والتفاعل بين البرامج المختلفة."
  },
  {
    term: "Integration Testing - اختبار التكامل",
    definition: "نوع من الاختبارات يركز على التحقق من التفاعل بين وحدات أو مكونات النظام المختلفة."
  },
  {
    term: "Headset - سماعة الرأس",
    definition: "جهاز يُرتدى على الرأس يحتوي على سماعات وأحياناً ميكروفون، وفي هذا المشروع يحتوي على كاميرا وحساسات."
  },
  {
    term: "Hardware - العتاد الصلب",
    definition: "المكونات الفيزيائية للحاسوب أو الجهاز مثل المعالج والذاكرة والكاميرا."
  },
  {
    term: "Software - البرمجيات",
    definition: "البرامج والتطبيقات التي تعمل على الجهاز وتحكم في العتاد الصلب."
  },
  {
    term: "SOS - إشارة الاستغاثة",
    definition: "إشارة استغاثة دولية تُستخدم في حالات الطوارئ لطلب المساعدة."
  },
  {
    term: "GUI - واجهة المستخدم الرسومية",
    definition: "واجهة تسمح للمستخدم بالتفاعل مع الجهاز من خلال عناصر بصرية مثل النوافذ والأزرار."
  },
  {
    term: "Python - بايثون",
    definition: "لغة برمجة عالية المستوى، سهلة التعلم والاستخدام، مفيدة جداً في الذكاء الاصطناعي وتحليل البيانات."
  }
];

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Third Eye Guide...');
  initializeNavigation();
  initializeTechAccordion();
  loadTestCases();
  loadGlossary();
  initializeSearch();
  updateProgressBar();
  console.log('Third Eye Guide initialized successfully');
});

// Navigation functionality
function initializeNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  // Mobile nav toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Nav toggle clicked');
      navMenu.classList.toggle('active');
    });
  }

  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      }
    });
  });

  // Update progress bar on scroll
  window.addEventListener('scroll', updateProgressBar);
}

// Progress bar update
function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = Math.min(scrollPercent, 100) + '%';
  }
}

// Technology accordion
function initializeTechAccordion() {
  document.querySelectorAll('.tech-header').forEach(header => {
    header.addEventListener('click', function() {
      const techItem = this.parentElement;
      const isActive = techItem.classList.contains('active');
      
      // Close all others
      document.querySelectorAll('.tech-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current
      if (!isActive) {
        techItem.classList.add('active');
      }
    });
  });
}

// Load test cases
function loadTestCases() {
  const testcasesContainer = document.getElementById('testcasesContainer');
  if (!testcasesContainer) {
    console.error('Test cases container not found');
    return;
  }
  
  testcasesContainer.innerHTML = '';
  
  Object.keys(testCasesData).forEach(categoryKey => {
    const category = testCasesData[categoryKey];  
    const categoryElement = createTestCategoryElement(category, categoryKey);
    testcasesContainer.appendChild(categoryElement);
  });
  
  console.log('Test cases loaded successfully');
}

// Create test category element
function createTestCategoryElement(category, categoryKey) {
  const categoryDiv = document.createElement('div');
  categoryDiv.className = 'testcase-category';
  categoryDiv.dataset.category = categoryKey;

  const headerDiv = document.createElement('div');
  headerDiv.className = 'category-header';
  headerDiv.innerHTML = `
    <h3><i class="${category.icon}"></i> ${category.title}</h3>
  `;

  const listDiv = document.createElement('div');
  listDiv.className = 'testcase-list';

  category.cases.forEach(testCase => {
    const testCaseElement = createTestCaseElement(testCase);
    listDiv.appendChild(testCaseElement);
  });

  categoryDiv.appendChild(headerDiv);
  categoryDiv.appendChild(listDiv);

  return categoryDiv;
}

// Create individual test case element
function createTestCaseElement(testCase) {
  const testCaseDiv = document.createElement('div');
  testCaseDiv.className = 'testcase-item';
  testCaseDiv.dataset.priority = testCase.priority;
  testCaseDiv.dataset.type = testCase.type;
  testCaseDiv.dataset.title = testCase.title.toLowerCase();
  testCaseDiv.dataset.description = testCase.description.toLowerCase();
  testCaseDiv.dataset.id = testCase.id.toLowerCase();

  const priorityClass = getPriorityClass(testCase.priority);

  testCaseDiv.innerHTML = `
    <div class="testcase-header">
      <h4 class="testcase-title">${testCase.title}</h4>
      <span class="testcase-id">${testCase.id}</span>
    </div>
    <div class="testcase-meta">
      <span class="priority-tag ${priorityClass}">${testCase.priority}</span>
      <span class="type-tag">${testCase.type}</span>
    </div>
    <p class="testcase-description">${testCase.description}</p>
    ${testCase.steps ? `
      <div class="testcase-steps">
        <strong>خطوات الاختبار:</strong>
        <ol style="margin: 8px 0; padding-right: 20px;">
          ${testCase.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    ` : ''}
    ${testCase.expectedResult ? `
      <div class="testcase-result">
        <strong>النتيجة المتوقعة:</strong> ${testCase.expectedResult}
      </div>
    ` : ''}
  `;

  return testCaseDiv;
}

// Get priority CSS class
function getPriorityClass(priority) {
  switch(priority) {
    case 'حرج': return 'critical';
    case 'عالي': return 'high'; 
    case 'متوسط': return 'medium';
    case 'منخفض': return 'low';
    default: return 'medium';
  }
}

// Load glossary
function loadGlossary() {
  const glossaryTermsContainer = document.getElementById('glossaryTerms');
  if (!glossaryTermsContainer) {
    console.error('Glossary container not found');
    return;
  }
  
  glossaryTermsContainer.innerHTML = '';
  
  glossaryTerms.forEach(item => {
    const termDiv = document.createElement('div');
    termDiv.className = 'glossary-term';
    termDiv.dataset.term = item.term.toLowerCase();
    termDiv.dataset.definition = item.definition.toLowerCase();
    
    termDiv.innerHTML = `
      <h4>${item.term}</h4>
      <p>${item.definition}</p>
    `;
    
    glossaryTermsContainer.appendChild(termDiv);
  });
  
  console.log('Glossary loaded successfully');
}

// Initialize search functionality
function initializeSearch() {
  const testSearch = document.getElementById('testSearch');
  const priorityFilter = document.getElementById('priorityFilter');
  const typeFilter = document.getElementById('typeFilter');
  const glossarySearch = document.getElementById('glossarySearch');
  
  // Test cases search and filters
  if (testSearch) {
    testSearch.addEventListener('input', filterTestCases);
    testSearch.addEventListener('keyup', filterTestCases);
  }
  
  if (priorityFilter) {
    priorityFilter.addEventListener('change', filterTestCases);
  }
  
  if (typeFilter) {
    typeFilter.addEventListener('change', filterTestCases);
  }
  
  // Glossary search
  if (glossarySearch) {
    glossarySearch.addEventListener('input', filterGlossary);
    glossarySearch.addEventListener('keyup', filterGlossary);
  }
  
  console.log('Search functionality initialized');
}

// Filter test cases
function filterTestCases() {
  const testSearch = document.getElementById('testSearch');
  const priorityFilter = document.getElementById('priorityFilter');
  const typeFilter = document.getElementById('typeFilter');
  
  const searchTerm = testSearch ? testSearch.value.toLowerCase().trim() : '';
  const selectedPriority = priorityFilter ? priorityFilter.value : '';
  const selectedType = typeFilter ? typeFilter.value : '';
  
  console.log('Filtering with:', { searchTerm, selectedPriority, selectedType });
  
  const testCases = document.querySelectorAll('.testcase-item');
  let visibleCount = 0;
  
  testCases.forEach(testCase => {
    const title = testCase.dataset.title || '';
    const description = testCase.dataset.description || '';
    const id = testCase.dataset.id || '';
    const priority = testCase.dataset.priority || '';
    const type = testCase.dataset.type || '';
    
    const matchesSearch = !searchTerm || 
      title.includes(searchTerm) || 
      description.includes(searchTerm) ||
      id.includes(searchTerm);
      
    const matchesPriority = !selectedPriority || priority === selectedPriority;
    const matchesType = !selectedType || type === selectedType;
    
    const shouldShow = matchesSearch && matchesPriority && matchesType;
    
    if (shouldShow) {
      testCase.style.display = 'block';
      visibleCount++;
    } else {
      testCase.style.display = 'none';
    }
  });
  
  // Hide empty categories
  document.querySelectorAll('.testcase-category').forEach(category => {
    const visibleCases = category.querySelectorAll('.testcase-item[style="display: block"], .testcase-item:not([style*="display: none"])');
    const hasVisibleCases = visibleCases.length > 0;
    
    if (hasVisibleCases) {
      category.style.display = 'block';
    } else {
      category.style.display = 'none';
    }
  });
  
  console.log(`Filtered: ${visibleCount} test cases visible`);
}

// Filter glossary
function filterGlossary() {
  const glossarySearch = document.getElementById('glossarySearch');
  const searchTerm = glossarySearch ? glossarySearch.value.toLowerCase().trim() : '';
  
  console.log('Filtering glossary with:', searchTerm);
  
  const terms = document.querySelectorAll('.glossary-term');
  let visibleCount = 0;
  
  terms.forEach(term => {
    const termText = term.dataset.term || '';
    const definitionText = term.dataset.definition || '';
    
    if (!searchTerm || termText.includes(searchTerm) || definitionText.includes(searchTerm)) {
      term.style.display = 'block';
      visibleCount++;
    } else {
      term.style.display = 'none';
    }
  });
  
  console.log(`Filtered: ${visibleCount} glossary terms visible`);
}

// Mode card interactions
document.addEventListener('click', function(e) {
  if (e.target.closest('.mode-card')) {
    const modeCard = e.target.closest('.mode-card');
    const mode = modeCard.dataset.mode;
    
    // Add visual feedback
    modeCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
      modeCard.style.transform = 'translateY(-2px)';
    }, 150);
    
    console.log(`Mode selected: ${mode}`);
  }
});

// Accessibility enhancements
document.addEventListener('keydown', function(e) {
  // Escape key closes mobile menu
  const navMenu = document.getElementById('navMenu');
  if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

// Print functionality
function setupPrintStyles() {
  // Expand all accordion items for printing
  window.addEventListener('beforeprint', function() {
    document.querySelectorAll('.tech-item').forEach(item => {
      item.classList.add('active');
    });
    console.log('Preparing for print - expanding all sections');
  });
  
  window.addEventListener('afterprint', function() {
    document.querySelectorAll('.tech-item').forEach(item => {
      item.classList.remove('active');
    });
    console.log('Print completed - collapsing sections');
  });
}

// Initialize print functionality
setupPrintStyles();

// Smooth reveal animations for sections (optional enhancement)
function initializeScrollAnimations() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all cards and major elements
    document.querySelectorAll('.card, .mode-card, .type-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }
}

// Initialize scroll animations after page load
window.addEventListener('load', initializeScrollAnimations);

// Export for potential external use
window.ThirdEyeGuide = {
  testCasesData,
  glossaryTerms,
  filterTestCases,
  filterGlossary,
  loadTestCases,
  loadGlossary
};