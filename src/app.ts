import { envs } from "./config/envs"
import { Server } from "./Presentation/server";

(()=> {
    main();
  })()
  
  async function main (){
  // todo: await base de datos
  
  // todo: inicio de nuestro server
      new Server({
        port: envs.PORT, // asignamos la variable de entorno en nuestra instancia de servidor.
      }).start();
  }
