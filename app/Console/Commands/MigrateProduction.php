<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class MigrateProduction extends Command
{
    protected $signature = 'migrate:production';
    protected $description = 'Run migrations safely in production';

    public function handle()
    {
        if ($this->laravel->environment() !== 'production') {
            $this->error('This command should only run in production');
            return 1;
        }

        $this->info('Running migrations in production...');

        try {
            // Test database connection
            DB::connection()->getPdo();
            $this->info('✓ Database connection successful');

            // Run migrations
            $this->call('migrate', ['--force' => true]);
            $this->info('✓ Migrations completed successfully');

            return 0;
        } catch (\Exception $e) {
            $this->error('Migration failed: ' . $e->getMessage());
            return 1;
        }
    }
}
