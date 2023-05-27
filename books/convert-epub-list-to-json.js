/**
 * (Enable unicode first)
 * 
 * CHCP 65001
 * DIR /b/s *.epub > .\test.txt
 */


const fs = require('fs');

const data = fs.readFileSync('./epub-liste_2023-05-27.txt', 'utf8');
// const data = fs.readFileSync('./t.txt', 'utf8');

const epubsFullPaths = data.split('\n')

const books = []

for (const epubPath of epubsFullPaths) {
  const path = epubPath.trim()

  const pathToFileSplitIndex = path.lastIndexOf('\\') + 1
  
  const fileName = path.substring(pathToFileSplitIndex, path.length - ".epub".length)
  const normalizedFilename = normalizeFilename(fileName)

  const folder = path.substring(0, pathToFileSplitIndex).replace('F:\\ebooks', '')

  books.push([normalizedFilename, folder])
}

sortByFilename(books)

// console.log(books)

const PREFIX = 'export const books = '
fs.writeFileSync('books.js', `${PREFIX}${JSON.stringify(books)}`);


/**
 * Fix something like
 * 
 * - Spiegel.Besteller.Belletristik.und.Sachbuch.KW53.2015
 * 
 * but keep author abbreviations, e.g.
 * 
 * - 002 - Der Hexenmeister - B.R. Bruss
 * 
 * @param {string} file 
 * @returns {string}
 */
function normalizeFilename(file) {
  return file.replace(/([a-z0-9])\.([a-zA-Z0-9])/g, '$1 $2')
}

function sortByFilename(items) {
  items.sort((a, b) => {
    const nameA = a[0].toUpperCase(); // ignore upper and lowercase
    const nameB = b[0].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
}