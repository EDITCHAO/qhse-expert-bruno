<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Créer un nouveau contact
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'numero' => 'required|string|max:20',
            'sujet' => 'required|string|max:200',
            'message' => 'required|string|max:1000'
        ]);

        try {
            $contact = Contact::create($validated);

            return response()->json([
                'success' => true,
                'message' => 'Message envoyé avec succès!',
                'data' => $contact
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de l\'envoi du message'
            ], 500);
        }
    }

    /**
     * Récupérer tous les contacts (admin)
     */
    public function index()
    {
        try {
            $contacts = Contact::orderBy('created_at', 'desc')->get();

            return response()->json([
                'success' => true,
                'data' => $contacts
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors du chargement des contacts'
            ], 500);
        }
    }

    /**
     * Supprimer un contact (admin)
     */
    public function destroy($id)
    {
        try {
            $contact = Contact::findOrFail($id);
            $contact->delete();

            return response()->json([
                'success' => true,
                'message' => 'Message supprimé avec succès'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors de la suppression du message'
            ], 500);
        }
    }

    /**
     * Récupérer les statistiques (admin)
     */
    public function stats()
    {
        try {
            $total = Contact::count();
            $today = Contact::whereDate('created_at', today())->count();

            return response()->json([
                'success' => true,
                'data' => [
                    'total' => $total,
                    'today' => $today
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur lors du chargement des statistiques'
            ], 500);
        }
    }
}
