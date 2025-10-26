# Sistema de Diseño - CronoAuto 🖤❤️
## Temática Dark & Red

## 🎨 Paleta de Colores

### Colores Principales

#### Primary (Rojo)
- `primary-100`: #fee2e2 - Muy claro
- `primary-500`: #ef4444 - **Color principal rojo** 
- `primary-600`: #dc2626 - **Color principal oscuro**
- `primary-700`: #b91c1c - Hover/estados activos
- `primary-900`: #7f1d1d - Texto sobre fondos claros

**Uso:** Botones principales, enlaces, elementos destacados, branding

#### Dark (Negro/Gris Oscuro)
- `dark-200`: #e4e4e7 - Texto claro
- `dark-400`: #a1a1aa - Texto secundario
- `dark-600`: #52525b - Elementos intermedios
- `dark-800`: #27272a - **Superficie oscura**
- `dark-900`: #18181b - Fondo intermedio
- `dark-950`: #09090b - **Fondo principal**

**Uso:** Fondos, superficies, contenedores principales

#### Secondary (Gris)
- `secondary-100`: #f1f5f9 - Fondos sutiles
- `secondary-500`: #64748b - **Color secundario**
- `secondary-700`: #334155 - Texto secundario
- `secondary-900`: #0f172a - Texto principal

**Uso:** Texto, fondos, bordes, elementos neutrales

#### Accent (Rosa/Rojo Claro)
- `accent-100`: #ffe4e6 - Fondos suaves
- `accent-500`: #f43f5e - **Color de acento rosa**
- `accent-600`: #e11d48 - **Color de acento principal**
- `accent-700`: #be185d - Estados hover

**Uso:** Destacar información importante, calls-to-action secundarios, elementos interactivos

### Colores de Estado

#### Success (Verde)
- `success-100`: #dcfce7 - Fondos de éxito
- `success-500`: #22c55e - **Verde principal**
- `success-700`: #15803d - Estados hover

#### Warning (Amarillo)
- `warning-100`: #fef3c7 - Fondos de advertencia
- `warning-500`: #f59e0b - **Amarillo principal**
- `warning-700`: #b45309 - Estados hover

#### Error (Rojo)
- `error-100`: #fee2e2 - Fondos de error
- `error-500`: #ef4444 - **Rojo principal**
- `error-700`: #b91c1c - Estados hover

## 📝 Tipografía

### Familias de Fuentes
- **Principal:** `font-sans` (Inter)
- **Títulos:** `font-heading` (Poppins)

### Tamaños de Texto
- `text-xs`: 12px - Texto muy pequeño
- `text-sm`: 14px - Texto pequeño
- `text-base`: 16px - **Texto base**
- `text-lg`: 18px - Texto grande
- `text-xl`: 20px - Subtítulos
- `text-2xl`: 24px - Títulos medianos
- `text-3xl`: 30px - Títulos grandes
- `text-4xl`: 36px - Títulos principales
- `text-5xl`: 48px - Títulos hero

## 🔲 Espaciado

### Sistema de Espaciado (Tailwind)
- `p-2`: 8px
- `p-4`: 16px - **Espaciado base**
- `p-6`: 24px
- `p-8`: 32px - Espaciado grande
- `p-12`: 48px - Espaciado muy grande

## 🎭 Sombras

### Sombras Personalizadas
- `shadow-soft`: Sombra suave para cards
- `shadow-medium`: Sombra media para elementos flotantes
- `shadow-strong`: Sombra fuerte para modales

## 🔄 Bordes Redondeados

- `rounded-md`: 6px - **Radio base**
- `rounded-lg`: 8px - Cards y botones
- `rounded-xl`: 12px - Elementos grandes
- `rounded-2xl`: 16px - Containers principales

## 🎯 Componentes Base

### Botones

#### Botón Principal
```tsx
<button className="btn-primary">
  Acción Principal
</button>
```

#### Con Tailwind
```tsx
<button className="bg-primary-500 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-medium">
  Botón Personalizado
</button>
```

### Cards
```tsx
<div className="card">
  Contenido del card
</div>
```

