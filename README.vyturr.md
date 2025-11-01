# 1. Build locally (currently running)
cd src/frontend
npm run build

# 2. Then use simple Docker (after build completes)
cd ../../docker_example
docker compose -f docker-compose.local.yml build langflow


# Option 2 (Custom Build):
cd docker_example  
docker compose -f docker-compose.custom.yml build langflow


# Option 1
cd docker_example
docker compose build langflow