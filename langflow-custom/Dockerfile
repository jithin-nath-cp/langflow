FROM langflowai/langflow:latest

# Set working directory
WORKDIR /app

# Copy your modified memory component
# COPY src/backend/base/langflow/components/helpers/memory.py /tmp/memory.py
COPY src/frontend/build /tmp/frontend_build

# Find the site-packages directory where langflow is installed
RUN python -c "import site; print(site.getsitepackages()[0])" > /tmp/site_packages.txt

# Replace the file in the site-packages location
# RUN SITE_PACKAGES=$(cat /tmp/site_packages.txt) && \
#     echo "Site packages at: $SITE_PACKAGES" && \
#     mkdir -p "$SITE_PACKAGES/langflow/components/helpers" && \
#     cp /tmp/memory.py "$SITE_PACKAGES/langflow/components/helpers/"

RUN SITE_PACKAGES=$(cat /tmp/site_packages.txt) && \
    echo "Site packages at: $SITE_PACKAGES" && \
    # Find and replace the frontend build directory
    FRONTEND_DIR=$(find "$SITE_PACKAGES" -name "frontend" -type d | grep langflow | head -1) && \
    if [ -n "$FRONTEND_DIR" ]; then \
        echo "Found frontend directory: $FRONTEND_DIR" && \
        rm -rf "$FRONTEND_DIR/build" && \
        cp -r /tmp/frontend_build "$FRONTEND_DIR/build"; \
    else \
        echo "Frontend directory not found, creating new one" && \
        mkdir -p "$SITE_PACKAGES/langflow/frontend" && \
        cp -r /tmp/frontend_build "$SITE_PACKAGES/langflow/frontend/build"; \
    fi

# Clear Python cache in the site-packages directory only
RUN SITE_PACKAGES=$(cat /tmp/site_packages.txt) && \
    find "$SITE_PACKAGES" -name "*.pyc" -delete && \
    find "$SITE_PACKAGES" -name "__pycache__" -type d -exec rm -rf {} +

# Expose the default Langflow port
EXPOSE 7860

# Command to run Langflow
CMD ["python", "-m", "langflow", "run", "--host", "0.0.0.0", "--port", "7860"]
