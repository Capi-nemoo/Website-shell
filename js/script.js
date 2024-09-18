$(function() {
    // Inicializar la primera terminal con comandos personalizados
    $('#terminal').terminal({
        fastfetch: function() {
            // Lógica para el comando fastfetch
            var output = [
                '              .-/+oossssssssssoo+/-.               ',
                '          `:+sssssssssssssssssssssss+:`           ',
                '        -+ssssssssssssssssssssssyysssss+-         ',
                '      .ossssssssssssssssssssssdMMMNysssso.       ',
                '     /ssssssssssshdmmNNmmyNMMMMhssssssssssss/      ',
                '    +ssssssssssshmydMMMMMMMNddddyssssssssssss+     ',
                '   /sssssssssshNMMMyhhyyyyhmNMMMNhssssssssssss/    ',
                '  .ssssssssssdMMMNhsssssssssssshNMMMdsssssssssss.   ',
                '  +sssssshhhyNMMNysssssssssssssssyNMMMysssssssss+   ',
                '  osssyNMMMNyMMhssssssssssssssssssshmmmhsssssssso   ',
                '  ossyNMMMNyMMhssssssssssssssssssshmmmhssssssssso   ',
                '  +sssssshhhyNMMNysssssssssssssssyNMMMysssssssss+   ',
                '  .ssssssssdMMMNhsssssssssssshNMMMdssssssssssss.   ',
                '   /sssssssshNMMMyhhyyyyhdNMMMNhsssssssssssss/    ',
                '    +sssssssssssdmydMMMMMMMMddddyssssssssss+     ',
                '     /ssssssssssssshdmNNNNmyNMMMMhssssssss/      ',
                '      .ossssssssssssssssssssdMMMNysssssso.       ',
                '        -+sssssssssssssssssyyyssssssss+-         ',
                '          `:+ssssssssssssssssssssss+:`           ',
                '              .-/+oossssssssoo+/-.               ',
                '',
                'Usuario: Juan Pérez',
                'Sitio web: juanperez.com',
                'Tecnologías: JavaScript, CSS, HTML',
                'Proyecto: Portafolio Interactivo',
                '',
                '¡Gracias por visitar mi sitio!'
            ];
            this.echo(output.join('\n'));
        },
        help: function() {
            this.echo('Comandos disponibles:');
            this.echo('fastfetch - Mostrar información del sistema');
            this.echo('help - Mostrar esta ayuda');
            this.echo('clear - Limpiar la pantalla');
            // Agrega más comandos a la lista si los tienes
        },
        clear: function() {
            this.clear();
        },
        // Puedes agregar más comandos aquí
    }, {
        greetings: '¡Bienvenido a mi terminal virtual!\nEscribe "help" para ver los comandos disponibles.',
        name: 'terminal1',
        height: '100%',
        width: '100%',
        prompt: 'user@website:~$ ',
        // Manejar comandos no reconocidos
        onCommandNotFound: function(command) {
            this.echo('Comando no reconocido: ' + command);
        }
    });

    // Inicializar la segunda terminal
    $('#terminal2').terminal(function(command) {
        // Lógica para la segunda terminal
        if (command !== '') {
            // Puedes definir comandos diferentes para esta terminal
            this.echo('Comando en la segunda terminal: ' + command);
        } else {
            this.echo('');
        }
    }, {
        greetings: '¡Bienvenido a mi segunda terminal!',
        name: 'terminal2',
        height: '100%',
        width: '100%',
        prompt: 'user2@website:~$ ',
    });
});
