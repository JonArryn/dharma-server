## learnings

## prisma init

// // > Seed Database

## deploy

// // > Giving NPM permissions to the directory to run builds
// > when trying to exec sudo npm run build in frontend repo directory I got an EACCESS error
// > ran the below command - $USER being the current user of the instance
// > $parentDirectory is the parent directory of the project
// > seems to ensure that the user running the npm run build command has write access to the folders the build is trying to hit
// $ sudo chown -R $USER:$USER /$parentDirectory
