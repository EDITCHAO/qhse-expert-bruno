<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class AdminController extends Controller
{
    public function showLogin()
    {
        return view('admin.login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if ($request->username === env('ADMIN_USERNAME', 'bruno') && 
            $request->password === env('ADMIN_PASSWORD', '9246')) {
            
            session(['admin_logged_in' => true]);
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors(['error' => 'Identifiants incorrects']);
    }

    public function logout()
    {
        session()->forget('admin_logged_in');
        return redirect()->route('home');
    }

    public function dashboard()
    {
        $contacts = Contact::orderBy('created_at', 'desc')->get();
        $totalMessages = $contacts->count();
        
        return view('admin.dashboard', compact('contacts', 'totalMessages'));
    }

    public function deleteContact($id)
    {
        Contact::findOrFail($id)->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Message supprimé avec succès'
        ]);
    }
}
