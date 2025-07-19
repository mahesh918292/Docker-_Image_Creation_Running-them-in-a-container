## 🚀 Build and Run Your Docker Image

Build the image and run a container with these commands:

```bash
# Build the Docker image (replace yourdockerhubusername and appname)
docker build -t yourdockerhubusername/appname:latest .

# Run the container, mapping port 3000
docker run -it -p 3000:3000 yourdockerhubusername/appname:latest

# Tag your local Docker image with your Docker Hub username and repository name
docker tag local-image yourusername/repository:tag

# Push the tagged image to Docker Hub
docker push yourusername/repository:tag

# Pull a Docker image from Docker Hub

```bash
docker pull yourusername/repository:tag ( Can pull from the DockerDesktop as well )
