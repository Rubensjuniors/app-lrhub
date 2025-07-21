# Componente `Heading`

O componente `Heading` é utilizado para renderizar títulos e subtítulos com diferentes variações de tamanho, peso, cor e alinhamento, garantindo padronização na hierarquia de títulos da aplicação.

## Propriedades

| Propriedade | Tipo    | Opções                                                                 | Padrão     | Descrição                                 |
| ----------- | ------- | ---------------------------------------------------------------------- | ---------- | ----------------------------------------- |
| `size`      | string  | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`                                     | `h1`       | Define o tamanho e hierarquia do heading   |
| `weight`    | string  | `normal`, `medium`, `semibold`, `bold`, `extrabold`                    | `semibold` | Define o peso (espessura) da fonte        |
| `color`     | string  | `default`, `muted`, `accent`, `destructive`, `success`, `warning`      | `default`  | Define a cor do texto                     |
| `align`     | string  | `left`, `center`, `right`                                              | `left`     | Define o alinhamento do texto             |
| `as`        | string  | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`                                     | `h1`       | Define o elemento HTML a ser renderizado  |
| `asChild`   | boolean | -                                                                      | `false`    | Permite usar como Slot para customização  |

## Variações

### Tamanhos (`size`)
- `h1`: Muito grande (text-3xl sm:text-4xl md:text-5xl lg:text-6xl)
- `h2`: Grande (text-2xl sm:text-3xl md:text-4xl lg:text-5xl)
- `h3`: Médio (text-xl sm:text-2xl md:text-3xl lg:text-4xl)
- `h4`: Médio/Pequeno (text-lg sm:text-xl md:text-2xl lg:text-3xl)
- `h5`: Pequeno (text-base sm:text-lg md:text-xl lg:text-2xl)
- `h6`: Muito pequeno (text-sm sm:text-base md:text-lg lg:text-xl)

### Pesos (`weight`)
- `normal`: Normal
- `medium`: Médio
- `semibold`: Semi-negrito
- `bold`: Negrito
- `extrabold`: Extra negrito

### Cores (`color`)
- `default`: Cor padrão do tema
- `muted`: Cor de texto secundária
- `accent`: Cor de destaque
- `destructive`: Cor de erro/alerta
- `success`: Verde (sucesso)
- `warning`: Amarelo (aviso)

### Alinhamento (`align`)
- `left`: Esquerda
- `center`: Centralizado
- `right`: Direita

## Exemplo de uso

```tsx
import { Heading } from './index'

<Heading size="h2" weight="extrabold" color="accent" align="center">
  Título de exemplo com variações
</Heading>
```

---

> Consulte este arquivo para saber todas as variações disponíveis do componente `Heading`.