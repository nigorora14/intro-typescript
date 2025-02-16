1.Instalar Vite y crear el proyecto
yarn create vite mi-primer-proyecto-ts --template vanilla-ts

2. Entrar en la carpeta del proyecto
cd mi-primer-proyecto-ts

3. Instalar dependencias
yarn

4. Verificar la estructura del proyecto
mi-primer-proyecto-ts/
├── index.html
├── package.json
├── src/
│   └── main.ts
├── tsconfig.json
└── vite.config.ts

5. Desarrollar tu proyecto
// src/main.ts
console.log("¡Hola, Vite + TypeScript!");

6. Ejecutar el proyecto en modo desarrollo

yarn dev

7. Construir el proyecto para producción
yarn build

8. Verificar el archivo tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "useDefineForClassFields": true,
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": ["src"]
}


9. ¡Listo para seguir desarrollando!
Ahora puedes seguir desarrollando tu proyecto con TypeScript y Vite. Todo el código que escribas en la carpeta src será manejado por TypeScript, y Vite se encargará de compilar y servir tu aplicación de forma rápida.

auto formatear typeScript
npm install --save-dev --save-exact prettier
yarn add --dev --exact prettier

crea un archivo en la raiz .prettierrc en la raiz .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}

Abre VS Code y ve a settings.json (Ctrl + Shift + P → “Preferences: Open Settings (JSON)”) y agrega:
agregar si no hay.
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true
}


============================================================
para los decoradores agregar en tsconfig dentro de compilerOptions
"experimentalDecorators": true,