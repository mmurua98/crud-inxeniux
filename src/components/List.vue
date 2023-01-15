<template>
    <div class="container">
        <router-link to="/create" class="btn btn-success mb-3">Agregar usuario</router-link>
        <div class="card">
            <div class="card-header">
                Usuarios
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table">
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Fecha de nacimiento</th>
                        <th>Edad</th>
                        <th>Estado civil</th>
                        <th>Teléfono</th>
                        <th>País</th>
                        <th>Estado</th>
                        <th>Municipio</th>
                        <th>Localidad</th>
                        <th>Código postal</th>
                        <th>Idioma</th>
                        <th>Pasatiempo</th>
                        <th>Preferencias</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr v-for="usuario in usuarios" :key="usuario.id">
                            <td>{{usuario.id}}</td>
                            <td>{{usuario.nombre_completo}}</td>
                            <td>{{usuario.fechaNacimiento}}</td>
                            <td>{{usuario.edad}}</td>
                            <td>{{usuario.estado_civil}}</td>
                            <td>{{usuario.telefono}}</td>
                            <td>{{usuario.pais}}</td>
                            <td>{{usuario.estado}}</td>
                            <td>{{usuario.municipio}}</td>
                            <td>{{usuario.localidad}}</td>
                            <td>{{usuario.codigo_postal}}</td>
                            <td>{{usuario.idioma}}</td>
                            <td>{{usuario.pasatiempo}}</td>
                            <td>{{usuario.preferencias}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'Update', params:{id:usuario.id}}" class="btn btn-info">Editar</router-link>
                                    <button type="submit" v-on:click="deleteUsuario(usuario.id)" class="btn btn-danger">Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            usuarios: []
        }
    },
    created:function(){
        this.getUsuarios();
    },
    methods:{
        getUsuarios(){
            fetch('https://api-inxeniux-production.up.railway.app/')
            .then(response=>response.json())
            .then((data)=>{
                console.log(data);
                this.usuarios = [];
                if(typeof data[0].sucess ==='undefined'){
                    this.usuarios = data;
                }
            })
            .catch(console.log)
        },
        deleteUsuario(id){
            console.log();
            fetch('https://api-inxeniux-production.up.railway.app/?borrar='+id)
            .then(response=>response.json())
            .then((data)=>{
                console.log(data);
                window.location.href="/"
            })
            .catch(console.log)
        }
    }
}
</script>

<style scoped>
.btn-success{
    background-color: #545b62;
    border: none;
    border-radius: 50px;
}
.btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active {
    color: #fff;
    background-color: #000000;
}
</style>