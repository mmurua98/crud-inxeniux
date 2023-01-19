<template>
    <div class="container">
        <form v-on:submit.prevent="createUsuario">
            <div class="row">
                <div class="col-sm-12 col-md-9">
                    <div class="card">
                        <div class="card-header">
                            Añadir usuario
                        </div>
                        
                        <div class="card-body cardHorizontal">
                            <div class="row primerRow">
                                <div class="col-sm-12 col-md-4">
                                    <div class="form-group">
                                        <label for="">Nombre</label>
                                        <input type="text" name="nombre" id="nombre" v-model="usuario.nombre" class="form-control" placeholder="Nombre" aria-describedby="nombre" required>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4">
                                    <div class="form-group">
                                        <label for="">Apellido paterno</label>
                                        <input type="text" name="aPaterno" id="aPaterno" v-model="usuario.aPaterno" class="form-control" placeholder="Apellido paterno" aria-describedby="Apellido paterno" required>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-md-4">
                                    <div class="form-group">
                                        <label for="">Apellido Materno</label>
                                        <input type="text" name="aMaterno" id="aMaterno" v-model="usuario.aMaterno" class="form-control" placeholder="Apellido materno" aria-describedby="Apellido materno" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row segundoRow">
                                <div class="col-sm-3 col-md-3">
                                    <div class="form-group">
                                        <label for="">Fecha de nacimiento</label>
                                        <input type="text" name="fechaNacimiento" id="fechaNacimiento" v-model="usuario.fechaNacimiento" class="form-control" placeholder="DD-MM-AAAA" aria-describedby="Fecha de nacimiento" required>
                                    </div>
                                </div>
                                <div class="col-sm-3 col-md-3">
                                    <div class="form-group">
                                        <label for="">Estado civil</label>
                                        <input type="text" name="estado_civil" id="estado_civil" v-model="usuario.estado_civil" class="form-control" placeholder="Estado civil" aria-describedby="Estado civil" required>
                                    </div>
                                </div>
                                <div class="col-sm-4 col-md-4">
                                    <div class="form-group">
                                        <label for="">Teléfono</label>
                                        <input type="text" name="telefono" id="telefono" v-model="usuario.telefono" class="form-control" placeholder="Lada + número (+526312211388)" aria-describedby="Teléfono" required>
                                    </div>
                                </div>
                                <div class="col-sm-2 col-md-2">
                                    <div class="form-group">
                                        <label for="">Idioma</label>
                                        <input type="text" name="idioma" id="idioma" v-model="usuario.idioma" class="form-control" placeholder="Idioma" aria-describedby="Idioma" required>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group divPasatiempo">
                                <label for="">Pasatiempo</label>
                                <input type="text" name="pasatiempo" id="pasatiempo" v-model="usuario.pasatiempo" class="form-control" placeholder="Pasatiempo favorito" aria-describedby="Pasatiempo favorito" required>
                            </div>
                            <div class="form-group divPreferencias">
                                <label for="">Preferencias</label>
                                <input type="text" name="preferencias" id="preferencias" v-model="usuario.preferencias" class="form-control" placeholder="Playa, ciudad, bosque, pueblos, etc." aria-describedby="Playa, ciudad, bosque, pueblos, etc." required>
                            </div>
                            <div class="text-right divBotones">
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'List'}" class="btn btn-warning">Cancelar</router-link>
                                    <button type="submit" class="btn btn-primary">Agregar</button>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 columna">
                    <div class="card">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="">País</label>
                                <input type="text" name="pais" id="pais" v-model="usuario.pais" class="form-control" placeholder="País" aria-describedby="País" required>
                            </div>
                            <div class="form-group">
                                <label for="">Estado</label>
                                <input type="text" name="estado" id="estado" v-model="usuario.estado" class="form-control" placeholder="Estado" aria-describedby="Estado" required>
                            </div>
                            <div class="form-group">
                                <label for="">Municipio</label>
                                <input type="text" name="municipio" id="municipio" v-model="usuario.municipio" class="form-control" placeholder="Municipio" aria-describedby="Municipio" required>
                            </div>
                            <div class="form-group">
                                <label for="">Localidad</label>
                                <input type="text" name="localidad" id="localidad" v-model="usuario.localidad" class="form-control" placeholder="Localidad" aria-describedby="Localidad" required>
                            </div>
                            <div class="form-group">
                                <label for="">Código postal</label>
                                <input type="text" name="Código postal" id="Código postal" v-model="usuario.codigoPostal" class="form-control" placeholder="Código postal" aria-describedby="Código postal" required>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
            
            
            
        </form>
        
        <!-- <div class="card mt-3 mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">País</label>
                                        <input type="text" name="pais" id="pais" v-model="usuario.pais" class="form-control" placeholder="País" aria-describedby="País" required>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="">Estado</label>
                                        <input type="text" name="estado" id="estado" v-model="usuario.estado" class="form-control" placeholder="Estado" aria-describedby="Estado" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="">Municipio</label>
                                        <input type="text" name="municipio" id="municipio" v-model="usuario.municipio" class="form-control" placeholder="Municipio" aria-describedby="Municipio" required>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="">Localidad</label>
                                        <input type="text" name="localidad" id="localidad" v-model="usuario.localidad" class="form-control" placeholder="Localidad" aria-describedby="Localidad" required>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="">Código postal</label>
                                        <input type="text" name="Código postal" id="Código postal" v-model="usuario.codigoPostal" class="form-control" placeholder="Código postal" aria-describedby="Código postal" required>
                                    </div>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'List'}" class="btn btn-warning">Cancelar</router-link>
                                    <button type="submit" class="btn btn-primary">Agregar</button>
                                </div>
                            </div>
                        </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            usuario:{}
        }
    },
    methods:{
        //Crear usuario. Enviar información a la base de datos.
        createUsuario(){
            console.log(this.usuario);

            var datosEnviar={
                nombre: this.usuario.nombre,
                apellido_paterno: this.usuario.aPaterno,
                apellido_materno: this.usuario.aMaterno,
                fecha_nacimiento: this.usuario.fechaNacimiento,
                estado_civil: this.usuario.estado_civil,
                telefono: this.usuario.telefono,
                pais: this.usuario.pais,
                estado: this.usuario.estado,
                municipio: this.usuario.municipio,
                localidad: this.usuario.localidad,
                codigo_postal: this.usuario.codigoPostal,
                idioma: this.usuario.idioma,
                pasatiempo: this.usuario.pasatiempo,
                preferencias: this.usuario.preferencias,
            }

            fetch('https://api-inxeniux-production.up.railway.app/?insertar=1',{
                method:"POST",
                body: JSON.stringify(datosEnviar)
            })
            .then(response=>response.json())
            .then((data)=>{
                console.log(data);
                window.location.href='/';
                }
            )
        }
    }
}
</script>
<style scoped>
.btn-warning{
    background-color: #ba6116db;
    color: white;
    border: black;
}
.btn-primary{
    background-color: #2b92a3;
    border: black;
    color: white;
}
.btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active {
    color: #fff;
    background-color: #60320cdb;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active {
    color: #fff;
    background-color: #175059;
}

@media screen and (max-width: 767px) {
    .cardHorizontal {
        display: grid;
        grid-template-areas:
            "divBotones      "
            "primerRow       "
            "segundoRow      "
            "divPasatiempo   "
            "divPreferencias ";
    }
    .divBotones {
        grid-area: divBotones;
    }
    .primerRow {
        grid-area: primerRow;
    }
    .segundoRow {
        grid-area: segundoRow;
    }
    .divPasatiempo {
        grid-area: divPasatiempo;
    }
    .divPreferencias {
        grid-area: divPreferencias;
    }
}
</style>