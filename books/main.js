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

let currentResults = []
function searchBook(query) {
  query = query.toLowerCase().trim()
  currentResults = books.filter(entry => {
    const name = getName(entry)
    if (name.length === 0) {
      return false
    }
    const normalizedName = name.toLowerCase()
    return normalizedName.indexOf(query) !== -1
  })
  
  // if there were no results, search for the single tokens
  if (currentResults.length === 0) {
    const splittedQuery = query.split(' ').map(str => str.trim())
    currentResults = books.filter(entry => {
      const name = getName(entry)
      if (name.length === 0) {
        return false
      }
      const normalizedName = name.toLowerCase()
      return containsToken(normalizedName, splittedQuery)
    })
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
    const directory = getDirectory(result)
    const li = document.createElement('li')
    li.innerText = name
    li.title = directory
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