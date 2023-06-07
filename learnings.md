## learnings

# prisma init

# deploy

## create aws EC2 instance (ubuntu 20.04)

### Prep new EC2 instance

> 1. Update Ubuntu Packages
>
> > update all packages 'sudo apt update'

> 2. Install Git
>
> > run 'sudo apt install git'

> 3. Install Node.JS and NPM using NVM
>
> > NVM Install Script: 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash'
> > Restart terminal by closing EC2 instance connect
> > Reconnect to EC2 instance
> > run 'command -v nvm' or just 'nvm' in terminal - if it response unsuccessfully, follow troubleshooting guide on repo link
> > run 'nvm install --lts'

> Info on installing Node and NVM
>
> > After lots of searching, I found that you shouldn't just install Node and NPM using sudo then change permissions out the wazoo
> > Instead you should either use NVM or install Node globally, StOv solution here - https://stackoverflow.com/questions/16151018/how-to-fix-npm-throwing-error-without-sudo
> > The StOv solution on the page states not to change permissions or ownership, then gives two guides on installing Node and NPM the right way, and is unfortunately not the top answer.
> >
> > > Repo for installing NVM and instructions
> > > https://github.com/nvm-sh/nvm#installing-and-updating
> >
> > > official npm docs on dealing with node permissions issues
> > > https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
>
> 4. Install NGINX as reverse proxy and web server
>
> > 'sudo apt install -y nginx'
> > NGINX should have started, but to be sure
> > 'sudo systemctl start nginx'
>
> NGINX status check and troubleshooting
>
> > check status of NGINX
> > 'service nginx status'
> > check NGINX error log
> > 'sudo cat /var/log/nginx/error.log'
> > restart NGINX
> > sudo systemctl restart nginx
> > Ensure NGINX server is accessible by public
> > visit EC2 Instance IPV4 DNS address
>
> 5. Install Frontend Repo
>
> > Clone front end repo into 'home/' directory
> > once cloned, navigate into the cloned repo directory
> > run 'npm install' to install project dependencies
> > run build script to output build
> >
> > > this is 'npm run build' in a standard CRA project
> >
> > copy build directory to '/var/www'
> >
> > > build directory in standard CRA is 'build/'
> > > copy command is 'sudo cp -R /home/ubuntu/$yourProjectDirectoryName/$yourBuildDirectoryName /var/www'
>
> 6. Configure NGINX to direct traffic to your front end, and proxy your back end
>
> > modify NGINX configuration file
> >
> > > run 'sudo nano /etc/nginx/sites-available/default'
> > > configuration I copied

server {
listen 80 default_server;
listen [::]:80 default_server;

    # We want the root folder to point at index.html
    root /var/www/build;
    index index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        # First attempt to serve request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri /index.html $uri/ =404;
    }
    # The configuration below is for proxying your NodeJS Server
    # the 'location /api' line is the root directory of your back end NodeJS server
    # The 'proxy_pass' line is the url the proxy will direct traffic to when client requests the 'location' route
    # So, this means that your API server's root route must be /api and be listenting on localhost:8081
    # Modify this configuration however you'd like, but these things must match the configuration of your NodeJS server

    location /api {
        proxy_pass http://localhost:8081;
    }

}

> > > after updating your configuration file, you must always restart NGINX for new configuration to be applied
> > > run 'sudo systemctl restart nginx'

> 6. Install backend repo
>
> > Clone repo into home folder
> >
> > > run 'git clone https://yourRepoURL'
> >
> > install dependencies
> >
> > > navigate into newly cloned repo
> > > run 'npm install'
> >
> > output build
> >
> > > run your project's build script to output public server file
>
> 7. Host MySQL DB on RDS
>
> > Create RDS Instance
> >
> > > Follow the instructions here https://aws.amazon.com/getting-started/hands-on/create-mysql-db/
> > > Follow the instructions under "Create mySQL DB Instance"
> > > obviously you can follow instructions on connecting a DB client as well
> >
> > Store Credentials
> >
> > > You'll need to grab a few important items from your newly created RDS instance so that you can connect to it later
> > > You should have setup a username and password for the RDS instance during the spin-up process - store those
> > > Go to your RDS dashboard and open your RDS instance - Copy and store the Endpoint and port
> >
> > Enable Communication between EC2 Instance and RDS DB Instance
> >
> > > You will essentially create 2 security groups that allow your EC2 and RDS instances to talk to each other
> > > The instructions for this process are documented here - https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/option3-task3-connect-rds-database-to-ec2-instance.html
> > > You'll create a group with a single Inbound Rule to be assigned to the RDS instance for MySQL/Aurora with your EC2 Instance as the source
> > > You'll create a group with a single Outbound Rule to be assigned to the EC2 instance for MySQL/Aurora with your RDS instance as the destination
> > > You can test this somehow if you'd like or know how to do that, I simply ran my Prisma deployment script from the EC2 server and got a successful connect
> > > I also setup a security group for my local IP to allow my local SQL Client to connect as well
>
> 8. Setup your .env file
>
> > > Assuming you're relying on an ENV file for your database connection URL, you'll need to set that up
> > > Access the directory of your backend application and run 'touch .env'
> > > open the .env file for editing by running 'nano .env'
> > > setup your environment variables, just ensure that you use production values such as your Database URL and other stuff

> 9. Prisma Deployment
>
> > Install Prisma Client
> >
> > > I ensured that the Prisma client and CLI were installed according to this article
> > > https://www.prisma.io/docs/concepts/components/prisma-client - running the commands in step 1 & 2
> > > run 'npm install prisma --save-dev'
> > > run 'npx prisma'
> > > run 'npm install @prisma/client'
> >
> > Deploy Prisma
> >
> > > simply ran 'npx prisma migrate deploy'
> > > everything worked, schema was built out in RDS instance and everything
> > > any problems arise I will document them here
> >
> > Maintain Prisma with Database Changes
> >
> > > https://www.prisma.io/docs/concepts/components/prisma-client - step 4
>
> 10. install pm2
>
> > Install PM2 Globally
> >
> > > go into user home directory where your front and backend projects are installed in EC2
> > > Followed instructions here - https://pm2.io/docs/runtime/guide/installation/
> > > ran 'npm install pm2 -g' from ubuntu home directory in EC2 instance
> > > install CLI autocompletion - run 'pm2 completion install'
> > > ended up also running this command 'npm install pm2 -g && pm2 update' to keep app up to date

## Global Error Handling

> > Created a custom error class (HttpError) that extends the built in 'Error' class to add values that I can access for added error data
> > created a global error handler function, all in errReqHandler.ts
> > Functions in server that sit across the Req/Res lifecycle can now use the AppError class
> > error handler functions will not work without all 4 arguments passed in, err, req, res, next

## Extending Express Types to accommodate Async Request Handlers

> > I Had to extend the Request Handler type in order to get a type that accommodates asynchronous request handlers, because for some reason the request handler types provided in @types/express do not provide the option to return a Promise<void>
> > This caused issues when creating controllers that return a promise with no value which is most controllers that are asynchronously waiting for a response from the database while not returning anything an instead responding to the client with the data returned from the db
> > I ended up finding a solution here - https://stackoverflow.com/questions/50011616/typescript-change-function-type-so-that-it-returns-new-value - that shows you how to extend function types and allows you to change the return types using generics, then I created another type where I hardcoded the generics, and used that type for my async controllers.
> > I ended up extending the RequestHandler type provided by express to create my own which returns a Promise<void>
> > This now should allow me to just assign this custom type to my async controllers without having to define argument types, and stop getting errors because the standard return types provided by express does not accommodate promises
