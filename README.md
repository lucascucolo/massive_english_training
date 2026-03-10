# 🎯 English Training

Uma aplicação completa para praticar inglês com foco em gramática e pronúncia, **organizada por temas**.

## ✨ Características

- **9 temas diversos** com vocabulário contextualizado
- **Interface bilíngue** EN/PT com alternância instantânea
- **12 tempos verbais** completos
- **11 técnicas de pronúncia** especializadas
- **7,695 exercícios** no total (855 por tema)

## 🎨 Temas Disponíveis

Cada tema contém **855 exercícios completos** (360 gramática + 495 pronúncia):

1. 🏠 **Dia a Dia** - rotina matinal, refeições, tarefas domésticas, família, compras
2. ✈️ **Viagens** - aeroporto, hotel, transporte, turismo, restaurantes
3. 💻 **Tecnologia** - computadores, internet, apps, programação, trabalho remoto
4. 💼 **Trabalho e Carreira** - escritório, reuniões, projetos, entrevistas, networking
5. 🎨 **Artes e Entretenimento** - música, cinema, teatro, museus, festivais
6. 📚 **Educação e Ciência** - escola, universidade, pesquisa, laboratório, biblioteca
7. ⚽ **Esportes** - futebol, basquete, natação, academia, competições
8. 🌍 **Meio Ambiente e Natureza** - clima, reciclagem, conservação, vida selvagem
9. 👥 **Sociedade e Comportamento** - relacionamentos, hobbies, comunicação, redes sociais

## 📋 Recursos

### Grammar Tenses (360 frases por tema)

**12 Tempos Verbais** completos com 3 níveis de dificuldade:

1. Present Simple
2. Present Continuous
3. Present Perfect
4. Present Perfect Continuous
5. Past Simple
6. Past Continuous
7. Past Perfect
8. Past Perfect Continuous
9. Future Simple
10. Future Continuous
11. Future Perfect
12. Future Perfect Continuous

- **30 frases por tempo**: 10 Easy, 10 Medium, 10 Hard
- **Total por tema**: 360 frases (12 tempos × 30)

### Pronunciation Practice (495 exercícios por tema)

**11 Técnicas de Pronúncia** com 3 níveis de dificuldade:

