## Heading

Componente de título responsivo com diferentes níveis hierárquicos.

### Uso

```tsx
import { Heading } from '@/shared/components/Atoms/Heading'

// Título H1
<Heading level="h1">Título Principal</Heading>

// Título H2 com peso personalizado
<Heading level="h2" weight="bold">Subtítulo</Heading>

// Título centralizado
<Heading level="h3" align="center" color="primary">Título Centralizado</Heading>

// Título como elemento específico
<Heading as="h4" level="h4">Título H4</Heading>
```

### Props

- `level`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' (responsivo)
- `weight`: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
- `color`: 'default' | 'muted' | 'primary' | 'secondary' | 'destructive' | 'accent'
- `align`: 'left' | 'center' | 'right'
- `as`: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
