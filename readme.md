<center><img style="border-radius: 50%" src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png" width="200px" height="200px" /></center>

# React Lifecycle Hooks

A Simple abstraction to useEffect and make the lifecycle using hooks more declarative

# Motivation

I was coding with some newbie developers, and when i started with the new team i realized that people are getting stuck using the react lifecycle with the `useEffect` hook, so i replicated the methods using the useEffect hook.

# Documentation

## Use Update

The `useUnmount` hook replicates the same functionality as the `componentDidUpdate` heres an example bellow

```tsx
import React from 'react';
import { useUpdate } from 'react-lifecycle-hooks';

interface Props {
  // your prop interface fields goes here...
}

const App = (props: Props) => {
  useUpdate((prevProps, nextProps) => {
    // place here the code for the update on the component
  }, props);
};
```

### Params:

```tsx
 - `fn`: () => Promise<void> | void

 - `props`: Receives a generic called props `<T extends Record<string, any>>`
```

## Use Unmount

The `useUnmount` hook replicates the same functionality as the `componentWillUnmount` heres an example bellow

```tsx
import React from 'react';
import { useUnmount } from 'react-lifecycle-hooks';

const App = () => {
  useUnmount(async () => {
    // place your code bellow
  });
};
```

### Params:

```tsx
 - `fn`: () => void
```

## Use Mount

The `useMount` hook replicates the same functionality as the `componentDidMount` heres an example bellow

```tsx
import React from 'react';
import { useMount } from 'react-lifecycle-hooks';

const App = () => {
  useMount(async () => {
    // place your code bellow
  });
};
```

### Params:

```tsx
 - `fn`: () => Promise<void> | void
```

## Use Previous

This is a helper that i've created to replicate the `componentDidUpdate` that gets the last value for that property. i think that will be very useful for you also

```tsx
import React, { useState } from 'react';
import { usePrevious } from 'react-lifecycle-hooks';

const App = () => {
  const [value] = useState('');

  const previousValue = usePrevious(value) || '';
};
```

### Params:

```tsx
- `value`: Its a  Generic Type for the `value` it already infers the type
```

### Returns:

The return will be undefined or the infered value (the type of the variable that you are passing as a parameter).
