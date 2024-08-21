<?php

namespace App;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class GitHubService {
    private $client;
    private $token;
    private $logger;

    public function __construct($logger, $token) {
        $this->client = new Client();
        $this->token = $token;
        $this->logger = $logger;
    }

    public function makeRequest($url) {
        try {
            $response = $this->client->request('GET', $url, [
                'headers' => [
                    'Authorization' => 'token ' . $this->token,
                    'Accept'        => 'application/vnd.github.v3+json',
                ]
            ]);
            $body = (string) $response->getBody();            
            $this->logger->log($url, $body);
            return json_decode($body, true);
        } catch (RequestException $e) {
            $this->logger->log($url, $e->getMessage(), 'error');
            throw $e;
        }
    }

    public function getUserInfo($username) {
        $url = "https://api.github.com/users/{$username}";
        return $this->makeRequest($url);
    }

    public function getUserFollowing($username) {
        $url = "https://api.github.com/users/{$username}/following";
        return $this->makeRequest($url);
    }
}
