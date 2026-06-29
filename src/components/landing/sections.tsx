import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Аутсорсинг персонала в Перми</Badge>,
    title: "ШтатМомент. Персонал — за момент.",
    content: 'Предоставляем линейный персонал для бизнеса в Перми: грузчики, комплектовщики, уборщики и не только. Быстро, официально, без головной боли с оформлением.',
    showButton: true,
    buttonText: 'Заказать персонал',
    showLogo: true,
    bgImage: 'https://cdn.poehali.dev/projects/89c0a7a0-04c3-42ad-b9f8-d18d1f152981/files/c69f1586-3edb-411c-9715-c9f1641fd159.jpg'
  },
  {
    id: 'about',
    title: 'Почему ШтатМомент?',
    content: 'Берём на себя подбор, оформление и замену сотрудников. Вы платите только за фактически отработанные часы — без налогов, отпускных и кадровых рисков.',
    bgImage: 'https://cdn.poehali.dev/projects/89c0a7a0-04c3-42ad-b9f8-d18d1f152981/files/cc3a3e39-6dab-4269-8920-971eb2941d02.jpg'
  },
  {
    id: 'tariffs',
    title: 'Тарифы на персонал',
    content: 'Прозрачные ставки на популярные позиции. Минимальная смена — от 4 часов.',
    bgImage: 'https://cdn.poehali.dev/projects/89c0a7a0-04c3-42ad-b9f8-d18d1f152981/files/65f2ede7-733d-4d80-8882-fe11553699df.jpg',
    tariffs: [
      { position: 'Грузчик', price: 'от 350 ₽', unit: 'за час', icon: 'Package' },
      { position: 'Комплектовщик', price: 'от 350 ₽', unit: 'за час', icon: 'Boxes' },
      { position: 'Уборщик', price: 'от 310 ₽', unit: 'за час', icon: 'Sparkles' },
      { position: 'Разнорабочий', price: 'от 350 ₽', unit: 'за час', icon: 'HardHat' },
      { position: 'Кладовщик', price: 'от 400 ₽', unit: 'за час', icon: 'Warehouse' },
      { position: 'Фасовщик', price: 'от 320 ₽', unit: 'за час', icon: 'PackageCheck' },
    ]
  },
  {
    id: 'how',
    title: 'Как мы работаем',
    content: 'Оставляете заявку — подбираем нужное количество людей — выводим на смену в течение 24 часов. При необходимости оперативно заменим сотрудника.',
    bgImage: 'https://cdn.poehali.dev/projects/89c0a7a0-04c3-42ad-b9f8-d18d1f152981/files/da592643-ddf1-4c24-8ecb-b067cd49bcc0.jpg'
  },
  {
    id: 'region',
    title: 'Работаем по всему Пермскому краю',
    content: 'Выводим персонал на объекты в Перми и Пермском крае. Знаем регион — быстро находим людей даже в отдалённых районах.',
    showMap: true,
    bgImage: 'https://cdn.poehali.dev/projects/89c0a7a0-04c3-42ad-b9f8-d18d1f152981/files/8032a9fc-eb37-463f-bf9b-795d32ea78b6.jpg'
  },
  {
    id: 'contact',
    title: 'Нужны люди уже завтра?',
    content: 'Оставьте заявку — рассчитаем стоимость под вашу задачу и выведем персонал на объект в Перми в кратчайшие сроки.',
    showButton: true,
    buttonText: 'Оставить заявку',
    showLogo: true,
    bgImage: 'https://cdn.poehali.dev/projects/89c0a7a0-04c3-42ad-b9f8-d18d1f152981/files/b2516dca-a4d3-4b1f-bf75-a4dff54e8b80.jpg'
  },
]