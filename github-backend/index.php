<?php

require_once __DIR__ . '/vendor/autoload.php'; 

use Dotenv\Dotenv;
use App\Logger;
use App\GitHubService;


$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();
$pdo = new PDO('pgsql:host=' . $_ENV['DB_HOST'] . ';dbname=' . $_ENV['DB_NAME'], $_ENV['DB_USER'], $_ENV['DB_PASS']);
$logger = new Logger($pdo);
$githubService = new GitHubService($logger, $_ENV['GITHUB_TOKEN']);

header('Content-Type: application/json');


$username = $_GET['username'] ?? 'FabiMelo-27';

$response = [
    'user' => null,
    'following' => null,
    'error' => null
];

try {
   
    $response['user'] = $githubService->getUserInfo($username);

    $response['following'] = $githubService->getUserFollowing($username);

} catch (Exception $e) {
    http_response_code(500);
    $response['error'] = $e->getMessage();
}

echo json_encode($response, JSON_PRETTY_PRINT);


try {
    $stmtUser = $pdo->prepare('SELECT * FROM users WHERE username = :username');
    $stmtUser->execute(['username' => $username]);
    $user = $stmtUser->fetch(PDO::FETCH_ASSOC);

    $stmtFollowing = $pdo->prepare('SELECT * FROM following WHERE user_id = :user_id');
    $stmtFollowing->execute(['user_id' => $user['id']]);
    $following = $stmtFollowing->fetchAll(PDO::FETCH_ASSOC);

    if (!$user) {
        http_response_code(404);
        echo json_encode(['error' => 'User not found']);
        exit;
    }

    echo json_encode([
        'user' => $user,
        'following' => $following,
    ], JSON_PRETTY_PRINT);


    $stmtFollowing = $pdo->prepare('SELECT * FROM following WHERE user_id = :user_id');
    $stmtFollowing->execute(['user_id' => $user['id']]);
    $following = $stmtFollowing->fetchAll(PDO::FETCH_ASSOC);

  
    echo json_encode([
        'user' => [
            'login' => $user['username'],
            'name' => $user['name'],
            'avatar_url' => $user['avatar_url'],
            'followers' => $user['followers'],
            'following' => $user['following'],
            'company' => $user['company'],
            'location' => $user['location'],
            'email' => $user['email'],
            'blog' => $user['blog'],
            'bio' => $user['bio'],
        ],
        'following' => $following,
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch data']);
}

