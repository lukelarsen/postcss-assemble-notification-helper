[PostCSS]:                 https://github.com/postcss/postcss
[Assemble]:                http://assemblecss.com

# PostCSS Assemble Notification Helper

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin that helps with the use of Assemble Notifications.

This plugin will help set colors of notifications when using the [Assemble] framework.

## Example
```css
.notification--success{
    bg-color: green;
    text-color: white;
    title-bar-bg-color: orange;
    title-bar-text-color: black;
}
```

Will output:

```css
.notification--success{
    background: green;
    color: white;
}
.notification--success .notification__title-bar,
.notification--success .notification__title-bar h3{
    color: black;
}
.notification--success .notification__title-bar{
    background: orange;
}
.notification--success .iconic *{
    fill: white;
}
.notification--success .notification-text{
    color: white;
}
```

## Usage

This plugin doesn't do much on it's own. It is part of a [PostCSS] framework called [Assemble]. This plugin is included in Assemble. For usage see [Assemble].