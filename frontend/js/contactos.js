const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"https://andresfrick.pythonanywhere.com/contactos",//host creado en pythonanywhere para el back
        productos:[],
        error:false,
        cargando:true
      }
    },


    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.Contactos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(Contacto) {
            const url = 'https://andresfrick.pythonanywhere.com/contactos' + Contacto;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) 
                .then(res => {
                    location.reload();
                })
        }


    },   



  }).mount('#app')