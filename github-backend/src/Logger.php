<?php

namespace App;

class Logger {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function log($requestUrl, $responseJson, $status = 'success') {
        $stmt = $this->pdo->prepare("INSERT INTO request_logs (request_url, response_json, status) VALUES (:request_url, :response_json, :status)");
        $stmt->execute([
            ':request_url' => $requestUrl,
            ':response_json' => $responseJson,
            ':status' => $status
        ]);
    }
}



