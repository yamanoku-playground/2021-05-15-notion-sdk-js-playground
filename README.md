# 2021-05-15-notion-sdk-js-playground

Get https://www.notion.so/yamanoku/d23d73e2e3bc415082fd0ff93c0bcea1

## Running Locally

### 1. Setup your local project
```zsh
# Clone this repository locally
git clone https://github.com/yamanoku-playground/2021-05-15-notion-sdk-js-playground.git

# Switch into this project
cd 2021-05-15-notion-sdk-js-playground

# Install the dependencies
npm ci
```

### 2. Set your enviornment variables in a `.env` file

ref: https://developers.notion.com/reference/get-database

```zsh
touch .env
```

```zsh
NOTION_KEY=<your-notion-api-key>
NOTION_DATABASE_ID=<notion-database-id>
```

### 3. Run code

```zsh
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