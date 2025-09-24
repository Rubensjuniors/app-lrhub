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



# 📘 LRhub – Documentação Técnica e Funcional

> Um projeto pessoal voltado para **produtividade, organização e foco**, com funcionalidades financeiras, de hábitos e rotinas, e uma visão geral integrada.

---

## 📌 Visão Geral

* **Nome do Projeto:** LRhub
* **Objetivo:** Criar um sistema pessoal completo de produtividade com módulos para:

  * Controle financeiro
  * Gestão de hábitos e rotinas
  * Painel geral (hub) de desempenho

---

## 🔧 Rotas e Módulos

### 📍 `/financial` – Módulo Financeiro

#### Funcionalidades:

* Visualização de **entradas**, **saídas** e **total** mensal
* Tabelas separadas para:

  * Gastos fixos
  * Parcelados
  * Débito/pix
* Ações disponíveis:

  * Criar novo registro
  * Editar
  * Excluir
  * Marcar como "pago" ou "não pago"

#### Funcionalidades Futuras e Ideias:

* [ ] Filtro por mês/ano
* [ ] Categorias de gastos (alimentação, transporte...)
* [ ] Metas financeiras (ex: "economizar R\$ 300 em junho")
* [ ] Resumo por categoria com gráficos
* [ ] Alertas de vencimento de contas
* [ ] Importação/exportação CSV
* [ ] Registro de receitas recorrentes
* [ ] Marcar gasto como essencial/supérfluo
* [ ] Duplicar gasto
* [ ] Sugestões automáticas de economia

---

### 📍 `/habits` – Hábitos e Rotinas

#### Funcionalidades:

* Visualização de hábitos criados
* Tarefas diárias recorrentes com base na semana
* Sistema de recompensas baseado em hábitos e tarefas concluídas
* Ciclos semanais: ao concluir a semana, o usuário ganha 1 ponto

#### Funcionalidades Futuras e Ideias:

* [ ] Sistema de XP, níveis e badges
* [ ] Loja de recompensas (ex: "assistir um filme")
* [ ] Gráfico de streaks (dias consecutivos)
* [ ] Confete/som de recompensa ao concluir hábito
* [ ] Modo desafio (21 dias seguidos)
* [ ] Duplicar hábito
* [ ] Pausar hábito
* [ ] Associar hábito a metas maiores
* [ ] Compartilhar progresso

---

### 📍 `/hub` – Painel Geral Integrado

#### Funcionalidades previstas:

* Resumo financeiro (saldo, entradas, saídas)
* Resumo de hábitos (quantos criados, concluídos, pontuação)
* Frase motivacional do dia
* Calendário com tarefas/hábitos
* Gráfico de desempenho geral
* Indicador de progresso semanal
* Lista de metas ativas e seu progresso

#### Ideias futuras:

* [ ] Modo foco (Pomodoro integrado com hábitos)
* [ ] “Dia ideal” baseado na rotina planejada
* [ ] Checklist diária automática
* [ ] Resumos semanais por email/notificação
* [ ] Mood tracker (humor diário + correlação com hábitos)

---

## 💡 Funcionalidades extras para produtividade & organização

* Metas mensais e anuais com acompanhamento visual
* Timer de foco Pomodoro com som e relatórios
* Integração com Google Calendar
* Áreas de foco: trabalho, saúde, espiritual, etc.
* Painel de performance com feedback por área
* Rotinas automatizadas (ex: lembrete diário às 6h)

---

## 🗺️ Roadmap Sugerido

### ✅ V1 (MVP)

* Rota `/financial` completa

  * Entradas, saídas, totais
  * Tabelas de gastos fixos, parcelados e débito/pix
  * Ações básicas: criar, editar, excluir, marcar como pago

### 🔜 V2

* Início do `/habits`

  * Criação de hábitos e tarefas
  * Repetição semanal
  * Sistema básico de recompensa

### 🔮 V3

* Construção do `/hub`

  * Dashboard unificado
  * Relatórios e gráficos de desempenho

### 🚀 V4+

* Modo foco (Pomodoro)
* Integrações externas (Google Calendar, Notion...)
* Gamificação total com loja, badges e níveis

---

## 📁 Estrutura sugerida do projeto

```txt
src/
├── modules/
│   ├── financial/
│   ├── habits/
│   └── hub/
├── components/
├── utils/
├── services/
└── styles/
```

---

## ✅ Casos de uso (User Stories)

* **Como usuário**, quero registrar meus gastos mensais para acompanhar minha vida financeira.
* **Como usuário**, quero criar hábitos com recorrência semanal para melhorar minha disciplina.
* **Como usuário**, quero acompanhar meu progresso financeiro e de hábitos em uma visão geral.
* **Como usuário**, quero recompensas visuais e gamificadas para me manter motivado.

---

## 🧪 Testes sugeridos

* Testes unitários de lógica (controle financeiro, cálculo de progresso)
* Testes de integração entre módulos (ex: hábitos + hub)
* Testes E2E com Cypress ou Playwright para fluxo completo

---

> Documento criado para guiar a construção iterativa do projeto **LRhub** com base em produtividade pessoal e organização total.

