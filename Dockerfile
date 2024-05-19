
#base image is the node 18 runtime
FROM node:18 as build

#the containers working directory will be app
WORKDIR /app

#we copy the dependecies files into the containers working app directory
COPY package*.json ./

#we install the needed dependecies
RUN npm install

#we copy all the applications source files into the container
COPY . . 

#we build the react app for production
RUN npm run build

#nginx will be our production server
FROM nginx:alpine

#Copy the build React application to Nginx's web server directory
COPY --from=build /app/build /usr/share/nginx/html

#We expose this port it is my favourite port thats why i am exposing it
EXPOSE 80

#start the nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
