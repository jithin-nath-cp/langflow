docker build --rm -f docker/build_and_push.Dockerfile -t langflow:1.6.4 .
docker run -p 7860:7860 langflow:1.6.4

docker build --rm -t langflow-custom-flow:1.6.4 .
docker run -p 7861:7860 langflow-custom-flow:1.6.4