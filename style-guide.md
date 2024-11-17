# Essential Stuff

## Html import links

Google font

``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap"
  rel="stylesheet">
```

Material icon

``` html
<link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0" />
```

---

## CSS Variables

### Colors

``` css
--white: hsl(0, 0%, 100%);
--overlay-bg: hsla(0, 3%, 13%, 0.5);
```

Light colors

``` css
--light-background: hsl(0, 0%, 96%);
--light-on-background: hsl(0, 3%, 13%);
--light-on-background-variant: hsl(20, 3%, 19%);
--light-primary: hsl(11, 87%, 59%);
--light-primary-hover: hsl(11, 60%, 50%);
--light-primary-container: hsl(14, 57%, 95%);
--light-error: hsl(1, 73%, 42%);
--light-active-indicator: hsl(12, 58%, 88%);
--light-image-background: hsl(0, 0%, 70%);
--light-badge-btn: hsl(30, 58%, 88%);
--light-on-badge-btn: hsl(24, 7%, 14%);
--light-outline: hsl(10, 19%, 88%);
--light-input-outline: hsl(7, 7%, 73%);
--light-input-outline-hover: hsl(9, 3%, 52%);
--light-alpha-10: hsla(0, 0%, 0%, 0.1);
--light-alpha-20: hsla(0, 0%, 0%, 0.2);
```

Light colors

``` css
--dark-background: hsl(0, 0%, 10%);
--dark-on-background: hsl(11, 3%, 87%);
--dark-on-background-variant: hsl(11, 3%, 81%);
--dark-primary: hsl(11, 87%, 64%);
--dark-primary-hover: hsl(11, 51%, 51%);
--dark-primary-container: hsl(15, 3%, 15%);
--dark-error: hsl(1, 69%, 59%);
--dark-active-indicator: hsl(15, 25%, 22%);
--dark-image-background: hsl(0, 0%, 30%);
--dark-badge-btn: hsl(30, 28%, 13%);
--dark-on-badge-btn: hsl(30, 8%, 86%);
--dark-outline: hsl(11, 3%, 20%);
--dark-input-outline: hsl(11, 3%, 29%);
--dark-input-outline-hover: hsl(0, 4%, 58%);
--dark-alpha-10: hsla(0, 0%, 100%, 0.1);
--dark-alpha-20: hsla(0, 0%, 100%, 0.2);
```

### Typography

Font family

``` css
--font-primary: 'DM Serif Display', serif;
--font-secondary: 'DM Sans', sans-serif;
```

Font size

``` css
--fs-base: 62.5%;
--fs-display-large: 2.8rem;
--fs-display-medium: 3.2rem;
--fs-display-small: 2.6rem;
--fs-headline-small: 2.4rem;
--fs-title-medium: 1.6rem;
--fs-title-small: 1.4rem;
--fs-body-large: 1.6rem;
--fs-body-medium: 1.4rem;
--fs-label-large: 1.4rem;
--fs-label-medium: 1.2rem;
--fs-label-small: 1.1rem;
```

Font weight

``` css
--weight-regular: 400;
--weight-medium: 500;
```

### Border Radius

``` css
--radius-4: 4px;
--radius-8: 8px;
--radius-circle: 50%;
--radius-pill: 500px;
```

### Box Shadow

``` css
--shadow-1: 0 -1px 8px hsla(0, 0%, 0%, 0.2);
--shadow-2: 0 2px 4px 1px hsla(0, 0%, 0%, 0.3);
```

### Others

``` css
--header-height: 64px;
--mobile-nav-height: 80px;
--section-gap: 32px;
```

### Transition

``` css
--transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
--transition-short: 200ms var(--transition-timing-function);
--transition-medium: 500ms var(--transition-timing-function);
```
