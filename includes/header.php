<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="../img/favicon.png" />
    <title>Moje Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-blue-100 text-blue-900">
    <nav class="bg-blue-900 text-white p-4 shadow-md fixed w-full top-0 left-0 z-50 transition-transform duration-300">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
            <a href="#" class="text-xl font-bold">Moje Portfolio</a>
            <ul class="hidden md:flex space-x-6">
                <li><a href="#about" class="hover:text-blue-300">O mnie</a></li>
                <li><a href="#skills" class="hover:text-blue-300">Umiejętności</a></li>
                <li><a href="#experience" class="hover:text-blue-300">Doświadczenie</a></li>
                <li><a href="#contact" class="hover:text-blue-300">Kontakt</a></li>
            </ul>
            <button id="menu-btn" class="md:hidden focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" 
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
        <div id="mobile-menu" class="fixed top-0 left-0 w-full h-full bg-blue-900 bg-opacity-80 backdrop-blur-md transform -translate-y-full transition-transform duration-300 flex flex-col items-center justify-center text-xl">
                <button id="close-menu" class="menu-element hidden absolute top-5 right-5 text-3xl">&times;</button>
                <a href="#about" class="menu-element hidden menu-link hover:text-blue-300 w-3/4 text-center py-3 border-b border-blue-500">O mnie</a>
                <a href="#skills" class="menu-element hidden menu-link hover:text-blue-300 w-3/4 text-center py-3 border-b border-blue-500">Umiejętności</a>
                <a href="#experience" class="menu-element hidden menu-link hover:text-blue-300 w-3/4 text-center py-3 border-b border-blue-500">Doświadczenie</a>
                <a href="#contact" class="menu-element hidden menu-link hover:text-blue-300 w-3/4 text-center py-3">Kontakt</a>
            </div>    
        </div>
    </nav>
</body>
</html>
