<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Connexion admin
     */
    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string'
        ]);

        $adminUsername = env('ADMIN_USERNAME', 'admin');
        $adminPassword = env('ADMIN_PASSWORD', 'password');

        // Vérifier les identifiants
        if ($validated['username'] !== $adminUsername || $validated['password'] !== $adminPassword) {
            return response()->json([
                'success' => false,
                'message' => 'Identifiants incorrects'
            ], 401);
        }

        try {
            // Créer un token simple (vous pouvez utiliser Sanctum pour plus de sécurité)
            $token = bin2hex(random_bytes(32));

            // Stocker le token en cache (valide 24h)
            cache()->put('admin_token_' . $token, true, now()->addHours(24));

            return response()->json([
                'success' => true,
                'message' => 'Connexion réussie',
                'token' => $token
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la connexion'
            ], 500);
        }
    }

    /**
     * Vérifier le token
     */
    public function verify(Request $request)
    {
        $token = $request->bearerToken();

        if (!$token || !cache()->has('admin_token_' . $token)) {
            return response()->json([
                'success' => false,
                'message' => 'Token invalide ou expiré'
            ], 401);
        }

        return response()->json([
            'success' => true,
            'message' => 'Token valide'
        ]);
    }
}
