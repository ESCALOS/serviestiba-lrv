<!DOCTYPE html>
<html>

<head>
    <title>Nuevo Mensaje del sitio web</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f6f5ee;
            /* emphasis 500 */
            margin: 0;
            padding: 0;
            color: #1b4629;
            /* primary 700 */
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
            color: #2d7445;
            /* primary 500 */
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #f2c63d;
            /* secondary 500 */
            padding-bottom: 10px;
        }

        p {
            line-height: 1.6;
            margin: 10px 0;
        }

        p strong {
            color: #57906a;
            /* primary 400 */
        }

        .highlight {
            background-color: #fcf4d8;
            /* secondary 100 */
            padding: 10px;
            border-left: 4px solid #f2c63d;
            /* secondary 500 */
            border-radius: 5px;
        }

        .footer {
            text-align: center;
            font-size: 12px;
            color: #678684;
            /* info 300 */
            margin-top: 20px;
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
