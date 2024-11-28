---
sidebar_position: 3
title: Valclass x React
---

import {ReactIcon} from 'hugeicons-react';

# Valclass x React <ReactIcon className='icon' />

You can use our Valclass framework with your React project to assist in the styling process

Get started by **install package**.

:::info
Sorry, but **only utilities** are available, components and features are disabled
:::

```jsx title="Package"
$ npm install valclass-ui
```

## Code in App.js
Run the development server:
```jsx title="js"
import { useEffect } from 'react'
import { generateStyle, initialStyle } from 'valclass-ui'

function App() {

  useEffect(() => {
    initialStyle()
    generateStyle()
  }, [])

  return (
    <>
      <div className='v-w-full v-bg-danger v-color-primary'>
        <p>Framework v</p>
      </div>
    </>
  )
}
```

## Vite.config.js
Run the development server:
```jsx title="js"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    include: ['valclass-ui']
  }
  
})
```