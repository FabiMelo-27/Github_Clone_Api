CREATE DATABASE github_db;

\c github_db;

CREATE TABLE request_logs (
    id SERIAL PRIMARY KEY,
    request_url VARCHAR(255),
    response_json TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status character varying(50)
    );
