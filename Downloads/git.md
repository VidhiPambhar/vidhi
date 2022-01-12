# create a new repository on the command line

echo "# Hacked" >> README.md
git init
git add README.md
git config --global user.email "dhruvgk007@gmail.com"
git config --global user.name "dhruvgohil"

git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dhruvgohil/Hacked.git
git push -u origin main

# push an existing repository from the command line

git remote add origin https://github.com/dhruvgohil/Hacked.git
git branch -M main
git push -u origin main

# To remove file from git repository

git rm <filename>
git commit -m "remove <filename>"
git push -u origin main
