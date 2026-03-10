# 📝 Changelog - English Training

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

---

## [2.0.0] - 2026-03-10

### 🎉 VERSÃO MAJOR - Expansão para 9 Temas + Organização do Projeto

#### ✨ Adicionado
- **6 novos temas** (total agora 9):
  - 💼 Trabalho e Carreira
  - 🎨 Artes e Entretenimento
  - 📚 Educação e Ciência
  - ⚽ Esportes
  - 🌍 Meio Ambiente e Natureza
  - 👥 Sociedade e Comportamento
- **Estrutura de pastas organizada**:
  - `themes/` - Todos os arquivos de tema
  - `scripts/` - Scripts de build
- **Formatação de negrito**: Palavras marcadas com `**texto**` agora aparecem em negrito vermelho
- **Preservação de seleções**: Ao trocar idioma, mantém tema e tempo/técnica selecionados

#### 📊 Estatísticas Atualizadas
- **Antes**: 3 temas, 2.565 exercícios
- **Agora**: 9 temas, **7.695 exercícios**
- Crescimento: +200% de conteúdo

#### 🔧 Melhorias Técnicas
- `build_data.py` atualizado para trabalhar com estrutura de pastas
- Conversão automática de markdown `**text**` para HTML `<strong>`
- Mantém valores selecionados ao alternar idioma

#### 🗑️ Removido
- Arquivos duplicados e desnecessários:
  - `society-lifestyle-theme.js` (duplicado)
  - `*-extra.js` (arquivos temporários antigos)
  - `test.html`, `test_data.js`, `debug.html` (arquivos de teste)
  - Scripts de uso único: `fix_indentation.py`, `add_extra_techniques.py`, `merge_techniques.py`, `remove_duplicates.py`

#### 📁 Nova Estrutura
```
english_training/
├── index.html, app.js, styles.css, data.js
├── themes/ (9 arquivos de tema)
└── scripts/ (build_data.py)
```

---

## [1.5.0] - 2026-03-10

### 🌍 Interface Bilíngue EN/PT

#### ✨ Adicionado
- **Botão de alternância de idioma** (EN 🇺🇸 / PT 🇧🇷)
- **Traduções completas** para toda a interface:
  - Labels e botões
  - Nomes de temas (9 temas)
  - Nomes de tempos verbais (12 tempos)
  - Nomes de técnicas de pronúncia (11 técnicas)
  - Opções de seleção (All Levels, Easy, Medium, Hard)
  - Subtítulos contextuais

#### 🔧 Implementação
- Objeto `translations` em `app.js` com mapeamento EN/PT completo
- Função `toggleLanguage()` para alternância instantânea
- Função `updateUILanguage()` atualiza toda a interface
- Estado `language` persistente durante a sessão

---

## [1.4.0] - 2026-03-10

### 🎨 Primeira Expansão de Temas (3 → 6)

#### ✨ Adicionado
- **3 novos temas**:
  - 💼 **Trabalho e Carreira**: escritório, reuniões, projetos, entrevistas
  - 🎨 **Artes e Entretenimento**: música, cinema, teatro, festivais
  - 📚 **Educação e Ciência**: universidade, pesquisa, laboratório

#### 📊 Estatísticas
- Conteúdo dobrado: 2.565 → 5.130 exercícios
- 6 temas × 855 exercícios cada

#### 🔧 Técnico
- Criados arquivos individuais para cada tema
- `build_data.py` atualizado para compilar 6 temas
- Sistema escalável para adicionar mais temas

---

## [1.3.0] - 2026-03-10

### 🎤 Expansão de Técnicas de Pronúncia (7 → 11)

#### ✨ Adicionado
- **4 novas técnicas de pronúncia**:
  - **Over-Articulation**: Articulação exagerada
  - **Tongue Twisters**: Trava-línguas
  - **Chunking (Natural Blocks)**: Blocos naturais de fala
  - **Reading Practice**: Prática de leitura

#### 📊 Estatísticas
- **Antes**: 7 técnicas, 315 exercícios de pronúncia por tema
- **Agora**: 11 técnicas, 495 exercícios de pronúncia por tema
- Crescimento: +57% em conteúdo de pronúncia

#### 🔧 Scripts Criados
- `merge_techniques.py`: Adiciona novas técnicas aos temas existentes
- `remove_duplicates.py`: Remove técnicas duplicadas

---

## [1.2.0] - 2026-03-09

### 🎯 Simplificação da Interface

#### 🗑️ Removido
- **List Mode**: Removido para simplificar interface
- Mantido apenas **Card Mode** com navegação por botões/teclado

#### 🐛 Corrigido
- Botões não responsivos após mudanças
- Referências órfãs a `modeSelect`
- Duplicação de técnicas de pronúncia
- Problemas de indentação em arquivos de dados

#### 🔧 Melhorias
- Interface mais limpa e focada
- Navegação mais intuitiva
- Performance melhorada

---

## [1.1.0] - 2026-03-08

### 🎨 Sistema de Temas Implementado

#### ✨ Adicionado
- **Seletor de temas** na interface
- **3 temas iniciais**:
  - 🏠 **Dia a Dia**: rotina, casa, família
  - ✈️ **Viagens**: aeroporto, hotel, turismo
  - 💻 **Tecnologia**: computadores, apps, programação

#### 📊 Estatísticas
- **Antes**: 675 exercícios total
- **Agora**: 2.025 exercícios (3 temas × 675)

#### 🔧 Mudanças Técnicas
- Reestruturação de `data.js`:
  ```javascript
  // Estrutura hierárquica
  const themesData = {
      'theme-key': {
          displayName: 'Nome',
          tensesData: [...],
          pronunciationData: [...]
      }
  }
  ```
- Novo sistema de estado com `currentTheme`
- Funções adaptadas para carregar dados por tema

---

## [1.0.0] - 2026-03-07

### 🎉 Versão Inicial

#### ✨ Recursos Iniciais
- **12 Tempos Verbais** completos
  - 3 níveis: Easy, Medium, Hard
  - 30 frases por tempo (360 total)
- **7 Técnicas de Pronúncia**
  - 3 níveis: Easy, Medium, Hard
  - 45 exercícios por técnica (315 total)
- **Total inicial**: 675 exercícios

#### 🎮 Interface
- Seletor de tipo de estudo (Grammar/Pronunciation)
- Seletor de nível
- 2 modos de visualização:
  - Card Mode (navegação)
  - List Mode (lista completa)
- Explicações de tempos verbais
- Explicações de técnicas de pronúncia

#### ⌨️ Atalhos de Teclado
- `←` Anterior
- `→` Próximo
- `Espaço` Aleatório

#### 🎨 Design
- Interface moderna com gradientes
- Badges de nível coloridos
- Responsivo (desktop e mobile)
- Animações suaves

---

## Legenda de Versões

- **[2.x.x]** - Mudanças major (expansões significativas)
- **[x.x.0]** - Novos recursos e funcionalidades
- **[x.x.x]** - Correções de bugs e melhorias menores

## Roadmap Futuro

### Possíveis Adições
- [ ] Mais 3 temas (total 12)
- [ ] Sistema de progresso/estatísticas
- [ ] Modo de prática com timer
- [ ] Favoritos/marcadores
- [ ] Exportar progresso
- [ ] Áudio para pronúncia (TTS)
- [ ] Quiz interativo
- [ ] Dark mode

---

**Última atualização**: 10 de março de 2026
