<?php

require_once __DIR__ . '/vendor/autoload.php';

use App\GitHubService;
use App\Logger;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$pdo = new PDO("pgsql:host=" . $_ENV['DB_HOST'] . ";dbname=" . $_ENV['DB_NAME'], $_ENV['DB_USER'], $_ENV['DB_PASS']);
$logger = new Logger($pdo);
$githubService = new GitHubService($logger, $_ENV['GITHUB_TOKEN']);


