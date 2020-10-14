npm run build
cd dist
echo Deploying...
git init
git remote add origin git@github.com:gembert27/gembert27.github.io.git
git add .
git commit -m 'deploy'
git push -f git@github.com:gembert27/gembert27.github.io.git master