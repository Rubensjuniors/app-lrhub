# Documentação do LRHub

## Visão Geral

LRHub é uma aplicação web moderna construída com React, TypeScript e Vite. Este documento fornece informações essenciais sobre a estrutura do projeto, configuração e desenvolvimento.

## Estrutura do Projeto

```
src/
├── assets/      # Recursos estáticos (imagens, fontes, etc.)
├── components/  # Componentes reutilizáveis
│   ├── Atoms/     # Componentes básicos que funcionam individualmente
│   └── Molecules/   # Componentes que juntos formão uma molecula
├── config/      # Configurações da aplicação
├── context/     # Contextos React para gerenciamento de estado
├── hooks/       # Hooks personalizados
├── layout/      # Componentes de layout
├── lib/         # Utilitários e bibliotecas
├── modules/     # Módulos específicos da aplicação
├── pages/       # Páginas da aplicação
└── routes/      # Configuração de rotas
```

## Tecnologias Principais

- React
- TypeScript
- Vite
- Vitest (para testes)
- ESLint + Prettier (para qualidade de código)

## Requisitos do Sistema

- Node.js (versão especificada no .nvmrc)
- npm ou yarn

## Configuração do Ambiente de Desenvolvimento

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run test`: Executa os testes
- `npm run lint`: Executa o linter
- `npm run format`: Formata o código usando Prettier

## Padrões de Código

- Seguimos as configurações do ESLint e Prettier para manter a consistência do código
- Utilizamos TypeScript para tipagem estática
- Componentes são escritos em PascalCase
- Arquivos de teste seguem o padrão `*.spec.tsx`

## Estrutura de Testes

Os testes são escritos usando Vitest e Testing Library. Arquivos de teste devem:

- Estar localizados junto aos componentes que testam
- Seguir o padrão de nomenclatura `*.spec.tsx`
- Incluir testes unitários e de integração quando apropriado

## Contribuição

1. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
2. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
3. Faça push para a branch (`git push origin feature/nova-feature`)
4. Abra um Pull Request

## Licença

[Rubens Junio e Larissa Vitoria]
