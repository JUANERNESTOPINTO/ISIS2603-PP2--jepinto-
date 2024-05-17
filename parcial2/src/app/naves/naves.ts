export class Naves {
    identificador: number;
    nombre: string;
    empresa_fabricacion: string;
    raza_origen: string;
    imagen: string;
    costo: string;
    descripcion: string;
    bando: string;

    public constructor (identificador: number,nombre: string,empresa_fabricacion: string,raza_origen: string,imagen: string,
        costo: string,descripcion: string,bando: string
    )
    {
        this.identificador = identificador
        this.nombre = nombre
        this.empresa_fabricacion = empresa_fabricacion
        this.raza_origen = raza_origen
        this.imagen = imagen
        this.costo = costo
        this.descripcion = descripcion
        this.bando = bando
    }

}
