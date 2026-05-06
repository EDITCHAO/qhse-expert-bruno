<?php

use Illuminate\Support\Facades\Route;

// API routes - Frontend React
Route::prefix('api')->group(function () {
    // Public routes
    Route::post('/contacts', 'App\Http\Controllers\Api\ContactController@store');

    // Admin routes
    Route::post('/auth/login', 'App\Http\Controllers\Api\AuthController@login');

    // Protected routes
    Route::middleware('api.token')->group(function () {
        Route::get('/contacts', 'App\Http\Controllers\Api\ContactController@index');
        Route::delete('/contacts/{id}', 'App\Http\Controllers\Api\ContactController@destroy');
        Route::get('/contacts/stats', 'App\Http\Controllers\Api\ContactController@stats');
    });
});

// Fallback for SPA
Route::get('/{any}', function () {
    return response()->json(['message' => 'API endpoint not found'], 404);
})->where('any', '.*');
