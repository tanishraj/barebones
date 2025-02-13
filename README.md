# barebones-ui Library

![Build Status](https://github.com/your-username/your-repo/actions/workflows/ci.yml/badge.svg)
![npm version](https://img.shields.io/npm/v/barebones-ui)
![License](https://img.shields.io/github/license/your-username/your-repo)

A modern, customizable React UI library built with TypeScript and Tailwind CSS.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🚀 **Customizable**: Easily customize components to fit your design needs.
- 📦 **TypeScript Support**: Fully typed components for type safety and IntelliSense.
- 🎨 **Tailwind CSS**: Built with Tailwind CSS for rapid UI development.
- 📱 **Responsive Design**: Components are responsive and mobile-friendly.
- ♿ **Accessible**: Designed with accessibility in mind.

## Installation

Install the library using npm or yarn:

```bash
# Using npm
npm install barebones-ui

# Using yarn
yarn add barebones-ui
```

# Select Component

A customizable select component built with Daisy UI, Tailwind, and React.

## Props

| Prop       | Type                                      | Default      | Description                                |
| ---------- | ----------------------------------------- | ------------ | ------------------------------------------ | ------ | --------- | ---------------------------- | ------- | -------- | ----------- | ---------------------------- |
| options    | `Array<{ value: string; label: string }>` | **Required** | Array of select options                    |
| variant    | `'primary'                                | 'secondary'  | 'accent'                                   | 'info' | 'success' | 'warning'                    | 'error' | 'ghost'` | `'primary'` | Visual variant of the select |
| size       | `'xs'                                     | 'sm'         | 'md'                                       | 'lg'`  | `'md'`    | Size of the select component |
| bordered   | `boolean`                                 | `true`       | Whether to show a border around the select |
| disabled   | `boolean`                                 | `false`      | Disables the select interaction            |
| label      | `string`                                  | -            | Label text displayed above the select      |
| helperText | `string`                                  | -            | Helper text displayed below the select     |
| className  | `string`                                  | -            | Additional classes for the select element  |
