<?php

$product = [
    [
        "title" => "Хлеб",
        "price" => 300
    ],
    [
        "title" => "Масло",
        "price" => 200
    ]
];


$json = json_encode($product, true);
echo $json;