#### Con Tailwind
```tsx
<div className="bg-white p-6 rounded-xl shadow-soft border border-gray-200">
  Card personalizado
</div>
```

### Texto con Gradiente
```tsx
<h1 className="text-gradient text-4xl font-heading font-bold">
  CronoAuto
</h1>
```

## 🎨 Ejemplos de Uso

### Header/Navegación Dark Theme
```tsx
<header className="bg-dark-950/95 backdrop-blur border-b border-dark-800">
  <div className="px-6 py-4">
    <h1 className="text-gradient font-heading font-bold text-2xl">
      CronoAuto
    </h1>
  </div>
</header>
```

### Card de Información Dark
```tsx
<div className="bg-dark-900 p-6 rounded-xl border border-dark-700">
  <h3 className="text-white font-semibold text-lg mb-2">
    Título
  </h3>
  <p className="text-dark-300 text-base">
    Descripción del contenido
  </p>
</div>
```

### Card con Acento Rojo
```tsx
<div className="bg-dark-800 p-6 rounded-xl border border-primary-600 shadow-lg">
  <h3 className="text-primary-300 font-semibold text-lg mb-2">
    Título Destacado
  </h3>
  <p className="text-dark-200 text-base">
    Contenido con borde rojo
  </p>
</div>
```

### Botones Dark Theme
```tsx
{/* Botón Principal Rojo */}
<button className="btn-primary">
  Acción Principal
</button>

{/* Botón Secundario Dark */}
<button className="btn-secondary">
  Acción Secundaria
</button>

{/* Botón Dark */}
<button className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-3 rounded-lg border border-dark-600">
  Dark Button
</button>

{/* Botón Outline Rojo */}
<button className="border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg bg-transparent">
  Outline Red
</button>

{/* Botón con Gradiente */}
<button className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg">
  Gradient Button
</button>
```

## 📱 Responsive Design

### Breakpoints (Tailwind)
- `sm`: 640px+
- `md`: 768px+
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

### Ejemplo Responsive
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Contenido responsive */}
</div>
```

## 🎯 Mejores Prácticas

1. **Consistencia:** Usa siempre los colores definidos en lugar de valores arbitrarios
2. **Jerarquía:** Usa primary para acciones principales, secondary para complementarias
3. **Contraste:** Asegúrate de que el texto sea legible sobre los fondos
4. **Estados:** Siempre define estados hover/focus para elementos interactivos
5. **Espaciado:** Mantén un espaciado consistente usando el sistema de Tailwind

## 🔧 Variables CSS Disponibles - Dark Theme

```css
/* Colores principales */
--color-primary: #dc2626          /* Rojo principal */
--color-primary-dark: #b91c1c     /* Rojo oscuro */
--color-secondary: #64748b        /* Gris neutral */
--color-accent: #f43f5e          /* Rosa/rojo claro */

/* Colores de fondo y superficie */
--color-background: #09090b       /* Negro principal */
--color-surface: #18181b          /* Superficie oscura */
--color-text-primary: #fafafa     /* Texto blanco */
--color-text-secondary: #a1a1aa   /* Texto gris claro */
--color-border: #27272a           /* Bordes oscuros */

/* Espaciado y efectos */
--spacing-md: 1rem
--radius-lg: 0.75rem
--shadow-md: 0 4px 25px -5px rgba(0, 0, 0, 0.1)
```

## 🌙 Guía de Dark Theme

### Principios de Diseño
1. **Contraste:** Usa texto blanco/claro sobre fondos oscuros
2. **Jerarquía:** El rojo es para acciones principales y elementos destacados
3. **Profundidad:** Usa diferentes tonos de gris/negro para crear capas
4. **Acentos:** El rojo y rosa para elementos interactivos y importantes

### Combinaciones Recomendadas
- **Fondo principal:** `dark-950` con texto `white`
- **Superficies:** `dark-900` o `dark-800` con bordes `dark-700`
- **Elementos destacados:** Bordes `primary-600` o `accent-600`
- **Texto:** `white` principal, `dark-300` secundario