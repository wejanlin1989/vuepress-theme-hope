---
title: Конфиг плагина блога
icon: blog
order: 2
category:
  - Конфиг
tag:
  - Блог
  - Конфигурация плагина
  - Конфиг темы
---

## Введение

Тема предоставляет функцию блога, и она **не** включена по умолчанию.

Вы можете включить функцию блога, установив для `plugins.blog` значение `true` в настройках темы.

Инструкции смотрите в [Введение в блог](../../guide/blog/intro.md).

## Опции

### excerpt

- Type: `boolean`
- Default: `true`

Whether generate excerpt for page.

### excerptSeparator

- Type: `string`
- Default: `<!-- more -->`

Separator used to split excerpt from page content.

### excerptLength

- Type: `number`
- Default: `300`

Length of excerpt when auto generating.

### filter

- Тип: `(page: Page) => boolean`
- По умолчанию: `(page) => Boolean(page.filePathRelative) && !page.frontmatter.home`

Фильтр страниц, определяющий, следует ли включать страницу.

По умолчанию все страницы, созданные из файлов Markdown, но не домашняя страница, будут включены в качестве статей.

### excerptFilter

- Type: `(page: Page) => boolean`
- Default: `filter` option

Page filter, determine whether the plugin should generate excerpt for it.

### article

- Тип: `string`
- По умолчанию: `/article/`

Путь маршрута списка статей.

### category

- Тип: `string`
- По умолчанию: `/category/`

Путь маршрута карты категории.

### categoryItem

- Тип: `string`
- По умолчанию: `/category/:name/`

Путь маршрута списка категорий. `:name` будет заменено именем категории.

### tag

- Тип: `string`
- По умолчанию: `/tag/`

Отметьте путь маршрута карты.

### tagItem

- Тип: `string`
- По умолчанию: `/tag/:name/`

Путь маршрута списка тегов. `:name` будет заменено именем тега.

### encrypted

- Тип: `string`
- По умолчанию: `/encrypted/`

Путь к списку зашифрованных статей.

### slide

- Тип: `string`
- По умолчанию: `/slide/`

Путь маршрута списка слайдов.

### star

- Тип: `string`
- По умолчанию: `/star/`

Путь маршрута к списку звездных статей.

### timeline

- Тип: `string`
- По умолчанию: `/timeline/`

Путь маршрута списка временной шкалы.

### hotReload

- Type: `boolean`
- Default: Whether using `--debug` flag

Whether to enable hot reload in the development server.
