<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Contact;

class ContactApiTest extends TestCase
{
    /**
     * Test créer un contact
     */
    public function test_can_create_contact()
    {
        $response = $this->postJson('/api/contacts', [
            'nom' => 'John Doe',
            'email' => 'john@example.com',
            'numero' => '1234567890',
            'sujet' => 'Test',
            'message' => 'Test message'
        ]);

        $response->assertStatus(201)
            ->assertJson([
                'success' => true,
                'message' => 'Message envoyé avec succès!'
            ]);

        $this->assertDatabaseHas('contacts', [
            'email' => 'john@example.com'
        ]);
    }

    /**
     * Test validation des données
     */
    public function test_contact_validation()
    {
        $response = $this->postJson('/api/contacts', [
            'nom' => '',
            'email' => 'invalid-email',
            'numero' => '',
            'sujet' => '',
            'message' => ''
        ]);

        $response->assertStatus(422);
    }

    /**
     * Test connexion admin
     */
    public function test_admin_login()
    {
        $response = $this->postJson('/api/auth/login', [
            'username' => env('ADMIN_USERNAME', 'admin'),
            'password' => env('ADMIN_PASSWORD', 'password')
        ]);

        $response->assertStatus(200)
            ->assertJson(['success' => true])
            ->assertJsonStructure(['token']);
    }

    /**
     * Test connexion admin avec identifiants incorrects
     */
    public function test_admin_login_invalid_credentials()
    {
        $response = $this->postJson('/api/auth/login', [
            'username' => 'invalid',
            'password' => 'invalid'
        ]);

        $response->assertStatus(401)
            ->assertJson(['success' => false]);
    }

    /**
     * Test récupérer les contacts (protégé)
     */
    public function test_get_contacts_requires_auth()
    {
        $response = $this->getJson('/api/contacts');

        $response->assertStatus(401);
    }

    /**
     * Test supprimer un contact (protégé)
     */
    public function test_delete_contact_requires_auth()
    {
        $contact = Contact::factory()->create();

        $response = $this->deleteJson("/api/contacts/{$contact->id}");

        $response->assertStatus(401);
    }
}
