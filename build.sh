git submodule update --remote
rm content/blog/README.md
npx gatsby build --prefix-paths
cp CNAME public/CNAME
npx gh-pages -d public
