# @kova/render

A render component library designed to seamlessly render content from the Kova CMS. This library provides a set of components that make it easy to display and present content fetched from the Kova CMS in your React applications.

## Installation

To install the library, use npm or yarn:

```bash
npm install @kova/render
# or
yarn add @kova/render
```

## Usage

```jsx
import React from 'react';
import { RenderContent } from '@kova/render';

const MyComponent = () => {
  // Fetch content from Kova CMS
  const content = // ...fetch content logic or firestore (Firebase)

  return (
    <>
        <RenderContent content={data.full_content}/>
    </>
  );
};

export default MyComponent;
```

## Configuration

### Package Structure

- **dist/index.umd.js:** UMD bundle for browser usage.
- **dist/index.mjs:** ES module for modern JavaScript environments.
- **dist/index.d.ts:** TypeScript declaration file.

### Scripts

- **build:** Run Vite build and TypeScript compilation with `npm run build`.

## Repository

[GitHub Repository](https://github.com/hubertryanofficial/kova-render)

## Issues

Report any issues or bugs on the [GitHub Issues page](https://github.com/hubertryanofficial/kova-render/issues).

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

For more details, refer to the [documentation](https://github.com/hubertryanofficial/kova-render#readme).
