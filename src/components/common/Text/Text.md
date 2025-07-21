# Componente `Text`

O componente `Text` é utilizado para renderizar textos com diferentes variações de tamanho, peso, cor e alinhamento, facilitando a padronização da tipografia na aplicação.

## Propriedades

| Propriedade | Tipo    | Opções                                                            | Padrão    | Descrição                                |
| ----------- | ------- | ----------------------------------------------------------------- | --------- | ---------------------------------------- |
| `size`      | string  | `xs`, `sm`, `base`, `lg`, `xl`                                    | `base`    | Define o tamanho do texto                |
| `weight`    | string  | `normal`, `medium`, `semibold`, `bold`                            | `normal`  | Define o peso (espessura) da fonte       |
| `color`     | string  | `default`, `muted`, `accent`, `destructive`, `success`, `warning` | `default` | Define a cor do texto                    |
| `align`     | string  | `left`, `center`, `right`, `justify`                              | `left`    | Define o alinhamento do texto            |
| `as`        | string  | `p`, `span`                                                       | `p`       | Define o elemento HTML a ser renderizado |
| `asChild`   | boolean | -                                                                 | `false`   | Permite usar como Slot para customização |

## Variações

### Tamanhos (`size`)

- `xs`: Pequeno (text-xs sm:text-sm md:text-base)
- `sm`: Pequeno/Médio (text-sm sm:text-base md:text-lg)
- `base`: Médio (text-base sm:text-lg md:text-xl)
- `lg`: Grande (text-lg sm:text-xl md:text-2xl)
- `xl`: Extra grande (text-xl sm:text-2xl md:text-3xl)

### Pesos (`weight`)

- `normal`: Normal
- `medium`: Médio
- `semibold`: Semi-negrito
- `bold`: Negrito

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
- `justify`: Justificado

## Exemplo de uso

```tsx
import { Text } from './index'

;<Text size="lg" weight="bold" color="accent" align="center">
  Texto de exemplo com variações
</Text>
```

---

> Consulte este arquivo para saber todas as variações disponíveis do componente `Text`.
