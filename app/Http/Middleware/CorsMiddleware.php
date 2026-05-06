<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CorsMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $allowedOrigins = explode(',', env('CORS_ALLOWED_ORIGINS', '*'));
        $origin = $request->header('Origin');

        if (in_array($origin, $allowedOrigins) || in_array('*', $allowedOrigins)) {
            return $next($request)
                ->header('Access-Control-Allow-Origin', $origin ?? '*')
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With')
                ->header('Access-Control-Allow-Credentials', 'true');
        }

        return $next($request);
    }
}
