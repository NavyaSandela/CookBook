# Start from node base image
FROM  node 

# Less messages during docker build
ENV NPM_CONFIG_LOGLEVEL warn
# Allows app_env to be set during build (default as empty string)
ARG app_env
# Sets an environment variable to app_env argument, this way the variable 
# will persist in the container for use in code
ENV APP_ENV $app_env

# All subsequent commands will now be run from inside this folder
RUN mkdir -p /app
WORKDIR /app
# Copy all the code in the local directory into the container’s working directory
COPY ./ ./

# Install dependencies (Make sure to add node_modules to your .dockerignore 
# in case you accidentally install locally.)
RUN npm install

# Checks the enviroment variable in order to run the react
CMD if [ ${APP_ENV} = production ]; \
	then \
	npm install -g http-server && \
	npm run build && \
	cd build && \
	hs -p 3000; \
	else \
	npm run start; \
	fi

EXPOSE 3000