1. **Word Stress Patterns** - Padrões de ênfase (BREAKfast, toMOrrow)
2. **Linking Sounds** - Sons conectados (check_in, wake_up)
3. **Contractions Practice** - Contrações com IPA (I'm → /aɪm/)
4. **Silent Letters** - Letras mudas destacadas (k(nife), w(rite))
5. **Over-Articulation** - Articulação exagerada para treino muscular
6. **Tongue Twisters** - Trava-línguas para fluência
7. **Minimal Pairs Training** - Distinção de sons similares (ship/sheep) com IPA
8. **Chunking (Natural Blocks)** - Divisão em blocos naturais de fala
9. **Stress and Intonation** - Ênfase em palavras-chave (**marcadas** em negrito)
10. **Thought Groups** - Grupos de pensamento com pausas (/)
11. **Reading Practice** - Prática de leitura com marcação de pausas

- **45 exercícios por técnica**: 15 Easy, 15 Medium, 15 Hard
- **Total por tema**: 495 exercícios (11 técnicas × 45)

### Interface Bilíngue 🇺🇸🇧🇷

- **Botão EN/PT**: Alterna instantaneamente entre inglês e português
- Traduz toda a interface: rótulos, botões, nomes de temas, tempos verbais e técnicas
- Mantém suas seleções ao trocar idioma
- Interface adaptada ao contexto brasileiro

## 🚀 Como Usar

### Abrir no navegador

```bash
cd /Users/lcucolo/english_training
open index.html
```

Ou dê duplo clique no arquivo `index.html` no Finder.

### Servidor local (opcional)

```bash
cd /Users/lcucolo/english_training
python3 -m http.server 8000
```

Depois acesse: http://localhost:8000

## 🎮 Controles

### Seletores

- **Theme**: Escolha um dos 9 temas disponíveis
- **Study Type**: Grammar Tenses ou Pronunciation
- **Select Tense/Technique**: Escolha entre 12 tempos verbais ou 11 técnicas
- **Level**: Filtre por Easy, Medium, Hard ou All Levels
- **Language Toggle**: 🇺🇸 EN / 🇧🇷 PT para alternar idioma

### Navegação (Card Mode)

- **← Previous**: Frase anterior
- **Next →**: Próxima frase
- **Random**: Frase aleatória

### Atalhos de Teclado

- `←` (Seta Esquerda): Frase anterior
- `→` (Seta Direita): Próxima frase
- `Espaço`: Frase aleatória

## 💡 Dicas de Uso

### Para Grammar Tenses

1. **Prática Diária**: Pratique 10-20 frases por dia
2. **Progressão**: Comece com Easy, depois Medium, e finalmente Hard
3. **Contexto**: Escolha temas relacionados ao seu dia a dia
4. **Repetição**: Repita em voz alta para fixar a estrutura

### Para Pronunciation

**Técnicas Recomendadas para Iniciantes:**
- **Word Stress Patterns**: Aprenda onde enfatizar em cada palavra
- **Linking Sounds**: Conecte palavras naturalmente
- **Contractions Practice**: Domine as contrações mais comuns

**Técnicas Intermediárias:**
- **Silent Letters**: Identifique letras que não são pronunciadas
- **Over-Articulation**: Exagere na pronúncia para treinar músculos
- **Minimal Pairs Training**: Distinga sons similares (ship/sheep)

**Técnicas Avançadas:**
- **Stress and Intonation**: Palavras em **negrito** indicam ênfase
- **Thought Groups**: Pause nas / para separar ideias
- **Chunking**: Aprenda blocos naturais de fala
- **Tongue Twisters**: Melhore velocidade e precisão
- **Reading Practice**: Pratique fluência com textos completos

### Recomendações Gerais

- **Consistência**: 15-20 minutos diários > 2 horas uma vez por semana
- **Voz Alta**: Sempre repita em voz alta, não apenas leia
- **Grave-se**: Use o celular para ouvir sua pronúncia
- **Modo Aleatório**: Use Random para variar a prática

## 📁 Estrutura do Projeto

```
english_training/
├── index.html              # Página principal
├── app.js                  # Lógica da aplicação + traduções
├── styles.css              # Estilos e animações
├── data.js                 # Dados compilados (~10k linhas, gerado automaticamente)
├── data.js.backup          # Backup do data.js anterior
├── README.md               # Este arquivo
├── CHANGELOG.md            # Histórico de mudanças
│
├── themes/                 # 📂 Arquivos de tema (9 arquivos)
│   ├── daily-life-theme.js
│   ├── travel-theme.js
│   ├── technology-theme.js
│   ├── work-career-theme.js
│   ├── arts-entertainment-theme.js
│   ├── education-science-theme.js
│   ├── sports-theme.js
│   ├── environment-nature-theme.js
│   └── society-behavior-theme.js
│
└── scripts/                # 📂 Scripts de build
    └── build_data.py       # Compila temas em data.js
```

## 🔧 Build e Desenvolvimento

### Recompilar data.js

Após editar qualquer arquivo de tema em `themes/`, recompile:

```bash
cd /Users/lcucolo/english_training
python3 scripts/build_data.py
```

**O que o script faz:**
1. Lê todos os 9 arquivos de tema em `themes/`
2. Extrai os objetos de dados com regex
3. Combina em uma única estrutura `themesData`
4. Adiciona explicações de tempos e técnicas (EN/PT)
5. Gera `data.js` com ~10.000 linhas

### Adicionar Novo Tema

**1. Criar arquivo de tema:**

Crie `themes/novo-tema-theme.js` seguindo o padrão:

```javascript
const novoTemaTheme = {
    displayName: 'Nome em Português',
    
    tensesData: [
        // 12 tempos × 30 frases cada (10 easy, 10 medium, 10 hard)
    ],
    
    pronunciationData: [
        // 11 técnicas × 45 exercícios cada (15 easy, 15 medium, 15 hard)
    ]
};
```

**2. Atualizar `scripts/build_data.py`:**

```python
# Adicionar leitura
with open('themes/novo-tema-theme.js', 'r', encoding='utf-8') as f:
    novo_content = f.read()

# Adicionar regex match
novo_match = re.search(r'const novoTemaTheme = (\{[\s\S]*\});', novo_content)

# Adicionar validação
if not novo_match:
    print("❌ Erro: não encontrou novoTemaTheme")
    exit(1)

# Extrair objeto
novo_obj = novo_match.group(1)

# Adicionar ao themesData
'novo-tema': {novo_obj},
```

**3. Atualizar `app.js` (traduções):**

```javascript
// No objeto translations.en
'novo-tema': 'New Theme Name',

// No objeto translations.pt
'novo-tema': 'Nome do Novo Tema',
```

**4. Atualizar `index.html`:**

```html
<!-- Atualizar subtítulo -->
<p class="subtitle">10 themes • 12 tenses • 11 pronunciation techniques • 8,550 exercises</p>
```

**5. Recompilar:**

```bash
python3 scripts/build_data.py
```

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Gradientes, animações, flexbox, responsivo
- **JavaScript Vanilla** - Sem dependências externas
- **Python 3** - Build automation

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge (versões modernas)
- ✅ Desktop e Mobile
- ✅ Funciona 100% offline (sem necessidade de internet)
- ✅ Sem necessidade de instalação

## 📊 Estatísticas

- **Linhas de código**:
  - app.js: ~450 linhas
  - styles.css: ~280 linhas
  - data.js: ~9,900 linhas (gerado)
  - Cada theme: ~1,075 linhas
- **Tamanho total**: ~1.5 MB
- **Tempo de carregamento**: < 1 segundo

## 🤝 Contribuindo

Para adicionar conteúdo ou corrigir bugs:

1. Edite os arquivos de tema em `themes/`
2. Teste localmente abrindo `index.html`
3. Recompile com `python3 scripts/build_data.py`
4. Verifique se não há erros no console do navegador

---

**Desenvolvido com ❤️ para estudantes de inglês**

**Bons estudos! 🚀📖**
