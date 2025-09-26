## Text

Componente de texto responsivo com diferentes tamanhos, pesos e cores.

### Uso

```tsx
import { Text } from '@/shared/components/Atoms/Text'

// Texto básico
<Text>Este é um texto simples</Text>

// Texto com tamanho personalizado
<Text size="lg">Texto grande</Text>

// Texto com peso e cor
<Text weight="bold" color="primary">Texto em negrito e cor primária</Text>

// Texto como span
<Text as="span" size="sm" color="muted">Texto pequeno e discreto</Text>
```

### Props

- `size`: 'xs' | 'sm' | 'base' | 'lg' | 'xl' (responsivo)
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
- `color`: 'default' | 'muted' | 'primary' | 'secondary' | 'destructive' | 'accent'
- `align`: 'left' | 'center' | 'right' | 'justify'
- `as`: 'p' | 'span' | 'div'