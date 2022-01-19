# Dash Iconify

Dash Iconify based on Iconify is a Dash component library which brings over 100,000 vector icons.

## Table of contents

- [Dash Iconify](#dash-iconify)
- [Installation](#installation)
- [Quickstart](#quickstart)
- [Using with dmc](#using-with-dmc)
- [Keyword Arguments](#keyword-arguments)

## Installation

```bash
pip install dash-iconify
```

## Quickstart

```python
from dash_iconify import DashIconify
from dash import Dash

app = Dash(__name__)

app.layout = DashIconify(
    icon="ion:logo-github",
    width=512,
    height=512,
    rotate=1,
    flip="horizontal",
)

if __name__ == "__main__":
    app.run_server(debug=True)

```

## Using with dmc

[Dash Mantine Components](https://github.com/snehilvj/dash-mantine-components) enables using icons natively.

```python
import dash_mantine_components as dmc
from dash_iconify import DashIconify

button = dmc.Button("Send Mail", leftIcon=[
    DashIconify(icon="fluent:folder-mail-16-filled")
])
```

## Keyword Arguments

Visit this site to browse all the available icons: <https://icon-sets.iconify.design/>

```git
Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- color (string; optional):
    Color.

- flip (a value equal to: "horizontal", "vertical"; optional):
    Flip the icon horizontally or vertically.

- height (number; optional):
    Icon height.

- icon (string; optional):
    Icon name is a string, which has 3 parts: @api-provider : icon-prefix : icon-name
    provider points to API source. Starts with "@", can be empty (empty value is used for public Iconify API).
    prefix is name of icon set.
    name is name of icon.

- inline (boolean; optional):
    Toggles inline or block mode.

- rotate (a value equal to: 0, 1, 2, 3; optional):
    Rotates icon, 0: 0 deg, 1: 90 deg, 2: 180 deg, 3: 270 deg.

- style (dict; optional):
    Inline style.

- width (number; optional):
    Icon width.
```
