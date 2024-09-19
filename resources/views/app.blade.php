<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
    <!-- Primary Meta Tags -->
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <meta name="description" content="Descrube a los mejores estibadores de América Latina">

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
    <meta property="og:image" content="https://serviestiba.pe/images/logo.png">
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://serviestiba.pe/">
    <meta property="twitter:title" content="ServiEstiba">
    <meta property="twitter:description" content="Descrube a los mejores estibadores de América Latina">
    <meta property="twitter:image" content="https://serviestiba.pe/images/logo.png">

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
