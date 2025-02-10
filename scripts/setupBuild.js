import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';

async function setupBuild() {
    try {
        // Crear el directorio dist si no existe
        await mkdir('dist', { recursive: true });
        
        // Crear el archivo .nojekyll
        await writeFile(join('dist', '.nojekyll'), '');
        
        console.log('Build setup completed successfully');
    } catch (error) {
        console.error('Error during build setup:', error);
        process.exit(1);
    }
}

setupBuild(); 