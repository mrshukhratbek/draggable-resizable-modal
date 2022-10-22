<h1 align="center">Modal (draggable, resizable) </h1>

<div align="center">
Modal (draggable, resizable) component for React.js
</div>
<br>
<div align="center">

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url]

[![Discussions][discussions-image]][discussions-url]

[npm-image]: http://img.shields.io/npm/v/modal-rc.svg?style=flat-square
[npm-url]: http://npmjs.org/package/modal-rc
[download-image]: https://img.shields.io/npm/dm/modal-rc.svg?style=flat-square
[download-url]: https://npmjs.org/package/modal-rc
[discussions-image]: https://img.shields.io/badge/discussions-on%20github-blue?style=flat-square
[discussions-url]: https://github.com/mrshukhratbek/modal-rc/discussions

</div>

## Installation

```sh
// with npm
npm install draggable-resizable-modal


// with yarn
yarn add draggable-resizable-modal

```

## Usage

```jsx
import * as React from "react";
import Modal from "draggable-resizable-modal";

function App() {
  return (
    <Modal title="Modal title" open={true}>
      Content
    </Modal>
  );
}
```

## API

| Property   | Description                                                                   | Type          | Default                 | Version |
| ---------- | ----------------------------------------------------------------------------- | ------------- | ----------------------- | ------- |
| bodyStyle  | Body style for modal body element. Such as height, padding etc                | CSSProperties |                         |         |
| cancelText | Text of the Cancel button                                                     | ReactNode     | `Cancel`                |         |
| closable   | Whether a close (x) button is visible on top right of the modal dialog or not | boolean       | true                    |         |
| closeIcon  | Custom close icon                                                             | ReactNode     | &lt;CloseOutlined />    |         |
| footer     | Footer content, set as `footer={null}` when you don't need default buttons    | ReactNode     | (OK and Cancel buttons) |         |
| mask       | Whether show mask or not                                                      | boolean       | true                    |         |
