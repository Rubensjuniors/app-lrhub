import { Heading } from '@/components/common/Heading'
import { Text } from '@/components/common/Text'

export default function Hub() {
  return (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Heading Variants */}
      <div>
        <Heading size="h1">Heading h1</Heading>
        <Heading size="h2">Heading h2</Heading>
        <Heading size="h3">Heading h3</Heading>
        <Heading size="h4">Heading h4</Heading>
        <Heading size="h5">Heading h5</Heading>
        <Heading size="h6">Heading h6</Heading>
        <Heading weight="normal">Heading normal</Heading>
        <Heading weight="medium">Heading medium</Heading>
        <Heading weight="semibold">Heading semibold</Heading>
        <Heading weight="bold">Heading bold</Heading>
        <Heading weight="extrabold">Heading extrabold</Heading>
        <Heading color="default">Heading default</Heading>
        <Heading color="muted">Heading muted</Heading>
        <Heading color="accent">Heading accent</Heading>
        <Heading color="destructive">Heading destructive</Heading>
        <Heading color="success">Heading success</Heading>
        <Heading color="warning">Heading warning</Heading>
        <Heading align="left">Heading left</Heading>
        <Heading align="center">Heading center</Heading>
        <Heading align="right">Heading right</Heading>
      </div>
      {/* Text Variants */}
      <div>
        <Text size="xs">Text xs</Text>
        <Text size="sm">Text sm</Text>
        <Text size="base">Text base</Text>
        <Text size="lg">Text lg</Text>
        <Text size="xl">Text xl</Text>
        <Text weight="normal">Text normal</Text>
        <Text weight="medium">Text medium</Text>
        <Text weight="semibold">Text semibold</Text>
        <Text weight="bold">Text bold</Text>
        <Text color="default">Text default</Text>
        <Text color="muted">Text muted</Text>
        <Text color="accent">Text accent</Text>
        <Text color="destructive">Text destructive</Text>
        <Text color="success">Text success</Text>
        <Text color="warning">Text warning</Text>
        <Text align="left">Text left</Text>
        <Text align="center">Text center</Text>
        <Text align="right">Text right</Text>
        <Text align="justify">Text justify</Text>
      </div>
    </div>
  )
}
