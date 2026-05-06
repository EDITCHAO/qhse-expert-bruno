<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'numero' => 'required|string|max:20',
            'sujet' => 'required|string|max:200',
            'message' => 'required|string|max:1000'
        ]);

        Contact::create($validated);

        return response()->json([
            'success' => true,
            'message' => 'Message envoyé avec succès!'
        ]);
    }
}
