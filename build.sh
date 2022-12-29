git submodule update --remote
rm content/blog/README.md
gatsby build --prefix-paths
cp CNAME public/CNAME
gh-pages -d public