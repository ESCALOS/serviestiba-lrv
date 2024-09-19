<!DOCTYPE html>
<html>

<head>
    <title>Nuevo Mensaje del sitio web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            color: #333;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #4CAF50;
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
        }

        p {
            line-height: 1.6;
        }

        p strong {
            color: #333;
        }

        .footer {
            text-align: center;
            font-size: 12px;
            color: #999;
            margin-top: 20px;
        }

        .highlight {
            background-color: #e8f5e9;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Nuevo Mensaje del sitio web</h1>
        <p><strong>Nombre:</strong> {{ $data['name'] }}</p>
        <p><strong>Email:</strong> {{ $data['email'] }}</p>
        <p><strong>Celular:</strong> {{ $data['phone'] }}</p>
        <p><strong>Provincia:</strong> {{ $data['province'] }}</p>
        <p><strong>Ciudad:</strong> {{ $data['city'] }}</p>
        <p class="highlight"><strong>Mensaje:</strong> {{ $data['message'] }}</p>

        <div class="footer">
            Este es un mensaje automático generado desde el sitio web.
        </div>
    </div>
</body>

</html>
