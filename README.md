# 2021-05-15-notion-sdk-js-playground

ref: https://developers.notion.com/reference/get-database

Get https://www.notion.so/yamanoku/d23d73e2e3bc415082fd0ff93c0bcea1

```bash
$ node notion.js
{
  object: 'database',
  id: 'd23d73e2-e3bc-4150-82fd-0ff93c0bcea1',
  created_time: '2021-05-15T04:29:17.237Z',
  last_edited_time: '2021-05-15T04:30:00.000Z',
  title: [
    {
      type: 'text',
      text: [Object],
      annotations: [Object],
      plain_text: 'Notion API テスト用',
      href: null
    }
  ],
  properties: {
    Tags: { id: 'QipU', type: 'multi_select', multi_select: [Object] },
    Name: { id: 'title', type: 'title', title: {} }
  }
}
```