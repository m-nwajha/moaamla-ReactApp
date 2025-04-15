import { PATHS } from '../router/paths';

// Hero Data
export const HERO_DATA = {
  title: 'معاملة',
  description: 'جميع معاملات مكتب سند في منصة واحد!',
  paragraph:
    'استمتع بالراحة والسهولة في إنجاز جميع معاملاتك الخاصة والتجارية في مكان واحد، دون عناء أو تأخير!',
  input: 'ابحث عن الخدمة',
  btn: 'البحث الآن',
  img: 'assets/images/hero-img.png'
};

// Last Services Data
export const LAST_SERVICES = {
  title: 'جديد خدماتنا',
  servicesItem: {
    time: 'الوقت المستغرق تقريباً:',
    btnLabel: 'إبدأ الخدمة الآن'
  }
};

// How Used Platform
export const HOW_USED_PLATFORM = {
  title: 'كيفية إستخدام منصة معاملة.',
  description:
    'استمتع بالراحة والسهولة في إنجاز جميع معاملاتك الخاصة والتجارية في مكان واحد، دون عناء أو تأخير!',
  Steps: [
    {
      id: 1,
      title: 'اختر الخدمة',
      description: 'اختر خدمة متنوعة من منصة معاملة.'
    },
    {
      id: 2,
      title: 'أدخل البيانات',
      description: 'أدخل بياناتك الشخصية والمعلومات المطلوبة.'
    },
    {
      id: 3,
      title: 'الدفع',
      description: 'قم بدفع رسوم الخدمة.'
    }
  ]
};

// About Ads.
export const ABOUT_ADS = {
  title: 'منصة معاملة للخدمات وتعقيب المعاملات.',
  description:
    'اختيار الاسم للسجل التجاري (الشركة) هو قرار عائد لك كصاحب عمل. إن وزارة التجارة والصناعة وترويج الاستثمار قد حددت قوانين وضوابط بسيطة يجب اتباعها عند اختيار الاسم التجاري، ولكن قبل اختيار الاسم يرجى قراءة القوانين والضوابط التي حددتها وزارة التجارة والصناعة للاسم للتجاري، ثم تأ كد من عدم وجود أسماء مشابهة من “خدمة ”توفر الاسم التجاري',
  image: '../assets/images/about2-img.png',
  btns: {
    btn1: {
      label: 'تواصل معنا',
      href: PATHS.CONTACT.PATH
    },
    btn2: {
      label: 'تعلم المزيد',
      href: PATHS.ABOUT.PATH
    }
  }
};

// Reviews
export const REVIEWS = {
  title: 'توصيات عملائنا.'
};
