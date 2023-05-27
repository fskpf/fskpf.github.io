import {books} from './books.js'

const PAGE_SIZE = 20
let currentPage = 0

const bookList = document.querySelector('.results > ul')

document.getElementById('search').addEventListener('input', e => {
  debouncedSearch(e.target.value)
})

let timer = null
function debouncedSearch(query) {
  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    searchBook(query)
  }, 200)
}

function getName(entry) {
  return entry[0]
}

function getDirectory(entry) {
  return entry[1]
}

let currentResultsObj = {}
let currentResults = []
function searchBook(query) {
  query = query.toLowerCase().trim()

  currentResults = []
  currentResultsObj = {}
  for (const book of books) {
    const name = getName(book)
    const directory = getDirectory(book)
    if (name.length > 0) {
      const normalizedName = name.toLowerCase()
      if (normalizedName.indexOf(query) !== -1) {
        if (!currentResultsObj[normalizedName]) {
          currentResultsObj[normalizedName] = [directory]
          currentResults.push(book)
        } else {
          currentResultsObj[normalizedName].push(directory)
        }
      }
    }
  }
  
  // if there were no results, search for the single tokens
  if (currentResults.length === 0) {
    const splittedQuery = query.split(' ').map(str => str.trim())

    for (const book of books) {
      const name = getName(book)
      const directory = getDirectory(book)
      if (name.length > 0) {
        const normalizedName = name.toLowerCase()
        if (containsToken(normalizedName, splittedQuery)) {
          if (!currentResultsObj[normalizedName]) {
            currentResultsObj[normalizedName] = [directory]
            currentResults.push(book)
          } else {
            currentResultsObj[normalizedName].push(directory)
          }
        }
      }
    }
  }

  setResultPage(0)
}

function containsToken(string, tokens) {
  if (tokens.length < 2) {
    return false
  }
  return tokens.some(t => string.indexOf(t) !== -1)
}

function nextResultPage() {
  setResultPage(currentPage+1)
}

function previousResultPage() {
  setResultPage(currentPage-1)
}

function setResultPage(pageIdx) {
  if (pageIdx < 0) {
    return
  }

  const startIdx = pageIdx * PAGE_SIZE
  const endIdx = startIdx + (PAGE_SIZE - 1)

  if (currentResults.length === 0) {
    setNoResultsState()
    return
  }

  if (startIdx > currentResults.length) {
    return
  }

  currentPage = pageIdx
  document.getElementById('current-page-indicator').innerText = `Seite ${pageIdx + 1} / ${Math.ceil(currentResults.length / PAGE_SIZE)}`
  displayResults(startIdx, endIdx)
}

function displayResults(startIdx, endIdx) {
  while(bookList.firstElementChild) {
    bookList.removeChild(bookList.firstElementChild)
  }

  for (let idx = startIdx; idx <= endIdx; idx++) {
    let result = currentResults[idx]
    if (!result) {
      break
    }
    const name = getName(result)
    const normalizedName = name.toLowerCase()
    const resultDirectories = currentResultsObj[normalizedName] ?? [getDirectory(result)]
    
    const li = document.createElement('li')
    li.title = resultDirectories.join('\n')
    li.innerHTML = `<span>${name}</span>`
    
    resultDirectories.forEach((dir, idx) => {
      const dirElement = document.createElement('span')
      dirElement.innerText = `[${idx + 1}]`
      dirElement.title = dir
      dirElement.className = 'directory-link'
      dirElement.onclick = () => {
        navigator.clipboard.writeText(dir)
        const copyHint = document.querySelector('.copy-hint')
        copyHint.style.display = 'block'
        setTimeout(() => {
            copyHint.style.display = 'none'
        }, 2000)
      }
      li.appendChild(dirElement)
    });

    bookList.appendChild(li)
  }
}

function setNoResultsState() {
  while(bookList.firstElementChild) {
    bookList.removeChild(bookList.firstElementChild)
  }
  const li = document.createElement('li')
  li.innerText = "Keine Ergebnisse"
  bookList.appendChild(li)
}

document.getElementById('next-page').addEventListener('click', () => nextResultPage())
document.getElementById('previous-page').addEventListener('click', () => previousResultPage())
searchBook('')