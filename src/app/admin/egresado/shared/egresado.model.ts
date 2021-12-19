import {Sede} from "../../sede/shared/sede.model";
import {Carrera} from "../../carrera/shared/carrera.model";

export class Egresado{
  idEgresado: number;
  nombreEgresado: string;
  sede: Sede;
  carrera: Carrera;
  curriculum: string;
  fotoEgresado: string;
}
