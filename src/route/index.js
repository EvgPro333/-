// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// *================================================================ my var
// var header = {
//   name: {
//     firstname: 'Dmytro',
//     lastname: 'Ivanov',
//   },
//   position: 'Junior Fullstack JS Developer',
//   salary: '600$ в місяць',
//   address: 'Ukraine, Mykolaiv',
// }

// var footer = {
//   social: {
//     email: {
//       text: 'dmytro@mail.com',
//       href: 'mailto:dmytro@mail.com',
//     },
//     phone: {
//       text: '+380670000123',
//       href: 'tel:+380670000123',
//     },
//     LinkedIn: {
//       text: 'LinkedIn',
//       href: 'https://www.linkedin.com/in/dmytro-test',
//     },
//   },
// }

// !################################################################ mainPage
// router.get Створює нам один ентпоїнт
//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку
  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('mainPage', {
    layout: 'mainPage',
    page: {
      title: 'cource - main page',
    },
    main: [
      // HTML
      {
        name: 'HTML',
        value: `Hyper Text Markup Languager
			 			(мова гіпертекстової розмітки)`,
        //  url: '/html',
        url: 'http://google.com',
        path: '/img/mainPage/htmlmain.png',
      },
      // CSS
      {
        name: 'CSS',
        value: 'css',
        //  url: '/css',
        url: 'cssPage',
        path: '/img/mainPage/cssmain.png',
      },
      // HandleBars
      {
        name: 'HandleBars',
        value: 'handlebars',
        //  url: '/css',
        url: 'http://google.com',
        path: '/img/mainPage/handlebarsmain.png',
      },
    ],
  })
})
// todo===========================================================================
// !											HTML
// todo===========================================================================

// ================================================================ htmlPage
router.get('/htmlPage', function (req, res) {
  res.render('htmlPage', {
    layout: 'cssPage',
    page: {
      title: 'htmlPage',
    },
  })
})

// todo===========================================================================
// !											CSS
// todo===========================================================================

// ================================================================ cssPage
router.get('/cssPage', function (req, res) {
  res.render('cssPage', {
    layout: 'cssPage',
    page: {
      title: 'cssPage',
    },
    main: [
      // Знайомство з СSS
      {
        name: 'Знайомство з СSS',
        //   value: `Hyper Text Markup Languager
        // (мова гіпертекстової розмітки)`,
        //  url: '/html',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/htmlmain.png',
      },
      // Підключення CSS
      {
        name: 'Підключення CSS',
        //   value: 'css',
        //  url: '/css',
        //   url: 'cssPage',
        //   path: '/img/mainPage/cssmain.png',
      },
      // Селектори. 1 частина
      {
        name: 'Селектори. 1 частина',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Селектори. 2 частина
      {
        name: 'Селектори. 2 частина',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Селектори. 3 частина
      {
        name: 'Селектори. 3 частина',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Селектори. 4 частина
      {
        name: 'Селектори. 4 частина',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Відображення тексту
      {
        name: 'Відображення тексту',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Відображення шрифту
      {
        name: 'Відображення шрифту',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Відображення блоків
      {
        name: 'Відображення блоків',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Робота з рамками та тінями
      {
        name: 'Робота з рамками та тінями',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Робота з обрізанням та перенесенням контенту
      {
        name: 'Робота з обрізанням та перенесенням контенту',
        //   value: 'handlebars',
        url: 'csscroptransfercontent',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Робота з фоном
      {
        name: 'Робота з фоном',
        //   value: 'handlebars',
        url: 'cssbackground',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Робота з списками та таблицями
      {
        name: 'Робота з списками та таблицями',
        //   value: 'handlebars',
        url: 'cssliststables',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Робота з гнучким позиціюванням
      {
        name: 'Робота з гнучким позиціюванням',
        //   value: 'handlebars',
        url: 'cssflex',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Словник сучасних та продвинутих CSS властивостей для робити з текстом, шрифтом та блоками
      {
        name: 'Словник сучасних та продвинутих CSS властивостей для робити з текстом, шрифтом та блоками',
        //   value: 'handlebars',
        url: 'cssdictionarytextfontblocks',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Словник сучасних та продвинутих CSS властивостей для робити з стовпцями, фрагментами та прокруткою
      {
        name: 'Словник сучасних та продвинутих CSS властивостей для робити з стовпцями, фрагментами та прокруткою',
        //   value: 'handlebars',
        url: 'csscolfrag',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
      // Словник селекторів без підтримки
      {
        name: 'Словник селекторів без підтримки',
        //   value: 'handlebars',
        //  url: '/css',
        //   url: 'http://google.com',
        //   path: '/img/mainPage/handlebarsmain.png',
      },
    ],
  })
})

// ?-----------------------------------Робота з обрызанням та перенесенням контенту
// cssPage																	csscroptransfercontent
router.get('/csscroptransfercontent', function (req, res) {
  res.render('csscroptransfercontent', {
    layout: 'cssPage',
    page: {
      title: 'css',
    },
    lesson: {
      title: 'Робота з обрызанням та перенесенням контенту',
    },
  })
})

// ?-----------------------------------Словник сучасних та продвинутих CSS властивостей
// ?для робити з текстом,шрифтом та блоками
// cssPage																	cssdictionarytextfontblocks
router.get(
  '/cssdictionarytextfontblocks',
  function (req, res) {
    res.render('cssdictionarytextfontblocks', {
      layout: 'cssPage',
      page: {
        title: 'css',
      },
      lesson: {
        title:
          'Робота з обрызанням та перенесенням контенту',
      },
    })
  },
)

// ?-----------------------------------Словник сучасних та продвинутих CSS властивостей
// ?для робити з стовпцями, фрагментами та прокруткою
// cssPage																	csscolfrag
router.get('/csscolfrag', function (req, res) {
  res.render('csscolfrag', {
    layout: 'cssPage',
    page: {
      title: 'css',
    },
    lesson: {
      title: 'Робота з обрызанням та перенесенням контенту',
    },
  })
})

// ?-----------------------------------Робота з фоном
// cssPage																	cssbackground
router.get('/cssbackground', function (req, res) {
  res.render('cssbackground', {
    layout: 'cssPage',
    page: {
      title: 'css',
    },
    lesson: {
      title: 'Робота з обрызанням та перенесенням контенту',
    },
  })
})

// ?-----------------------------------Робота з списками та таблицями
// cssPage																	cssliststables
router.get('/cssliststables', function (req, res) {
  res.render('cssliststables', {
    layout: 'cssPage',
    page: {
      title: 'css',
    },
    lesson: {
      title: 'Робота з обрызанням та перенесенням контенту',
    },
  })
})

// ?-----------------------------------Робота з гнучким позиціюванням
// cssPage																	cssflex
router.get('/cssflex', function (req, res) {
  res.render('cssflex', {
    layout: 'cssPage',
    page: {
      title: 'cssflex',
    },
    lesson: {
      title: 'Робота з гнучким позиціюванням',
    },
  })
})

// ?-----------------------------------Р
// cssPage																	css
router.get('/css', function (req, res) {
  res.render('css', {
    layout: 'cssPage',
    page: {
      title: 'css',
    },
    lesson: {
      title: 'Робота з обрызанням та перенесенням контенту',
    },
  })
})

// todo===========================================================================
// !											JS
// todo===========================================================================

// ================================================================ jsPage
router.get('/css', function (req, res) {
  res.render('css', {
    layout: 'cssPage',
    page: {
      title: 'css',
    },
    lesson: {
      title: 'Робота з обрызанням та перенесенням контенту',
    },
  })
})

//
module.exports = router
