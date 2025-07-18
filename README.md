## 🚀 Build and Run Your Docker Image

Build the image and run a container with these commands:

```bash
# Build the Docker image (replace yourdockerhubusername and appname)
docker build -t yourdockerhubusername/appname:latest .

# Run the container, mapping port 3000
docker run -it -p 3000:3000 yourdockerhubusername/appname:latest
