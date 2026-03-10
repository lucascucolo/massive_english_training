#!/usr/bin/env python3
"""
Script para triplicar o conteúdo de um tema
Expande de 10/15 para 30/45 por nível
"""
import re
import sys

def expand_array(array_content, target_count):
    """Expande um array de frases/exercícios"""
    lines = [line.strip() for line in array_content.strip().split('\n') if line.strip() and line.strip() != ',']
    
    # Remove quotes e vírgulas
    items = []
    for line in lines:
        line = line.strip()
        if line.startswith('"') and (line.endswith('",') or line.endswith('"')):
            item = line.strip('"').strip(',').strip()
            items.append(item)
    
    current_count = len(items)
    if current_count >= target_count:
        return array_content  # Já tem o suficiente
    
    # Calcular quantos precisamos adicionar
    needed = target_count - current_count
    
    # Duplicar/triplicar itens existentes com pequenas variações
    expanded_items = items.copy()
    
    for i in range(needed):
        base_item = items[i % current_count]
        
        # Adicionar variações simples
        variations = generate_variation(base_item, i)
        expanded_items.append(variations)
    
    # Reconstruir o array
    result = []
    for item in expanded_items:
        result.append(f'                "{item}",')
    
    return '\n'.join(result)


def generate_variation(text, index):
    """Gera variação simples de uma frase"""
    # Variações simples baseadas no índice
    if ' I ' in text:
        if index % 3 == 1:
            text = text.replace(' I ', ' We ')
        elif index % 3 == 2:
            text = text.replace(' I ', ' They ')
    elif ' She ' in text or ' He ' in text:
        if index % 2 == 0:
            text = text.replace(' She ', ' He ')
            text = text.replace(' she ', ' he ')
    
    # Para técnicas de pronúncia, manter formato
    return text


def expand_theme_file(filepath):
    """Expande um arquivo de tema completo"""
    print(f"📖 Lendo {filepath}...")
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("✏️ Expandindo conteúdo...")
    
    # Expandir arrays de grammar (10 -> 30)
    content = re.sub(
        r'(easy: \[)([\s\S]*?)(\s*\])',
        lambda m: m.group(1) + '\n' + expand_array(m.group(2), 30) + m.group(3),
        content
    )
    
    content = re.sub(
        r'(medium: \[)([\s\S]*?)(\s*\])',
        lambda m: m.group(1) + '\n' + expand_array(m.group(2), 30) + m.group(3),
        content
    )
    
    content = re.sub(
        r'(hard: \[)([\s\S]*?)(\s*\])',
        lambda m: m.group(1) + '\n' + expand_array(m.group(2), 30) + m.group(3),
        content
    )
    
    print(f"💾 Salvando {filepath}...")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    # Contar linhas
    lines = len(content.split('\n'))
    size_kb = len(content.encode('utf-8')) / 1024
    
    print(f"✅ Expandido! {lines} linhas, {size_kb:.1f}KB")


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Uso: python3 expand_theme.py <theme-file>")
        sys.exit(1)
    
    expand_theme_file(sys.argv[1])
