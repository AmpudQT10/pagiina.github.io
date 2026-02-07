document.addEventListener('DOMContentLoaded', function() {
    const regalo = document.getElementById('regalo');
    const pantallaRegalo = document.getElementById('pantallaRegalo');
    const pantallaRosa = document.getElementById('pantallaRosa');
    const contenedorPrincipal = document.getElementById('contenedorPrincipal');
    const destello = document.getElementById('destello');
    let yaAbierto = false;

    // Función para abrir el regalo
    function abrirRegalo() {
        if (yaAbierto) return;
        yaAbierto = true;

        // Agregar la clase de animación al regalo
        regalo.classList.add('abriendo');

        // Esperar a que termine la animación del regalo (0.8s)
        setTimeout(() => {
            // Ocultar la pantalla del regalo
            pantallaRegalo.style.opacity = '0';
            pantallaRegalo.style.pointerEvents = 'none';

            // Mostrar la pantalla de la rosa
            pantallaRosa.style.display = 'flex';
            
            // Esperar un poco para que se vea el cambio de fondo
            setTimeout(() => {
                // El destello ya está en marcha con la animación
                // Las otras animaciones de la rosa se ejecutan automáticamente
            }, 100);
        }, 800);
    }

    // Event listeners para click y toque
    regalo.addEventListener('click', abrirRegalo);
    regalo.addEventListener('touchend', function(e) {
        e.preventDefault();
        abrirRegalo();
    });

    // También permitir hacer click en la pantalla del regalo
    pantallaRegalo.addEventListener('click', function(e) {
        if (e.target === regalo || e.target === pantallaRegalo) {
            abrirRegalo();
        }
    });
});
