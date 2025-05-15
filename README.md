<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nota10!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .banner {
            width: 100%;
            height: auto;
        }
        .btn-payment {
            margin: 10px 0;
        }
        .section {
            padding: 40px 20px;
            text-align: center;
        }
        footer {
            background: #f8f9fa;
            padding: 20px 10px;
        }
    </style>
</head>
<body>
    <!-- Banner principal -->
    <header class="text-center bg-danger text-white p-4">
        <h1>Nota10!</h1>
        <p>O melhor para você passar de ano!</p>
    </header>

    <section class="section">
        <img src="imagens/banner1.png" alt="Banner 1 Nota10!" class="banner">
        <a href="COLE AQUI O LINK DE PAGAMENTO 1" class="btn btn-danger btn-lg btn-payment">Comprar Agora</a>
    </section>

    <section class="section bg-light">
        <img src="imagens/banner2.png" alt="Banner 2 Nota10!" class="banner">
        <a href="COLE AQUI O LINK DE PAGAMENTO 2" class="btn btn-danger btn-lg btn-payment">Comprar Agora</a>
    </section>

    <section class="section">
        <img src="imagens/banner3.png" alt="Banner 3 Nota10!" class="banner">
        <a href="COLE AQUI O LINK DE PAGAMENTO 3" class="btn btn-danger btn-lg btn-payment">Comprar Agora</a>
    </section>

    <footer class="text-center">
        <p>&copy; 2025 Nota10! Todos os direitos reservados.</p>
    </footer>

    <!-- Firebase para conexão com o banco de dados -->
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js"></script>
    <script>
        // Configuração do Firebase
        var firebaseConfig = {
            databaseURL: "https://nota10-56108-default-rtdb.firebaseio.com/"
        };
        firebase.initializeApp(firebaseConfig);

        // Exemplo simples de envio de dados (você pode alterar de acordo com a página de cadastro)
        function salvarCadastro(nome, email) {
            firebase.database().ref("usuarios/").push({
                nome: nome,
                email: email
            });
        }
    </script>
</body>
</html>
