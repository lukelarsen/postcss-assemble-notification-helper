[PostCSS]:                 https://github.com/postcss/postcss
[Assemble]:                http://assemblecss.com

# PostCSS Assemble Notification Header

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin that helps with the use of Assemble Notifications.

This plugin will help set colors of notifications when using the [Assemble] framework.

## Example
```css
.table-cell-widths{
    15: 15px;
    half: 50%;
}
```

Will output:

```css
.t-15 {
    width: 15px
}

.t-half {
    width: 50%
}
```

## Usage

This plugin doesn't do much on it's own. It is part of a [PostCSS] framework called [Assemble]. This plugin is included in Assemble. For usage see [Assemble].