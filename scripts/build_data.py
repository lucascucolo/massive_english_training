#!/usr/bin/env python3
import re
import os

# Change to parent directory to access files
os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

print("🔧 Construindo novo data.js...")

# Ler os arquivos de tema
with open('themes/daily-life-theme.js', 'r', encoding='utf-8') as f:
    daily_content = f.read()
with open('themes/travel-theme.js', 'r', encoding='utf-8') as f:
    travel_content = f.read()
with open('themes/technology-theme.js', 'r', encoding='utf-8') as f:
    tech_content = f.read()
with open('themes/work-career-theme.js', 'r', encoding='utf-8') as f:
    work_content = f.read()
with open('themes/arts-entertainment-theme.js', 'r', encoding='utf-8') as f:
    arts_content = f.read()
with open('themes/education-science-theme.js', 'r', encoding='utf-8') as f:
    edu_content = f.read()
with open('themes/sports-theme.js', 'r', encoding='utf-8') as f:
    sports_content = f.read()
with open('themes/environment-nature-theme.js', 'r', encoding='utf-8') as f:
    env_content = f.read()
with open('themes/society-behavior-theme.js', 'r', encoding='utf-8') as f:
    society_content = f.read()
with open('data.js.backup', 'r', encoding='utf-8') as f:
    backup_content = f.read()

# Extrair o objeto de cada tema (sem const themeName =)
daily_match = re.search(r'const dailyLifeTheme = (\{[\s\S]*\});', daily_content)
travel_match = re.search(r'const travelTheme = (\{[\s\S]*\});', travel_content)
tech_match = re.search(r'const technologyTheme = (\{[\s\S]*\});', tech_content)
work_match = re.search(r'const workCareerTheme = (\{[\s\S]*\});', work_content)
arts_match = re.search(r'const artsEntertainmentTheme = (\{[\s\S]*\});', arts_content)
edu_match = re.search(r'const educationScienceTheme = (\{[\s\S]*\});', edu_content)
sports_match = re.search(r'const sportsTheme = (\{[\s\S]*\});', sports_content)
env_match = re.search(r'const environmentNatureTheme = (\{[\s\S]*\});', env_content)
society_match = re.search(r'const societyBehaviorTheme = (\{[\s\S]*\});', society_content)

if not daily_match:
    print("❌ Erro: não encontrou dailyLifeTheme")
    exit(1)
if not travel_match:
    print("❌ Erro: não encontrou travelTheme")
    exit(1)
if not tech_match:
    print("❌ Erro: não encontrou technologyTheme")
    exit(1)
if not work_match:
    print("❌ Erro: não encontrou workCareerTheme")
    exit(1)
if not arts_match:
    print("❌ Erro: não encontrou artsEntertainmentTheme")
    exit(1)
if not edu_match:
    print("❌ Erro: não encontrou educationScienceTheme")
    exit(1)
if not sports_match:
    print("❌ Erro: não encontrou sportsTheme")
    exit(1)
if not env_match:
    print("❌ Erro: não encontrou environmentNatureTheme")
    exit(1)
if not society_match:
    print("❌ Erro: não encontrou societyBehaviorTheme")
    exit(1)

daily_obj = daily_match.group(1)
travel_obj = travel_match.group(1)
tech_obj = tech_match.group(1)
work_obj = work_match.group(1)
arts_obj = arts_match.group(1)
edu_obj = edu_match.group(1)
sports_obj = sports_match.group(1)
env_obj = env_match.group(1)
society_obj = society_match.group(1)

# Extrair explicações (inglês e português)
tense_exp_match = re.search(r'(const tenseExplanations = \{[\s\S]*?\n\};)', backup_content)
tech_exp_match = re.search(r'(const techniqueExplanations = \{[\s\S]*?\n\};)', backup_content)
tense_exp_pt_match = re.search(r'(const tenseExplanationsPT = \{[\s\S]*?\n\};)', backup_content)
tech_exp_pt_match = re.search(r'(const techniqueExplanationsPT = \{[\s\S]*?\n\};)', backup_content)

if not tense_exp_match:
    print("❌ Erro: não encontrou tenseExplanations")
    exit(1)
if not tech_exp_match:
    print("❌ Erro: não encontrou techniqueExplanations")
    exit(1)

tense_exp = tense_exp_match.group(1)
tech_exp = tech_exp_match.group(1)
tense_exp_pt = tense_exp_pt_match.group(1) if tense_exp_pt_match else ""
tech_exp_pt = tech_exp_pt_match.group(1) if tech_exp_pt_match else ""

# Montar novo arquivo
new_data = f"""// ENGLISH TRAINING APP - THEME-BASED DATA STRUCTURE

// Theme-based data structure
const themesData = {{
    'daily-life': {daily_obj},

    'travel': {travel_obj},

    'technology': {tech_obj},

    'work-career': {work_obj},

    'arts-entertainment': {arts_obj},

    'education-science': {edu_obj},

    'sports': {sports_obj},

    'environment-nature': {env_obj},

    'society-behavior': {society_obj}
}};

// Grammar Tenses Explanations
{tense_exp}

// Pronunciation Technique Explanations
{tech_exp}

// Portuguese Translations - Tempos Verbais
{tense_exp_pt}

// Portuguese Translations - Técnicas de Pronúncia
{tech_exp_pt}
"""

# Salvar
with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_data)

print("✅ data.js criado com sucesso!")
print("📊 Estrutura: 9 temas")
print("   - Daily Life, Travel, Technology")
print("   - Work & Career, Arts & Entertainment, Education & Science")
print("   - Sports, Environment & Nature, Society & Behavior")
print("📝 Incluindo tenseExplanations, techniqueExplanations e traduções PT")

# Estatísticas
lines = new_data.count('\n')
print(f"📏 Total de linhas: {lines}")
