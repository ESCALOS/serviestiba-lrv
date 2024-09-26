<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/svg+xml" href="/images/logo.webp" />
    <!-- Primary Meta Tags -->
    <title inertia>{{ config('app.name', 'Serviestiba') }}</title>
    <meta name="description" content="Estiba y Desestiba de Mercancias">

    <!-- Font preloads -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet" />
    <!-- Canonical URL -->
    <link rel="canonical" href="https://serviestiba.pe/">
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://serviestiba.pe/">
    <meta property="og:title" content="ServiEstiba">
    <meta property="og:description" content="Descrube a los mejores estibadores de América Latina">
    <meta property="og:image" content="https://serviestiba.pe/images/logo.webp">
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://serviestiba.pe/">
    <meta property="twitter:title" content="ServiEstiba">
    <meta property="twitter:description" content="Descrube a los mejores estibadores de América Latina">
    <meta property="twitter:image" content="https://serviestiba.pe/images/logo.webp">

    <!-- Link to the web manifest -->
    {{-- <link rel="manifest" href="/site.webmanifest"> --}}

    <!-- Android Icons -->
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">

    <!-- Apple Touch Icon -->
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">

    <!-- Favicon Icons -->
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" href="/favicon.ico">

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="antialiased">
    @inertia
</body>

</html>
