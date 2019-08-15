const ghPages = require('gh-pages')
const path = require('path')

const options = {
  branch: 'master',
  repo: 'git@github.com:SR2k/sr2k.github.io.git',
  dotfiles: true,
  message: 'feat: auto deploy',
  user: {
    name: 'Siyuan Cao',
    email: 'seeran@outlook.com'
  }
}

const distDir = path.resolve(__dirname, '../build')

ghPages.publish(distDir, options, console.error)
