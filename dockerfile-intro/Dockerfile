# What is a Dockerfile?
# - Defines what goes on inside the environment
# - Resources such as network interface & disk drives are virtualized
# - Ports should be mapped in order to be accesible outside
# - Specific files must be specified on which we want to copy in the environment

# Use an official Python runtime as a parent
# baseImage:tag
FROM python:2.7-slim

# Set working directory to any subsequent ADD, CPY, CMD, ENTRYPOINT, or RUN instructions that follow it
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install any needed packages specified in requirements.txt
RUN pip install --trusted-host pypi.python.org -r requirements.txt

# Define the network port that this container would listen to at runtime
EXPOSE 80

# Define an environment variable NAME = World
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
