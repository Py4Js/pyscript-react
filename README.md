# PyScript-React 🐍⚛️

![GitHub](https://img.shields.io/github/license/Py4Js/PyScript-React)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/ShootGan/PyAnalize-React.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ShootGan/PyAnalize-React/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ShootGan/PyAnalize-React.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ShootGan/PyAnalize-React/context:javascript)
![GitHub issues](https://img.shields.io/github/issues/Py4Js/PyScript-React)
![GitHub last commit](https://img.shields.io/github/last-commit/Py4Js/PyScript-React)

## PyScript-React integrates [PyScript](https://github.com/pyscript/pyscript) library into react components. Making it easier to use inside your react projects 😊

## Try it

```sh
# not yet available
yarn add pyscript-react # installation with yarn (preffered node package manager)
npm i pyscript-react # installation with npm
pnpm add pyscript-react # intallation with pnpm
```

### Example hello world

```tsx
<PyScriptProvider>
  <PyScript>print("Hello world!")</PyScript>
</PyScriptProvider>
```

### Example integration with folium

```tsx
<PyScriptProvider>
  <PyScript
    output="folium"
    generateOutputTag
    pyEnvContent={["folium"]}
    src="./folium_map.py"
  ></PyScript>
</PyScriptProvider>
```

```py
# folium_map.py
from folium import Map

variable = Map(location=[45.5236, -122.6750])
variable
```

## Documentation

[Documentation](https://py4js.github.io/pyscript-react)

`we are working on it... 🐢`

## Related implementations/libraries

### Libraries

[PyScript-React-Folium]()

### Implementations

[PyScript-Solid]()

## Contributing

Look here: [CONTRIBUTING.md](https://github.com/Py4Js/PyScript-React/blob/main/CONTRIBUTING.md)

## Contributors

![(https://github.com/Py4Js/PyScript-React/graphs/contributors)](https://contrib.rocks/image?repo=Py4Js/PyScript-React)
