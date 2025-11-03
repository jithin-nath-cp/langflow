# FROM langflow:1.6.4
FROM langflow:1.6.4
RUN mkdir /app/flows
COPY ./*.json /app/flows/
ENV LANGFLOW_LOAD_FLOWS_PATH=/app/flows

# Explicit CMD (optional - inherits from base image if not specified)
CMD ["python", "-m", "langflow", "run", "--host", "0.0.0.0", "--port", "7860", "--backend-only"]