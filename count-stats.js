const { themesData } = require('./data.js');

let totalSentences = 0;
let totalWords = 0;
let totalUniqueWords = new Set();
const themeStats = {};

function extractWords(text) {
    return String(text)
        .replace(/<[^>]*>/g, ' ')
        .replace(/\/[^/]*\//g, ' ')
        .replace(/\*\*/g, ' ')
        .replace(/\(([a-zà-ÿ]+)\)/gi, '$1')
        .replace(/[•·_\-\/→]/g, ' ')
        .replace(/&nbsp;/g, ' ')
        .toLowerCase()
        .match(/[a-zà-ÿ0-9']+/gi)
        ?.filter(word => word.length >= 2) || [];
}

for (let themeKey in themesData) {
    if (themesData.hasOwnProperty(themeKey)) {
        const theme = themesData[themeKey];
        let themeSentences = 0;
        let themeWords = 0;
        let uniqueWords = new Set();

        // Count from tenses data
        if (theme.tensesData && Array.isArray(theme.tensesData)) {
            for (let i = 0; i < theme.tensesData.length; i++) {
                const tense = theme.tensesData[i];
                const difficulties = ['easy', 'medium', 'hard'];
                
                for (let j = 0; j < difficulties.length; j++) {
                    const difficulty = difficulties[j];
                    if (tense[difficulty] && Array.isArray(tense[difficulty])) {
                        for (let k = 0; k < tense[difficulty].length; k++) {
                            const sentence = tense[difficulty][k];
                            themeSentences++;

                            const words = extractWords(sentence);
                            themeWords += words.length;
                            words.forEach(word => uniqueWords.add(word));
                        }
                    }
                }
            }
        }

        // Count from pronunciation data
        if (theme.pronunciationData && Array.isArray(theme.pronunciationData)) {
            for (let i = 0; i < theme.pronunciationData.length; i++) {
                const technique = theme.pronunciationData[i];
                const difficulties = ['easy', 'medium', 'hard'];
                
                for (let j = 0; j < difficulties.length; j++) {
                    const difficulty = difficulties[j];
                    if (technique[difficulty] && Array.isArray(technique[difficulty])) {
                        for (let k = 0; k < technique[difficulty].length; k++) {
                            const item = technique[difficulty][k];

                            if (item !== undefined && item !== null) {
                                const words = extractWords(item);

                                if (words.length > 0) {
                                    themeSentences++;
                                    themeWords += words.length;
                                    words.forEach(word => uniqueWords.add(word));
                                }
                            }
                        }
                    }
                }
            }
        }

        uniqueWords.forEach(word => totalUniqueWords.add(word));

        themeStats[themeKey] = {
            displayName: theme.displayName,
            sentences: themeSentences,
            words: themeWords,
            uniqueWords: uniqueWords.size
        };
        totalSentences += themeSentences;
        totalWords += themeWords;
    }
}

console.log('\n========== ENGLISH TRAINING STATISTICS ==========\n');
console.log('OVERALL STATISTICS:');
console.log('  Total Sentences: ' + totalSentences);
console.log('  Total Words: ' + totalWords);
console.log('  Total Unique Words: ' + totalUniqueWords.size);
console.log('  Average Words per Sentence: ' + Math.round(totalWords / totalSentences * 100) / 100);

console.log('\n\nTHEME BREAKDOWN:\n');

for (let themeKey in themeStats) {
    if (themeStats.hasOwnProperty(themeKey)) {
        const stats = themeStats[themeKey];
        const avgWords = Math.round(stats.words / stats.sentences * 100) / 100;
        console.log(stats.displayName + ':');
        console.log('  Sentences: ' + stats.sentences);
        console.log('  Words: ' + stats.words);
        console.log('  Unique Words: ' + stats.uniqueWords);
        console.log('  Average: ' + avgWords + ' words/sentence');
        console.log('');
    }
}

console.log('=================================================\n');
