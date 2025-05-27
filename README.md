# Documentação do LRHub

## Visão Geral

LRHub é uma aplicação web moderna construída com React, TypeScript e Vite. Este documento fornece informações essenciais sobre a estrutura do projeto, configuração e desenvolvimento.

## Estrutura do Projeto

```
src/
├── app/  # Componente app
│   ├── Routes/     # Componentes e config das rotas
│   └── providers/   # Componentes com todos os providers globais
├── assets/      # Recursos estáticos (imagens, fontes, etc.)
├── components/  # Componentes reutilizáveis
│   ├── Atoms/     # Componentes básicos que funcionam individualmente
│   └── Molecules/   # Componentes que juntos formam uma molécula
├── config/      # Configurações da aplicação
├── context/     # Contextos React para gerenciamento de estado
├── hooks/       # Hooks personalizados
├── layout/      # Componentes de layout separado por pastas de (app e auth)
├── lib/         # Utilitários e bibliotecas
├── modules/     # Módulos específicos da aplicação separado por pastas de (app e auth)
├── pages/       # Páginas da aplicação separado por pastas de (app e auth)
```

## Tecnologias Principais

- React 18+
- TypeScript 5+
- Vite 5+
- Vitest (para testes)
- ESLint + Prettier (para qualidade de código)
- React Router DOM (para roteamento)
- Styled Components (para estilização)

## Requisitos do Sistema

- Node.js 18.x ou superior
- npm 9.x ou superior
- Git

## Configuração do Ambiente de Desenvolvimento

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITÓRIO]
cd app-lrhub
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção localmente
- `npm run test`: Executa os testes
- `npm run test:coverage`: Executa os testes com relatório de cobertura
- `npm run lint`: Executa o linter
- `npm run format`: Formata o código usando Prettier
- `npm run type-check`: Verifica os tipos TypeScript

## Padrões de Código

- Seguimos as configurações do ESLint e Prettier para manter a consistência do código
- Utilizamos TypeScript para tipagem estática
- Componentes são escritos em PascalCase
- Arquivos de teste seguem o padrão `*.spec.tsx`
- Utilizamos o padrão de composição de componentes (Atomic Design)
- Implementamos lazy loading para otimização de performance

## Estrutura de Testes

Os testes são escritos usando Vitest e Testing Library. Arquivos de teste devem:

- Estar localizados junto aos componentes que testam
- Seguir o padrão de nomenclatura `*.spec.tsx`
- Incluir testes unitários e de integração quando apropriado
- Ter cobertura mínima de 80% para novos componentes

## Fluxo de Desenvolvimento

1. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
2. Faça commit das suas alterações seguindo o padrão de commits convencionais:
   - `feat:` para novas features
   - `fix:` para correções
   - `docs:` para documentação
   - `style:` para formatação
   - `refactor:` para refatorações
   - `test:` para testes
   - `chore:` para tarefas gerais
3. Faça push para a branch (`git push origin feature/nova-feature`)
4. Abra um Pull Request com descrição detalhada das alterações

## Licença

© 2024 Rubens Junio e Larissa Vitoria. Todos os direitos reservados.
