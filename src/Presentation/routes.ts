import { Router } from 'express'; // 2

export class AppRoutes { // 1


    static get routes(): Router { //3
  
      const router = Router(); //4
  
      // Definir todas mis rutas principales

 
      return router; //5
    }
  
  
 }